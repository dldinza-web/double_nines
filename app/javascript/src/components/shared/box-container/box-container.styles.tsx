import styled from '@emotion/styled'

interface Props {
  width?: string
}

export const BoxContainer = styled.div<Props>`
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  border-radius: 5px;
  background-color: white;
  min-width: 600px;
  width: ${props => props.width || '100%'};
  margin: 0 auto 1em auto;
`

export const Content = styled.div`
  padding: 2em;
`

export const Title = styled.div`
  background-color: #1976d2;
  text-align: center;
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 1em;
  font-weight: 400;
`

