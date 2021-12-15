const express = require("express");
const app = express();
const cors = require('cors');
const port = 10003;
const rootRouter = express.Router();
const accessRouter = require("./routes/access");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/user', rootRouter);
rootRouter.use('/access', accessRouter);

app.listen(port, () => {
    console.log(`user api server is listening at http://localhost:${port}`);
});