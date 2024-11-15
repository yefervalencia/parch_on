import React from 'react';
import Paragraph from '../atoms/Paragraph';
import CardText from '../atoms/CardText';

type TestimonyCardProps = {
  user: string;
  feedback: string;
  location: string;
};

const TestimonyCard: React.FC<TestimonyCardProps> = ({ user, feedback, location }) => {
  return (
    <div className="testimony-card">
      <Paragraph className="user">"{user}"</Paragraph>
      <Paragraph className="feedback">“{feedback}”</Paragraph>
      <CardText label="Lugares Visitados" value={location} className="location" />
    </div>
  );
};

export default TestimonyCard;
