"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Home = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<nav id="desktop-nav" className="flex justify-around items-center h-40">
				<div className="text-4xl cursor-default">Camden Scholl</div>
				<div>
					<ul className="flex flex-row gap-8 list-none text-2xl">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="Contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<nav
				id="hamburger-nav"
				className="hidden justify-around items-center h-40"
			>
				<div className="text-4xl cursor-default">Camden Scholl</div>
				<div className="relative inline-block">
					<div className="cursor-pointer" onClick={() => toggleMenu()}>
						{!isMenuOpen && <Menu />}
						{isMenuOpen && <X />}
					</div>
					<div className="absolute top-full right-0 bg-white w-fit overflow-hidden transition-all duration-300 ease-in-out">
						{isMenuOpen && (
							<div className="block p-2 list-none text-center text-2xl text-black no-underline transition-all duration-300 ease-in-out max-h-[300px]">
								<li>
									<a href="#about" onClick={() => toggleMenu()}>
										About
									</a>
								</li>
								<li>
									<a href="#experience" onClick={() => toggleMenu()}>
										Experience
									</a>
								</li>
								<li>
									<a href="#projects" onClick={() => toggleMenu()}>
										Projects
									</a>
								</li>
								<li>
									<a href="#contact" onClick={() => toggleMenu()}>
										Contact
									</a>
								</li>
							</div>
						)}
					</div>
				</div>
			</nav>
			<section id="profile" className="flex justify-center gap-20 h-4/5">
				<div className="flex mx-auto my-0">
					<Image
						src="/assets/profile-pic.png"
						alt="Camden Scholl Profile Picture"
						width={400}
						height={400}
					/>
				</div>
				<div className="flex flex-col">
					<div className="self-center text-center">
						<p className="font-semibold text-center ">
							Hello, I&apos;m
						</p>
						<h1 className="text-5xl text-center font-bold">Camden Scholl</h1>
						<p className="font-semibold text-3xl mb-4">Software Engineer</p>{" "}
						{/* find a better title */}
						<div className="flex justify-center gap-4">
							<button
								className="font-semibold transition-all duration-300 ease-linear p-4 w-40 rounded-full cursor-pointer bg-none hover:text-white hover:bg-black border border-gray-800"
								onClick={() => window.open("./assets/resume-example.pdf")}
							>
								View Resume
							</button>
							<button
								className="font-semibold transition-all duration-300 ease-linear p-4 w-40 rounded-full cursor-pointer text-white bg-gray-800 hover:bg-black"
								onClick={() => (location.href = "./#contact")}
							>
								Contact Info
							</button>
						</div>
					</div>
					<div className="flex justify-center mt-4 gap-4">
						<Image
							src="/assets/linkedin.png"
							alt="My LinkedIn profile"
							width={32}
							height={32}
							className="cursor-pointer"
							onClick={() =>
								(location.href = "https://www.linkedin.com/in/camden-scholl/")
							}
						/>
						<Image
							src="/assets/github.png"
							alt="My GitHub profile"
							width={32}
							height={32}
							className="cursor-pointer"
							onClick={() => (location.href = "https://github.com/c-l-scholl")}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
