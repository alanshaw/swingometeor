Votes = new Mongo.Collection('votes')

Votes.allow({
  insert: function () {
    return true
  }
})