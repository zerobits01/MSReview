import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
const Rate = (props) => {
	const [rate, setRate] = useState(0);
	
	useEffect(()=> {
		if (props.read_only) {
			setRate(props.givenRating)
		}
	}, []);

	return (
		<Container>
			{[...Array(5)].map((item, index) => {
				const givenRating = index + 1;
				return (
					<label>
						<Radio
							type="radio"
							value={givenRating}
							onClick={() => {
								if (!props.read_only) {
									setRate(givenRating);
									props.rateCB(givenRating);
								}
							}}
						/>
						<Rating>
							<FaStar
								color={
									givenRating < rate || givenRating === rate
										? "burlywood"
										: "rgb(192,192,192)"
								}
							/>
						</Rating>
					</label>
				);
			})}
		</Container>
	);
};

export default Rate;