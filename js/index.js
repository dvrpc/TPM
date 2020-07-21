import ref from './ref.js'

// Homepage Interactions
const nav = document.getElementById('nav-header')
const iconsWrapper = document.getElementById('indicator-icons-wrapper')
const indicatorsWrapper = document.getElementById('indicator-icons-wrapper')
const contentSection = document.getElementById('tpm-content-section')
const contentWrapper = document.getElementById('tpm-content')
let iconsSticky = false

// @TODO: when the function to generate indicator content is made, delete this function and just apply the height when the elements are created
const makeSticky = () => {
    const tabs = document.getElementById('tpm-content-headers')
    const headerActive = document.querySelector('.content-header')

    // get height for top
    const navHeight = nav.clientHeight
    const iconsHeight = iconsWrapper.clientHeight
    const comboHeight = navHeight + iconsHeight - 1

    // set top (first pass only)
    if(!iconsSticky) {
        iconsWrapper.style.position = 'sticky'
        iconsWrapper.style.top = navHeight + 'px'
        tabs.style.position = 'sticky'
        tabs.style.top = comboHeight + 'px'
    }

    // double check indicator content exists before applying styles to it
    if(headerActive) {
        headerActive.style.position = 'sticky'
        headerActive.style.top = comboHeight + 'px'
    }
}

// @TODO: invoke this after each makeIndicatorContent() call
makeSticky()

// show the content section + generate the default content ("What do we measure?")
const clickIndicator = e => {
    const parent = e.target.parentElement
    if(!parent.classList.contains('indicator-icons-figure')) return
    
    const selectedIndicator = parent.dataset.indicator
    const indicators = indicatorsWrapper.children
    const length = indicators.length
    
    // toggle indicator state
    for(var i = 0; i < length; i++) {
        const loopedIndicator = indicators[i]
        if(loopedIndicator.dataset.indicator === selectedIndicator) parent.classList.add('indicator-icons-active')
        else loopedIndicator.classList.remove('indicator-icons-active')
    }

    // update content
    while(contentWrapper.firstChild) contentWrapper.removeChild(contentWrapper.firstChild)
    const defaultText = ref[selectedIndicator].measure
    contentWrapper.insertAdjacentHTML('afterbegin', defaultText)
    
    // reveal & style content section
    const accentClass = selectedIndicator.split(' ').join('-')
    contentSection.classList.remove('content-section-default')
    contentSection.classList.add('content-section-active')
    contentSection.classList.add(accentClass)
}

indicatorsWrapper.onclick = e => clickIndicator(e)