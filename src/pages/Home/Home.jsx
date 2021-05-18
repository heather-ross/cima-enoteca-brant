import React, { useContext } from 'react';
import '../../styles/styles.scss';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../contexts/AuthContext';

function Home({sectionData}) {
  const { url, url2 } = useContext(AuthContext);
  // const { url2 } = useContext(AuthContext);
  const navLinks = [
		{
			text: 'MENUS',
			path: 'menus',
		},
		{
			text: 'TAKEOUT',
			path: 'order',
		},
		{
			text: 'RESERVATIONS',
			path: 'reserve',
		},
		{
			text: 'CONTACT',
			path: 'footer',
		}]

  return (
    <>
      <NavBar 
        navLinks={ navLinks }
      />
      <Hero />
      <main>
        {sectionData.map((content, index) => (
          <Section
            title={content.title}
            text={content.text}
            image={content.image}
            id={content.id}
            key={content.id}
            button1={content.buttons.button1}
            button2={content.buttons.button2}
            link1={index === 0 ? url : content.links.link1}
            link2={index === 0 ? url2 : content.links.link2}
          />)
        )}
      </main>
      <Map />
      <Footer />
    </>
  )

}

export default Home;
