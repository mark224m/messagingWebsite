const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(), //add image next
});
const messages = db.get('messages');

function getAll() {
    return messages.find();
}
/*
username
subject
message
imageURL
created_at
*/

function create(message){
    if(!message.username) message.username = 'anonymous';

    const result = schema.validate(message);
    if(result.error == null){
        message.created = new Date();
        return Promise.resolve(messages.insert(message));
    }
    else{
        return Promise.reject(result.error);
    }
}

module.exports = {
    getAll,
    create
};