import Hero from "../components/Hero"
import About from "../components/About"
import Project from "../components/Project"

export default function Home () {
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            <Hero />
            <About />
            <Project />
        </main>
    )
}