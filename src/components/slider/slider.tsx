"use client";

import { AnimatedTestimonials } from "./animated-testimonials";

export function Slider() {
  const testimonials = [
    {
      name: "To Do List",
      quote:"This project is a simple web application that helps you keep track of your tasks and manage your to-do list effectively.",
      redirect: "https://cautcus.github.io/To-Do-List/",
      pic: "https://images.unsplash.com/photo-1712000155290-ee65c0a82eda?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rhythmic",
      quote:"A vibrant music streaming app landing page with sleek animations, responsive design, and an engaging user interface to captivate music lovers.",
      redirect: "https://cautcus.github.io/Rhythmic/",
      pic: "https://images.unsplash.com/photo-1668874625692-87c412948045?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "GIF Generator",
      quote:"This project is a simple web application that helps you generator GIFs according to your choices.",
      redirect: "https://cautcus.github.io/GIF.gen/",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu738w02z1_mHNHGDfoigI5D-0NhKSkK5LDA&s",
    },
    {
      name: "Chat App",
      quote:"A modern platform for seamless real-time communication with intuitive design and responsive layouts.",
      redirect: "https://kotha-ebon.vercel.app/",
      pic: "https://images.unsplash.com/photo-1604881989793-466aca8dd319?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
