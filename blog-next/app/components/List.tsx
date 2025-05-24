import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
type Props = {
  post: BlogPost;
};
export default function List({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 te4xt-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
