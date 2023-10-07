//Get to DOM elements
const gameContainer =document.querySelector (".container"),
userResults = document.querySelector (".user-results img"),
cpuResults = document.querySelector (".cpu-results img"),
results= document.querySelector(".results"),
optionImages= document.querySelectorAll(".option-image");

//Loop through each option Image Element 

optionImages.forEach((image,index) => {
image.addEventListener ("click", (e) => {
    image.classList.add("active");

// loop through each option image again
    optionImages.forEach((image2,index2) => {
        console.log(index, index2);
        
  
        // if the current index does no match the clicked index
        // remove the "active" class from the other option image
        index !==index2 && image2.classList.remove ("active")

    });
        // Get the source of the cicked image
        let imageSrc= e.target.querySelector("img").src; 
        // Set the user image to the clicked option image
        userResults.src = imageSrc
        
     // generate a random number between 0 and 2
     let randomNumber = Math.floor(Math.random()*3)
//   create an array of CPU image options
let cpuImages = ["Images/Rock.png", "Images/Paper.png", "Images/scissors.png"]
cpuResults.src= cpuImages[randomNumber]

// assign a letter value to the cpu option (R for rock, P for paper,S for scissors)
let cpuValue = [ 'R', 'P', 'S'] [randomNumber];
// assign a letter value to the cpu option (R for rock, P for paper,S for scissors)
let userValue = [ 'R', 'P', 'S'] [index];

// create an object with all possible outcome:
let outcomes = {
RR: "Draw",
RP:"cpu",
RS: "user",
pp: "Draw",
PR: "cpu",
PS: "user",
SS: "Draw",
SR: "cpu",
SP: "user"
};

// Look up the outcome value based on user and cpu options
let outComeValue = outcomes[userValue + cpuValue];


  
    // Display the result
    results.textContent =userValue ===cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
});
});