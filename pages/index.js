import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <Navbar />
      <header className="h-96 flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold text-white">Alomgir Hossen</h1>
          <p className="mt-4 text-gray-300">Full Stack Software Developer</p>
          <p className="mt-2 text-gray-400">React.js · Next.js · Node.js · Express · MongoDB · TailwindCSS · JavaScript · TypeScript</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section id="about" className="mb-12 text-gray-200">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p>I build web apps and create 3D & digital artwork. Visit my ArtStation for full galleries.</p>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p,i) => <ProjectCard key={i} project={p} />)}
          </div>
        </section>

        <section id="contact" className="mb-12 text-gray-200">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Emails: <a href="mailto:alomgirsojol0005@gmail.com" className="underline">alomgirsojol0005@gmail.com</a>, <a href="mailto:Alomgir.dev@gmail.com" className="underline">Alomgir.dev@gmail.com</a></p>
          <p className="mt-2">Phone: +8801816773371</p>
          <p className="mt-4">ArtStation: <a href="https://www.artstation.com/alomgirhossen" target="_blank" className="underline">alomgirhossen</a></p>
        </section>
      </main>
    </div>
  )
}
