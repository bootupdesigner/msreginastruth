'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="container py-5">
      <section>
        <Header />
        <Gallery />
      </section>
    </main>
  )
}
