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
                  ['Câu trả lời', 'Số', 'Giới hạn (17%)'],
                  ['1', question[1], ~~(count / 100 * 17)],
                  ['2', question[2], ~~(count / 100 * 17)],
                  ['3', question[3], ~~(count / 100 * 17)],
                  ['4', question[4], ~~(count / 100 * 17)],
                  ['5', question[5], ~~(count / 100 * 17)],
                  ['6', question[6], ~~(count / 100 * 17)],
                  ['7', question[7], ~~(count / 100 * 17)],
                  ['8', question[8], ~~(count / 100 * 17)],
                  ['9', question[9], ~~(count / 100 * 17)],
                  ['10', question[10], ~~(count / 100 * 17)]
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
                  ['Câu trả lời', 'Số', 'Giới hạn (20%)'],
                  ['4', question[4],  ~~(count / 100 * 20)],
                  ['10', question[10],  ~~(count / 100 * 20)]
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
                  ['Câu trả lời', 'Số', 'Giới hạn (13%)'],
                  ['1', question[1],  ~~(count / 100 * 13)],
                  ['2', question[2],  ~~(count / 100 * 13)],
                  ['3', question[3],  ~~(count / 100 * 13)],
                  ['4', question[4],  ~~(count / 100 * 13)],
                  ['5', question[5],  ~~(count / 100 * 13)],
                  ['6', question[6],  ~~(count / 100 * 13)],
                  ['7', question[7],  ~~(count / 100 * 13)],
                  ['8', question[8],  ~~(count / 100 * 13)],
                  ['9', question[9],  ~~(count / 100 * 13)],
                  ['10', question[10],  ~~(count / 100 * 13)]
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
        res.json(null);
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
                  ['Câu trả lời', 'Số', 'Giới hạn (10%)'],
                  ['1', question[1],  ~~(count / 100 * 10)],
                  ['2', question[2],  ~~(count / 100 * 10)],
                  ['3', question[3],  ~~(count / 100 * 10)],
                  ['4', question[4],  ~~(count / 100 * 10)],
                  ['5', question[5],  ~~(count / 100 * 10)],
                  ['6', question[6],  ~~(count / 100 * 10)],
                  ['7', question[7],  ~~(count / 100 * 10)],
                  ['8', question[8],  ~~(count / 100 * 10)],
                  ['9', question[9],  ~~(count / 100 * 10)],
                  ['10', question[10],  ~~(count / 100 * 10)]
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
                    ['Câu trả lời', 'Số', 'Giới hạn (' + median + ')'],
                    ['1', question[1], median],
                    ['2', question[2], median],
                    ['3', question[3], median],
                    ['4', question[4], median],
                    ['5', question[5], median],
                    ['6', question[6], median],
                    ['7', question[7], median],
                    ['8', question[8], median],
                    ['9', question[9], median],
                    ['10', question[10], median],
                    ['11', question[11], median],
                    ['12', question[12], median],
                    ['13', question[13], median],
                    ['14', question[14], median],
                    ['15', question[15], median]
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
