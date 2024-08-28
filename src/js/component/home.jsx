import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	return (
		<div className="container">
			<div className="traffic-top"></div>
			<div className="traffic-light">
				<div className={"light-red " + (color === "red" ? "redGlow" : "")} onClick={() => setColor('red')}></div>
				<div className={"light-yellow " + (color === "yellow" ? "yellowGlow" : "")} onClick={() => setColor('yellow')}></div>
				<div className={"light-green " + (color === "green" ? "greenGlow" : "")} onClick={() => setColor('green')}></div>

			</div>

		</div>
	);
};

export default Home;
