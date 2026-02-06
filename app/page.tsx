import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 px-3 py-8">
      <h1>Welcome to my BlogApp</h1>
      <Link href={"/contact"}>Vai ai miei contatti</Link>
      <div className="relative w-full aspect-video">
        <Image alt="Londra" src={"/Londra 1.jpg"} fill />
      </div>
    </div>    
  );
}
