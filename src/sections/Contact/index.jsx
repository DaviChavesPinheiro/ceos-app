import React, { useCallback, useState, useRef } from "react";
import { Container, Content } from "./styles";
import { Description, SectionTitle, Title } from "../../styles/global";
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

      formRef.current.reset();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        if(formRef) formRef.current.setErrors(errors);
      }
    }

  }, [])

  return (
    <Container>
      <Content>
        <SectionTitle>Fale conosco</SectionTitle>
        <Title>
          Consulte <strong>gratuitamente</strong> nossos
          especialistas sobre seu projeto.
        </Title>
        <Description>
          Ajudamos sua empresa a refletir seu verdadeiro eu por meio
          de projetos inovadores.
        </Description>
        <div>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input type="text" name="name" placeholder="Nome" icon={FiUser}/>
            <Input type="tel" name="phone" placeholder="Telefone (opcional)" icon={FiPhone}/>
            <Input type="text" name="email" placeholder="Email" icon={FiMail}/>
            <TextArea name="description" placeholder="Mensagem" rows="7" ></TextArea>

            <Button type="submit" style={{width: "150px"}}>Enviar</Button>
          </Form>
        </div>
      </Content>
    </Container>
  )
}

export default Contact;
