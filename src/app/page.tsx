import { Dock } from "@/components/dock/dock";

export default function Home() {
  return (
    <div>
     <h1 className="font-bold text-3xl text-center pt-12" style={{color:"#00FFA3"}}>Hi, I am Ayush</h1>
     <p className="font-bold text-xl text-center pt-4 mx-24" style={{color:"#CCCCCC"}}>I am a web developer, startup entrepreneur, and student showcasing a portfolio of innovative web projects and applications. Specializing in responsive web design and full-stack development, with a passion for creativity, problem-solving, and entrepreneurship.</p>
      <Dock/>
    </div>
  );
}
