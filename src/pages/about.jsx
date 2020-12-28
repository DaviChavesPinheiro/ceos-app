import Head from "../components/Head";
import Header from "../components/Header";
import Contact from "../sections/Contact";
import Main from "../sections/About/Main";
import OurTeam from "../sections/About/OurTeam";
import OurGoals from "../sections/Home/OurGoals"
import Footer from "../components/Footer";
import FullImage from "../components/UIElements/FullImage"

export default function About({members}) {
  return (
    <div>
      <Head title="CEOS - Sobre nós">
      </Head>
      <Header></Header>
      <main>
        <Main></Main>
        <FullImage imageURL="/group2x.png"/>
        <OurGoals></OurGoals>
        <OurTeam members={members}></OurTeam>

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

  const members = [
    {
      imgUrl: "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      imgUrl: "https://avatars0.githubusercontent.com/u/37453874?s=460&u=136c69299518d28408cfa52388f4f1df9ec5fc7a&v=4",
      name: "Pedro Victor",
      situation: "Gerente de Projetos",
    },
    {
      imgUrl: "https://avatars3.githubusercontent.com/u/47640072?s=460&u=9883de9862b90587ebb13223fc4a52d2cde3c8e2&v=4",
      name: "Cinthia Andrad",
      situation: "Gerente de Marketing",
    },
    {
      imgUrl: "https://avatars2.githubusercontent.com/u/25553501?s=460&u=66404626a08a8d5ac9f1f7aed24b6ed355cfe500&v=4",
      name: "Matheus Navarro",
      situation: "Gerente de Pessoas",
    },
    {
      imgUrl: "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      imgUrl: "https://avatars0.githubusercontent.com/u/37453874?s=460&u=136c69299518d28408cfa52388f4f1df9ec5fc7a&v=4",
      name: "Pedro Victor",
      situation: "Gerente de Projetos",
    },
    {
      imgUrl: "https://avatars3.githubusercontent.com/u/47640072?s=460&u=9883de9862b90587ebb13223fc4a52d2cde3c8e2&v=4",
      name: "Cinthia Andrad",
      situation: "Gerente de Marketing",
    },
    {
      imgUrl: "https://avatars2.githubusercontent.com/u/25553501?s=460&u=66404626a08a8d5ac9f1f7aed24b6ed355cfe500&v=4",
      name: "Matheus Navarro",
      situation: "Gerente de Pessoas",
    },
    {
      imgUrl: "https://avatars3.githubusercontent.com/u/38088170?s=400&u=37c4a605de457de7dca775abcfddf6fb15041f66&v=4",
      name: "Vinicius Sabariz",
      situation: "Presidente",
    },
    {
      imgUrl: "https://avatars0.githubusercontent.com/u/37453874?s=460&u=136c69299518d28408cfa52388f4f1df9ec5fc7a&v=4",
      name: "Pedro Victor",
      situation: "Gerente de Projetos",
    },
    {
      imgUrl: "https://avatars3.githubusercontent.com/u/47640072?s=460&u=9883de9862b90587ebb13223fc4a52d2cde3c8e2&v=4",
      name: "Cinthia Andrad",
      situation: "Gerente de Marketing",
    },
    {
      imgUrl: "https://avatars2.githubusercontent.com/u/25553501?s=460&u=66404626a08a8d5ac9f1f7aed24b6ed355cfe500&v=4",
      name: "Matheus Navarro",
      situation: "Gerente de Pessoas",
    },
  ]


  return {
    props: { members },
  }
}
