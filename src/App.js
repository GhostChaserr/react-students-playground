import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

// 2 ტიპის კომპონენტი გვაქვს
// 1. class based კომპონენტი, სადაც react class ვიყენებთ
// 2. function based კომპონენტი, სადაც ჯავასკრიპტის ფუნქციას ვიყეენებთ

class App2 extends Component {
  render(){
    return (
      <nav className="container">
        <li> Navigation 1 </li>
        <li> Navigation 1 </li>
        <li> Navigation 1 </li>
        <li> Navigation 1 </li>
      </nav>
    )
  }
} 

function App3(){
  const description = "ეს არის ფუნქციური კომპონენტი"
  const user = {
    firstName: "george",
    lastName: "batsiashvili"
  }

  const isAdult = true;
  return (
    <div>
      გამარჯობა ფუნქციური კომპონენტიდან! {description}
      <div>
        <p> სახელი: {user.firstName}  </p>
        <p>გვარი: {user.lastName} </p>
      </div>
      {isAdult && <p> ზდასრული ადამიანი ხარ! </p> }
      {!isAdult && <div> არ არის ზდასრული ადამიანი! </div> }
    </div>
  )
}


function Nav(){
  return (
    <div className='container'>
      Nav component!
      <App2 />
    </div>
  )
}

function StyledComponent(){
  return (
    <div className='container'>
      App Component!
    </div>
  )
}


// const Grouped = (
//   <>

//   </>
// )

// const App = <p> Html </p>

// function Root(){
//   return (
//     <Grouped/ >
//   )
// }

function Root(){
  return (
    <>
      <Nav />
      <StyledComponent />
    </>
  )
}

export default Root;



// გაგვაქვს გარეთ app3