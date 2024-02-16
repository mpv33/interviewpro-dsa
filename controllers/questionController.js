import Question from '../models/question.js';

export const addQuestion = async (req, res) => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.json(question);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, questionUrl, company, level, answer } = req.body;

        const updatedQuestion = await Question.findByIdAndUpdate(id, {
            title,
            questionUrl,
            company,
            level,
            answer
        }, { new: true });

        if (!updatedQuestion) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.json(updatedQuestion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuestion = await Question.findByIdAndDelete(id);
        
        if (!deletedQuestion) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};