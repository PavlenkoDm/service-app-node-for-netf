const cron = require("node-cron");
const axios = require("axios");

cron.schedule("*/5 * * * *", async () => {
  try {
    const response = await axios.get("https://news-webapp-express.onrender.com/api/service");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});
