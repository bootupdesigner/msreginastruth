'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Gallery />
      </main>
    </div>
  )
}
