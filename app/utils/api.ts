import { apiPath } from "./api-path";

// All cms-pages by slug
export async function fetchCmsPagesBySlug(slug: string) {
  const res = await fetch(`${apiPath}/api/cms-pages/${slug}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
}

// All services
export async function fetchServices() {
  const res = await fetch(`${apiPath}/api/services`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
}

// Service by slug
export async function fetchServiceBySlug(slug: string) {
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

// Blog/post by slug
export async function fetchBlogBySlug(slug: string) {
  const res = await fetch(`${apiPath}/api/posts/${slug}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
}

// Schedule consultation
export async function fetchScheduleConsultation() {
  const res = await fetch(`${apiPath}/api/schedule-consultations`, {
    cache: "no-store",
    headers: {
      // "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
}

// Schedule consultation
export async function fetchGlobalSettings() {
  const res = await fetch(`${apiPath}/api/globalsetting`, {
    cache: "no-store",
    headers: {
      // "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
}

// Blog/post by slug
export async function fetchMenusByName(menuName: string) {
  const res = await fetch(`${apiPath}/api/menus/${menuName}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch terms data");
  return res.json();
}
