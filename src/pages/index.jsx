import Head from 'next/head'
import Header from "../components/Header";
import { Section } from "../styles/global";
import { FiPhone } from "react-icons/fi";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>CEOS - Empresa Júnior de Computação</title>
      </Head>

      <main>
        <Section>
          <Header></Header>
          <div>
            <h1>Obtenha a melhor solução para o seu projeto</h1>
            <h2>Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal Descrição legal</h2>
            <button>Inicie um projeto conosco</button>
          </div>
        </Section>
        <Section>
          <div>
            <h2>Serviços</h2>
            <h3>Somos uma equipe de contadores de histórias, pensadores e solucionadores de problemas.</h3>
            <h4>Ajudamos sua empresa a refletir seu verdadeiro eu por meio de projetos inovadores</h4>
          </div>
          <div>
            Cards
          </div>
        </Section>
        <Section>
          <div>
            <h2>Sobre nós</h2>
            <h3>Nossa visão é construir uma solução empresarial de sucesso.</h3>
            <h4>
              Um processo de desenvolvimento bem estruturado é crucial para criar
              produtos que as pessoas adoram. CEOS tem um processo de desenvolvimento
              rigoroso que inclui o desenvolvimento dirigido por testes.
            </h4>
            <div>
              <div>
                <span>4500</span>
                <h3>Projetos feitos</h3>
              </div>
              <div>
                <span>250+</span>
                <h3>Clientes</h3>
              </div>
              <div>
                <span>350</span>
                <h3>Projetos em andamento</h3>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div>
            <h2>Portfólio</h2>
            <h3>Concluímos +2500 projetos de clientes incríveis.</h3>
          </div>
          <div>
            <div>Cards</div>
            <button>Ver mais</button>
          </div>
        </Section>
        <Section>
          <div>
            <h2>Nossos objetivos</h2>
            <h3>Consulte nossos especialistas sobre o seu projeto <strong>gratuitamente</strong>.</h3>
            <p>Desenvolvemos com sucesso muitos projetos, incluindo blogs,
              plataformas de publicação e gestão de talentos, sites de comércio
              eletrônico, agências de viagens, um aplicativo da web compativel
              com HPAA e uma plataforma de concursos sem fins lucrativos.
            </p>
            <button>Ver mais</button>
          </div>
        </Section>
        <Section>
          <div>
            <h2>Uma equipe de solucionadores de problemas.</h2>
          </div>
          <div>
            Cards
          </div>
        </Section>
        <Section>
          <div>
            <h2>Depoimentos</h2>
            <h3>Citações especiais de nossos clientes sobre nós.</h3>
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
