import app from './src/app';

const startServer = () => {
    const port = process.env.port || 3000

    app.listen(port, () => {
        console.log("listening on port 3000")
    })
}

startServer();