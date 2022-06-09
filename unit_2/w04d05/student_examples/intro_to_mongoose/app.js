const mongoose = require('mongoose')
const Tweet = require('./tweet.js')

const mongoURI = 'mongodb://localhost:27017/tweets'
const db = mongoose.connection

// =================================== QUERIES =============================================
// find all tweets
Tweet.find((error, tweets) => {
    console.log(tweets)
    db.close()
})

// limit the fields returned, the second argument allows us to pass a string with the fields we are interested in
Tweet.find({}, 'title body', (error, tweets) => {
    console.log(tweets)
    db.close()
})

// Let's look for a specific tweet:
Tweet.find({title:'Water'}, (error, tweets)=>{
    console.log(tweets);
    db.close();
    })

// We can also use advanced query options. Let's find the tweets that have 20 or more likes
                //    GTE = >=
Tweet.find({ likes: { $gte:20 }}, (error, tweets)=>{
    console.log(tweets);
    db.close();
});

// ============================================================================================
// ==================================== DELETE ================================================
// remove() danger! Will remove all instances
// findOneAndRemove() - this seems like a great choice
// .findByIdAndRemove()- finds by ID - great for delete routes in an express app!


// Tweet.findOneAndRemove({title:'First Tweet'}, (error, tweet)=>{
//     if (error){
//         console.log(error);
//     } else {
//         console.log(`This is the deleted tweet: ${tweet}`);
//     }
//     db.close()
// })

// ============================================================================================
// ==================================== UPDATE ================================================
// update() - the most generic one
// findOneAndUpdate()- Let's us find one and update it
// findByIdAndUpdate() - Let's us find by ID and update - great for update/put routes in an express app!
// If we want to have our updated document returned to us in the callback, we have to set an option of {new: true} as the third argument
                       {query}      ,       {change}  ,{returns update in callback}
Tweet.findOneAndUpdate({title: 'Vespa'}, {sponsored: true}, {new: true}, (error, tweet) => {
    if (error){
        console.log(error);
    } else {
        console.log(tweet);
    }
    db.close()
})
// ============================================================================================

// Tweet.countDocuments({likes:{$gte:20}}, (error, tweetCount)=>{
//     console.log(`the number of tweets with more than 19 likes is', ${tweetCount}`)
//     db.close();
// });

// db.burger.updateOne(
//     { "cheese": true },
//     {
//     $set: {"double cheese": false},
//     }
// )




const myFIrstTweet = {
    title: 'First tweet',
    body: 'This is my first tweet',
    author: 'Lanny'
}
Tweet.create(myFIrstTweet, (error, tweet) => {
    if (error) {
        console.log(error)
    } else {
        console.log(tweet)
    }
    db.close()
})



// const manyTweets = [
//     {
//     title: 'First Tweet',
//     body: 'This is my first tweet!',
//     author: 'Brendan'
//     },
//     {
//       title: 'Advice',
//       body: 'Code Everyday!',
//       author: 'Brendan',
//       likes: 20
//     },
//     {
//       title: 'WholeFoods',
//       body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
//       author: 'Brendan',
//       likes: 40
//     },
//     {
//       title: 'Organic',
//       body: 'I have spent $2300 to be one of the first people to own an organic smartphone',
//       author: 'Brendan',
//       likes: 162
//     },
//     {
//       title: 'Confusion',
//       body: 'Why do you just respond with the word `dislike`? Surely you mean to click the like button?',
//       author: 'Brendan',
//       likes: -100
//     },
//     {
//       title: 'Vespa',
//       body: 'My Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
//       author: 'Brendan',
//       likes: 2
//     },
//     {
//       title: 'Licensed',
//       body: 'I am now officially licensed to teach yoga. Like this to get 10% off a private lesson',
//       author: 'Brendan',
//       likes: 3
//     },
//     {
//       title: 'Water',
//       body: 'I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
//       author: 'Brendan',
//     },
// ];
// Tweet.insertMany(manyTweets, (error, tweets) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(tweets)
//     }
//     db.close()
// })

// Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect(mongoURI, () => {
    console.log("Connection Established")
}) 