import LoginHero from "@/components/LoginHero";
import NormalHero from "@/components/NormalHero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
     <NormalHero/>
    </div>
  );
}
