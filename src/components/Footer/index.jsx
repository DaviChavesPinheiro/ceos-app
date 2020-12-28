import { Container, Content, CopyRightContainer } from "./styles";
import Link from "next/link";
import Image from "next/image";
import RoundButton from "../../components/Forms/RoundButton";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {

  return (
    <Container>
      <Content>
        <div>
          <div className="content">
            <Image src="/CEOS.svg" layout="intrinsic" height="30" width="60"/>
            <p>CEOS - Transformando código em história</p>
          </div>
        </div>
        <div>
          <h2>Links</h2>
          <ul>
            <li><Link href="/"><a>Início</a></Link></li>
            <li><Link href="/about"><a>Sobre nós</a></Link></li>
            <li><Link href="/portfolio"><a>Portfólio</a></Link></li>
            <li><Link href="/contact"><a>Fale Conosco</a></Link></li>
          </ul>
        </div>
        <div>
          <h2>Contato</h2>
          <ul>
            <li>+55 85 88325-6564</li>
            <li>adm@ceos.com.br</li>
            <li>Fortaleza, CE</li>
          </ul>
        </div>
        <div>
          <RoundButton icon={FiFacebook} color={"#2961fe"} fill={"#2961fe"}></RoundButton>
          <RoundButton icon={FiTwitter} color={"#2961fe"} fill={"#2961fe"}></RoundButton>
          <RoundButton icon={FiLinkedin} color={"#2961fe"} fill={"#2961fe"}></RoundButton>
          <RoundButton icon={FiInstagram} color={"#2961fe"}></RoundButton>
        </div>
      </Content>
      <CopyRightContainer>
        <p>Copyright All Right reserved.</p>
      </CopyRightContainer>
    </Container>

  )
}

export default Footer;
