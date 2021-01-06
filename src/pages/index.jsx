import Head from "../components/Head";
import Header from "../components/Header";
import Contact from "../sections/Contact";
import Main from "../sections/Home/Main";
import Services from "../sections/Home/Services";
import AboutUs from "../sections/Home/AboutUs";
import Portifolio from "../sections/Home/Portfolio";
import OurGoals from "../sections/Home/OurGoals";
import OurTeam from "../sections/Home/OurTeam";
import Depoimentos from "../sections/Shared/Depoimentos";
import Footer from "../components/Footer";

export default function HomePage({
  projectsOverview,
  projects,
  members,
  depoimentos,
}) {
  return (
    <div>
      <Head title="CEOS - Empresa Júnior de Computação" />

      <main>
        <Header></Header>

        <Main></Main>

        <Services></Services>

        <AboutUs projectsOverview={projectsOverview}></AboutUs>

        <Portifolio projects={projects}></Portifolio>

        <OurGoals></OurGoals>

        <OurTeam members={members}></OurTeam>

        <Depoimentos depoimentos={depoimentos}></Depoimentos>

        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  // Simula uma futura API
  // const response = await fetch("https://api.github.com/users");
  // const data = await response.json();
  const projectsOverview = {
    projects: 10,
    clients: 7,
    onGoingProjects: 8,
  };

  const projects = [
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Youtube",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Google",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Facebook",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
    {
      imgUrl:
        "https://www.t1site.com.br/wp-content/uploads/2018/07/SITE-CLINICA.jpg",
      name: "Endo Cloud",
    },
  ];

  const members = [
    {
      imgUrl:
        "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      imgUrl:
        "https://avatars0.githubusercontent.com/u/37453874?s=460&u=136c69299518d28408cfa52388f4f1df9ec5fc7a&v=4",
      name: "Pedro Victor",
      situation: "Gerente de Projetos",
    },
    {
      imgUrl:
        "https://avatars3.githubusercontent.com/u/47640072?s=460&u=9883de9862b90587ebb13223fc4a52d2cde3c8e2&v=4",
      name: "Cinthia Andrad",
      situation: "Gerente de Marketing",
    },
    {
      imgUrl:
        "https://avatars2.githubusercontent.com/u/25553501?s=460&u=66404626a08a8d5ac9f1f7aed24b6ed355cfe500&v=4",
      name: "Matheus Navarro",
      situation: "Gerente de Pessoas",
    },
    {
      imgUrl:
        "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      imgUrl:
        "https://avatars0.githubusercontent.com/u/37453874?s=460&u=136c69299518d28408cfa52388f4f1df9ec5fc7a&v=4",
      name: "Pedro Victor",
      situation: "Gerente de Projetos",
    },
    {
      imgUrl:
        "https://avatars3.githubusercontent.com/u/47640072?s=460&u=9883de9862b90587ebb13223fc4a52d2cde3c8e2&v=4",
      name: "Cinthia Andrad",
      situation: "Gerente de Marketing",
    },
    {
      imgUrl:
        "https://avatars2.githubusercontent.com/u/25553501?s=460&u=66404626a08a8d5ac9f1f7aed24b6ed355cfe500&v=4",
      name: "Matheus Navarro",
      situation: "Gerente de Pessoas",
    },
    {
      imgUrl:
        "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      imgUrl:
        "https://avatars0.githubusercontent.com/u/37453874?s=460&u=136c69299518d28408cfa52388f4f1df9ec5fc7a&v=4",
      name: "Pedro Victor",
      situation: "Gerente de Projetos",
    },
    {
      imgUrl:
        "https://avatars3.githubusercontent.com/u/47640072?s=460&u=9883de9862b90587ebb13223fc4a52d2cde3c8e2&v=4",
      name: "Cinthia Andrad",
      situation: "Gerente de Marketing",
    },
    {
      imgUrl:
        "https://avatars2.githubusercontent.com/u/25553501?s=460&u=66404626a08a8d5ac9f1f7aed24b6ed355cfe500&v=4",
      name: "Matheus Navarro",
      situation: "Gerente de Pessoas",
    },
  ];

  const depoimentos = [
    {
      depoimento:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl:
        "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      depoimento:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl:
        "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      depoimento:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl:
        "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      depoimento:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl:
        "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      depoimento:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      imgUrl:
        "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
  ];
  return {
    props: { projectsOverview, projects, members, depoimentos },
  };
}
