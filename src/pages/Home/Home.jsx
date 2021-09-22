import React, { useContext } from 'react';
import '../../styles/styles.scss';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../contexts/AuthContext';
import sectionData from '../../data/sectionData.json';

function Home() {
  const { values } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <Hero />
      <main>
        {sectionData.map((content, index) => (
          <Section
            title={content.title}
            text={content.text}
            image={content.image}
            id={content.id}
            key={content.id}
            buttons={content.buttons}
            link1={index === 0 ? values.menu : content.links.link1}
            link2={index === 0 ? values.menu2 : content.links.link2}
            link3={index === 0 ? values.menu3 : content.links.link3}
          />)
        )}
      </main>
      <Map />
      <Footer />
    </>
  )

}

export default Home;