async function init() {
    try{
        const offres = await getData()
        renderOffers(offres)
        renderOfferDetail(offres) 
        // console.log(offres)
    }
    catch (error){
        console.error(error)
    }
}
init()