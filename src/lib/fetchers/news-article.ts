import {serverConfig} from "@/config/server.config";
export async function fetchNewsArticle(token: string, queryParams: unknown) {
    const res = await fetch(`${serverConfig.apiBaseUrl}/api/news-article?${queryParams}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` },
    });
  
    return res.json();
  }
  