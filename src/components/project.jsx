import React from 'react'
import TDL from '../img/todolist.jpg'
import SCH from '../img/thecentralmodernschool.webp'
import GIF from '../img/gifgen.webp'

const Project = () =>{
    return (
        <>
        <div id="experience" className="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">
            Workspace
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Go as far as you can see; when you get there, you'll be able to see
            further.
          </p>
        </div>
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src={TDL} />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-green-500 font-medium title-font mb-2">
                To-Do List Website
              </h2>
              <p className="leading-relaxed text-white">
                This project is a simple web application that helps you keep track of your tasks and manage your to-do
                list effectively.
              </p>
              <a className="mt-3 text-green-300 inline-flex items-center" href="https://cautcus.github.io/To-Do-List/"
                target="_blank" without rel="noreferrer">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={SCH} />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-green-500 font-medium title-font mb-2">
                    The Central Modern School
                  </h2>
                  <p className="leading-relaxed text-white">
                    This is a clone of my school's website. This is not a official website of TCMS.
                  </p>
                  <a className="mt-3 text-green-300 inline-flex items-center"
                    href="https://cautcus.github.io/The-Central-Modern-School/" target="_blank" without rel="noreferrer">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-green-500 font-medium title-font mb-2">
                    Rhythmic
                  </h2>
                  <p className="leading-relaxed text-white">
                    Welcome to Rhythmic, a Website built using HTML, CSS, and JavaScript.
                  </p>
                  <a className="mt-3 text-green-300 inline-flex items-center" href="https://cautcus.github.io/Rhythmic/"
                    target="_blank" without rel="noreferrer">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 mx-auto py-4">
              <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src={GIF} />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-green-500 font-medium title-font mb-2">
                    GIF Generator
                  </h2>
                  <p className="leading-relaxed text-white">
                    This project is a simple web application that helps you generator GIFs according to your choices.
                  </p>
                  <a className="mt-3 text-green-300 inline-flex items-center" href="https://cautcus.github.io/GIF.gen/"
                    target="_blank" without rel="noreferrer">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      </>
    );
};

export default Project;