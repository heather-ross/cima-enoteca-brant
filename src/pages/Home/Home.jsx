import React from 'react';
import '../../styles/styles.scss';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import sectionData from '../../data/sectioncontent.json';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

class Home extends React.Component {
  state = {
    sectionContent: sectionData
  }

  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <main>
          {this.state.sectionContent.map(content => (
            <Section
              title={content.title}
              text={content.text}
              image={content.image}
              id={content.id}
              key={content.id}
              button1={content.buttons.button1}
              button2={content.buttons.button2}
              link1={content.links.link1}
              link2={content.links.link2}
            />)
          )}
        </main>
        <Footer />
      </>
    )
  }
}

export default Home;
