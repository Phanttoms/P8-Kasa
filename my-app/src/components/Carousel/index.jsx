import { useState } from "react";
import arrow from "../../assets/icones/vector.svg";

function Carousel({ pictures }) {
	const [slide, setSlide] = useState(0);

	const previousSlide = () => {
		setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
	};

	const nextSlide = () => {
		setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
	};

	return (
		<div className="carousel-container">
			<div className="carousel">
				{pictures && pictures.length > 1 && (
					<img
						className="carousel__arrow arrow-left"
						src={arrow}
						alt="Gauche"
						onClick={previousSlide}
					/>
				)}
				{pictures &&
					pictures.length > 0 &&
					pictures.map((picture, index) => {
						return (
							<img
								key={index}
								className={
									index === slide ? "carousel__img actif" : "carousel__img"
								}
								src={picture}
								alt="Propriété"
							/>
						);
					})}

				{pictures && pictures.length > 1 && (
					<img
						className="carousel__arrow arrow-right"
						src={arrow}
						alt="Droite"
						onClick={nextSlide}
					/>
				)}
				{pictures && pictures.length > 1 && (
					<span className="carousel__count">
						{slide + 1} / {pictures.length}
					</span>
				)}
			</div>
		</div>
	);
}

export default Carousel;
