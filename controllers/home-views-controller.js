 var app = require('../index');
 var db = app.get('db');

 module.exports = {


     getAdventures: function(req, res, next){
         db.home_views.get_adventures([], function(err, results){
             if(err){
                 console.error(err);
                 return res.status(400).send('Sorry, your request could not be completed.')
             }
             return res.status(200).send(results)
         })
     },

     getJournal: function(req, res, next){
         db.home_views.get_journal([], function(err, results){
             if(err){
                 console.error(err);
                 return res.status(400).send('Sorry, your request could not be completed.')
             }
             return res.status(200).send(results)
         })
     },

     getAdventurePics: function(req, res, next){
         db.home_views.get_adventure_pics([], function(err, results){
             if(err){
                 console.error(err);
                 res.status(400).send('Sorry, your request could not be completed');
             }
             res.status(200).send(results);
         })
     },

     getLocations: function(req, res, next){
         db.home_views.get_locations([],
         function(err, results){
             if(err){
                 console.error(err);
                 res.status(400).send('Sorry')
             }
             res.status(200).send(results)
         })
     }
 };
