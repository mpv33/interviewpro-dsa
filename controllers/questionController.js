import { Question } from '../models/question.js';

// Add a new question
export const addQuestion = async (req, res) => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).json({
            success: true,
            message: 'Question added successfully',
            question: question
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to add question',
            error: error.message
        });
    }
};

// Get question by ID
export const getQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({
                success: false,
                message: 'Question not found'
            });
        }
        res.json({
            success: true,
            question: question
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to get question',
            error: error.message
        });
    }
};

// Get all questions
export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json({
            success: true,
            questions: questions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};

// Update a question
export const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, questionUrl, companyTag, level, answer,topic } = req.body;

        const updatedQuestion = await Question.findByIdAndUpdate(id, {
            title,
            questionUrl,
            companyTag,
            level,
            answer,
            topic
        }, { new: true });

        if (!updatedQuestion) {
            return res.status(404).json({
                success: false,
                message: 'Question not found'
            });
        }

        res.json({
            success: true,
            message: 'Question updated successfully',
            question: updatedQuestion
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to update question',
            error: error.message
        });
    }
};

// Delete a question
export const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuestion = await Question.findByIdAndDelete(id);
        
        if (!deletedQuestion) {
            return res.status(404).json({
                success: false,
                message: 'Question not found'
            });
        }

        res.json({
            success: true,
            message: 'Question deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to delete question',
            error: error.message
        });
    }
};

export const deleteAllQuestions = async (req, res) => {
    try {
        // Delete all documents from the Question collection
        await Question.deleteMany({});
        
        // Send a success response
        res.json({ message: 'All questions deleted successfully' });
    } catch (error) {
        // Handle any errors and send an error response
        res.status(500).json({ error: 'Failed to delete questions', message: error.message });
    }
};
