import React, { useContext } from 'react';
import '../../styles/styles.scss';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../contexts/AuthContext';

function Home({sectionData}) {
  const { url } = useContext(AuthContext);
  const { url2 } = useContext(AuthContext);

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
            button1={content.buttons.button1}
            button2={content.buttons.button2}
            link1={index === 0 ? url : content.links.link1}
            link2={index === 0 ? url2 : content.links.link2}
          />)
        )}
      </main>
      <Footer />
    </>
  )

}

export default Home;
