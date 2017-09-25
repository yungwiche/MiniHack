const router = require('express').Router();
const questionController = require('./controller');

router.get('/', (req, res) => {
    questionController.getRandomQuestion((question) => {
        console.log('question', question);
        if (question._id == 2){
            res.render('game', {
                questionNo: questionController.getCurrentQuestionNo(),
                question: question,
                score: questionController.getPlayerScore().question,
                question2: hidden,
                question6: hidden
            });
        }else if (question._id == 6){
            res.render('game', {
                questionNo: questionController.getCurrentQuestionNo(),
                question: question,
                score: questionController.getPlayerScore().question,
            });
        }
        else{
            res.render('game', {
                questionNo: questionController.getCurrentQuestionNo(),
                question: question,
                score: questionController.getPlayerScore().question,
                question6: hidden
            });
        }
    })
});

router.post('/', (req, res) => {
    let answer = req.body.submit;
    console.log('answer viewRouter',answer);
    if(!questionController.processAnswer(answer))
        res.redirect('/game');
    else
        res.send('You won');
});

module.exports = router;