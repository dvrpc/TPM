import ref from './ref.js'

const contentSection = document.getElementById('tpm-content-section')
const contentWrapper = document.getElementById('tpm-content')
const nav = document.getElementById('nav-header')
const iconsWrapper = document.getElementById('indicator-icons-wrapper')
const tabs = document.getElementById('tpm-content-headers')
const moreInfo = document.getElementById('more-info')
const splash = document.getElementById('splash-page')

let mainBeenSticky = false
let beenMuted = false
let beenScrolled = false
let scrollTo;

// @IMPROVEMENT: adding 15 makes sure it always scroll to the sticky point, but doesn't scale perfectly. Calculate percentages and use that
const calculateScrollTo = header => {
    const isMobile = window.innerWidth > 415 ? false : true
    const buffer = (isMobile ? 0 : 15)
    return splash.getBoundingClientRect().height + header.getBoundingClientRect().height + buffer
}

const makeSticky = () => {
    const headerActive = document.querySelector('.content-header')
    const navHeight = nav.clientHeight
    const iconsHeight = iconsWrapper.clientHeight
    const comboHeight = navHeight + iconsHeight
    const isMobile = window.innerWidth > 415 ? false : true
    
    if(!mainBeenSticky){
        iconsWrapper.style.position = 'sticky'
        iconsWrapper.style.top = isMobile ? '5%' : `calc(${navHeight}px - 2%)`
        tabs.style.position = 'sticky'
        tabs.style.top = isMobile ? '35%' : (comboHeight + 40) + 'px'
        mainBeenSticky = true
    }

    if(headerActive){
        headerActive.style.position = 'sticky'
        headerActive.style.top = isMobile ? `calc(${comboHeight}px - 1%)` : `calc(${comboHeight}px - 7%)`
    }
}

const muteIndicators = () => {
    const figs = iconsWrapper.children
    const l = figs.length
    let i = 0

    for(i; i < l; i++) {
        figs[i].classList.add('muted-40')
    }

    return true
}

// show the content section + generate the default content ("What do we measure?")
const clickIndicator = e => {
    const parent = e.target.parentElement
    if(!parent.classList.contains('indicator-icons-figure')) return

    const activeHeader = document.querySelector('.active-header').id.split('-')[0]
    const f = e.target
    const headerText = f.nodeName === 'FIGCAPTION' ? f.textContent : f.previousElementSibling.textContent
    const selectedIndicator = parent.dataset.indicator
    const theme = parent.dataset.theme
    const indicators = parent.parentElement.children
    const length = indicators.length
    const updatedText = ref[selectedIndicator][activeHeader]

    const header = makeHeader(headerText)
    
    // toggle indicator state
    for(var i = 0; i < length; i++) {
        const loopedIndicator = indicators[i]
        if(loopedIndicator.dataset.indicator === selectedIndicator) parent.classList.add('indicator-icons-active')
        else loopedIndicator.classList.remove('indicator-icons-active')
    }

    // update content
    while(contentWrapper.firstChild) contentWrapper.removeChild(contentWrapper.firstChild)
    contentWrapper.insertAdjacentHTML('afterbegin', updatedText)
    contentWrapper.insertAdjacentElement('afterbegin', header)
    
    // reveal & style content section
    contentSection.classList.remove('content-section-default')
    contentSection.classList.add('content-section-active')
    contentSection.dataset.theme = theme


    // set header sticky & mute inactive indicator icon imgs
    makeSticky()
    if(!beenMuted) beenMuted = muteIndicators()
    if(!beenScrolled) {
        scrollTo = calculateScrollTo(header)
        beenScrolled = true
    }
    // scrollTo = calculateScrollTo(header)

    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    })

    // update url
    const encodedIndicator = encodeURI(selectedIndicator)
    const indicatorURI = `?indicator=${encodedIndicator}`
    history.pushState({indicator: selectedIndicator}, selectedIndicator, indicatorURI)
}

const makeHeader = name => {
    const header = document.createElement('h2')

    header.classList.add('content-header')
    header.textContent = name

    return header
}

const handleTabs = e => {
    // check if indicator function fired
    const query = location.href.split('?indicator=')
    const parent = e.target.nodeName === 'ASIDE' ? true : false
    if(!query || parent) return

    // get context from btn element
    let target = e.target.nodeName === 'H3' ? e.target.parentElement : e.target
    
    const tabID = target.id
    const tab = tabID.split('-')[0]
    const allTabs = target.parentElement.children
    const length = allTabs.length

    // update active tab
    for(var i=0; i<length; i++) {
        if(tabID === allTabs[i].id) allTabs[i].classList.add('active-header')
        else allTabs[i].classList.remove('active-header')
    }
    
    // update content
    const headerText = contentWrapper.firstChild.textContent || ' '
    while(contentWrapper.firstChild) contentWrapper.removeChild(contentWrapper.firstChild)
    
    const indicator = decodeURI(query[1])
    const newText = ref[indicator][tab]
    const header = makeHeader(headerText)

    contentWrapper.insertAdjacentHTML('afterbegin', newText)
    contentWrapper.insertAdjacentElement('afterbegin', header)

    // this is needed b/c the h2 element is dynamically created. Need a way to avoid this. 
    makeSticky()
    if(!beenScrolled) {
        scrollTo = calculateScrollTo(header)
        beenScrolled = true
    }

    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    })
}

// handle updates to scroll and sticky fncs
window.onresize = () => {
    makeSticky()
    beenScrolled = false
}
moreInfo.ontoggle = () => beenScrolled = false


export { clickIndicator, handleTabs }