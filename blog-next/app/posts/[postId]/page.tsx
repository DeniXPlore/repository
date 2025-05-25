import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
   const posts = getSortedPostsData();
   return posts.map((post) => ({
     postId: post.id,
   }))
}
type Props = {
  params: { postId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);
  if (!post)
    return {
      title: "Not Found",
    };
  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) return notFound();
  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0 dark:text-white">{title}</h1>
      <p className="mt-0 dark:text-white">{pubDate}</p>
      <article>
        <section
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="dark:text-white"
        />
        <p>
          <Link href="/" className="dark:text-white underline">
            Home
          </Link>
        </p>
      </article>
    </main>
  );
}
