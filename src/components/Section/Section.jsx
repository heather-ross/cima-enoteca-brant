import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Section.scss';

const Section = ({ title, text, image, id, buttons, links, i}) => {
	
	const { values } = useContext(AuthContext);

	return (
		<section id={id} className="section">
			<div className="section__img-wrap">
				<img className="section__img" src={image} alt="..." />
			</div>
			<div className="section__body">
				<h2 className="section__heading">
					{title}
				</h2>
				<p className="section__text">
					{text}
				</p>
				<button className="section__button">
					<a href={i ? values.menu : links.link1} target="_blank" rel="noreferrer" className="section__button--link">
						{buttons.button1}
					</a>
				</button>
				{buttons.button2 &&
					<button className="section__button">
						<a href={i ? values.menu2 : links.link2} target="_blank" rel="noreferrer" className="section__button--link">
							{buttons.button2}
						</a>
					</button>
				}
				{buttons.button3 &&
					<button className="section__button">
						<a href={i ? values.menu3 : links.link3} target="_blank" rel="noreferrer" className="section__button--link">
							{buttons.button3}
						</a>
					</button>
				}

			</div>
		</section>
	)
}

export default Section;
