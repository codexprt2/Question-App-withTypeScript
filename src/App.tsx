import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import { GlobalStyle } from "./App.styles";

import QuestionCard from "./components/QuestionCard";

//Types
type article = { source: string; author: string; title: string; url: string };

type Questions = {
	status: string;
	totalResults: number;
	articles: article[];
};

const App = () => {
	const [questions, setQuestions] = useState<Questions>();

	useEffect(() => {
		// Update the document title using the browser API
		axios
			.get<Questions>(
				"https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
			)
			.then((response: any) => {
				setQuestions(response.data);
				console.log(response.data);
			});
	}, []);

	return (
		<>
			<GlobalStyle />
			<h1>Question List</h1>
			<div>
				{questions?.articles.map((item, index) => (
					<div key={index}>
						<QuestionCard title={item.title} url={item.url} />
					</div>
				))}
			</div>
		</>
	);
};

export default App;
