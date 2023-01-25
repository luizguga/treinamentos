let hotelPrices = [300,95,101]

function finDeals(price){
    if(price < 100){
        console.log('$'+price+" it's a good deal!")
    }
}

hotelPrices.forEach(finDeals)