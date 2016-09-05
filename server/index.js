const { card } = require('mtgsdk');
const app = require('express')();
const env = process.env.NODE_ENV;
const { readFile } = require('fs');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  next();
});

app.get('/cards', ({ query }, res) => {
  switch (true) {
    case env === 'mocks':
      readFile(__dirname + '/mocks/cards.json', 'utf-8', (err, result) => {
        res.end(result);
      });
      break;
    default:
      card.where(query)
        .then(cards => {
          res.end(JSON.stringify(cards))
        });
      break;
  }
});

module.exports = () => app.listen(8080, () => console.log('API listening on 8080'));
