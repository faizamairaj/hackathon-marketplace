import Card from "@/components/Card";
import Card1 from "@/components/Card1";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Product2 from "@/components/Product2";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <Hero/>
    <Card/>
    <Card1/>
    <Product/>
    <Product2/>
    </main>
  );
}
