const express = require('express')
const app = express()
const port = 5000

app.get('/index', (req, res) => {
    res.json({
        user: "zhuqueqiao",
        passwd: "zqq12345"
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))