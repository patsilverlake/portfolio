export default function Page() {
  return (
    <section>
      <h1 className="mb-10 text-3xl font-serif tracking-tighter">
        My Portfolio
      </h1>
      <img 
        src="/tennis.jpg" 
        alt="Black and white tennis court with rackets and balls" 
        className="w-full aspect-[5/6] rounded-lg mb-10 object-cover"
      />
      <p className="mb-4">
        {`As a casual, 
        the recent developments in AI has been a spark that reignited my passion for building practical,
         impactful tools for personal productivity and potentially for nimble, high-performing teams.`}
      </p>
      <p className="mb-8">
        {`I owe a lot of gratitude to Professor Daniel Guetta during my time at CBS, whose courses provided me with the analytical and statistical framework to understand machine learning models. Though I'm just a finance guy, AI has inspired me to build tools that optimize my daily workflow and brainstorm strategies with businesses—whether it's an AI-driven analytics MVP or a product idea to streamline operations. Using tools like Cursor, Vercel, Supabase, and much more, I've been developing solutions that blend my finance experience with a hands-on approach to tool building, and I'm proud to showcase that journey.`}
      </p>

      <h2 className="font-semibold text-2xl mb-4 tracking-tighter">Projects</h2>
      <div className="space-y-4">
        
      <a 
          href="https://animalkingdom-six.vercel.app/"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transform transition-all">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
              Animal Kingdom - Dodger Game
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Fun mobile game for kids!
            </p>
          </div>
        </a>
        
        <a 
          href="https://streetwear-gghd.vercel.app/"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transform transition-all">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
              GGHD Atelier et Couture - Streetwear
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              A modern e-commerce platform for streetwear fashion
            </p>
          </div>
        </a>

        <a 
          href="https://yayapapaya-m19q.vercel.app/"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transform transition-all">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
              YayaPapaya - Trip Itinerary
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              AI-powered travel planning and itinerary management
            </p>
          </div>
        </a>

        <a 
          href="https://finance-sigma-five.vercel.app/"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transform transition-all">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
              Valuation Framework
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Interactive financial modeling and valuation tool
            </p>
          </div>
        </a>

        <a 
          href="https://slack-clone-blue-phi.vercel.app/"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transform transition-all">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
              Slack Clone Messaging App
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Real-time messaging platform with modern UI/UX
            </p>
          </div>
        </a>

        <a 
          href="https://ai-thumbnail-editor.vercel.app/"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transform transition-all">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
              AI Thumbnail Editor
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              AI-powered image editing tool for content creators
            </p>
          </div>
        </a>

        <a 
          href="https://coachgigi-gpt.vercel.app/"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transform transition-all">
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
              Deepseek GPT Wrapper
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Custom AI assistant interface with enhanced capabilities
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}
