import React from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Information from './components/Information.jsx';
import Projects from './components/Projects.jsx';
import Faq from './components/Faq.jsx';
import Info from './components/Info.jsx'
import Img from './components/Img.jsx';

const App = () => {
  return (
<main>
<div className='min-w-screen min-h-screen bg-[#f8f9fa]'>
<div className='mx-2 md:mx-12 flex flex-col gap-5'>
<Nav />
<Hero />

<Information />
<Img />
<Info />
<Projects />
<Faq />

</div>
</div>
<Footer />
</main>
  )
}

export default App