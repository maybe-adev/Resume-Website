import React from 'react';
import Typed from 'typed.js';
import DP from '../img/Me.jpg'

const Nav = () => {

  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options =  {
      strings: ["Ayush Baral", "Web Developer", "Web Designer", "Tech Nerd"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

    return (
        <>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-white" href="#home">Home</a>
          <a className="mr-5 text-gray-500 hover:text-gray-300" href="#experience">Workspace</a>
          <a className="mr-5 text-gray-500 hover:text-gray-300" href="#contact">Contact</a>
        </nav>
    </div>

    <div id="home" className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hello World, I am <span
            className="lg:inline-block text-green-500 " ref={el} ></span>
        </h1>
        <p className="mb-8 leading-relaxed text-white">
          I am a <a className="text-green-300" target="_blank" without rel="noreferrer"
            href="https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html">Front-end Web
            Developer</a> with a passion for designing and building beautiful, user-friendly websites. With 3 years of
          experience in web development, I am skilled in programming languages like HTML, CSS, and JavaScript, as well
          as various front-end frameworks and libraries.In my free time, I am exploring new design techniques, attending
          tech conferences, and contributing to open-source projects.
        </p>

        <div className="flex justify-center mt-6 -mx-2">
          <a className=" mx-2 btn inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            href="https://drive.google.com/file/d/1K6eAR9FbJETDyf2_OEFm6IK0t3dVcfUj/view?usp=sharing" target="_blank" without rel="noreferrer">Know Me</a>
          <a className="mx-2 btn inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            href="mailto:ayushbaral010@gmail.com" target="_blank" without rel="noreferrer">Contact Me</a>
        </div>

        <div className="flex justify-center">

        </div>

        <div className="flex justify-center mt-6 -mx-2">

          <a className="mx-2" href="https://www.facebook.com/cautcus" aria-label="Facebook" target="_blank" without rel="noreferrer">
            <svg className="w-5 h-5 fill-current text-gray-200 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path
                d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
            </svg>
          </a>

          <a className="mx-2" href="https://www.instagram.com/cautcus" aria-label="Instagram" target="_blank" without rel="noreferrer">
            <svg className="w-5 h-5 fill-current text-gray-200 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 24 24">
              <path
                d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z">
              </path>
            </svg>
          </a>

          <a className="mx-2" href="https://github.com/cautcus" aria-label="Github" target="_blank" without rel="noreferrer">
            <svg className="w-5 h-5 fill-current text-gray-200 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img src={DP} className="object-cover object-center rounded" alt="mydp" />
      </div>
    </div>
    </>
    );
  };
  
  export default  Nav;