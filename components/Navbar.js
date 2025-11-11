import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-20 bg-gradient-to-r from-gray-900/90 to-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-white font-bold text-lg">Alomgir Hossen</div>
        <div className="space-x-4">
          <Link href="#about"><a className="text-gray-200 hover:underline">About</a></Link>
          <Link href="#projects"><a className="text-gray-200 hover:underline">Projects</a></Link>
          <Link href="#contact"><a className="text-gray-200 hover:underline">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
