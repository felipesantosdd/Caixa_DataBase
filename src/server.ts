import AppDataSource from "./data-source";
import app from "./app";

AppDataSource.initialize().then(() => {
    console.log('Database initialized and connected!')
    app.listen(PORT, () => {
        console.log(`server  running in port ${PORT}`)
    })
}).catch(err => {
    console.log(err)
})

const PORT = 3000

