import React, { useState } from 'react'
import Alert from './Alert'

export default function Navbar(props) {
  const [mystyle, setMystyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const [mode, setmode] = useState("Enable Dark Mode")
  const [boot, setboot] = useState("navbar navbar-expand-lg navbar-light bg-light")
  const [popup,setpopup] =useState("White Mode is on")

  const yellow = () =>{
    document.body.style.backgroundColor = "yellow";
      document.body.style.color = "white";
  }
  const red = () =>{
    document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
  }
  const blue = () =>{
    document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
  }
  
  const [inputValue, setInputValue] = useState('white');
  const inputcolor = (event) =>{
    setInputValue(event.target.value)
    document.body.style.backgroundColor = event.target.value;
  }


  const togglestyle = () => {
    if (mode === "Enable Dark Mode") {
      setmode("Enable Light Mode")
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setboot("navbar navbar-expand-lg navbar-dark bg-dark")
      setpopup("Dark Mode is on")
    }
    else {
      setmode("Enable Dark Mode")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setboot("navbar navbar-expand-lg navbar-white bg-white")
      setpopup("White Mode is on")


    }
    if (mystyle.color === 'white') {
      setMystyle({
        color: 'black',
        backgroundColor: 'white'
      }
      )

    } else {
      setMystyle({
        color: 'white',
        backgroundColor: 'black'
      }
      )
    }

  }
  return (
    <>
      <nav className={boot}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.Navbar}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">{props.About}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/service">{props.Service}</a>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn btn-warning" onClick={yellow} aria-current="page" href="/">Yellow</button>
              </li>
              <li className="nav-item">
              <button className="nav-link active btn btn-danger" onClick={red} aria-current="page" href="/">Red</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active btn btn-primary" onClick={blue} aria-current="page" href="/">Blue</button>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>&nbsp;&nbsp;&nbsp;
            </form>
            <input type="color" id="favcolor" aria-label="Select a color" value={inputValue} onChange={inputcolor}/>&nbsp;&nbsp;&nbsp;&nbsp;

            <div className="d-flex" role="search">
              <button className="btn btn-outline-success ml-3" style={mystyle} onClick={togglestyle} type="submit">{mode}</button>
            </div>
          </div>
        </div>
      </nav>
      <Alert hello={popup}/>
    </>
  )
}
