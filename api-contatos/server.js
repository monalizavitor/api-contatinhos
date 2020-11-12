const app = require('./src/app')
const PORT = 5555

app.listen(PORT, () => console.log('Server is running in port ' + PORT)).on('connection', () => {
    console.log("Passou pelo server.js.")
})