import React, { HTMLAttributes } from 'react'

import { Container } from './styles'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image: string
  title: string
  cardColor: string
  textContent: string
  textButton: string
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  cardColor,
  textContent,
  textButton,
  ...rest
}) => {
  return (
    <Container cardColor={cardColor}>
      <div>
        <img src={image} alt="Logo Raia" />
        <h3>{title}</h3>
      </div>
      <p>
        Quando precionado o botão <span>{textButton}</span> {textContent}
      </p>
      <button type="button">Leia mais...</button>
    </Container>
  )
}

export default Card
