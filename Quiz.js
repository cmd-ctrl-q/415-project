
// user requests to take some quiz 
// server responds back with the quiz
const quiz = [
    {
        _id: "{mongodb id}",
        title: "Science",
        description: 'A quiz on science related topics',
        questions: [
            {
                id: "1",
                question: "Which materials are harder than glass?",
                choices: ["Ordinary steel", "Platnium", "Tungsten", "Ice", "Titanium"],
                answer: ["Tungsten", "Titanium"]
            },
            {
                id: "2",
                question: "Which field deals with objects on a subatomic scale?",
                choices: ["Zoology", "General Relativity", "Quantum Mechanics"],
                answer: "General Relativity"
            }, 
            {
                id: "3",
                question: "Homo sapiens are of the phylum Chordata.",
                choices: [true, false],
                answer: true,
            }
        ]
    }
];

// user finishes answering questions for a quiz. 
// user submits their answers: 
const userSubmission = {
    _id: "{mongdb id}", 
    username: "john_wick" (unique), 
    quizes: [
        {
            _id: "{mongodb id}",
            title: "Sclience", 
            description: "A quiz on science related topics",
            answers: [
                {
                    id: "1", // question id 
                    answer: ["Tungsten", "Titanium"],
                    correct: true,
                },
                {
                    id: "2", // question id 
                    answer: "Quantum Mechanics",
                    correct: false,
                },
                {
                    id: "3", // question id 
                    answer: true,
                    correct: true,
                }
            ]
        }
    ]
}

module.exports = quiz;