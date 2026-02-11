// const placesARR = ["place 1", "place 2", "place 3", "place4"]

// const showPlacesARR = [];

// let radnomARR = [];

// function randomize(){
//         let randomNum = Math.random()
//         // math.floor

// showPlacesARR PUSH = placesARR[randomNum]
// // 

// TESTING REPEATS:

// // for (numbers in RandomARR)
// //         if(numbers === randomARR[numbers])
// //         dont put it in reroll

// // else
// //     put number in Array}

// // randomARR[numbers] = randomNum





// function getItem(){

//     return document.getElementById(`box-$[itemNumber}`);
// }

// function makeFindItemArray() {


// }


// const navbar = document.getElementById("white-mode-id")

// function toggleWhiteMode() {
//         console.dir(navbar);

// navbar.addEventListener("onmouseover", toggleWhiteMode)}

const galleryArray = ["GalleryNARC", "GallerySR", "GalleryTM"];

const gallery = []; 



function randomize(){

let randomNum = Math.floor(Math.random() * galleryArray.length);

let numberAgain = galleryArray[randomNum]; 

if(gallery.includes(randomNum)){

    console.log("nuthin?")

}

else{
    
    gallery.push(galleryArray[randomNum])

}

let galleryString = galleryArray.join(" ");
    console.log(galleryString);

}

