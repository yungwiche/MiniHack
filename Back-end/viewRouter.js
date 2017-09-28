const router = require('express').Router();
const gameController = require('./controller');

router.get('/', (req, res) => {
  gameController.getNextQuestion(req.ip, (question) => {
    gameController.getPlayerScoreByIp(req.ip, (playerScore) => {
      if (question == 7) {
        res.render('lost', {
          state: 'thua',
          score: playerScore,
          layout: 'sub'
        });
      } else if (question == 8){
        gameController.getPlayerByIp(req.ip, (player) => {
          res.render('won', {
            state: 'thắng',
            score: playerScore,
            questionNo: player.won,
            layout: 'sub'
          });
        });
      } else if (question._id == 2) {
        res.render('game', {
          questionNo: question._id,
          question: question.question,
          score: playerScore,
          question2: "hidden",
          question6: "hidden"
        });
      } else if (question._id == 6) {
        res.render('game', {
          questionNo: question._id,
          question: question.question,
          score: playerScore
        });
      } else if (question._id == 4) {
        gameController.getTotalPlayerNo((count) => {
          res.render('question4', {
            questionNo: question._id,
            X: count,
            score: playerScore
          });
        });
      } else {
        res.render('game', {
          questionNo: question._id,
          question: question.question,
          score: playerScore,
          question6: "hidden"
        });
      }
    });
  });
});

router.post('/', (req, res) => {
  let answer = req.body.submit;
  console.log('answer viewRouter', answer);
  gameController.processAnswer(req.ip, answer, (flag) => {
    if (flag == true) {
      gameController.getPlayerScoreByIp(req.ip, (playerScore) => {
        gameController.getCurrentQuestionNoByIp(req.ip, (currentQuestionNo) => {
          gameController.setPlayerWinByIp(req.ip, currentQuestionNo - 1, (playerWonOnQuestionNo) => {
            res.render('won', {
              state: 'thắng',
              score: playerScore,
              questionNo: playerWonOnQuestionNo,
              layout: 'sub'
            });
          })
        });
      });
    } else res.redirect('/game');
  })
});

module.exports = router;
