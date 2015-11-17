import franc from 'franc'

const whitelist = ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld']

export default function() {
  const results = franc.all('Kaapstad is die beste stad', {'whitelist': whitelist})

  document.getElementById('results').innerHTML = ''
  for (const result of results) {
    document.getElementById('results').innerHTML += `<div>${result[0]} ${result[1]}</div>`
  }
}