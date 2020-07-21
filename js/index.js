// Homepage Interactions
const nav = document.getElementById('nav-header')
const iconsWrapper = document.getElementById('indicator-icons-wrapper')

// these elements don't always need to be sticky because they don't always exist, and when they don't, the scroll doesn't happen
// invoke this function whenever 
const makeSticky = () => {
    const tabs = document.getElementById('tpm-content-headers')
    const headerActive = document.querySelector('.content-header')

    // get height for top
    const navHeight = nav.clientHeight
    console.log(navHeight)
    const iconsHeight = iconsWrapper.clientHeight
    const comboHeight = navHeight + iconsHeight - 1

    // set top
    iconsWrapper.style.position = 'sticky'
    iconsWrapper.style.top = navHeight + 'px'

    // double check indicator content exists before applying styles to it
    if(tabs) {
        tabs.style.position = 'sticky'
        headerActive.style.position = 'sticky'
        tabs.style.top = comboHeight + 'px'
        headerActive.style.top = comboHeight + 'px'
    }
}

// @TODO: invoke this after each makeIndicatorContent() call
makeSticky()