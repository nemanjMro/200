// import PostList from "@/components/PostList";
// import LogoutButton from "@/components/LogoutButton";

// import Link from "next/link";

// export default function Posts() {
//   return (
//     <main className="bg-black flex flex-col justify-center items-center space-y-8 h-screen">
//       <h1 className="text-white text-center text-2xl font-bold uppercase">
//         You have logged in!
//       </h1>
//       <img
//         src="/treasure.png"
//         alt="treasure chest illustration"
//         className="w-1/4 object-contain"
//       />
//       <LogoutButton />
//       <Link href="/" className="text-blue-300 hover:underline uppercase">
//         Back to homepage
//       </Link>
//       <p className="text-white">All posts:</p>
//       <PostList />
//     </main>
//   );
// }

///---------------------druga verzija verovatno nepotrebna

import PostList from "@/components/PostList";
import LogoutButton from "@/components/LogoutButton";

import Link from "next/link";

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch("http://127.0.0.1:1337/api/blogs", options); // /1 ID je broj koji treba da se menja u zavisnosti od igre

    const response = await res.json();
    // console.log(" response", response);

    if (!response) {
      throw new Error("Failed to fetch data");
    }

    return response;
  } catch (err) {
    console.error(err);
    // return <ErrorMessage />;
  }
}

export default async function Posts() {
  const blogs = await fetchBlogs();
  return (
    <main className="bg-black flex flex-col justify-center items-center space-y-8 h-screen">
      <h1 className="text-white text-center text-2xl font-bold uppercase">
        You have logged in!
      </h1>
      <img
        src="/treasure.png"
        alt="treasure chest illustration"
        className="w-1/4 object-contain"
      />
      <LogoutButton />
      <Link href="/" className="text-blue-300 hover:underline uppercase">
        Back to homepage
      </Link>
      <p className="text-white">All posts:</p>
      <PostList blogs={blogs} />
    </main>
  );
}
