// lib/api.js
export async function fetchAPI(path) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`);
    const data = await res.json();
    return data;
  }
  