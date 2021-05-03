import React from 'react';
import '../../styles/styles.scss';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import sectionData from '../../data/sectioncontent.json';

class Home extends React.Component {
  state = {
      sectionContent: sectionData
  }



  render() {
    return (
      <>
        <Hero />
        <main>
         {this.state.sectionContent.map(content => (
            <Section
            title={content.title}
            text={content.text}
            image={content.image}
            id={content.id} 
            button1={content.buttons.button1}
            button2={content.buttons.button2}
            />)
        )}  
        </main>
      </>
    )
  }
}

export default Home;
