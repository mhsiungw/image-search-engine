export function generateImgHtml(data) {
    let html = ''
    for (let item of data) {
        html += `<img src=${item.link} alt=${item.title}/>`
    }
    return html
}
