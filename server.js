require('dotenv').config();
const express = require('express');
const ShortUrl = require('./models/shortUrl');
const app = express();
const cors = require('cors');

const connectDB = require('./db/connect');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
	const shortUrls = await ShortUrl.find();
	res.json({ shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
	const shortUrl = await ShortUrl.create({ full: req.body.fullUrl });
	res.json(shortUrl);
});

app.get('/:shortUrl', async (req, res) => {
	const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
	if (shortUrl == null) return res.sendStatus(404);

	shortUrl.clicks++;
	shortUrl.save();

	res.redirect(shortUrl.full);
});

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () => {
			console.log(`Server listening on : ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
