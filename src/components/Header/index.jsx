import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    <Container>
      <Image src="/CEOS.svg" layout="intrinsic" height="30" width="100" />

      <ul>
        <li><Link href="/"><a>Início</a></Link></li>
        <li><Link href="/about"><a>Sobre nós</a></Link></li>
        <li><Link href="/portfolio"><a>Portfólio</a></Link></li>
        <li><Link href="/contact"><a>Fale Conosco</a></Link></li>
      </ul>
    </Container>
  )
}

export default Header;
