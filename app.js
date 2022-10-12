const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const userRoutes = require('./router/userRoutes');
const songRoutes = require('./router/songRoutes');
const playListRoutes = require('./router/playListRoutes');
const songPlayListRoutes = require('./router/songPlayListRoutes');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.use('/user', userRoutes);
app.use('/song', songRoutes);
app.use('/playList', playListRoutes);
//app.use('/songPlayList', songPlayListRoutes);


mongoose.connect('mongodb://localhost:27017/spotify', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connected');
})

app.listen(8000, () => {
    console.log('Listening on port 3000');
}
)