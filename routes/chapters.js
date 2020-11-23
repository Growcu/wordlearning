const { json } = require("express");
const mongo = require("mongodb");

const mainPage = function(app) {
  app.post('/chapters', (req, res) => {
    
    const whichChapter = req.body.title;

    let polishWords = [];
    let englishWords = [];

    const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

    client.connect(err => {
      if (err) {
        console.log('Bład połączenia')
      } else {
        console.log("Połacznie udane")
        const db = client.db('WordLearning');
        const Words = db.collection('Words');
        Words.find({chapter: whichChapter}).toArray((err, words) => {
          if(err) throw err;
          words.forEach(item => {
            polishWords.push(item.polishWord)
            englishWords.push(item.englishWord)
          });
          res.json({polishWords, englishWords})

          client.close();
        })
        
      }
    })
  })
}
module.exports = mainPage;