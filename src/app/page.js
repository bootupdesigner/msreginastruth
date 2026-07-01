'use client'

import Books from "@/components/Books";
import Discography from "@/components/Discography";
import Footer from "@/components/Footer";
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
        <Discography />
        <Gallery />
        <Books />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
