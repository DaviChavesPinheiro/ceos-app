import Head from 'next/head'
import Header from "../components/Header";
import { Section } from "../styles/global";
import Contact from "../sections/Contact";
import Main from "../sections/About/Main";
import OurTeam from "../sections/About/OurTeam";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Head>
        <title>CEOS - Sobre nós</title>
      </Head>
      <Header></Header>
      <main>
        <Main></Main>

        <OurTeam></OurTeam>

        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  )
}
