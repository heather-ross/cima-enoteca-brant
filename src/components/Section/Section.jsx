import React from 'react';
import './Section.scss';

const Section = ({ title, text, image, id, buttons, link1, link2, link3 }) => {


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
				<button className="section__button"><span>
					<a href={link1} target="_blank" rel="noreferrer" className="section__button--link">
						{buttons.button1}
					</a></span>
				</button>
				{buttons.button2 &&
					<button className="section__button">
						<a href={link2} target="_blank" rel="noreferrer" className="section__button--link">
							{buttons.button2}
						</a>
					</button>
				}
				{buttons.button3 &&
					<button className="section__button">
						<a href={link3} target="_blank" rel="noreferrer" className="section__button--link">
							{buttons.button3}
						</a>
					</button>
				}

			</div>
		</section>
	)
}

export default Section;
