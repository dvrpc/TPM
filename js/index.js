import clickIndicator from './handleIndicators.js'

// Homepage Interactions
const indicatorsWrapper = document.getElementById('indicator-icons-wrapper')
indicatorsWrapper.onclick = e => clickIndicator(e)