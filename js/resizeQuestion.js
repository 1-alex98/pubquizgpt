const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => (scrollWidth > clientWidth) || (scrollHeight > clientHeight)

const resizeText = ({ element, elements, minSize = 0.1, maxSize = 10, step = 0.1, unit = 'rem' }) => {
    (elements || [element]).forEach(el => {
        let i = minSize
        let overflow = false

        const parent = el.parentNode

        while (!overflow && i < maxSize) {
            el.style.fontSize = `${i}${unit}`
            overflow = isOverflown(parent)

            if (!overflow) i += step
        }

        // revert to last state where no overflow happened
        el.style.fontSize = `${i - step}${unit}`
    })
}

const allParents = document.querySelectorAll('.parent')
allParents.forEach(parent => {
    // create a new observer for each parent container
    const observer = new ResizeObserver(function (entries, observer) {
        entries.forEach( (mutation) => {
            // get the text element, see the html markup
            // at the top for reference
            const parent = mutation.target
            const textContainer = parent.firstElementChild
            const text = textContainer.firstElementChild

            // resize the text
            resizeText({ element: text, step: 0.1 })
        });
    })

    // let's observe only our required attributes
    observer.observe(parent)
    const textContainer = parent.firstElementChild
    const text = textContainer.firstElementChild
    resizeText({ element: text, step: 1})
})