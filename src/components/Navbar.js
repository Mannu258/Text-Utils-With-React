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
                <a className="nav-link active" aria-current="page" href="/">{props.About}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.Service}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
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
