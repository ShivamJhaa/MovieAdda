let express = require('express'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  mongoDb = require('./database/db');

// // const MoviesRoute = express.Router();

// mongoose.Promise = global.Promise;
// mongoose.connect(mongoDb.db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//     console.log('Database sucessfully connected ')
//   },
//   error => {
//     console.log('Database error: ' + error)
//   }
// )
 
// const bookRoute = require('./routes/routes')
 
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(cors());
// app.use('routes',require('./routes/routes'))
 
// // Static directory path
// app.use(express.static(path.join(__dirname, 'MovieAdda')));
 
// app.use(express.json())
// // API root
// app.use('/api', MoviesRoute)
 
// // PORT
// const port = process.env.PORT || 8000;
 
// app.listen(port, () => {
//   console.log('Listening on port ' + port)
// })
 
// // 404 Handler
// app.use((req, res, next) => {
//   console.log("Error")
// });
 
// // Base Route
// app.get('/', (req, res) => {
//   res.send('invaild endpoint');
// });
 
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
// });
 
// // error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });
const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)

app.use("/api/movies", require("./routes/routes"));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});