import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-blue-400 rounded-full px-10 py-4 ">
      <nav>
        <ul className="flex justify-center gap-5 px-2 py-3 border border-white text-2xl">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>      
    </div>
  );
}