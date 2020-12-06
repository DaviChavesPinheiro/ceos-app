import Head from 'next/head'
import Header from "../components/Header";
import { Section } from "../styles/global";

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
        <Section>
          <div>
            <h2>Fale conosco</h2>
            <h3>
              Consulte <strong>gratuitamente</strong> nossos
              especialistas sobre seu projeto.
            </h3>
            <h4>
              Ajudamos sua empresa a refletir seu verdadeiro eu por meio
              de projetos inovadores.
            </h4>
            <div>
              <form>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Telefone (opcional)"/>
                <input type="email" placeholder="Email"/>
                <textarea cols="30" rows="10"></textarea>
                <input type="button" value="Enviar"/>
              </form>
            </div>
          </div>

        </Section>
      </main>

      <footer >
        <p>Footer</p>
      </footer>
    </div>
  )
}
