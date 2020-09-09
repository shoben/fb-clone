const firebase = require("firebase");

Technology
==========
React + React hooks
React context API -> Redux Pattern
Material UI
  Library for CSS
  Use snippets
  install using npm


Flexbox
Firebase's Firestore realtime DB
Firebase Hosting
Firebase Google Authentication (Full Login)
React Flip move
Use BEM standards
  classNames are lower case with __ between words
Emmet for short cuts

==Start
npx create-react-app fb-clone
npm i @material-ui/core
npm i @material-ui/icons
npm i firebase

npm start
== In Files
  Delete "logo.svg"
  Delete test files
== App.js
  Delete Header Component
  Add h1 to test
== App.CSS
  Delete styling
== index.css
  Add margin 0
== BEM Naming Convention

login to firebase
  Enabled Google Analytics (but unnecessary)
  create project
  select </> icon
  Add nickname
  Select Firebase Hosting radio button
  next
  continue
  In project Overvew Select *
  Scroll down to Firebase SDK snippet
  Select config radio button
  Grab Firebase Config
Add firebase.js
  past the Grab
== App.js
  Mask out the major components
    Header
    App Body
      Sidebar
      Feed
      Widgets

== COMPONENT (add component to App)
{className can be used with several elements with the same name }
{use > when styling a particular basic element}
  Create component (rfce)
  create divs for (elements)
    header__left
    header_middle
    header_right
  Create <img />
    Facebook logo


== CSS
  Match size of icon img using height:
== Headers.JS
  Use import command then use the component for icons (first letter is uppercase)
  Use <input />

== CSS-GNERAL
== css

.Selector {
  Declaration: Value;
}

  = DECLARATION_VALUE
  transition: transform 100ms ease-in;


  padding:
  margin:

  == Use with multiple or single divs for distribution
  display: flex
  justify-content: {center, spaced-evenly}
  align-items: {center}
  flex:1
  cursor: {pointer} use with hover

  == Use with individual components
  height:
  top:
  border-radius:
  border-bottom: {none}
  margin-left: {15px}

  position: sticky
  z-index: 100;

  background-color: {transparent, #564574, rgb{}}

  box-shadow:

  // to resize logo and keep aspect ratio
  .login > div > img{
    object-fit: contain;
    height: 150px;
  }

  // to place items in the center of the page
  .login {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  = SELECTORS
  .header__option > .MuiSvgIcon-root
    refers to the Material-Ui icons

  .header__option:hover > .MuiSvgIcon-root

  .header__option--active {active is a modifier} By convention

  p.hometown {p elements with class hometown}

  div * {all elements inside div}
  div p {all p elements in div}
  div > p {select all p elements where parent is a div}
  div + p {each p element that is placed immediately after div}
  p ~ ul {all ul elements preceded by a p element}
  a[target] {all a elements with a "target" attribute}


  h1,p {all h1 and p elements}

  position: {relative (to parent), absolute (relative to oldest ancestor)}

  .story:hover {
    transform: scale(1.07);
}

  border: 5px solid #2e81f4;

  background-position: center center; {x,y}
  background-repeat: no-repeat;

  background-size: {cover, auto}
  cover:	Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges
  auto:   Default value. The background image is displayed in its original size

  = Inline Style
  Use inline style when passing an element through this.props.

  {<div style={myStyle} className="story" >}

==LOGIN

Need a user to start the ball rolloing
Add user to App
  Test if user exists then render Login request or render the app page
Use the React Context API

Create <Login />
  Login Logos
  Material-UI Button type=submit onClick to handler SignIn (stubbed)
Import firebase into firebase.js
Connect frontend to database

{const firebaseApp = firebase.initializeApp(firebaseConfig)}
Goto FireStore
  Select console
  Select Project
  Start in Test mode
  Enable
  Select Authentication
    Select SignIn method
      Enable Google SignIn
      Enter Project support e-mail
      Save
  Setup {db, auth, provider} in firebase.js
  Setup two exports
    export { auth, provider }
    export default db;
In Login.js
  auth
  .signInWithPopup(provider)
  .then(result => {
    // Initially just console.localStorage(result)
    dispatch({
      type: actionTypes.SET_USER,
      user: result.user,
    })
  })
  .catch(error => alert(error.message))

  /*
  How to get the user to App compnent
  Effectively make user available to any compnent (global)

  Wrap the App component with a Data Layer (React Context API)
  Same Pattern as Redux but Rdux more difficult to implement

  When we Login, push the user to the Data Layer allowing global access
  Video: "Missing Explanation for Redux"
  */

Create StateProvider component (see details)
Create reducer component (see details)
In index.js
  Wrap the App in StateProvider using the reducer
In Login.js
  use the hook
  dispatch allows us to shoot different actions to the Data Layer

  const [state, dispatch] = useStateValue();  // hook

  auth
  .signInWithPopup(provider)
  .then(result => {
    // Initially just console.localStorage(result)
    dispatch({
      type: actionTypes.SET_USER,     // action Type
      user: result.user,    // pass to the user the result of the user object
                            // pushes user to teh data layer
    })
  })
  .catch(error => alert(error.message))

In App.js
  Replace user with

  const [{ user }, dispatch] = useStateValue()















const myStyle = {
  backgroundImage: `url(${img})`, color: 'white'
}













