import React, { HTMLAttributes } from 'react'

import { Container } from './styles'

interface IModal extends HTMLAttributes<HTMLDivElement> {
  title: string
  content: string
  action(): void
}

const Modal: React.FC<IModal> = ({ title, content, action, ...rest }) => {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={action}>Fechar</button>
      </div>
    </Container>
  )
}

export default Modal
