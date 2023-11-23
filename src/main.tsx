import React from 'react'
import ReactDOM from 'react-dom/client'
import HamburgerMenu from './components/hamburgerMenu.tsx'
import Carousel from './components/carousel.tsx'

ReactDOM.createRoot(document.getElementById('hamburger-menu')!).render(
  <React.StrictMode>
    <HamburgerMenu />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('carousel-thisweeksheartbreak')!).render(
	<React.StrictMode>
		<Carousel images={['this-weeks-heartbreak-1.png', 'this-weeks-heartbreak-2.png']} />
	</React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('carousel-sat')!).render(
	<React.StrictMode>
		<Carousel images={['parts-status-sort.gif', 'right-click-multiple.gif']} />
	</React.StrictMode>
)