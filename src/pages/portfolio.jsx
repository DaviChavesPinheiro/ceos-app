import Head from "../components/Head";
import Header from "../components/Header";
import { Section } from "../styles/global";
import Contact from "../sections/Contact";
import Main from "../sections/Portfolio/Main";
import Projects from "../sections/Portfolio/Projects";
import Depoimentos from "../sections/Shared/Depoimentos";
import Footer from "../components/Footer";

export default function Portfolio({ projects, depoimentos }) {
  return (
    <div>
      <Head title="CEOS - Projetos">
      </Head>
      <Header></Header>
      <main>
        <Main></Main>

        <Projects projects={projects}></Projects>

        <Depoimentos depoimentos={depoimentos}></Depoimentos>

        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps(context) {
  // Simula uma futura API
  // const response = await fetch("https://api.github.com/users");
  // const data = await response.json();

  const projects = [
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Youtube"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Google"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Facebook"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
    {
      imgUrl: "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud"
    },
  ]

  const depoimentos = [
    {
      depoimento: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl: "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      depoimento: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl: "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      depoimento: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl: "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      depoimento: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl: "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      depoimento: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl: "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
  ]
  return {
    props: { projects, depoimentos },
  }
}

