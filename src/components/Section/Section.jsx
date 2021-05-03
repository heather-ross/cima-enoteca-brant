import React from 'react';
import './Section.scss';

function Section({ title, text, image, id, button1, button2 }) {
	return (
		<section id={id} className="section">
			{/* <div className="section__wrap"> */}
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
							<a href="menu01.pdf" target="_blank" className="section__button--link">
								{button1}
							</a>
						</button>
						{button2 &&
						<button className="section__button">
							<a href="menu02.pdf" target="_blank" className="section__button--link">
								{button2}								
							</a>
						</button>
						}
				</div>
			{/* </div> */}
		</section>
	)
}

export default Section;
