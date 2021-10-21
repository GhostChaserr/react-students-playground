/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


const Nav = (props) => {
  const { navName, dropDown, search } = props.content;
  const style = {
    '--bs-scroll-height': '100px'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{navName}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={style} >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="#">{dropDown.actionOne}</a></li>
              <li><a className="dropdown-item" href="#">{dropDown.actionTwo}</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">{dropDown.dropDownDisabledLink}</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Link</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">{search}</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Nav