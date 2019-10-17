import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom' 

export default class App extends Component {

  constructor(props) {
    super(props)
    var n = localStorage.getItem("name")
    const jdata = localStorage.getItem("user1")
    
      const convertJson = JSON.parse(jdata)
      //this.setState({ json: convertJson })
      //console.log("json : " + jdata)

    if (n == null) {
        n = "";
    }
    this.state = {
       name: n,
       surname: '',
       json: convertJson || {}
    }
    console.log("call 1")
  }
  
componentWillMount() {
  console.log("call 2")
}

componentDidMount() {
  // renderdan sonra çalışan fnc
  console.log("call 4")
}

onChangeFnc = (evt, num) => {
    const data = evt.target.value
    switch (num) {
      case 1:
        this.setState({ name: data })
        break;
      case 2:
        this.setState({ surname: data })
        break;
      default:
        break;
    }
    
}

fncSend = () => {
  
  const name = this.state.name
  const surname = this.state.surname
  
  localStorage.setItem("name", name)
  localStorage.setItem("surname", surname);

  const json = {
    user1: { name: name, surname: surname }
  }
  localStorage.setItem("user1", JSON.stringify(json))
}

dt = [1,2,3]

  render() {

    console.log("call 3")

    return (
      <div>
        <Header/>
        <h1>Merhaba ReactJS</h1>

        { this.dt.map( (item, index)  => {
            return (<li><Link to={`/product/${item}`} > Product Detail - {item} </Link></li>)
        })}

        <input value={ this.state.name } className="form-control" onChange={ (evt) =>{ this.onChangeFnc(evt, 1) }}  type="text"  placeholder="Name" />
        <input value={ this.state.json.user1.surname }  className="form-control" onChange={ (evt) =>{ this.onChangeFnc(evt, 2) }} />
        <button className="btn btn-danger" onClick={ () => this.fncSend() } >Send</button>
        <h2> { this.state.name } </h2>
      </div>
    )
  }


}
