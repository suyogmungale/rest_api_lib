import app from './src/app';
import connectDB from './src/config/db';

const startServer = async() => {

    await connectDB();
    const port = process.env.port || 3000

    app.listen(port, () => {
        console.log("listening on port 3000")
    })
}

startServer();