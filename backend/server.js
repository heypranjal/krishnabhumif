const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// ✅ ENV TEST ROUTE (Move this outside)
app.get("/env-test", (req, res) => {
  res.json({
    API_BASE_URL: process.env.API_BASE_URL,
    API_UID: process.env.API_UID,
    API_PWD: process.env.API_PWD,
  });
});

// ✅ MAIN LEAD SUBMIT ROUTE
app.post("/api/send-lead", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      city,
      location,
      project,
      message,
      source,
      url,
      isd = "91",
    } = req.body;

    const UID = process.env.API_UID;
    const PWD = process.env.API_PWD;
    const BASE_URL = process.env.API_BASE_URL;

    let Channel = "",
      Src = "";
    if (source === "Facebook") {
      Channel = "FB";
      Src = "Facebook";
    } else if (source === "YouTube") {
      Channel = "YT";
      Src = "Youtube";
    } else if (source === "Website") {
      Channel = "MS";
      Src = "WebSite";
    } else {
      return res.status(400).json({ error: "Invalid source provided" });
    }

    const apiUrl = `${BASE_URL}?UID=${UID}&PWD=${encodeURIComponent(PWD)}&Channel=${Channel}&Src=${Src}&ISD=${isd}&Mob=${phone}&Email=${email}&name=${encodeURIComponent(name)}&City=${city}&Location=${location}&Project=${encodeURIComponent(project)}&Remark=${encodeURIComponent(message)}&url=${url}&UniqueId=0`;

    console.log("Calling external API:", apiUrl); // ✅ for debugging

    const response = await axios.get(apiUrl);
    return res.status(200).json({ success: true, data: response.data });
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
