import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Card.css';

// const Card = ({cardDescription, cardName,  cardTitle, cardSubTitle }) => {
//  const Card = ({description, name,  title, subTitle }) => {
const JavaCard = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src='https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2021/09/logo_java.jpg'
        />
        <Card.Body>
          <Card.Title>NullPointerException</Card.Title>
          <Card.Text>La méthode appellée renvoie une valeur NULL</Card.Text>
          <Button variant='primary'>+ d'infos</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default JavaCard;
