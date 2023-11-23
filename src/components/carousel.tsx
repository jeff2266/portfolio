import { useRef, useState } from 'react'

export default function Carousel({ images }: { images: string[] }) {
	const [scrollIdx, setScrollIdx] = useState(0)
	const scrollRef = useRef<HTMLDivElement | null>(null)

	return (
		<div className="relative grid h-full rounded-lg overflow-hidden">
			<div
				ref={scrollRef}
				className="row-start-1 col-start-1 h-full flex items-center overflow-x-auto snap-mandatory snap-x scroll-smooth no-scrollbar overflow-y-hidden">
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
				<div className="relative grid items-end row-start-1 col-start-1 w-full h-full">
					<div className="py-1 flex justify-center gap-1 z-10 after:absolute after:bottom-0 after:w-full after:h-4 after:filter after:backdrop-blur-md after:bg-timberwolf-100/30">
						{images.map((img, idx) => (
							<button
								key={`${img}-${idx}`}
								className={`w-2 h-2 bg-opacity-80 transition-opacity hover:bg-opacity-20 bg-timberwolf-800 rounded-full z-20 ${scrollIdx === idx ? 'bg-opacity-20' : ''}`}
								onClick={() => {
									scrollRef.current?.scrollTo(idx * scrollRef.current.clientWidth, 0)
									setScrollIdx(idx)
								}}></button>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
