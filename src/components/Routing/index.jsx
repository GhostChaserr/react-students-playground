import React, { useEffect, useState } from 'react'
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link,
 useParams
} from "react-router-dom";


// 1. Client side rendering 
// აპლიკაცია კლიენტის მხარეს მუშაობს მთლიანად, და ნავიგაციაც კლიენტის მხარეს 
// იჰენდლება

// 2. server side render
// აპლიკაცია ნავიგაციისთვის იყენებს სერვერს

const Home = () => {
 return (
  <div>
   Home page!
  </div>
 )
}

const Services = () => {
 return (
  <div>
   Services
  </div>
 )
}

const About = () =>{
 return (
  <div>
   About
  </div>
 )
}

const NotFound = () => {
 return (
  <div>
   Not Found!
  </div>
 )
}


// link კომპონენტი, უზრუნეყლოფს ნავიგაციას სადაც მიეთითება
// to პროპით შიდა გვერდის ლინკი

// Documentation https://reactrouter.com/web/example/recursive-paths


const Navigation = () => {
  return (
   <nav>
     <ul>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/about">About</Link>
       </li>
       <li>
         <Link to="/users">Users</Link>
       </li>
     </ul>
   </nav>
  )
}

const Post = () => {

  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [post, setPost] = useState();

  // 1. params.id ვიცით რომელ პოსტზე ვდაგავართ
  const params = useParams();

  useEffect(() => {

   // ველოდებით სერვერიდან პასუხს
   // setLoading(true);

   // fetch('/posts' + params.id)
   //  .then(res => {
   //    setLoading(false)
   //    setPost(res.data)
   //  })
   //  .catch(err => {
   //   setLoading(false)
   //   setError(err)
   //  })
  }, [])

  return (
   <div>
    Post page!
   </div>
  )
}

const Posts = () => {
 const posts = [
  {
    id: 1,
    title: "post title"
  },
  {
    id: 2,
    title: "post title 2"
  },
  {
    id: 3,
    title: "post title3"
  }
 ]

 // posts
 // posts/1

 return (
   <div>
    {posts.map((post, index) => (
     <div key={index}>
      <Link to={`/posts/${post.id}`}>See more</Link>
      <h1>{post.title}</h1>
     </div>
    ))}
   </div>
 )
}

// switch კომპონენტი გადართვას აკეთებს url ებს შორის
// და არენდერებს შესაბამის კომპონენტს url ის მიხედვით.

const Routing = () => {
 return (
  <Router>
   <div>
    <Navigation />
    <Switch>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/services">
       <Services />
      </Route>
      <Route exact path="/">
       <Home />
      </Route>
      <Route exact path="/posts">
        <Posts/>
      </Route>
      <Route path="/posts/:id">
       <Post/>
      </Route>
      <Route>
       <NotFound />
      </Route>
    </Switch>
   </div>
  </Router>
 )
}

export default Routing