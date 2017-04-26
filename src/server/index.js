
import app from './app';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/loja', function(err, res) {
	if (err) {
		console.log('error connecting to MongoDB Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

app.listen(app.get('port'), () => {
  console.log(`app is running on port ${app.get('port')}`);
});
