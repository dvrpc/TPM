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
    const comboHeight = navHeight + iconsHeight - 1

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
    const theme = selectedIndicator.split(' ').join('-')
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
}

export default clickIndicator