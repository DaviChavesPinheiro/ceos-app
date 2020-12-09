import { Container } from "./styles";
import Link from "next/link";

const Footer = () => {

  return (
    <Container>
      <ul>
        <li><Link href="/"><a>Início</a></Link></li>
        <li><Link href="/about"><a>Sobre nós</a></Link></li>
        <li><Link href="/portfolio"><a>Portfólio</a></Link></li>
        <li><Link href="/contact"><a>Fale Conosco</a></Link></li>
      </ul>
    </Container>
  )
}

export default Footer;
