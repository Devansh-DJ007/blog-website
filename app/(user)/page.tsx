import BlogList from "@/components/BlogList";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity"

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export const revalidate = 30; // Revalidate page after 30 seconds

export default async function Home() {
  const posts = await client.fetch(query);
  return (<div>
    <BlogList posts={posts}/>
    <h1 className="text-4xl">Welcome to my blog</h1>
  </div>
  )
}
