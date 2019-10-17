import React, { Component } from 'react'
import Header from '../components/Header'

export default class Product extends Component {

    constructor(props) {
        super(props)
        const pullData = this.props.match.params.id
        this.state = {
            id: pullData
        }
    }


  render() {
    return (
      <div>
        <Header/>
        <h1>Product</h1>
        <h2>PullData : { this.state.id }</h2>
      </div>
    )
  }
}
