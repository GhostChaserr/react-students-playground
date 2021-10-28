import React, { useState } from "react";

const Events = () => {

  // 1. state ის ცვლილება იწვევს კომპონენტის თავიდან დახატვას
  // 2. setcount ფუნქცია უზრუნველყოფს state ს მოდიფიცირებას რაც იწვევს თავიდან დახატვას
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Please enter text')
  const [finalText, setFinaText] = useState('');
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  function handleClick(e){
    setCount(count + 1);
  }

  function handleDownClick(){
    setCount(count - 1);
  }

  function handleType (e) {
    const value = e.target.value;
    setText(value);
  }

  const handleShowText = () => {
    // const str = "george" + "hello";
    setFinaText(finalText + " " + text);
  }

  const handleShowForm = () => {
    // true => false
    // false => true
    setShow(!show);
  }

  const handleSubmit = (e) => {

    // ჩახსნის დეფაულტ ქცევას ფორმიდან
    e.preventDefault();

    const todo = text;
    // [1, 2, 3]
    // []
    // [1]
    // [...[1, 2, 3], ...[], ..[1]]
    setTodos([...todos, todo]);
  }

  const handleDelete = (elementIndex) => {


    // [1, 2, 3]
    // filter
    // const filtered = todos.filter((value, index) => index !== elementIndex);
    // setTodos(filtered);

    const filtered = []
    for (let index = 0; index < todos.length; index++) {
      if (elementIndex !== index) {
        filtered.push(todos[elementIndex]);
      }
    }
    setTodos(filtered);

    // console.log(index);
    // const elementIndex
  }

  // const payload = {
  //   email: "",
  //   password: ""
  // }

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // შევამოწმოთ მეილის და პაროლის სიგრძე!
    if (password.length < 7) {

      // 
      setError('Invalid password!!')
      return
    }



    const payload = {
      userEmail: email,
      userPassword: password
    }


    fetch('/signup', {
      method: 'POST',
      data: JSON.stringify(payload)
    }).then(res => {
      console.log("Success case")
    }).catch(err => {
      console.log("err", err)
    })

  }


  return (
    <div>

      {/* 1 */}
      {/* <h1> Clicks:{count}  </h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleDownClick} >-</button> */}

      {/* 2 */}
      {/* <input onChange={handleType} type="text" value={text}  />
      <h1>{text}</h1> */}

      {/* 3 */}
      {/* <div>
        <h1>{finalText}</h1>
        <input onChange={handleType} type="text" value={text} />
        <button onClick={handleShowText}> Show text </button>
      </div> */}

      {/* 4 */}
      {/* <div>
        <button onClick={handleShowForm}>
          {show && 'Hide'}
          {!show && 'Show'}
        </button>
        {show && (
          <form>
            <div>
              <input type="email" />
            </div>
            <div>
              <input type="password" name="" id="" />
            </div>
            <div>
              <button> Login </button>
            </div>
          </form>
        )}
      </div> */}

      {/* <div>
        <h1> სამუშაოების რაოდენობა {todos.length} </h1>
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={handleType} type="text" />
          <input type="submit" />
        </form>
        <div>
          <ul>
            {todos.map((value, index) => (
              <div key={index} >
                <p>{value}</p>
                <button onClick={() => handleDelete(index)}>წაშლა</button>
              </div>
            ))}
          </ul>
        </div>
      </div> */}

      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleFormSubmit}>
          <div>
            <input value={email} onChange={handleEmail} type="email" name="" id="" />
          </div>
          <div>
            <input value={password} onChange={handlePassword} type="password" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>


    </div>
  )
}

export default Events;