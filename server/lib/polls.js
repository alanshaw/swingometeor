Polls = {
  loadLatest: function () {
    var html = HTTP.get('http://s.telegraph.co.uk/graphics/html/Years/2015/March/PollTracker2015/index.html').content

    var start = '</span>: \'+this.y;}},series:'
    var end = ',title:{text:"General'

    var startIndex = html.indexOf(start)
    var endIndex = html.indexOf(end)

    var json = html.slice(startIndex + start.length, endIndex)
    var data = eval(json)

    data.forEach(function (d) {
      var last = d.data[d.data.length - 1]
      for (var i = 0; i < last[1]; i++) {
        Votes.insert({party: d.name, createdAt: Date.now()})
      }
      console.log('Added', parseInt(last[1]), d.name, 'votes')
    })
  }
}