import React, { useState, useEffect } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import QuestionCard from "./component/QuestionCard";
import { type } from "os";

//Types
type article = { source: string; author: string; title: string; url: string };

type Questions = {
	status: string;
	totalResults: number;
	articles: article[];
};

const App = () => {
	const [questions, setQuestions] = useState<Questions>();

	const number = 0;

	useEffect(() => {
		// Update the document title using the browser API
		axios
			.get<Questions>(
				"https://newsapi.org/v2/everything?q=tesla&from=2021-05-09&sortBy=publishedAt&apiKey=e0d88ee7842a4a1b8c7b90b0cd184dd7"
			)
			.then((response: any) => {
				setQuestions(response.data);
				console.log(",,,,", response.data);
			});
	}, []);

	console.log("questions", questions ? questions.articles : "abc");

	return (
		<div className='App'>
			<div>
				{questions?.articles.map((item, index) => (
					<div key={index}>
						<a href={item.url} target='_blank'>
							{item.title}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
