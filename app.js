const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.erroe(err));

//schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
});

//create User model (class User)
const User = mongoose.model('User', userSchema);

User.find({ age: { $gt: 31 } }) // brings all documents the their age > 31
    .limit(2) //brings only 2 of them
    .select({ name: 1, email: 1, _id: 0 }) // brings only name and email
    .sort({ name: -1 }) // sort by DESC (1 for ASC)
    .then(users => console.log(users));

/* // find by id
User.findById('60354788bd7dfd3af44c2536')
    .then(user => console.log(user)); */

/* // brings all documents from collection 'users'
User.find({}).then(users=>console.log(users)); */

/* // delete User documents
User.deleteOne({ _id: '60353c9560d25d1ddc0dbea6' })
    .then(result => console.log(result)); */

/* // update document
User.findById('60353c9560d25d1ddc0dbea6')
    .then(user => {
        user.password = 'abcd';
        user.age = 55;
        user.save();
    }); */

/* // create object
const user = new User({
    name: 'Avi Cohen',
    email: 'avi@gmail.com',
    password: '123456',
    age: 30
})
user.save()
    .then(result => console.log(result)); */