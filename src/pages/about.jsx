import Head from 'next/head'
import Header from "../components/Header";
import { Section } from "../styles/global";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Head>
        <title>CEOS - Sobre nós</title>
      </Head>

      <main>
        <Section>
          <Header></Header>
          <div>
            <h1>CEOS / Sobre nós</h1>
            <h2>Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal</h2>
            <h4>Ajudamos sua empresa a refletir seu verdadeiro eu por meio de projetos inovadores</h4>
          </div>
        </Section>
        <Section>
          <div>
            <h2>Nosso time</h2>
            <h3>Somos uma equipe de contadores de histórias, pensadores e solucionadores de problemas.</h3>
          </div>
          <div>
            Cards
          </div>
        </Section>
        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  )
}
