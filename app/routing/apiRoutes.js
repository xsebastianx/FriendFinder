console.log('API Route Connected Successfully');

const friendsData = require('../data/friends.js');

function apiRoutes(app) {
    app.get('../data/friends.js', function (req, res){
        res.json(friendsData);
    });

    app.post('../data/friends.js', function (req, res) {

        const newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            socores: []
        };
        const scoresArray = [];
        for(var i=0; i < req.body.scores.length; i++){
            scoresArray.push( parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;

        const scoreComparisonArray = [];
        for(var i=0; i < friendsData.length; i++){

            const currentComparison = 0;
            for(var j=0; j < newFriend.scores.length; j++){
                currentComparison += Math.abs( newFriend.scores[j] - friendsData[i],scores[j] );
            }

            scoreComparisonArray.push(currentComparison);
        }
            const bestMatchPosition = 0;
            for (var i=1; i < scoreComparisonArray.length; i++){
                if(scoreComparisonArray[i] <= scoreComparisonArray[bestMatchPosition]){
                    bestMatchPosition = i;
                }
            }

            const bestFriendMatch = friendsData[bestMatchPosition];

            res.json(bestFriendMatch);

            friendsData.push(newFriend);
        
    });
}

module.exports = apiRoutes;