import ref from './ref.js'

const contentSection = document.getElementById('tpm-content-section')
const contentWrapper = document.getElementById('tpm-content')
const nav = document.getElementById('nav-header')
const iconsWrapper = document.getElementById('indicator-icons-wrapper')
const testImg = document.querySelector('.indicator-icons-imgs')
const tabs = document.getElementById('tpm-content-headers')
const tabsImg = tabs.querySelector('.indicator-icons-imgs-nav')
const moreInfo = document.getElementById('more-info')
const splash = document.getElementById('splash-page')

let mainBeenSticky = false
let beenScrolled = false
let scrollTo;

const tabsImgLookup = {
    highway: './img/highway-safety.png',
    bridgepavement: './img/bridge-pavement.png',
    systemperf: './img/system-perf.png',
    transitasset: './img/transit-assets.png',
    ptasp: './img/transit-safety.png'
}

const calculateScrollTo = header => {
    const isNarrow = window.innerWidth > 772 ? false : true // 772 is mobile layout breakpoint
    const navImgBuffer = window.innerWidth > 1053 ? 62.5 : 0 // 1053 is medium breakpoint 62.5 is half of nav img height (125px)
    const iconsHeight = testImg.offsetHeight + ( isNarrow ? 96 : 28 ) // 28 px is margin - change
    const buffer = iconsHeight + navImgBuffer
    const elHeight = splash.offsetHeight + (header ? header.offsetHeight : 0)

    return elHeight + buffer
}


const makeSticky = header => {
    header = header ? header : document.querySelector('.content-header')

    const navHeight = nav.offsetHeight
    const iconsHeight = testImg.offsetHeight
    const headerHeight = header ? header.offsetHeight : 0
    const isNarrow = window.innerWidth > 772 ? false : true // 772 is mobile layout breakpoint
    
    if(!mainBeenSticky){
        tabs.style.position = 'sticky'
        iconsWrapper.style.position = 'sticky'
        
        iconsWrapper.style.top = isNarrow ? (iconsHeight - 8) * -1 + 'px' : (iconsHeight * -1) + 'px'
        mainBeenSticky = true
    }
    
    tabs.style.top = isNarrow ? (navHeight + headerHeight + 56) + 'px' : (iconsHeight + 32) + 'px'

    if(header){
        header.style.position = 'sticky'
        header.style.top = isNarrow ? (navHeight + 56) + 'px' : `calc(${iconsHeight}px - 4%)`
    }

    return header
}

// show the content section + generate the default content ("What do we measure?")
const clickIndicator = e => {
    if(e.target.id === 'indicator-icons-wrapper') return

    const f = e.target.classList.contains('indicator-icons-figure') ? e.target.children[0] : e.target
    const parent = f.parentElement
    const headerText = f.nodeName === 'FIGCAPTION' ? f.textContent : f.previousElementSibling.textContent
    const selectedIndicator = parent.dataset.indicator
    const theme = parent.dataset.theme
    const indicators = parent.parentElement.children
    const length = indicators.length    
    const updatedText = ref[selectedIndicator]['measure']
    const allTabs = tabs.children
    const tabsLength = allTabs.length

    const header = makeHeader(headerText)
    
    // toggle indicator state
    for(var i = 0; i < length; i++) {
        const loopedIndicator = indicators[i]

        if(loopedIndicator.dataset.indicator === selectedIndicator) {
            loopedIndicator.classList.add('indicator-icons-active')
            loopedIndicator.setAttribute('aria-pressed', true)
        } else {
            loopedIndicator.classList.remove('indicator-icons-active')
            loopedIndicator.setAttribute('aria-pressed', false)
        }
    }

    // update active tab to default
    for(var i=0; i<tabsLength; i++) {
        if(allTabs[i].id === 'measure-tab') allTabs[i].classList.add('active-header')
        else allTabs[i].classList.remove('active-header')
    }

    // update tab icon
    tabsImg.src = tabsImgLookup[selectedIndicator]

    // update content
    while(contentWrapper.firstChild) contentWrapper.removeChild(contentWrapper.firstChild)
    contentWrapper.insertAdjacentHTML('afterbegin', updatedText)
    contentWrapper.insertAdjacentElement('afterbegin', header)
    
    // reveal & style content section
    contentSection.classList.remove('content-section-default')
    contentSection.classList.add('content-section-active')
    contentSection.dataset.theme = theme

    // set header sticky
    makeSticky(header)

    if(!beenScrolled) {
        scrollTo = calculateScrollTo(header)
        beenScrolled = true
    }

    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    })

    // update url
    const encodedIndicator = encodeURI(selectedIndicator)
    const indicatorURI = `?indicator=${encodedIndicator}`
    history.pushState({indicator: selectedIndicator}, selectedIndicator, indicatorURI)
}
const pressIndicator = e => {
    if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
        e.preventDefault()
        clickIndicator(e)
    }
}

const makeHeader = name => {
    const header = document.createElement('h2')

    header.classList.add('content-header')
    header.textContent = name

    return header
}

const handleTabs = e => {
    // exit if clicking the icon
    if(e.target.nodeName === 'IMG') return

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
    mainBeenSticky = false
    const header = makeSticky()
    calculateScrollTo(header)
}
moreInfo.ontoggle = () => beenScrolled = false


export { clickIndicator, pressIndicator, handleTabs }