// Block scope! Constants = const, variables = let
var whitelist = ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld']

document.getElementById('in').onkeydown = function(event) {
  var results = franc.all(event.target.value, {'whitelist': whitelist})
  
  document.getElementById('results').innerHTML = ''

  for (var result of results) {
    document.getElementById('results').innerHTML += '<div>' + result[0] + ' ' + result[1] + '</div>'
  }
}
