"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <nav id="desktop-nav" className="flex justify-around items-center h-40">
        <div className="text-4xl cursor-default">Camden Scholl</div>
        <div>
          <ul className="flex flex-row gap-8 list-none text-2xl">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav" className="hidden justify-around items-center h-40">
        <div className="text-4xl cursor-default">Camden Scholl</div>
        <div className="relative inline-block">
          <div className="cursor-pointer" onClick={() => toggleMenu()}>
            {!isMenuOpen && <Menu />}
            {isMenuOpen && <X />}
          </div>
          <div className="absolute top-full right-0 bg-white w-fit overflow-hidden transition-all duration-300 ease-in-out">
            {isMenuOpen && <div className="block p-2 list-none text-center text-2xl text-black no-underline transition-all duration-300 ease-in-out max-h-[300px]">
              <li><a href="#about"  onClick={() => toggleMenu()}>About</a></li>
              <li><a href="#experience" onClick={() => toggleMenu()}>Experience</a></li>
              <li><a href="#projects" onClick={() => toggleMenu()}>Projects</a></li>
              <li><a href="#contact" onClick={() => toggleMenu()}>Contact</a></li>
            </div>}
          </div>
        </div>
      </nav>
      <section id="profile">
        <div>
          <Image src="/assets/profile-pic.png" alt="Camden Scholl Profile Picture" width={100} height={80}/>
        </div>
      </section>
    </div>
  );
}

export default Home;
