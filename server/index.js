const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
// var bodyParser = require('body-parser')
// app.use(bodyParser.json({ type: 'application/json' }));
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "ice",
});

// var server = app.listen(5001, function () {
//   var host = server.address().address
//   var port = server.address().port

//   console.log("app listening at http://%s:%s", host, port)
// });

// con.connect(function(error){
//   if(!!error)console.log('error');
//   else console.log('Connected');
// })

app.get('/',(req,res)=>{
    res.send("hello");
})
app.post("/createAppointment", (req, res) => {
    const name = req.body.name;
    const car_number= req.body.car_number;
    const date = req.body.date;
    const time = req.body.time;
    const email=req.body.email;
    const phone_number = req.body.phone_number;
    
    db.query(
      "INSERT INTO appointment_set (name,car_number,date,time,email,phone_number) VALUES (?,?,?,?,?,?)",
      [name,car_number,date,time,email,phone_number],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values inserted");
        }
      }
    );
  });

  // getting time slots
app.get("/getTimeSlots", (req, res) => {
  db.query("Select * from time_appointment", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

  app.listen(5001, () => {
    console.log("Server is running on port 5001");
  });
  