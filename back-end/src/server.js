const dotenv = require('dotenv');
const app = require('./index');

dotenv.config();

app.listen(process.env.API_PORT, () => {
  console.log('listening on *:', process.env.API_PORT);
});