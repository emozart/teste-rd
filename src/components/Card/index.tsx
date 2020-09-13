import React, { HTMLAttributes } from 'react'

import { Container } from './styles'

export interface ICardTemplate {
  image: string
  title: string
  cardColor: string
  textColor: string
  textContent: string
  textButton: string
  action(): void
}

interface ICard extends HTMLAttributes<HTMLDivElement> {
  card: ICardTemplate
}

const Card: React.FC<ICard> = ({ card, ...rest }) => {
  return (
    <Container cardColor={card.cardColor} textColor={card.textColor}>
      <div>
        <img src={card.image} alt="Logo Raia" />
        <h3>{card.title}</h3>
      </div>
      <p>
        Quando precionado o botão <span>{card.textButton}</span>{' '}
        {card.textContent}
      </p>
      <button type="button" onClick={card.action}>
        {card.textButton}
      </button>
    </Container>
  )
}

export default Card
