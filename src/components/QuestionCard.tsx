import React from "react";

// Styles

import { Wrapper } from "./QuestionCard.styles";

type Props = {
	title: string;
	url: string;
};

const QuestionCard: React.FC<Props> = ({ title, url }) => (
	<>
		<Wrapper>
			<a href={url} target='_blank' rel='noreferrer'>
				{title}
			</a>
		</Wrapper>
	</>
);

export default QuestionCard;
