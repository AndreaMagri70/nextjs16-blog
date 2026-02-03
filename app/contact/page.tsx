import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <h2>Sei sulla pagina Contact</h2>
      <Link href={"/"}> Torna alla Home</Link>    
    </div>
  );
  
}