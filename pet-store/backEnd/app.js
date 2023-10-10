const express = require('express')
const cors = require('cors')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')
=======


const app = express()
const port = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', usersRouter)
app.use('/api', productsRouter)




app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})