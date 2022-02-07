const KEY = 'AIzaSyB4uKyZw9CeNQaH0g4GeCQOqmzloyXx3FY'
const ENGINE_ID = '3efff65a67d18483b'

export async function fetchResults(term) {
    // making params
    let url = new URL('https://customsearch.googleapis.com/customsearch/v1')
    let params = { cx: ENGINE_ID, key: KEY, imgSize: 'MEDIUM', searchType: 'image', q: term }
    url.search = new URLSearchParams(params).toString()
    return await fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not OK')
            }
            return res.json()
        })
        .then((result) => {
            let { items } = result
            console.log(items)
            return items
        })
        .catch((err) => {
            console.error(err)
        })
}
