export async function getSiteSettings() {
  const res = await fetch(
    `http://localhost:1337/api/site-setting?populate=logo`,
    {
      next: { revalidate: 60 }, // optional for caching
    }
  );

  if (!res.ok) {
    console.error("❌ Failed to fetch site settings:", res.status);
    return null;
  }

  const json = await res.json();

  if (!json?.data) {
    console.warn("⚠️ No attributes in site settings:", json);
    return null;
  }

  return json.data;
}

// utils/fetchReviews.ts
export async function fetchReviews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/customer-reviews?populate=image`);
  return res.json();
}

export async function fetchGoogleSummary() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/google-review-summary?populate=*`);
  return res.json();
}

