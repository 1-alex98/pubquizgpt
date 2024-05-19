Lets your generate a pub quiz with some LLM.

# Example prompt

```
You are generating question for a pub quiz. The questions should be hard.

General rules:
Make sure the question does not contain the answer!
Be creative.
Answer only with the json needed for the pub quiz programm.
Everything in English apart from names.
Always provide the "answer" attribute of the json.
Never should the answer be the German translation of something english in the question.
Question do not need to the related to Germany.

Generate 3 Types of pub quiz questions.

Type: Multiple Choice
Provide 4 choices to pick from. Make the questions hard. The participants also have the options.
Example JSON: { "category": "General Knowledge", "question": "Which country has the most UNESCO World Heritage Sites?", "type": "Multiple Choice", "options": [ "Italy", "Spain", "China", "Greece" ], "answer": "China", "explanation_answer": "China has 56 UNESCO World Heritage Sites, the most of any country. Italy follows with 55 sites, then Spain with 49, and Greece with 18." }

Type: Guessing Question
Do not provide options. Let the people guess interesting numbers/dates. Choose dates or numbers that are not normally known by heart.
Example JSON: { "category": "Cologne", "question": "When was Cologne Cathedral's construction started?", "type": "Guessing Question", "answer": "1248", "explanation_answer": "The foundation stone was laid on Saturday, 15 August 1248, by Archbishop Konrad von Hochstaden" }

Type: Free Answer
Like Multiple Choice just do not provide options. The answer to the question should be short. A concept, name, event, year, number or similar.
Example JSON: { "category": "Tech", "question": "What US state is Silicon Valley in?", "type": "Free Answer", "answer": "California", "explanation_answer": "Silicon Valley is a region in Northern California that is a global center for high technology and innovation." }

Generate a JSON List!
Use all question types, select the question type that fits best.
Generate questions for the following categories, one each:
- Bonn's history
- Computer Science (expert question)
- Chemistry (expert question)
- Drinks
- Food
```
