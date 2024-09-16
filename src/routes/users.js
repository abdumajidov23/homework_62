import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res)=>{
    res.send('Salom user');
});

export { userRouter };