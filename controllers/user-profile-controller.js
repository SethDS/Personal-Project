/**
 * Created by Seth on 2/23/2017.
 */
var app = require('../index');
var db = app.get('db');

module.exports = {

    addAdventure: function(req, res, next){
        db.profile.add_adventure([
            req.user.id,
            req.body.title,
            req.body.description,
            req.body.directions,
            req.body.packlist
        ], function(err, results){
            if(err){
                console.error(err);
                return res.status(400).send('Sorry, your request could not be completed.')
            }
            return res.status(200).send(results)
        })
    },
    addAdventurePics: function(req, res, next){
        db.profile.add_adventure_pics([
            req.body.picVals,
            req.body.adventure,
            req.body.adventureId
        ], function(err, results){
            if(err){
                console.error(err);
                return res.status(400).send('Sorry, your request could not be completed.')
            }
            return res.status(200).send(results)
        })
    },
    addArticle: function(req, res, next){
        db.profile.add_article([
            req.user.id,
            req.body.title,
            req.body.body
        ], function(err, results){
            if(err){
                console.error(err);
                res.status(400).send('Sorry, your request could not be completed')
            }
            return res.status(200).send(results)
        })
    },
    addJournalPics: function(req, res, next){
        db.profile.add_journal_pics([
            req.body.article,
            req.body.articleId,
            req.body.picVals
        ], function(err, results){
            if(err){
                console.error(err);
                    res.status(400).send('Sorry, your request could not be completed.')
                }
                return res.status(200).send(results)
            }
        )
    },
    addJob: function(req, res, next){
        db.profile.add_job([
            req.user.id,
            req.body.title,
            req.body.description,
            req.body.requirements
        ], function(err, results){
            if(err){
                console.error(err);
                res.status(400).send('Sorry, your request could not be completed')
            }
            return res.status(200).send(results)
        })
    },
    addKit: function(req, res, next){
        db.profile.add_kit([
            req.user.id,
            req.body.title,
            req.body.description,
            req.body.products
        ], function(err, results){
            if(err){
                console.error(err);
                return res.status(400).send('Sorry, your request could not be completed')
            }
            return res.status(200).send(results)
        })
    },

    addAdvLoc: function(req, res, next){
        // console.log(Object.keys(req.body)[0]);
        // var latlng = Object.keys(req.body)[0].slice(1, -1).split(',');
        // console.log(latlng[0]);
        // console.log(latlng[1]);
      db.profile.add_adv_loc([
          req.body.advId,
          req.body.latitude,
          req.body.longitude
          ],
      function(err, results){
          if(err){
              console.error(err);
              return res.status(400).send('Sorry, your request could not be completed')
          }
          return res.status(200).send(results)
      })
    },

    addAdvIdToLoc: function(req, res, next){
        db.profile.add_adv_id_to_loc([
            req.body.advId
        ], function(err, results){
            if(err){
                console.error(err);
                res.status(400).send('Sorry, your request could not be completed')
            }
            res.status(200).send(results)
        })
    }
};