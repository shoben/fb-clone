import React from 'react'
import Story from "./Story"
import avatar1 from "./media/avatar/avatar1.jpg"
import avatar2 from "./media/avatar/avatar2.jpg"
import avatar3 from "./media/avatar/avatar3.jpg"
import "./StoryReel.css"


function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        img="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        profileSrc={avatar1}
        title="Jay Sweed"
      />
      <Story
        img="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        profileSrc={avatar2}
        title="Pete Dwayne"
      />
      <Story
        img="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=362&q=80"
        profileSrc={avatar3}
        title="Sarah Dune"
      />
      <Story
        img="https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        profileSrc={avatar1}
        title="Harry Train"
      />
      <Story
        img="https://images.unsplash.com/photo-1565502466029-61931fc36663?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=363&q=80"
        profileSrc={avatar2}
        title="Bill Stuart"
      />

    </div>
  )
}

export default StoryReel
