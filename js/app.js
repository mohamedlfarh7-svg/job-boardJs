import { getData } from "./data.js"
import { renderOffers, renderOfferDetail } from "./render.js"

async function init() {
    try {
        const offres = await getData()
        renderOffers(offres)
    }
    catch (error) {
        console.error(error)
    }
}

async function initDetail() {
    try {
        const url = new URLSearchParams(window.location.search)
        const id = url.get('id')
        // console.log(id)

        const offres = await getData()
        
        const offre =  offres.find(offre => offre.id == id)


        renderOfferDetail(offre);
    }
    catch (error) {
        console.error(error)
    }
}
const detailContainer = document.getElementById('offer-detail');



if (detailContainer) {
    initDetail()
} else {
    init()
}
