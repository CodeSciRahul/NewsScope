import {serverConfig} from "@/config/server.config";  
export async function fetchUserPrefernce(token: string) {
    const res = await fetch(`${serverConfig.apiBaseUrl}/api/user-preference`, {
      method: "GET",
        headers: { "Authorization": `Bearer ${token}` },
    });
    return res.json();
  }
  