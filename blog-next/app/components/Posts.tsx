import { getSortedPostsData } from "@/lib/posts"
import List from "./List"

export default function Posts() {
  const posts = getSortedPostsData()

  return (
   <section className="mt-6 mx-auto max-w-2xl">
    <h2 className="text-4xl font-bold dark:text-white/90">Blog
      </h2>
      <ul className="w-full">
        {posts.map((post) => (
          <List key={post.id} post={post} />
        ))}
      </ul>
   </section>
    
  )
}