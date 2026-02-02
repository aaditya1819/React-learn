import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {jsx as _jsx} from 'react/jsx-runtime'



function MyApp(){
  return(
    <div>
      <h1>Custome App!!!!!</h1>
    </div>
  )
}

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }





const anotherUser = "aaditya aur react"
const reactElement = React.createElement(
  'p',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   
    <App/>
    {reactElement}

  </StrictMode>,
)
