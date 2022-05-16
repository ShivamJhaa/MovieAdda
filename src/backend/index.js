let express = require('express'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  mongoDb = require('./database/db');

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