if (typeof window !== "undefined") {
    throw new Error("❌ Server config imported on client");
  }
  
  export const serverConfig = {
    apiBaseUrl: process.env.API_BASE_URL!,
    databaseUrl: process.env.DATABASE_URL!,
    serperApiKey: process.env.SERPER_API_KEY!,
    geminiApiKey: process.env.GEMINI_API_KEY!,
    clerkSecretKey: process.env.CLERK_SECRET_KEY!,
    jwtVerifyUrl: process.env.JWT_VERIFY!,
  };
  