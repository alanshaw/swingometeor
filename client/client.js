Meteor.startup(function () {
  Meteor.subscribe('votes')

  Tracker.autorun(function () {
    var votes = Votes.find().fetch()
    var data = Pie.group(votes, 'party')
    Pie.render('#pie', data)
  })
})

Template.buttons.events({
  'click a': function (e) {
    e.preventDefault()
    var party = $(e.currentTarget).text()
    Votes.insert({party: party, createdAt: Date.now()})
  }
})

Template.buttons.helpers({
  parties: function () {
    return ['Labour', 'Conservative', 'Liberal Democrat', 'UKIP', 'Green', 'Anarchy']
  }
})

Template.button.helpers({
  getButtonClass: function (str) {
    return 'btn ' + str.replace(/[^a-z0-9]/ig, '').toLowerCase()
  }
})
