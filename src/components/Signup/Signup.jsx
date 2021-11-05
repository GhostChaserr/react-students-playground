import react, { useState, useEffect } from "react";

const userInfo = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
  repeatPassword: ""
}

const Signup = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [gender, setGender] = useState('Male')

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRepeatPassword = (e) => setRepeatPassword(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  useEffect(() => {
    console.log('Email changed...')
  }, [email])


  useEffect(() => {
    console.log('Gender changed...')
  }, [gender])


  // დავალება.
  // 1. შევამოწმოთ firstName სიგრძე, თუ 8 ზე ნაკლებია ამოვუგდდოთ alert 
  // ნოტიფიკაცია მესიჯით რომ სიგრძე არასწორია
  useEffect(() => {
    console.log('Firtname changed...')
  }, [firstName])


  useEffect(() => {
    console.log('Lastname changed...')
  }, [lastName])


  useEffect(() => {
    console.log('Password changed...')
  }, [password])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const payload = {
      firstName,
      lastName,
      email,
      gender,
      password,
      repeatPassword,
    }

    // 2. შევამოწმოთ password და repeatPassword თუ ემთხვევა ერთმანეთს.
    // ამოვუგდოთ ალერთი, რომ ჩაწერილი პაროლები არ ემთხვევა

    console.log(payload);
  }

  return (
    <div>
      <h1> Register </h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label> First name </label>
          <input type="text" value={firstName} onChange={handleFirstName} name="" id="" />
        </div>

        <div>
          <label> Last name </label>
          <input type="text" value={lastName} onChange={handleLastName} name="" id="" />
        </div>

        <div>
          <label> Email </label>
          <input type="text" value={email} onChange={handleEmail} name="" id="" />
        </div>

        <div>
          <label> Password </label>
          <input type="text" value={password} onChange={handlePassword} name="" id="" />
        </div>

        <div>
          <label> Repeat Password </label>
          <input type="text" value={repeatPassword} onChange={handleRepeatPassword} name="" id="" />
        </div>

        <div>
          <label> Choose gender </label>
          <select value={gender} onChange={handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Register" />
        </div>


      </form>
    </div>
  )
}

export default Signup