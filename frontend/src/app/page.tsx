import Call from "@/components"
import AddPrompt from "@/components/prompt"

const Home = () => {
  return (
    <div>
          <section className= "w-full flex-center flex-col">
        <h1 className="head_text text-center ">
          Discover and Share
          <br className="max-md:hidden"/>
          <span className="orange_gradient">AI-Powered Promts </span>
        </h1>

        <p className="desc text-center">
          PromptShare is a platform for sharing prompts for writing, drawing, and other creative activities.
        </p>
    </section>

    <section>
      <Call />
      <AddPrompt />
    </section>
    </div>

  )
}

export default Home
