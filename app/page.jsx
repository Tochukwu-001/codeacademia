import Link from "next/link";

export default function Home(){
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="min-h-dvh bg-black/60 flex items-center justify-center">
        <div className="lg:w-1/2 text-white flex flex-col gap-10 items-center p-3">
          <h1 className="md:text-6xl text-4xl font-black text-center">Learn, Build, Connect with <span className="text-purple-700 italic">Tech Minds</span>.</h1>
          <p className="text-xl font-light text-center">
            <span className="text-purple-700">Codeacademia </span> 
            is where aspiring and experienced tech enthusiasts come together to share knowledge, collaborate on ideas and grow faster together.
          </p>
          <div className="flex items-center justify-center gap-5 max-md:flex-col w-full">
            <Link className="bg-purple-700 px-8 py-3 rounded-md hover:bg-white hover:text-purple-700 transition-all duration-200 max-md:w-full text-center" href={"#"}>Start Learning</Link>
            <Link className="text-purple-700 px-8 py-3 rounded-md bg-white hover:bg-purple-700 hover:text-white duration-200 transition-all max-md:w-full text-center" href={"#"}>Join the Community</Link>
          </div>
        </div>
      </section>

      <section>
        <div>
          
        </div>
      </section>
    </main>
  )
}