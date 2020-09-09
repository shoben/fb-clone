import React, { useState, useEffect } from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import avatar1 from "./media/avatar/avatar1.jpg"
import avatar2 from "./media/avatar/avatar2.jpg"
import avatar3 from "./media/avatar/avatar3.jpg"
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    db
      .collection("posts")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => (
          { id: doc.id, data: doc.data() }
        ))));
  }, []);

  console.log("Posts", posts)

  return (
    <div className="feed">

      <StoryReel />
      <MessageSender />

      {posts.map((post) => (

        < Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}

export default Feed
