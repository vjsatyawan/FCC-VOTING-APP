import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Polls = new Mongo.Collection('polls');


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('polls', function pollsPublication() {
    return Polls.find();
  });
}


Meteor.methods({
  'polls.insert'(question, answers) {
    // check(text, String);
 
    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    username = Meteor.user().profile.name;

    Polls.insert({

      owner: Meteor.userId(), 
      username: username,
      question : question,
      answers : answers,
      createdAt: new Date(),
      


    });
  },

  'polls.remove'(_id) {
     Polls.remove({_id : _id});
  },

  'polls.addVote'(_id, answers) {
                Polls.update(_id: _id, { $set: { answers: answers } });

    },      
  // username: Meteor.users.findOne(this.userId).username,
});