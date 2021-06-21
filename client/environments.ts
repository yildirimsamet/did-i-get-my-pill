export const BASE_API =
  process.env.NEXT_PUBLIC_BUILD_ENV === "development" || process.env.BUILD_ENV==="development"
    ? "http://localhost:5000"
    : "";