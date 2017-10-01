const fs = require('fs');
const questionModel = require('./questionSchema');
const playerModel = require('./playerSchema');

const getNextQuestion = (playerIp, callback) => {
  checkExistingPlayerByIp(playerIp, () => {
    playerModel.findOne({
      _ip: playerIp
    }, (err, player) => {
      if (err) {
        console.log(err);
      } else {
        getCurrentQuestionNoByIp(playerIp, (currentQuestionNo) => {
          getQuestionById(currentQuestionNo, (question) => {
            callback(question);
          });
        });
      }
    });
  });
};

const getPlayerScoreByIp = (playerIp, callback) => {
  playerModel.findOne({
    _ip: playerIp
  }, (err, player) => {
    if (err) {
      console.log(err);
    } else {
      callback(player.score);
    }
  });
}

const getCurrentQuestionNoByIp = (playerIp, callback) => {
  playerModel.findOne({
    _ip: playerIp
  }, (err, player) => {
    if (err) {
      console.log(err);
    } else {
      console.log("player.currentQuestionNo ", player.currentQuestionNo);
      callback(player.currentQuestionNo);
    }
  });
}

const getQuestionById = (id, callback) => {
  if (id == 7) callback(7);
  else if (id == 8) callback(8);
  else questionModel.findOne({
    _id: id
  }, (err, question) => {
    if (err) {
      console.log(err);
    } else {
      console.log("question ", question);
      callback(question);
    }
  });
}

const getPlayerByIp = (playerIp, callback) => {
  playerModel.findOne({
    _ip: playerIp
  }, (err, player) => {
    if (err) console.log(err)
    else callback(player);
  });
}

const checkExistingPlayerByIp = (playerIp, callback) => {
  playerModel.findOne({
    _ip: playerIp
  }, (err, player) => {
    if (err) console.log(err)
    else if (player == null) {
      playerModel.create({
        _ip: playerIp
      }, () => {
        callback();
      });
    } else {
      callback();
    }
  });
}

const updateCurrentQuestionNoByIp = (playerIp, callback) => {
  playerModel.findOne({
    _ip: playerIp
  }, (err, player) => {
    if (err) {
      console.log(err);
    } else {
      player.currentQuestionNo = player.currentQuestionNo + 1;
      player.save();
      callback(player);
    }
  });
};

const updatePlayerScoreByIp = (playerIp, score, callback) => {
  playerModel.findOne({
    _ip: playerIp
  }, (err, player) => {
    if (err) {
      console.log(err);
    } else {
      player.score = player.score + parseInt(score);
      player.save();
      callback();
    }
  });
}

const updatePlayerAnswerByIp = (playerIp, questionId, answer, callback) => {
  playerModel.findOne({
    _ip: playerIp
  }, (err, player) => {
    if (err) {
      console.log(err);
    } else {
      player[questionId] = answer;
      player.save();
      callback();
    }
  });
}

const getTotalPlayerNo = (callback) => {
  playerModel.count({}, (err, count) => {
    if (err) console.log(err);
    else {
      callback(count);
    }
  });
}

const getTotalAnswerCountByQuestionId = (id, callback) => {
  questionModel.findOne({
    _id: id
  }, (err, question) => {
    if (err) console.log(err);
    else {
      var total = 0;
      for (i = 1; i <= 15; i++) {
        total += question[i];
      }
      callback(total);
    }
  });
}

const getAnswerCountByQuestionId = (id, answer, callback) => {
  questionModel.findOne({
    _id: id
  }, (err, question) => {
    if (err) console.log(err)
    else callback(question[answer]);
  });
}

