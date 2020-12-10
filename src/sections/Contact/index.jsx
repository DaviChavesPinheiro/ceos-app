import React, { useCallback, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { Container, Content, ImgContainer } from "./styles";
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { FiMail, FiUser, FiPhone } from 'react-icons/fi';
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const Contact = props => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      if(formRef) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('E-mail inválido'),
        description: Yup.string().required('Uma descrição é necessária'),
      });

      await schema.validate(data, { abortEarly: false });

      await axios.post('/api/sendMail', data);

      formRef.current.reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        if(formRef) formRef.current.setErrors(errors);
      }
    }

  }, [])

  return (
    <Container id="contact">
      <ImgContainer>
        <Image src="/image.svg" layout="fill" objectFit="contain"></Image>
      </ImgContainer>
      <Content>
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
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input type="text" name="name" placeholder="Nome" icon={FiUser}/>
            <Input type="tel" name="phone" placeholder="Telefone (opcional)" icon={FiPhone}/>
            <Input type="text" name="email" placeholder="Email" icon={FiMail}/>
            <TextArea name="description" placeholder="Mensagem" rows="7" ></TextArea>

            <Button type="submit" style={{width: "150px", marginTop: "50px"}}>Enviar</Button>
          </Form>
        </div>
      </Content>
    </Container>
  )
}

export default Contact;
