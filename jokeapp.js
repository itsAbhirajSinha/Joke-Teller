console.log("connected")


const btn = document.getElementById("btn")
const text = document.getElementById("text")
// const volume = document.getElementById("volume")

const res = document.getElementById("res")

btn.addEventListener('click', async () => {
    const response= await fetch('https://api.chucknorris.io/jokes/random')
    const result= await response.json()
    // console.log(result.value)
    text.innerText = result.value;
    let speech = new SpeechSynthesisUtterance(text.innerText)
    speechSynthesis.speak(speech)
})


res.addEventListener('click', async () =>{
    // text.innerText=  "Click the button below 👇"
    // googleTranslateElementInit()
    //  type="text/javascript">
    function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }
    googleTranslateElementInit()
    
}
)



// function loadGoogleTranslate(){
//   let trans = new google.translate.TranslateElement(text.innerText)

// }
// volume.addEventListener('click', ()=>{
//     let speech = new SpeechSynthesisUtterance(text.innerText)
//     speechSynthesis.speak(speech)
// })


// https://api.mymemory.translated.net/get?q
