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
		<Carousel images={[]} />
	</React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('carousel-sat')!).render(
	<React.StrictMode>
		<Carousel images={[]} />
	</React.StrictMode>
)