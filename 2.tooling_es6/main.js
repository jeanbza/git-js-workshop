var whitelist = ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld']

document.getElementById('in').onkeydown = function(event) {
  var results = franc.all(event.target.value, {'whitelist': whitelist})

  document.getElementById('results').innerHTML = ''

  for (i = 0; i < results.length; i++) {
    document.getElementById('results').innerHTML += '<div>' + results[i][0] + ' ' + results[i][1] + '</div>'
  }
}
