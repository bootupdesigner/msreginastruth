'use client'

import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Videos />
        <Gallery />
      </main>
    </div>
  )
}
