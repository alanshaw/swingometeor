Meteor.startup(function () {
  Meteor.publish('votes', function () {
    return Votes.find()
  })

  if (!Votes.find().count()) {
    Polls.loadLatest()
  }
})
