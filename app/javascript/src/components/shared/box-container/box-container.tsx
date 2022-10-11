import React from 'react'
import * as Styles from './box-container.styles'

interface ContainerProps {
  title: string
  children?: React.ReactNode | String
  width?: string
}

const BoxContainer = (props: ContainerProps) => {
  return (
    <Styles.BoxContainer width={props.width}>
      <Styles.Title>{props.title}</Styles.Title>
      <Styles.Content>
        {props.children}
      </Styles.Content>
    </Styles.BoxContainer>
  )
}

export default BoxContainer
