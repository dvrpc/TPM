import { clickIndicator, handleTabs } from './handleIndicators.js'

const indicatorsWrapper = document.getElementById('indicator-icons-wrapper')
const tabs = document.getElementById('tpm-content-headers')

// Homepage Interactions
indicatorsWrapper.onclick = e => clickIndicator(e)
tabs.onclick = e => handleTabs(e)