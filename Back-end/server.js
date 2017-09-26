const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const viewRouter = require("./viewRouter.js");
const questionModel = require('./questionSchema');
const controller = require('./controller.js')

let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use('/game', viewRouter);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/rule.html');
  controller.resetPlayerScore();
});

mongoose.connect("mongodb://localhost:quizd", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});

//Code de generate database, comment di khi da co cac questions trong db
// var arr = [
//   "Chọn một số từ 1 đến 10, và nhận số điểm tương ứng - nhưng chỉ khi có ít hơn 17% số người chơi cũng chọn số đó.",
//   "Chọn 4 để nhận 4 điểm chắc chắn, hoặc chọn 10 và nhận được 10 chỉ khi ít hơn 20% số người chơi cũng chọn 10.",
//   "Chọn một số từ 1 đến 10, và nhận số điểm tương ứng - nhưng chỉ khi có ít hơn 13% số người chơi cũng chọn số đó.",
//   "Có tổng cộng X người đã từng chơi game này, theo bạn bao nhiêu người trong số họ đã chiến thắng? Ghi điểm bằng (1 - (sai số / tổng số người chơi)) * 10",
//   "Chọn một số từ 1 đến 10, và nhận số điểm tương ứng - nhưng chỉ khi có ít hơn 10% số người chơi cũng chọn số đó.",
//   "Chọn một số từ 1 đến 15, và ghi điểm nếu số đó nhỏ hơn trung bình cộng của tất cả những số người chơi đã chọn."
// ];
//
// for (i = 1; i <= 6; i++) {
//   questionModel.create({_id: i, question: arr[i-1]});
// }

app.use(express.static(__dirname + '/public'));

app.listen(6969, () => {
  console.log('Server is up!');
});
