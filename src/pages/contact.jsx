import Head from "../components/Head";
import Header from "../components/Header";
import { Section } from "../styles/global";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Head title="CEOS - Contato">
      </Head>

      <Header></Header>
      <main>
        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  )
}
