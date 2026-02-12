// WHERE

//SRC's of all images you want to use
const sectionsARR = [

  ];
// IDS of the section tags in html
const sectionIDs = [
  "RunClub1",
  "RunClub2",
  "RunClub3",
  "RunClub4",
  "RunClub5",
  "RunClub6",
  "RunClub7",
  "RunClub8",
  "RunClub9"
  ];

//Stores the places randomly selected to show on website
let showSectionsARR = [];




//=================================================================================

//WHAT DO - Randomize IMGS and show them in HTML

//Randomly selects 3 imgs to show on website
function randomize() {
  // showSectionsARR = [];


    for(let i = 0; i< 9;i++){


    let randomNum = Math.floor(Math.random() * sectionIDs.length);

    let placeToPush = document.getElementById(sectionIDs[i]);


    //Checks if we have the place already
  //   if (showSectionsARR.includes(placeToPush)) {
  //       //if we do we don't add it to our array
  //     console.log("oopsis");
  //   } 
  //   else {
  //       //if its not there already then we add it
  //     showSectionsARR.push(placeToPush);
  //   }
  //  }
  placeToPush.classList.add('col'+ randomNum);
  let placestring = showSectionsARR.join(" ");
  console.log(placestring);
    }
  /*
if most recent showSectionsARR IS SAME as placeARR[randomNum]
remove rerool

*/
}

//Finds <img> tags in HTML
//Put the random SRCS in each tag
function findImage() {
  randomize();

//showSectionsARR = ["WWW.png", "NARC - Team Pic.jpeg", "internet.png"];
let sectionLocation = document.getElementById("main")

for(let i = 0; i < 9;i++){
let newSection = document.createElement('RunClub');
newSection.id = "RunClub" + i
sectionIDs.push("RunClub"+ i)
sectionLocation.appendChild(newSection);
}

 for (let i = 0; i < sectionIDs.length; i++) 
  {
    //0 1 2 3 4 
    //htmlIDs[]]
    //find location
    //WHERE 
    let showID = document.getElementById(sectionIDs[i]);  //first time = <img id = "img1">
    console.log(showID);
    showID = showSectionsARR[i]; //set <img> SRC to the random place
  }
}
//WHEN
// We have an 'onload' in body on html 


// THIS IS FOR THE NEW MAP
// var map = L.map('map').setView([51.505, -0.09], 13);
