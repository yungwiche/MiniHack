const fs = require('fs');
const questionModel = require('./questionSchema');
let currentQuestionNo;
let playerScore = 0;
let playerQuestion = [];

const getRandomQuestion = (callback) => {
    //console.log('callback ',callback);
    questionModel.count({}, (err, number) => {
        //console.log("Number of questions: ", number);
        // callback(number);
        random = Math.floor(Math.random() * number);
        questionModel.findOne().skip(random).exec(
            (err, result) => {
                //console.log(callback);
                //callback(result);
                if (err) {
                    console.log('err ', err);
                    //callback(err);
                } else {
                    // console.log('result ', result);
                    currentQuestionNo = result._id;
                    console.log("currentQuestionNo ", currentQuestionNo);
                    callback(result);
                }
            }
        );
    });
};
const processAnswer = (answer) =>{
    console.log('answer:', answer);
    playerScore = parseInt(playerScore) + parseInt(answer);
    if (playerScore >= 30){
        return true;
    }else return false;
};

const getPlayerScore = () =>{
    return playerScore;
}

const resetPlayerScore = () =>{
    playerScore = 0;
}

const getCurrentQuestionNo = () => {
    return currentQuestionNo;
}

module.exports = {
    getRandomQuestion,
    processAnswer,
    getPlayerScore,
    getCurrentQuestionNo,
    resetPlayerScore,
};
