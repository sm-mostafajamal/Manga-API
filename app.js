const ApiKey = require("./middleware/apiKeyMiddleware")
const app = require("express")()
const bodyParser = require("body-parser")
const mangaRouter = require("./routes/mangaRouter")
const mangaListRouter = require("./routes/mangaListRouter")
const mangaSearch = require("./routes/mangaSearch")
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json())
require('dotenv').config()

app.use(ApiKey)
app.use("/api/manga", mangaRouter)
app.use("/api/mangaList", mangaListRouter)
app.use("/api/search", mangaSearch)

app.listen(process.env.PORT || 3005, ()=>{
    console.log(`Server Start On Port ${process.env.PORT} 🎉✨ `)
})