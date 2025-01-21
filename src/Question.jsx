import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Question = () => {
    let temp = [
        {
            name: 'Science',
            questions: [
                {
                    question: 'Triton is the largest Satellite of which planet?',
                    options: ['Saturn', 'Jupiter', 'Mercury', 'Venus'],
                    answer: 0
                },
                {
                    question: 'What is the smallest planet in our solar system?',
                    options: ['Earth', 'Mars', 'Mercury', 'Venus'],
                    answer: 2
                },
                {
                    question: 'What is the largest planet in our solar system?',
                    options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
                    answer: 0
                },
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Mars', 'Earth', 'Jupiter', 'Saturn'],
                    answer: 0
                },
                {
                    question: 'Which element is most abundant in the Earth’s atmosphere?',
                    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
                    answer: 1
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['H2O', 'O2', 'H2', 'CO2'],
                    answer: 0
                },
                {
                    question: 'What type of galaxy is the Milky Way?',
                    options: ['Elliptical', 'Irregular', 'Spiral', 'Lenticular'],
                    answer: 2
                },
                {
                    question: 'Which organ in the human body filters blood?',
                    options: ['Lungs', 'Kidney', 'Heart', 'Liver'],
                    answer: 1
                },
                {
                    question: 'Which gas do plants use during photosynthesis?',
                    options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
                    answer: 0
                },
                {
                    question: 'What is the hardest natural substance on Earth?',
                    options: ['Diamond', 'Gold', 'Iron', 'Platinum'],
                    answer: 0
                },
                {
                    question: 'What is the boiling point of water at sea level?',
                    options: ['90°C', '100°C', '110°C', '120°C'],
                    answer: 1
                },
                {
                    question: 'Who proposed the theory of relativity?',
                    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
                    answer: 1
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'],
                    answer: 1
                },
                {
                    question: 'What is the speed of light?',
                    options: ['3 × 10^8 m/s', '3 × 10^6 m/s', '1 × 10^8 m/s', '5 × 10^8 m/s'],
                    answer: 0
                },
                {
                    question: 'Which planet is closest to the Sun?',
                    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
                    answer: 2
                },
                {
                    question: 'Which metal is liquid at room temperature?',
                    options: ['Mercury', 'Silver', 'Gold', 'Iron'],
                    answer: 0
                },
                {
                    question: 'What is the study of stars and planets called?',
                    options: ['Astrology', 'Astronomy', 'Meteorology', 'Geology'],
                    answer: 1
                },
                {
                    question: 'Which part of the plant conducts photosynthesis?',
                    options: ['Root', 'Stem', 'Leaf', 'Flower'],
                    answer: 2
                },
                {
                    question: 'Which element does the chemical symbol "O" represent?',
                    options: ['Oxygen', 'Gold', 'Silver', 'Iron'],
                    answer: 0
                },
                {
                    question: 'What is the SI unit of force?',
                    options: ['Newton', 'Joule', 'Pascal', 'Watt'],
                    answer: 0
                }

            ]
        },
        {
            name: 'Mathematics',
            questions: [
                {
                    question: 'What is the value of pi?',
                    options: ['3.14', '3.142', '3.1416', '3.14159'],
                    answer: 3
                },
                {
                    question: 'What is the value of e?',
                    options: ['2.718', '2.7182', '2.71828', '2.718281'],
                    answer: 3
                },
                {
                    question: 'What is the value of phi?',
                    options: ['1.618', '1.6182', '1.61828', '1.618281'],
                    answer: 0
                },
                {
                    question: 'What is 2 + 2?',
                    options: ['3', '4', '5', '6'],
                    answer: 1
                },
                {
                    question: 'What is the square root of 16?',
                    options: ['2', '4', '6', '8'],
                    answer: 1
                },
                {
                    question: 'Solve: 3x = 12, x = ?',
                    options: ['2', '3', '4', '5'],
                    answer: 2
                },
                {
                    question: 'What is 10 squared?',
                    options: ['100', '10', '20', '1000'],
                    answer: 0
                },
                {
                    question: 'What is the factorial of 5?',
                    options: ['60', '120', '24', '30'],
                    answer: 1
                },
                {
                    question: 'What is the Pythagorean theorem?',
                    options: ['a² + b² = c²', 'a² - b² = c²', 'a² × b² = c²', 'a² ÷ b² = c²'],
                    answer: 0
                },
                {
                    question: 'What is the perimeter of a square with side length 5?',
                    options: ['20', '25', '15', '10'],
                    answer: 0
                },
                {
                    question: 'What is the area of a triangle with base 6 and height 4?',
                    options: ['12', '24', '18', '20'],
                    answer: 0
                },
                {
                    question: 'What is 7 × 6?',
                    options: ['42', '48', '36', '49'],
                    answer: 0
                },
                {
                    question: 'What is 9 ÷ 3?',
                    options: ['2', '3', '4', '5'],
                    answer: 1
                },
                {
                    question: 'Solve for x: 2x + 5 = 11',
                    options: ['2', '3', '4', '5'],
                    answer: 1
                },
                {
                    question: 'What is the cube root of 27?',
                    options: ['2', '3', '4', '5'],
                    answer: 1
                },
                {
                    question: 'What is the sum of the angles in a triangle?',
                    options: ['180°', '360°', '90°', '120°'],
                    answer: 0
                },
                {
                    question: 'What is the decimal value of 1/4?',
                    options: ['0.25', '0.4', '0.5', '0.75'],
                    answer: 0
                },
                {
                    question: 'Solve: 15 - 8 = ?',
                    options: ['6', '7', '8', '9'],
                    answer: 1
                },
                {
                    question: 'What is 50% of 200?',
                    options: ['100', '50', '75', '150'],
                    answer: 0
                },
                {
                    question: 'What is the value of 2³?',
                    options: ['6', '8', '10', '12'],
                    answer: 1
                }
            ]
        },
        {
            name: 'Geography',
            questions: [
                {
                    question: 'What is the capital of Nepal?',
                    options: ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur'],
                    answer: 0
                },
                {
                    question: 'Which is the largest continent by area?',
                    options: ['Africa', 'Asia', 'Europe', 'North America'],
                    answer: 1
                },
                {
                    question: 'Which country has the largest population?',
                    options: ['India', 'USA', 'China', 'Russia'],
                    answer: 2
                },
                {
                    question: 'Which is the longest river in the world?',
                    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
                    answer: 1
                },
                {
                    question: 'Which ocean is the largest?',
                    options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
                    answer: 2
                },
                {
                    question: 'What is the highest mountain in the world?',
                    options: ['K2', 'Everest', 'Kangchenjunga', 'Makalu'],
                    answer: 1
                },
                {
                    question: 'Which desert is the largest in the world?',
                    options: ['Sahara', 'Gobi', 'Kalahari', 'Thar'],
                    answer: 0
                },
                {
                    question: 'Which country has the most time zones?',
                    options: ['USA', 'Russia', 'Canada', 'France'],
                    answer: 3
                },
                {
                    question: 'What is the capital of Australia?',
                    options: ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
                    answer: 1
                },
                {
                    question: 'Which country is known as the Land of the Rising Sun?',
                    options: ['China', 'Japan', 'South Korea', 'Thailand'],
                    answer: 1
                },
                {
                    question: 'What is the smallest country in the world?',
                    options: ['Monaco', 'Vatican City', 'San Marino', 'Malta'],
                    answer: 1
                },
                {
                    question: 'Which river flows through Egypt?',
                    options: ['Nile', 'Amazon', 'Ganges', 'Yangtze'],
                    answer: 0
                },
                {
                    question: 'What is the largest country by land area?',
                    options: ['Canada', 'USA', 'China', 'Russia'],
                    answer: 3
                },
                {
                    question: 'What is the capital of France?',
                    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
                    answer: 0
                },
                {
                    question: 'Which continent has the most countries?',
                    options: ['Africa', 'Asia', 'Europe', 'South America'],
                    answer: 0
                },
                {
                    question: 'Which is the largest island in the world?',
                    options: ['Greenland', 'New Guinea', 'Borneo', 'Madagascar'],
                    answer: 0
                },
                {
                    question: 'Which city is known as the Big Apple?',
                    options: ['Los Angeles', 'New York', 'Chicago', 'San Francisco'],
                    answer: 1
                },
                {
                    question: 'What is the longest mountain range in the world?',
                    options: ['Andes', 'Rockies', 'Himalayas', 'Alps'],
                    answer: 0
                },
                {
                    question: 'Which country has the longest coastline?',
                    options: ['USA', 'Canada', 'Australia', 'Russia'],
                    answer: 1
                },
                {
                    question: 'Which country is the Eiffel Tower located in?',
                    options: ['Italy', 'France', 'Germany', 'Switzerland'],
                    answer: 1
                }
            ]
        }
    ];
    
    const navigate = useNavigate();
    const [categories, setCategories] = useState([{ name: '', questions: [] }]);

    const addCategory = () => {
        setCategories([...categories, { name: '', questions: [] }]);
    };

    const addQuestion = (categoryIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].questions.push({ question: '', options: ['', '', '', ''], answer: null });
        setCategories(newCategories);
    };

    const handleCategoryChange = (e, categoryIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].name = e.target.value;
        setCategories(newCategories);
    };

    const handleQuestionChange = (e, categoryIndex, questionIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].questions[questionIndex].question = e.target.value;
        setCategories(newCategories);
    };

    const handleOptionChange = (e, categoryIndex, questionIndex, optionIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].questions[questionIndex].options[optionIndex] = e.target.value;
        setCategories(newCategories);
    };

    const handleCorrectAnswerSelect = (categoryIndex, questionIndex, optionIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].questions[questionIndex].answer = optionIndex;
        setCategories(newCategories);
    };

    const start = () => {
        navigate('/home', { state: { data: categories } });
    }
    const load =()=>
    {
        setCategories(temp);
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className='flex w-full justify-center items-center'>
                <h1 className='text-[2rem] font-bold  text-gray-800 py-5 mb-4'>NOBLE QUIZ COMPETITION</h1>
                <button className='text-[1.2rem] absolute right-20 border-black border-2 text-center py-1 px-2 rounded-md' onClick={load} >Load Template</button>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6 border border-gray-300 p-4 rounded-lg">
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={category.name}
                            onChange={(e) => handleCategoryChange(e, categoryIndex)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                        />
                        {category.questions.map((question, questionIndex) => (
                            <div key={questionIndex} className="mb-6 border border-gray-200 p-4 rounded-lg">
                                <input
                                    type="text"
                                    placeholder="Question"
                                    value={question.question}
                                    onChange={(e) => handleQuestionChange(e, categoryIndex, questionIndex)}
                                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                                />
                                <div className="space-y-3">
                                    {question.options.map((option, optionIndex) => (
                                        <div key={optionIndex} className="flex items-center">
                                            <input
                                                type="radio"
                                                name={`correctAnswer-${categoryIndex}-${questionIndex}`}
                                                checked={question.answer === optionIndex}
                                                onChange={() => handleCorrectAnswerSelect(categoryIndex, questionIndex, optionIndex)}
                                                className="mr-2"
                                            />
                                            <input
                                                type="text"
                                                placeholder={`Option ${optionIndex + 1}`}
                                                value={option}
                                                onChange={(e) => handleOptionChange(e, categoryIndex, questionIndex, optionIndex)}
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={() => addQuestion(categoryIndex)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Add Question
                        </button>
                    </div>
                ))}
                <button
                    onClick={addCategory}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Add Category
                </button>
            </div>
            <div className="flex justify-center py-5 text-white">
            <button className='text-[1.2rem] bg-[#3f22a6]  text-center py-1 px-2 rounded-md' onClick={start} >Start Quiz</button>
            </div>
        </div>
    );
};

export default Question;
