import express from 'express';
import {
    addQuestion, getQuestionById, getAllQuestions,
    updateQuestion, deleteQuestion
} from '../controllers/questionController.js';

const router = express.Router();

router.get('/questions', getAllQuestions);
router.post('/question', addQuestion);
router.put('/question/:id', updateQuestion);
router.delete('/question/:id', deleteQuestion);
router.get('/question/:id', getQuestionById);

export default router;
