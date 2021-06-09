import React from "react";

type Props = {
	question: string;
};

const QuestionCard: React.FC<Props> = ({ question }) => (
	<div>
		<p dangerouslySetInnerHTML={{ __html: question }} />
	</div>
);

export default QuestionCard;