const processAnswer = (playerIp, answer, callback) => {
  console.log('answer: ', answer);
  getCurrentQuestionNoByIp(playerIp, (currentQuestionNo) => {
    switch (currentQuestionNo) {
      case 1:
        {
          processAnswerForQuestion1(answer, (flag) => {
            if (flag == true) {
              updatePlayerScoreByIp(playerIp, answer, () => {
                updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                  updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                    updateCurrentQuestionNoByIp(playerIp, (player) => {
                      if (player.score >= 30) callback(true);
                      else callback(false);
                    });
                  });
                });
              });
            } else {
              updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                  updateCurrentQuestionNoByIp(playerIp, (player) => {
                    if (player.score >= 30) callback(true);
                    else callback(false);
                  });
                });
              });
            }
          });
        }
        break;
      case 2:
        {
          if (answer == 4) {
            updatePlayerScoreByIp(playerIp, answer, () => {
              updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                  updateCurrentQuestionNoByIp(playerIp, (player) => {
                    if (player.score >= 30) callback(true);
                    else callback(false);
                  });
                });
              })
            });
          } else if (answer == 10) {
            processAnswerForQuestion2(answer, (flag) => {
              if (flag == true) {
                updatePlayerScoreByIp(playerIp, answer, () => {
                  updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                    updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                      updateCurrentQuestionNoByIp(playerIp, (player) => {
                        if (player.score >= 30) callback(true);
                        else callback(false);
                      });
                    });
                  });
                });
              } else {
                updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                  updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                    updateCurrentQuestionNoByIp(playerIp, (player) => {
                      if (player.score >= 30) callback(true);
                      else callback(false);
                    });
                  });
                });
              }
            })
          }
        }
        break;
      case 3:
        {
          processAnswerForQuestion3(answer, (flag) => {
            if (flag == true) {
              updatePlayerScoreByIp(playerIp, answer, () => {
                updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                  updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                    updateCurrentQuestionNoByIp(playerIp, (player) => {
                      if (player.score >= 30) callback(true);
                      else callback(false);
                    });
                  });
                });
              });
            } else {
              updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                  updateCurrentQuestionNoByIp(playerIp, (player) => {
                    if (player.score >= 30) callback(true);
                    else callback(false);
                  });
                });
              });
            }
          });
        }
        break;
      case 4:
        {
          console.log('answer question no 4 ', answer);
          processAnswerForQuestion4(answer, (score) => {
            updatePlayerScoreByIp(playerIp, score, () => {
              updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                  updateCurrentQuestionNoByIp(playerIp, (player) => {
                    if (player.score >= 30) callback(true);
                    else callback(false);
                  });
                });
              });
            });
          });
        }
        break;
      case 5:
        {
          processAnswerForQuestion5(answer, (flag) => {
            if (flag == true) {
              updatePlayerScoreByIp(playerIp, answer, () => {
                updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                  updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                    updateCurrentQuestionNoByIp(playerIp, (player) => {
                      if (player.score >= 30) callback(true);
                      else callback(false);
                    });
                  });
                });
              });
            } else {
              updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                  updateCurrentQuestionNoByIp(playerIp, (player) => {
                    if (player.score >= 30) callback(true);
                    else callback(false);
                  });
                });
              });
            }
          });
        }
        break;
      case 6:
        {
          processAnswerForQuestion6(answer, (flag) => {
            if (flag == true) {
              updatePlayerScoreByIp(playerIp, answer, () => {
                updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                  updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                    updateCurrentQuestionNoByIp(playerIp, (player) => {
                      if (player.score >= 30) callback(true);
                      else callback(false);
                    });
                  });
                });
              });
            } else {
              updateAnswerNoByQuestionId(currentQuestionNo, answer, () => {
                updatePlayerAnswerByIp(playerIp, currentQuestionNo, answer, () => {
                  updateCurrentQuestionNoByIp(playerIp, (player) => {
                    if (player.score >= 30) return callback(true);
                    else callback(false);
                  });
                });
              });
            }
          });
        }
        break;
    }
  });
};

const processAnswerForQuestion1 = (answer, callback) => {
  getTotalAnswerCountByQuestionId(1, (total) => {
    getAnswerCountByQuestionId(1, answer, (answerCount) => {
      if ((answerCount / total) * 100 < 17 || total == 0) {
        callback(true);
      } else {
        callback(false);
      }
    });
  });
}

