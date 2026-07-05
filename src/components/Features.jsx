
const features = [
  {
    title: "AI-Powered Code Completion",
    description:
      "Leverage advanced AI algorithms to get real-time code suggestions and completions as you type, boosting your productivity.",
    image: "code-completion",
    imagePosition: "left",
    
  },
  {
    title: "Intelligent Code Search",
    description: 
      "Quickly find code snippets, functions, or variables across your entire project with our smart search feature powered by AI.",
    image: "code-search",
    imagePosition: "right",
  },
  {
    title: "Automated Code Reviews",
    description:
      "Receive instant feedback on your code quality, style, and potential bugs with our AI-driven code review system.",
    image: "code-review",
    imagePosition: "left",
  },
  {
    title: "Dynamic Typing Generation",
    description:
      "Automatically generate type definitions for your JavaScript or TypeScript code, ensuring better type safety and fewer runtime errors.",
    image: "typing-generation",
    imagePosition: "right",
  }
  
]


export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 ">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ">
            <span className="bg-gradient-to-b from-white to-gray-300  bg-clip-text text-transparent ">
              Your complete devolopement
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400  to-cyan-400  bg-clip-text text-transparent ">
              Workflow
            </span>
          </h2>
        </div>
        <div className="space-y-1 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => {
            <div key={key} className="">
              {/* Code Section */}
              <div>
                <div>
                  {/* Ide Interface */}
                  <div>
                    <div>
                      <div className="flex space-x-1 items-center sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 " />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 " />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 " />
                      </div>
                      <span>{feature.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}
