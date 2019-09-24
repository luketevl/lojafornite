import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-width: 100%;
`
const Card = styled.div`
  padding: 5px;
  box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.62);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  cursor: pointer;
  &:hover {
    transform: scale(1.5)
  }
`

const Item = ({ url }) => (
  <Card>
    <Image src={url} alt="alt" />
  </Card>
)
export default Item