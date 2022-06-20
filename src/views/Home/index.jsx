import React, { useEffect, useState } from "react";

import { getPosts } from '../../api';

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const call = async () => {
      const response = await getPosts('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
    }
    call()
  }, [getPosts])

  const postsList = posts.map((post) => <li key={post.id}>{ post.body }</li>)

  return (
    <div>
      <h1 className="text-3xl font-bold">Home</h1>
    </div>
  );
}

export default Home
