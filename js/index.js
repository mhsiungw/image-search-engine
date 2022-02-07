import { generateImgHtml } from './functions.js'
import { fetchResults } from './api.js'

// website initial rendering. search term : Timothee Chalamet
renderedImgs()

$('form').submit(function (e) {
    e.preventDefault()
    if (!$('input').val()) return
    let searchTerm = $('input').val()
    console.log(searchTerm)
    $('.imgs-container').empty()
    renderedImgs(searchTerm)
})

async function renderedImgs(term = 'Timothée Chalamet') {
    console.log(term)
    // fetch data
    let data = await fetchResults(term)

    // append data and adjust img style accordingly
    $('.imgs-container')
        .append(generateImgHtml(data))
        .append(function () {
            $('img').css('display', 'none')
            let heightArr = []
            let nIntervId = setInterval(function () {
                $('img')
                    .height(function (index, value) {
                        heightArr.push(value)
                        if (heightArr.length > 10 && !heightArr.includes(0)) {
                            let integer = Math.ceil(Number(value) / 10)
                            $(this).css('grid-row-end', `span ${integer}`)
                            $(this).css('display', `block`)
                            clearInterval(nIntervId)
                        } else if (heightArr.length === 10 && heightArr.includes(0)) {
                            heightArr = []
                        }
                    })
                    .width(function (index, value) {
                        $(this).css('grid-column-end', `span 30`)
                    })
            }, 1000)
        })
}
