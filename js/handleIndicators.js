import ref from './ref.js'

const contentSection = document.getElementById('tpm-content-section')
const contentWrapper = document.getElementById('tpm-content')
const nav = document.getElementById('nav-header')
const iconsWrapper = document.getElementById('indicator-icons-wrapper')
const tabs = document.getElementById('tpm-content-headers')
let mainSticky = false
let beenScrolled = false
let scrollTo;

const makeSticky = () => {
    const headerActive = document.querySelector('.content-header')
    const navHeight = nav.clientHeight
    const iconsHeight = iconsWrapper.clientHeight
    const comboHeight = navHeight + iconsHeight

    if(!mainSticky){
        iconsWrapper.style.position = 'sticky'
        iconsWrapper.style.top = navHeight + 'px'
        tabs.style.position = 'sticky'
        tabs.style.top = comboHeight + 'px'
        mainSticky = true
    }

    if(headerActive){
        headerActive.style.position = 'sticky'
        headerActive.style.top = comboHeight + 'px'
    }
}

// show the content section + generate the default content ("What do we measure?")
const clickIndicator = e => {
    const parent = e.target.parentElement
    if(!parent.classList.contains('indicator-icons-figure')) return
    
    const selectedIndicator = parent.dataset.indicator
    const indicators = parent.parentElement.children
    const length = indicators.length
    const defaultText = ref[selectedIndicator].measure // @TODO: decide if it's better to set each one to default state or just the most recent state of the tabs
    const theme = selectedIndicator.split(' ').join('-')
    
    // toggle indicator state
    for(var i = 0; i < length; i++) {
        const loopedIndicator = indicators[i]
        if(loopedIndicator.dataset.indicator === selectedIndicator) parent.classList.add('indicator-icons-active')
        else loopedIndicator.classList.remove('indicator-icons-active')
    }

    // update content
    while(contentWrapper.firstChild) contentWrapper.removeChild(contentWrapper.firstChild)
    contentWrapper.insertAdjacentHTML('afterbegin', defaultText)
    
    // reveal & style content section
    contentSection.classList.remove('content-section-default')
    contentSection.classList.add('content-section-active')
    contentSection.dataset.theme = theme

    // set header sticky
    makeSticky()

    // scroll to
    if(!beenScrolled) {
        scrollTo = parent.getBoundingClientRect().top - 50
        beenScrolled = true
    }

    window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
    })

    // update url
    const baseURI = location.href
    const encodedIndicator = encodeURI(selectedIndicator)
    const indicatorURI = `${baseURI}?indicator=${encodedIndicator}`

    history.pushState({indicator: selectedIndicator}, selectedIndicator, indicatorURI)
}

const handleTabs = e => {
    // check if indicator function fired
    const query = location.href.split('?indicator=')
    if(!query) return

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
    while(contentWrapper.firstChild) contentWrapper.removeChild(contentWrapper.firstChild)
    
    const indicator = decodeURI(query[1])
    const newText = ref[indicator][tab]

    contentWrapper.insertAdjacentHTML('afterbegin', newText)

    makeSticky()
}

export { clickIndicator, handleTabs }