import React from 'react'
import ReactDOM from 'react-dom/client'
import HamburgerMenu from './components/hamburgerMenu.tsx'
import Carousel from './components/carousel.tsx'
import twh1 from '../public/this-weeks-heartbreak-1.png'
import twh2 from '../public/this-weeks-heartbreak-2.png'
import partsStatus from '../public/parts-status-sort.gif'
import rightClick from '../public/right-click-multiple.gif'

ReactDOM.createRoot(document.getElementById('hamburger-menu')!).render(
  <React.StrictMode>
    <HamburgerMenu />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('carousel-thisweeksheartbreak')!).render(
	<React.StrictMode>
		<Carousel images={[twh1, twh2]} />
	</React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('carousel-sat')!).render(
	<React.StrictMode>
		<Carousel images={[partsStatus, rightClick]} />
	</React.StrictMode>
)