import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Component } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header';
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer';
import Events from './components/Events/Events';
import Hooks from './components/Hooks/Hooks';
import Signup from './components/Signup/Signup';
// import Hooks from './components/Hooks/Hooks';
// Hooks
import Routing from './components/Routing';
import Todos from './components/Todos/Todos'
import UI from './components/UI/UI'

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


// function Nav(){
//   return (
//     <div className='container'>
//       Nav component!
//       <App2 />
//     </div>
//   )
// }

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

// function Root(){
//   return (
//     <>
//       <Nav />
//       <StyledComponent />
//     </>
//   )
// }


const App = () => {
  const renderCards = () => {
    let cards = new Array(9).fill(9).map((index, value) => ({ key: 'card' }));
    return cards.map((index, value) => <Card key={index} />)
  } 


  // Prop data types
  // String
  // Integer
  // Object
  // Array
  // Boolean

  const lang = 'en'
  const navContent = {
    navName: "Navigation",
    dropDown: {
      actionOne: "Click details",
      actionTwo: "Open popup",
      dropDownDisabledLink: "Disabled"
    },
    search: "Type in to search"
  }

  const navContentGe = {
    navName: "ნავიგაცია",
    dropDown: {
      actionOne: "დეტალების გახსნა",
      actionTwo: "ფოფაფის გახსნა",
      dropDownDisabledLink: "ლინკი გათიშულია"
    },
    search: "Type in to search"
  }
  const content = lang === 'ge' ? navContentGe : navContent;

  const tags = ['Product', 'News', 'Tech']

  return (
    <>
      {/* <Nav content={content} /> 
      <Header tags={tags} isButtonsShown={false}  />
      <div className='cards__body'>
        {renderCards()} 
      </div>
      <Footer /> */}
      {/* <Events/> */}
      {/* <Hooks /> */}
      <Signup/>
      {/* <Routing/> */}
      {/* <Todos/> */}
      <UI/>
    </>
  )
}

export default App