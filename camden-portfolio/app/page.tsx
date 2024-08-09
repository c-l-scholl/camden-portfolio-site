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
			<nav id="desktop-nav">
				<div className="logo">Camden Scholl</div>
				<div>
					<ul className="nav-links">
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
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<nav id="hamburger-nav">
				<div className="logo">Camden Scholl</div>
				<div className="hamburger-menu">
					<div className="hamburger-icon" onClick={() => toggleMenu()}>
						{!isMenuOpen && <Menu />}
						{isMenuOpen && <X />}
					</div>
					{isMenuOpen && (
						<div className="menu-links">
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
			</nav>
			<section id="profile">
				<div className="section__pic-container">
					<Image
						src="/assets/profile-pic.png"
						alt="Camden Scholl Profile Picture"
						layout="intrinsic"
						width={400}
						height={400}
					/>
				</div>
				<div className="section__info-container">
					<div className="section__text">
						<p className="section__text__p1">Hello, I&apos;m</p>
						<h1 className="title">Camden Scholl</h1>
						<p className="section__text__p2">Software Engineer</p>
						<div className="btn-container">
							<button
								className="btn btn-color-2"
								onClick={() => window.open("./assets/resume-example.pdf")}
							>
								View Resume
							</button>
							<button
								className="btn btn-color-1"
								onClick={() => (location.href = "./#contact")}
							>
								Contact Info
							</button>
						</div>
					</div>
					<div id="socials-container">
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
				<Image
					src="/assets/arrow.png"
					alt="Arrow icon"
					width={32}
					height={32}
					className="icon-arrow"
					onClick={() => (location.href = "./#about")}
				/>
			</section>
			<section id="about">
				<p className="section__text__p1">Get to Know More</p>
				<h1 className="title">About Me</h1>
				<div className="section-container">
					<div className="section__pic-container">
						<Image
							src="/assets/testimage.jpg"
							alt="Profile Pic"
							layout="intrinsic"
							className="about-pic"
							width={400}
							height={400}
						/>
					</div>
					<div className="about-details-container">
						<div className="about-containers">
							<div className="details-container">
								<Image
									src="/assets/experience.png"
									alt="Experience icon"
									width={40}
									height={40}
								/>
								<h3>Experience</h3>
								<p>
									1 year <br /> Full stack development
								</p>
							</div>
							<div className="details-container">
								<div>
									<Image
										src="/assets/education.png"
										alt="Education icon"
										width={40}
										height={40}
									/>
								</div>
								<h3>Education</h3>
								<p>
									B.A. expected 2025
									<br /> Macalester College
								</p>
							</div>
						</div>
						<div className="text-container">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
								dignissimos? Labore, explicabo, eligendi quos id numquam ut
								sequi porro asperiores neque optio, aliquid earum placeat nemo!
								Asperiores necessitatibus, distinctio consequatur voluptate
								aliquam voluptates excepturi recusandae quia ipsum neque
								laudantium sequi corrupti, obcaecati fugiat dolore ullam hic
								blanditiis, nesciunt provident dolor!
							</p>
						</div>
					</div>
				</div>
				<Image
					src="/assets/arrow.png"
					alt="Arrow icon"
					width={32}
					height={32}
					className="icon-arrow"
					onClick={() => (location.href = "./#experience")}
				/>
			</section>
			<section id="experience">
				<p className="section__text__p1">Explore My</p>
				<h1 className="title">Experience</h1>
				<div className="experiece-details-container">
					<div className="about-containers">
						<div className="details-container">
							<h2 className="experience-sub-title">Frontend Development</h2>
							<div className="article-container">
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>HTML</h3>
										<p>Basic</p>
									</div>
								</article>
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>CSS</h3>
										<p>Basic</p>
									</div>
								</article>
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>Java/TypeScript</h3>
										<p>Intermediate</p>
									</div>
								</article>
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>NodeJS</h3>
										<p>Basic</p>
									</div>
								</article>
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>React</h3>
										<p>Intermediate</p>
									</div>
								</article>
							</div>
						</div>
						<div className="details-container">
							<h2 className="experience-sub-title">Backend Development</h2>
							<div className="article-container">
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>Python</h3>
										<p>Intermediate</p>
									</div>
								</article>
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>Firebase</h3>
										<p>Basic</p>
									</div>
								</article>
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>SQL</h3>
										<p>Basic</p>
									</div>
								</article>
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>Java</h3>
										<p>Basic</p>
									</div>
								</article>
								<article>
									<Image
										className="icon"
										src="/assets/checkmark.png"
										alt="Experience icon"
										width={32}
										height={32}
									/>
									<div>
										<h3>Git</h3>
										<p>Basic</p>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
				<Image
					src="/assets/arrow.png"
					alt="Arrow icon"
					width={32}
					height={32}
					className="icon-arrow"
					onClick={() => (location.href = "./#projects")}
				/>
			</section>
			<section id="projects">
				<p className="section__text__p1">Browse My Recent</p>
				<h1 className="title">Projects</h1>
				<div className="experience-details-container">
					<div className="about-containers">
						<div className="details-container color-container">
							<div className="article-container">
								<Image
									src="/assets/project-1.png"
									alt="project 1"
									width={500}
									height={500}
									className="project-img"
								/>
								<h2 className="experience-sub-title project-title">
									Project One
								</h2>
								<div className="btn-container">
									<button
										className="btn btn-color-2 project-btn"
										onClick={() => (location.href = "https://github.com/")}
									>
										GitHub
									</button>
									<button
										className="btn btn-color-2 project-btn"
										onClick={() => (location.href = "https://github.com/")}
									>
										Live Demo
									</button>
								</div>
							</div>
						</div>
						<div className="details-container color-container">
							<div className="article-container">
								<Image
									src="/assets/project-2.png"
									alt="project 2"
									width={500}
									height={500}
									className="project-img"
								/>
								<h2 className="experience-sub-title project-title">
									Project Two
								</h2>
								<div className="btn-container">
									<button
										className="btn btn-color-2 project-btn"
										onClick={() => (location.href = "https://github.com/")}
									>
										GitHub
									</button>
									<button
										className="btn btn-color-2 project-btn"
										onClick={() => (location.href = "https://github.com/")}
									>
										Live Demo
									</button>
								</div>
							</div>
						</div>
						<div className="details-container color-container">
							<div className="article-container">
								<Image
									src="/assets/project-3.png"
									alt="project 3"
									width={500}
									height={500}
									className="project-img"
								/>
								<h2 className="experience-sub-title project-title">
									Project Three
								</h2>
								<div className="btn-container">
									<button
										className="btn btn-color-2 project-btn"
										onClick={() => (location.href = "https://github.com/")}
									>
										GitHub
									</button>
									<button
										className="btn btn-color-2 project-btn"
										onClick={() => (location.href = "https://github.com/")}
									>
										Live Demo
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Image
					src="/assets/arrow.png"
					alt="Arrow icon"
					width={32}
					height={32}
					className="icon-arrow"
					onClick={() => (location.href = "./#contact")}
				/>
			</section>
			<section id="contact">
				<p className="section__text__p1">Get in Touch</p>
				<h1 className="title">Contact Me</h1>
				<div className="contact-info-upper-container">
					<div className="contact-info-container">
						<Image
							src="/assets/email.png"
							alt="Email icon"
							width={32}
							height={32}
							className="icon contact-icon email-icon"
						/>
						<p>
							<a href="mailto:camden.scholl.32@gmail.com">
								camden.scholl.32@gmail.com
							</a>
						</p>
					</div>
					<div className="contact-info-container">
						<Image
							src="/assets/linkedin.png"
							alt="LinkedIn icon"
							width={32}
							height={32}
							className="icon contact-icon"
						/>
						<p>
							<a href="https://www.linkedin.com/in/camden-scholl/">
								LinkedIn
							</a>
						</p>
					</div>
				</div>
			</section>
			<footer>
				<nav>
					<div className="nav-links-container">
						<ul className="nav-links">
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
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
				<p>Copyright &#169; 2024 Camden Scholl. All Rights Reserved.</p>
			</footer>
		</div>
	);
};

export default Home;
