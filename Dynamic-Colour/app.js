const colours = ["green", "red", "steelblue", "slategray", "yellow", "blue"];
const btn = document.getElementById('btn')
const colour = document.querySelector('.colour')

btn.addEventListener('click',()=>{
    //Random number to go through array
    //console.log('Works')
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colours[randomNumber]
    colour.textContent = colours[randomNumber]
})

const getRandomNumber = ()=>{
    return Math.floor(Math.random() * colours.length)
}