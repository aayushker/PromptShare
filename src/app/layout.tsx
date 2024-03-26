import '../styles/globals.css'
import Nav from '../components/Nav'
import Provider from '../components/Provider'

export const metadata = {
  title: 'PromptShare',
  discription: 'PromptShare is a platform for sharing prompts for writing, drawing, and other creative activities.'
}

const Root = ({ children }) => {
  return (
    <html lang='en'> 
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>

        <div className="app">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}

export default Root
