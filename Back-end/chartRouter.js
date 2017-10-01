const router = require('express').Router();
const gameController = require('./controller');
const viewRouter = require("./viewRouter.js");
const questionModel = require('./questionSchema');
const playerSchema = require('./playerSchema');

router.get('/:id', (req, res) => {
  var dataArrContainer = [];
  console.log('get chart data');
  console.log(req.params.id);
  switch (req.params.id) {
    case '1':
      {
        console.log("chart for question 1 of player ", req.ip);
        gameController.getChartData(req.params.id, req.ip, (question, player) => {
          gameController.getTotalAnswerCountByQuestionId(req.params.id, (count) => {
            // console.log('question chart', question);
            // console.log('player chart', player);
            console.log('count chart', count);
            if (player != null) {
              if (player[req.params.id] != null) {
                var dataArr = [
                  ['Câu trả lời', 'Số', {
                    role: 'style'
                  }, 'Giới hạn (17%)'],
                  ['1', question[1], player[1] == 1 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['2', question[2], player[1] == 2 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['3', question[3], player[1] == 3 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['4', question[4], player[1] == 4 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['5', question[5], player[1] == 5 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['6', question[6], player[1] == 6 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['7', question[7], player[1] == 7 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['8', question[8], player[1] == 8 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['9', question[9], player[1] == 9 ? 'red' : 'blue', ~~(count / 100 * 17)],
                  ['10', question[10], player[1] == 10 ? 'red' : 'blue', ~~(count / 100 * 17)]
                ];
                console.log(dataArr);
                res.json(dataArr);
              } else res.json(null);
            }
          });
        });
      }
      break;
    case '2':
      {
        console.log("chart for question 2 of player ", req.ip);
        gameController.getChartData(req.params.id, req.ip, (question, player) => {
          gameController.getTotalAnswerCountByQuestionId(req.params.id, (count) => {
            // console.log('question chart', question);
            // console.log('player chart', player);
            // console.log('count chart', count);
            if (player != null) {
              if (player[req.params.id] != null) {
                var dataArr = [
                  ['Câu trả lời', 'Số', {
                    role: 'style'
                  }, 'Giới hạn (20%)'],
                  ['4', question[4], player[2] == 4 ? 'red' : 'blue', ~~(count / 100 * 20)],
                  ['10', question[10], player[2] == 10 ? 'red' : 'blue', ~~(count / 100 * 20)]
                ];
                console.log(dataArr);
                res.json(dataArr);
              } else res.json(null);
            } else res.json(null);
          });
        });
      }
      break;
    case '3':
      {
        console.log("chart for question 3 of player ", req.ip);
        gameController.getChartData(req.params.id, req.ip, (question, player) => {
          gameController.getTotalAnswerCountByQuestionId(req.params.id, (count) => {
            // console.log('question chart', question);
            // console.log('player chart', player);
            // console.log('count chart', count);
            if (player != null) {
              if (player[req.params.id] != null) {
                var dataArr = [
                  ['Câu trả lời', 'Số', {
                    role: 'style'
                  }, 'Giới hạn (13%)'],
                  ['1', question[1], player[3] == 1 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['2', question[2], player[3] == 2 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['3', question[3], player[3] == 3 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['4', question[4], player[3] == 4 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['5', question[5], player[3] == 5 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['6', question[6], player[3] == 6 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['7', question[7], player[3] == 7 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['8', question[8], player[3] == 8 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['9', question[9], player[3] == 9 ? 'red' : 'blue', ~~(count / 100 * 13)],
                  ['10', question[10], player[3] == 10 ? 'red' : 'blue', ~~(count / 100 * 13)]
                ];
                console.log(dataArr);
                res.json(dataArr);
              } else res.json(null);
            }
          });
        });
      }
      break;
    case '4':
      {
        console.log("chart for question 4 of player ", req.ip);
        gameController.getChartData(req.params.id, req.ip, (question, player) => {
          gameController.getTotalAnswerCountByQuestionId(req.params.id, (count) => {
            // console.log('question chart', question);
            // console.log('player chart', player);
            // console.log('count chart', count);
            if (player != null) {
              if (player[req.params.id] != null) {
                var dataArr = [
                  ['Câu trả lời', 'Số', {
                    role: 'style'
                  }, 'Số người thắng'],
                ];
                gameController.getAllPlayerAnswerQuestion4((answerList) => {
                  gameController.getTotalPlayerWinNo((playerWinNo) => {
                    console.log("answerList ", answerList);
                    var trueAnswerList = [];
                    for (answer in answerList) {
                      console.log("answer ", answerList[answer]);
                      trueAnswerList.push(answerList[answer][4]);
                    }
                    console.log("trueAnswerList ", trueAnswerList);
                    var trueAnswerListDisctinct = trueAnswerList.filter(function(elem, index, self) {
                      return index == self.indexOf(elem);
                    });
                    console.log("trueAnswerListDisctinct ", trueAnswerListDisctinct);
                    for (answerDisctinct in trueAnswerListDisctinct) {
                      var count = 0;
                      for (answer in trueAnswerList) {
                        if (trueAnswerListDisctinct[answerDisctinct] == trueAnswerList[answer]) {
                          count++;
                        }
                      }
                      console.log('player[4]', player[4]);
                      console.log('answerDisctinct', answerDisctinct);
                      dataArr.push([trueAnswerListDisctinct[answerDisctinct], count, player[4] == trueAnswerListDisctinct[answerDisctinct] ? 'red' : 'blue', playerWinNo]);
                    }
                    console.log(dataArr);
                    res.json(dataArr);
                  });
                });
              } else res.json(null);
            }
          });
        });
      }
      break;
    case '5':
      {
        console.log("chart for question 5 of player ", req.ip);
        gameController.getChartData(req.params.id, req.ip, (question, player) => {
          gameController.getTotalAnswerCountByQuestionId(req.params.id, (count) => {
            // console.log('question chart', question);
            // console.log('player chart', player);
            // console.log('count chart', count);
            if (player != null) {
              if (player[req.params.id] != null) {
                var dataArr = [
                  ['Câu trả lời', 'Số', {
                    role: 'style'
                  }, 'Giới hạn (10%)'],
                  ['1', question[1], player[5] == 1 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['2', question[2], player[5] == 2 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['3', question[3], player[5] == 3 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['4', question[4], player[5] == 4 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['5', question[5], player[5] == 5 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['6', question[6], player[5] == 6 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['7', question[7], player[5] == 7 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['8', question[8], player[5] == 8 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['9', question[9], player[5] == 9 ? 'red' : 'blue', ~~(count / 100 * 10)],
                  ['10', question[10], player[5] == 10 ? 'red' : 'blue', ~~(count / 100 * 10)]
                ];
                console.log(dataArr);
                res.json(dataArr);
              } else res.json(null);
            }
          });
        });
      }
      break;
    case '6':
      {
        console.log("chart for question 6 of player ", req.ip);
        gameController.getChartData(req.params.id, req.ip, (question, player) => {
          gameController.getTotalAnswerCountByQuestionId(req.params.id, (count) => {
            gameController.getMedianAnswerFromQuestionId(req.params.id, (median) => {
              // console.log('question chart', question);
              // console.log('player chart', player);
              // console.log('count chart', count);
              // console.log('median ', median);
              if (player != null) {
                if (player[req.params.id] != null) {
                  var dataArr = [
                    ['Câu trả lời', 'Số', {
                      role: 'style'
                    }, 'Giới hạn (' + median + ')'],
                    ['1', question[1], player[6] == 1 ? 'red' : 'blue', median],
                    ['2', question[2], player[6] == 2 ? 'red' : 'blue', median],
                    ['3', question[3], player[6] == 3 ? 'red' : 'blue', median],
                    ['4', question[4], player[6] == 4 ? 'red' : 'blue', median],
                    ['5', question[5], player[6] == 5 ? 'red' : 'blue', median],
                    ['6', question[6], player[6] == 6 ? 'red' : 'blue', median],
                    ['7', question[7], player[6] == 7 ? 'red' : 'blue', median],
                    ['8', question[8], player[6] == 8 ? 'red' : 'blue', median],
                    ['9', question[9], player[6] == 9 ? 'red' : 'blue', median],
                    ['10', question[10], player[6] == 10 ? 'red' : 'blue', median],
                    ['11', question[11], player[6] == 11 ? 'red' : 'blue', median],
                    ['12', question[12], player[6] == 12 ? 'red' : 'blue', median],
                    ['13', question[13], player[6] == 13 ? 'red' : 'blue', median],
                    ['14', question[14], player[6] == 14 ? 'red' : 'blue', median],
                    ['15', question[15], player[6] == 15 ? 'red' : 'blue', median]
                  ];
                  console.log(dataArr);
                  res.json(dataArr);
                } else res.json(null);
              }
            });
          });
        });
      }
      break;
  }
});

module.exports = router;
