import React, { useContext } from 'react';
import '../../styles/styles.scss';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../contexts/AuthContext';

function Home() {
  const { menu, menu2, menu3 } = useContext(AuthContext);
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
    const sectionInfo = [
      {
          id: "menus",
          title: "Sample Menus",
          text: "Though we endeavour to keep our online menus current, our menu changes frequently. Please view these as sample menus.",
          image: "./bg04.jpg",
          buttons: {
              button1: "ANTIPASTI & PASTA",
              button2: "PIZZA & MAINS",
              button3: "VINO & COCKTAILS"
          },
          links: {
              link1: "https://firebasestorage.googleapis.com/v0/b/cima-admin.appspot.com/o/images%2Fmenu-01.png?alt=media&token=5760504f-d75d-4ed2-ae55-c085e479fc57",
              link2: "https://firebasestorage.googleapis.com/v0/b/cima-admin.appspot.com/o/images%2Fmenu.pdf?alt=media&token=e0cd734e-dd58-457a-981f-a1af945dd1d8",
              link3: "https://firebasestorage.googleapis.com/v0/b/cima-admin.appspot.com/o/images%2Fmenu.pdf?alt=media&token=e0cd734e-dd58-457a-981f-a1af945dd1d8"
          }
      },
      {
          id: "order",
          title: "Order Takeout",
          text: "Delivery and pickup available through UberEats, or call us for pickup at our Burlington location (905) 332-2022.",
          image: "./bg05.jpg",
          buttons: {
              button1: "UBEREATS"
          },
          links: {
            link1: "https://www.ubereats.com/ca/toronto/food-delivery/cima-enoteca/IayzjDDMS7OXkrWPH5xQAA?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"
          }
      },
      {
          id: "reserve",
          title: "Reserve a Table",
          text: "Book a reservation at CIMA on Brant online. For parties of 6 or more, please call us (905) 332-2022.",
          image: "./bg06.jpg",
          buttons: {
            button1: "RESERVATIONS"          
          },
          links: {
              link1: "https://www.tbdine.com/book/restaurant/cima-brant?idApp=69240"
          }
      }
  ]

  return (
    <>
      <NavBar 
        navLinks={ navLinks }
      />
      <Hero />
      <main>
        {sectionInfo.map((content, index) => (
          <Section
            title={content.title}
            text={content.text}
            image={content.image}
            id={content.id}
            key={content.id}
            buttons={content.buttons}
            link1={index === 0 ? menu : content.links.link1}
            link2={index === 0 ? menu2 : content.links.link2}
            link3={index === 0 ? menu3 : content.links.link3}
          />)
        )}
      </main>
      <Map />
      <Footer />
    </>
  )

}

export default Home;
