
export type Question = {
  items:[{}];
  has_more:boolean;
  quota_max: number;
  quota_remaining: number
};



export type QuestionsState = Question ;

export const fetchQuizQuestions = async (): Promise<QuestionsState[]> => 

{
  const endpoint = `https://api.stackexchange.com/2.2/questions?site=stackoverflow`;
  const data = (await fetch(endpoint)).json();
  return data

 
};
