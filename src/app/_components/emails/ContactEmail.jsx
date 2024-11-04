import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';

const ContactEmail = ({ firstName, lastName, email, phone, message }) => {
  return (
    <Html>
      <Head />
      <Preview>
        New Contact Message from {firstName} {lastName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Message</Heading>
          <Section style={section}>
            <Text style={text}>Contact Details:</Text>
            <Text style={text}>
              Name: {firstName} {lastName}
            </Text>
            <Text style={text}>Email: {email}</Text>
            <Text style={text}>Phone: {phone}</Text>
            <Hr />
            <Text style={text}>Message:</Text>
            <Text style={text}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const section = {
  padding: '24px',
  backgroundColor: '#f6f9fc',
  borderRadius: '4px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.5',
};

const text = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '24px',
};

export default ContactEmail;
