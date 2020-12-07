import Head from 'next/head'
import Header from "../components/Header";
import { Section } from "../styles/global";
import Contact from "../sections/Contact";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>CEOS - Projetos</title>
      </Head>

      <main>
        <Section>
          <Header></Header>
          <div>
            <h2>CEOS / Portfólio / Projeto</h2>
            <h1>Obtenha a melhor solução para o seu projeto</h1>
            <h2>Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal</h2>
          </div>
        </Section>
        <Section>
          <div>
            <h2>Somos especialistas nesses serviços</h2>
            <h3>Somos uma equipe de contadores de histórias, pensadores e solucionadores de problemas.</h3>
          </div>
          <div>
            <h2>Somos especialistas nesses serviços</h2>
            <h3>Somos uma equipe de contadores de histórias, pensadores e solucionadores de problemas.</h3>
          </div>
        </Section>
        <Section>
          <div>
            <h2>Um resumo de nossas conquistas</h2>
            <div>
              <span>10+</span>
              <h3>Anos de experiências</h3>
            </div>
            <div>
              <span>500+</span>
              <h3>Projetos concluídos</h3>
            </div>
            <div>
              <span>20+</span>
              <h3>Membros experientes</h3>
            </div>
          </div>
        </Section>
        <Section>
          <div>
            <h3>Cheque nossos projetos</h3>
          </div>
          <div>
            Cards
          </div>
        </Section>
        <Contact></Contact>
      </main>

      <footer >
        <p>Footer</p>
      </footer>
    </div>
  )
}
