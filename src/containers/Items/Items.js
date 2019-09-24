import React, { Component } from 'react'
import api from './../../api';
import Item from './../../components/Shop/Item/Item'

export default class Items extends Component {
  state = {
    items: []
  }
  constructor(props) {
    super(props)
    
    console.log(1)
    this.getData();
     console.log(5)
  }

  getData(){
    api.storeNow().then(items => this.setState({items}))

  }
  render() {
    console.log(this.state.items);
    return (
      this.state.items.map((item, key) => <Item url={item} key={key} />)
    )
  }
}