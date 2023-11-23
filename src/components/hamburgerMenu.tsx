import { useState } from 'react'

export default function HamburgerMenu() {
	const [isExpanded, setIsExpanded] = useState(false)
	return (
		<>
			<div className="w-full lg:hidden">
				<div className="h-0 relative z-30 w-full">
					<div
						className={`flex flex-col lg:flex-row gap-3 lg:gap-6 text-left border-timberwolf-800 border-b-[1px] pb-[0.5rem] ${
							isExpanded ? '' : 'hidden'
						}`}>
						<span className="flex border-timberwolf-800 items-center py-[0.5rem]">
							<button
								className="text-center w-6 h-6 group transition-opacity hover:opacity-70"
								onClick={() => setIsExpanded(false)}>
								<img className="object-contain" src="cancel.svg" alt="menu" />
							</button>
						</span>
						<a
							href="#home"
							className="group transition-opacity hover:opacity-70 w-fit"
							onClick={() => setIsExpanded(false)}>
							<h2 className={`text-md lg:text-xl font-semibold`}>Home</h2>
						</a>
						<a
							href="#about"
							className="group transition-opacity hover:opacity-70 w-fit"
							onClick={() => setIsExpanded(false)}>
							<h2 className={`text-md lg:text-xl font-semibold`}>About</h2>
						</a>
						<a
							href="#projects"
							className="group transition-opacity hover:opacity-70 w-fit"
							onClick={() => setIsExpanded(false)}>
							<h2 className={`text-md lg:text-xl font-semibold`}>Projects</h2>
						</a>
						<a
							href="#contact"
							className="group transition-opacity hover:opacity-70 w-fit"
							onClick={() => setIsExpanded(false)}>
							<h2 className={`text-md lg:text-xl font-semibold`}>Contact</h2>
						</a>
						<div className="flex my-4 gap-4">
							<a
								className="group transition-opacity hover:opacity-70"
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/jeffrey-yan-67278688">
								<img className="opacity-70 w-6 lg:w-8" src="linkedin.svg" alt="linkedin" />
							</a>
							<a
								className="group transition-opacity hover:opacity-70"
								href="https://github.com/jeff2266"
								target="_blank"
								rel="noopener noreferrer">
								<img className="opacity-70 w-6 lg:w-8" src="github.svg" alt="github" />
							</a>
							<a
								className="group transition-opacity hover:opacity-70"
								href="https://www.frontendmentor.io/profile/jeff2266"
								target="_blank"
								rel="noopener noreferrer">
								<img className="opacity-70 w-6 lg:w-8" src="frontendmentor.svg" alt="frontend mentor" />
							</a>
						</div>
					</div>
					{!isExpanded && (
						<span className="flex border-timberwolf-800 border-b-[1px] items-center py-[0.5rem]">
							<button
								className="text-center relative w-6 h-6 group transition-opacity hover:opacity-70"
								onClick={() => setIsExpanded(true)}>
								<img className="object-contain" src="hamburger.svg" alt="menu" />
							</button>
						</span>
					)}
				</div>
			</div>
			<div
				className={`w-full h-screen fixed top-0 left-0 filter backdrop-blur-xl bg-black/10 lg:hidden z-20 ${
					isExpanded ? 'animate-[fadeIn_0.2s] block' : 'hidden'
				}`}
				onClick={() => setIsExpanded(false)}></div>
			<div className="hidden lg:flex items-center gap-3 lg:gap-6 text-left">
				<a href="#home" className="group transition-opacity hover:opacity-70">
					<h2>Home</h2>
				</a>
				<a href="#about" className="group transition-opacity hover:opacity-70">
					<h2>About</h2>
				</a>
				<a href="#projects" className="group transition-opacity hover:opacity-70">
					<h2>Projects</h2>
				</a>
				<a href="#contact" className="group transition-opacity hover:opacity-70">
					<h2>Contact</h2>
				</a>
				<a
					className="group transition-opacity hover:opacity-70 ms-auto"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/jeffrey-yan-67278688">
					<img className="opacity-70 w-6 lg:w-8" src="linkedin.svg" alt="linkedin" />
				</a>
				<a
					className="group transition-opacity hover:opacity-70"
					href="https://github.com/jeff2266"
					target="_blank"
					rel="noopener noreferrer">
					<img className="opacity-70 w-6 lg:w-8" src="github.svg" alt="github" />
				</a>
				<a
					className="group transition-opacity hover:opacity-70"
					href="https://www.frontendmentor.io/profile/jeff2266"
					target="_blank"
					rel="noopener noreferrer">
					<img className="opacity-70 w-6 lg:w-8" src="frontendmentor.svg" alt="frontend mentor" />
				</a>
			</div>
		</>
	)
}
