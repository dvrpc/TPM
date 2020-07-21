// Homepage Interactions
const nav = document.getElementById('nav-header')
const iconsWrapper = document.getElementById('indicator-icons-wrapper')
let iconsSticky = false

// these elements don't always need to be sticky because they don't always exist, and when they don't, the scroll doesn't happen
// invoke this function whenever 
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
    }

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