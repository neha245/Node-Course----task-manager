//const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient // access to the function necessary to connect to db to perform crud
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())


MongoClient.connect(connectionURL, { useNewUrlParser : true, useUnifiedTopology : true }, (error, client) => {
    if(error)
    return console.log('Unable to connect to database')
    
    const db = client.db(databaseName)

    db.collection('tasks').updateMany({
        completed : false},
        { $set : {completed : true}
    }).then(result => {
        console.log(result.modifiedCount)
    }).catch(error => {
        console.log(error)
    })

    // db.collection('users').updateOne({ 
    //     name : 'Sneha'}, {$set : {age : 25}
    // }).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     name : 'Sneha'
    // },
    // {
    //     $inc : { age : 1}
    // }).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })



    // db.collection('users').insertOne({
    //     name : 'Pooja',
    //     age : 27
    // }, (error, result) => {
    //     if(error)
    //     return console.log('Unable to insert data correctly')
    //     console.log(result.ops)
    //     console.log(result.insertedCount)
    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([{
    //         name : 'Archana',
    //         age : 28
    //     }, 
    //     {
    //         name : 'Sneha',
    //         age : 28
    //     }, 
    //     {
    //         name : 'Viel',
    //         age : 28
    //     }
    //     ], (error, result) => {
    //         if(error)
    //         return console.log('Unable to insert data correctly')
    //         console.log(result.ops)
    //         console.log(result.insertedCount)
    //         console.log(result.insertedId)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description : 'Learning MongoDB',
    //         completed : true
    //     }, 
    //     {
    //         description : 'Having coffe',
    //         completed : false
    //     }, 
    //     {
    //         description : 'Water the plants',
    //         completed : false
    //     }
    // ], (error, result) => {
    //     if (error)
    //     return console.log('Unable to insert data correctly')
    //     console.log(result.ops)
    //     console.log(result.insertedCount)
    // })

    // db.collection('users').findOne({ name : 'Neha'}, (error, user) => {
    //     if (error)
    //     return console.log('Unable to fetch the record')

    //     console.log(user)
    // })

    // db.collection('users').findOne({ _id : new ObjectID("60a6399b8f89332a0b3233c7")}, (error, user) => {
    //     if (error)
    //     return console.log('Unable to fetch the record')

    //     console.log(user)
    // })

    // db.collection('users').find({ age : 27}).toArray((error, users) => console.log(users))
    // db.collection('users').find({ age : 27}).count((error, count) => console.log(count))

    // db.collection('tasks').findOne({ _id : new ObjectID("60a64728fc988533f5f1a0aa")}, (error, task) => {
    //     if (error)
    //     return console.log('Unable to fetch the record')
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed : false}).toArray((error, tasks) => console.log(tasks))
    // db.collection('tasks').find({ completed : false}).count((error, count) => console.log(count))

} )



