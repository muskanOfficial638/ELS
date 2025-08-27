import { apiPath } from "./api-path";

  
  export default async function fetchServices(slug:string) {
  const res = await fetch(`${apiPath}/api/services/${slug}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
} 