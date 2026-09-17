import { getData } from "./data.js"
import { renderOffers , renderOfferDetail } from "./render.js"

// async function init() {
//     try {
//         const offres = await getData()
//         renderOffers(offres)
//     }
//     catch (error) {
//         console.error(error)
//     }
// }

async function initDetail() {
    try {
        const url = new URLSearchParams(window.location.search)
        console.log(url)
        renderOfferDetail(url);
    }
    catch (error) {
        console.error(error)
    }
}
// const detailContainer = document.querySelector('#offer-detail')
// if (!detailContainer) {

    initDetail()
// } else {
  
// }
//   init()