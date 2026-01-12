import cron from "node-cron";
import {serverConfig} from "@/config/server.config";
const API_URL = `${serverConfig.apiBaseUrl}/api/news-article/hourly-fetch`;

cron.schedule("* * * * *", async () => { // Runs every hour at  minutes
  try {
    const response = await fetch(API_URL, {method: 'GET'});
    const data = await response.json();
    console.log("Cron job response:", data);
  } catch (error) {
    console.error("Error triggering cron job:", error);
  }
});

console.log("✅ Hourly cron job scheduled!");
