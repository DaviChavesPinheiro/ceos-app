import { Container, ImageContainer } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()

  return (
    <Container>
      <ImageContainer>
        <Image src="/CEOS.svg" layout="fill" objectFit="contain" />
      </ImageContainer>

      <ul>
        <li><Link href="/"><a className={router.pathname === "/" ? "active" : ""}>Início</a></Link></li>
        <li><Link href="/about"><a className={router.pathname === "/about" ? "active" : ""}>Sobre nós</a></Link></li>
        <li><Link href="/portfolio"><a className={router.pathname === "/portfolio" ? "active" : ""}>Portfólio</a></Link></li>
        <li><Link href="/contact"><a className={router.pathname === "/contact" ? "active" : ""}>Fale Conosco</a></Link></li>
      </ul>
    </Container>
  )
}

export default Header;
