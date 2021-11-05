import React, { useEffect, useState } from 'react'

const Modal = () => {

  // 3. მოსმენა ხდება კომპონენტის დომიდან წაშლის,
  // როცა კომპონენტი ტოვებს დომს,
  useEffect(() => {
    return () => {
      console.log('წაიშალა დომიდან!')
    }
  }, [])

  return (
    <div>
      Modal
    </div>
  )
}

const Hooks = () => {
  // https://jsonplaceholder.typicode.com/posts
  // fetch('/')

  const [text, setText] = useState('')
  const [show, setShow] = useState(false);


  // 
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const handleSetText = (e) => setText(e.target.value);
  const handleToggle = () => setShow(!show);

  // 1. კომპონენტის ჩატვირთვა
  useEffect(() => {
    setLoading(true);
    console.log('კომპონენტი ჩაიტვირთა!')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setLoading(false);
          setPosts([...data])
        }, 6000)
      })
      .catch(err => {
        setLoading(false);
        setError('Server failed')
      })
  }, [])
  
  // 2. გაეშვება მაშინ როცა state იცვლება, 
  // არგუმენტად გადაეცემა, state ობიექტი ან ფუნქცია რომელიც
  // ცვლის state ს 
  useEffect(() => {
    console.log('Momxmarebeli wers.....')
  }, [handleSetText])

  useEffect(() => {
    console.log('Button clicked!')
  }, [handleToggle])

  useEffect(() => {
    if (posts.length === 0) return;
    alert('Posts loaded!')

  }, [posts])




  return (
    <div>
      {show && <Modal/>}
      {loading && <p> Wait ..... </p>}
      {error && <p> Server failed </p>}
      {!loading && posts.length > 0 && (
        <div>
          {posts.map((post, index) => <p key={index}>{post.title}</p>)}
        </div>
      )}
      <input value={text} onChange={handleSetText} type="text" />  
      <button onClick={handleToggle} > ShowHide </button>
    </div>
  )
}

export default Hooks