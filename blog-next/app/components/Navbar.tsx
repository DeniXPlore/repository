import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="mx-auto sm:flex-row lg:flex lg:justify-between lg:mx-15">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Denis Emelianov
          </Link>
        </h1>
        <div 
          className="flex flex-row justify-center 
        gap-4 text-white text-4xl lg:text-5xl 
        "
        >
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/EmelianovDenis"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://twitter.com/EmelianovDenis"
          >
            <FaTwitter />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.youtube.com/@EmelianovDenis"
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://denisemelianov.com/"
          >
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  );
}
