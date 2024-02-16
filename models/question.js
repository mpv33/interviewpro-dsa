import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    title: String,
    questionUrl: String,
    company: [String],
    level: String,
    answer: String
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
