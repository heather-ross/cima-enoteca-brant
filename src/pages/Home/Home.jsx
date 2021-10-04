import React from 'react';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import sectionData from '../../data/sectionData.json';
import '../../styles/styles.scss';

function Home() {

  return (
    <>
      <NavBar />
      <Hero />
      <main>
        {sectionData.map((content) => (
          <Section
            title={content.title}
            text={content.text}
            image={content.image}
            id={content.id}
            key={content.id}
            buttons={content.buttons}
            links={content.links}
          />)
        )}
      </main>
      <Map />
      <Footer />
    </>
  )

}

export default Home;