import '../styles/globals.css'

export const metadata = {
  title: 'PromptShare',
  discription: 'PromptShare is a platform for sharing prompts for writing, drawing, and other creative activities.'
}

const Root = ({children}) => {
  return (
    <html lang='en'> 
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>

        <div className="app">
          {children}
        </div>
      </body>
    </html>
  )
}

export default Root
