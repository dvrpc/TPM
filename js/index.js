import { clickIndicator, pressIndicator, handleTabs } from './handleIndicators.js'

const indicatorsWrapper = document.getElementById('indicator-icons-wrapper')
const tabs = document.getElementById('tpm-content-headers')

// Homepage Interactions
indicatorsWrapper.onclick = e => clickIndicator(e)
indicatorsWrapper.onkeydown = e => pressIndicator(e)
tabs.onclick = e => handleTabs(e)