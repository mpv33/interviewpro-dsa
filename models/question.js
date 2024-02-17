import mongoose from 'mongoose';

// Define the schema for a question
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    questionUrl: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    companyTag: {
        type: [String]
    },
    level: {
        type: String
    },
    answer: {
        type: String
    }
});

// Sample question payload in JSON format
const sampleQuestion = {
    title: "Sample Question",
    questionUrl: "https://www.example.com/sample-question",
    topic: "Arrays",
    companyTag: ["Google", "Facebook"],
    level: "Medium",
    answer: "Sample answer to the question."
};

const Question = mongoose.model('Question', questionSchema);

export { Question, sampleQuestion };
