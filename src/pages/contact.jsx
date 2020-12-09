import Head from 'next/head'
import Header from "../components/Header";
import { Section } from "../styles/global";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>CEOS - Contato</title>
      </Head>

      <Header></Header>
      <main>
        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  )
}
