import Head from 'next/head'
import Header from "../components/Header";
import { Section } from "../styles/global";
import Contact from "../sections/Contact";

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

      <footer >
        <p>Footer</p>
      </footer>
    </div>
  )
}
