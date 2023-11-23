import { useRef } from 'react'

export default function Carousel({ images }: { images: string[] }) {
	const scrollRef = useRef<HTMLDivElement | null>(null)
	return (
		<div className="relative h-full rounded-lg overflow-hidden">
			<div ref={scrollRef} className="h-full flex overflow-x-auto scroll-smooth no-scrollbar">
				{images.map((img, idx) => (
					<div
						id={`${img.split('/').pop()}-${idx}`}
						key={idx}
						className="snap-start relative w-full grow shrink-0 basis-full">
						<img className="object-contain" src={img} alt="carousel image" />
					</div>
				))}
			</div>
			{images.length > 1 && (
				<>
					<div className="absolute w-full bottom-0 py-2 flex justify-center gap-1 text-timberwolf-800 z-10 after:absolute after:w-full after:h-full after:filter after:backdrop-blur-md after:bg-timberwolf-100/30">
						{images.map((img, idx) => (
							<button
								key={`${img}-${idx}`}
								className="w-2 h-2 bg-opacity-80 transition-opacity hover:bg-opacity-20 bg-timberwolf-800 rounded-full z-20"
								onClick={() => {
									scrollRef.current?.scrollTo(idx * scrollRef.current.clientWidth, 0)
								}}></button>
						))}
					</div>
				</>
			)}
		</div>
	)
}
