import React from 'react'
import styled from 'styled-components'
import Items from './containers/Items/Items'

const Main = styled.main`
  padding: 0;
  margin: 0;
  grid-gap: 21px;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 230px);
  
`

const App = () => (
  <Main>
    <Items />
  </Main>
)

export default App;
