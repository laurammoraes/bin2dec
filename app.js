const express = require('express')
const app = express()
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('dotenv').config();
const port = process.env.PORT;
const control = require('./src/controller/exercise')

app.post('/', (req, res) => {
  
    const number = req.body.number;
    const response = control.convertNumber(number);
    console.log(response)
    return res.status(response.status).send(response.response);

})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})