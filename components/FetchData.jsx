export async function fetchData() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch("http://127.0.0.1:1337/api/seo-texts/2", options); // /2 ID je broj koji treba da se menja u zavisnosti od igre

    const response = await res.json();

    if (!response) {
      throw new Error("Failed to fetch data");
    }

    return response;
  } catch (err) {
    console.error(err);
    // return <ErrorMessage />;
  }
}
