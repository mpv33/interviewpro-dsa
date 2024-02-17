import express from 'express';
import {
    addQuestion, getQuestionById, getAllQuestions,
    updateQuestion, deleteQuestion
} from '../controllers/questionController.js';
import { fakeAuthenticateUser } from '../middlewares/auth.js';

const router = express.Router();

router.get('/questions', getAllQuestions);
router.post('/question', fakeAuthenticateUser, addQuestion);
router.get('/question/:id', getQuestionById);
router.put('/question/:id', fakeAuthenticateUser, updateQuestion);
router.delete('/question/:id', fakeAuthenticateUser, deleteQuestion);


export default router;
