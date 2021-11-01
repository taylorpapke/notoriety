import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = () => {
  return (
    <div className="flashcard-wrapper">
      <div className="card-surface">
        <h3>Card Content</h3>
      </div>
      <Button buttonStyle="primary">Stuff</Button>
    </div>
  );
};

export default Card