const processAnswerForQuestion2 = (answer, callback) => {
  getTotalAnswerCountByQuestionId(2, (total) => {
    getAnswerCountByQuestionId(2, answer, (answerCount) => {
      if ((answerCount / total) * 100 < 20 || total == 0) {
        callback(true);
      } else {
        callback(false);
      }
    });
  });
}

const processAnswerForQuestion3 = (answer, callback) => {
  getTotalAnswerCountByQuestionId(3, (total) => {
    getAnswerCountByQuestionId(3, answer, (answerCount) => {
      if ((answerCount / total) * 100 < 13 || total == 0) {
        callback(true);
      } else {
        callback(false);
      }
    });
  });
}

const processAnswerForQuestion4 = (answer, callback) => {
  getTotalPlayerNo((totalPlayer) => {
    getTotalPlayerWinNo((totalPlayerWin) => {
      var score = (1 - Math.abs(answer - totalPlayerWin) / totalPlayer) * 10;
      callback(score);
    });
  });
}

const processAnswerForQuestion5 = (answer, callback) => {
  getTotalAnswerCountByQuestionId(5, (total) => {
    getAnswerCountByQuestionId(5, answer, (answerCount) => {
      if ((answerCount / total) * 100 < 10 || total == 0) {
        callback(true);
      } else {
        callback(false);
      }
    });
  });
}

const processAnswerForQuestion6 = (answer, callback) => {
  getMedianAnswerFromQuestionId(6, (median) => {
    console.log("median ", median);
    if (answer < median || median == 0) callback(true);
    else callback(false);
  })
}

const updateAnswerNoByQuestionId = (id, answer, callback) => {
  questionModel.findOne({
    _id: id
  }, (err, question) => {
    if (err) {
      console.log(err);
    } else {
      question[answer] += 1;
      question.save();
      callback();
    }
  });
}

const getTotalPlayerWinNo = (callback) => {
  playerModel.find({}, (err, playerList) => {
    if (err) console.log(err);
    else {
      var count = 0;
      for (player in playerList) {
        if (playerList[player].score >= 30) count++;
      }
      callback(count);
    }
  })
}

const getMedianAnswerFromQuestionId = (id, callback) => {
  questionModel.findOne({
    _id: id
  }, (err, question) => {
    if (err) {
      console.log(err);
    } else {
      var totalVal = 0;
      var count = 0;
      for (i = 1; i <= 15; i++) {
        totalVal += parseInt(question[i]) * i;
        count += parseInt(question[i]);
      }
      console.log("total val ", totalVal);
      console.log("count ", count);
      var median = totalVal / count;
      if (count == 0) median = 0;
      callback(median);
    }
  });
}

const setPlayerWinByIp = (playerIp, questionNo, callback) => {
  playerModel.findOne({
    _ip: playerIp
  }, (err, player) => {
    if (err) console.log(err);
    else {
      player.won = questionNo;
      player.currentQuestionNo = 8;
      player.save();
      callback(player.won);
    }
  });
}

const getChartData = (id, ip, callback) => {
  questionModel.findOne({
    _id: id
  }, (err, question) => {
    playerModel.findOne({
      _ip: ip
    }, (err, player) => {
      callback(question, player);
    });
  });
}

const getAllPlayerAnswerQuestion4 = (callback) => {
  playerModel.find({}, '4', (err, answerList) => {
    if (err) console.log(err);
    else {
      callback(answerList);
    }
  });
}

module.exports = {
  getNextQuestion,
  processAnswer,
  getPlayerScoreByIp,
  getCurrentQuestionNoByIp,
  getTotalPlayerNo,
  getPlayerByIp,
  setPlayerWinByIp,
  getChartData,
  getTotalAnswerCountByQuestionId,
  getMedianAnswerFromQuestionId,
  getAllPlayerAnswerQuestion4,
  getTotalPlayerWinNo
};
