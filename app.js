/**
 * Müsterimiz bizden minimum 10 kelimelik bir kelime oyunu hazirlamamizi istedi
 * Bu kelime oyununde kelimelere hecelerine ayrilmis olarak verilecek
 * Kelimeyi dogru sekilde siraladigimizda Check butonu ile kontrol ediyoruz
 * Random butonu ise bize heceleri karisik olarak verilmis yeni bir kelime veriyor.
 * Bu sipariste musterimiz bizden drag&drop Api kullanmamizi istiyor.
 * 
 * ve programimizin birkac kriteri vardir.
 * Kriterler:
1. Programin duzgun calisiyor olmasi [-30]
2. Algoritmanin dogru kurulmasi [-10]
3. Programlarin fonksiyonlar ile olusturulmasi (functions.js olmali) [-20]
4. Programinin hizalamalarinin duzgun olmasi [-10]
5. app.js dosyasinin en basinda analiz kisminin olmasi [-30]
 */
let mainList = document.getElementById("main-content")
mainList.innerHTML = printList()


const boxone = document.getElementById("boxone")
const boxtwo = document.getElementById("boxtwo")
const boxthree = document.getElementById("boxthree")
const boxfour = document.getElementById("boxfour")
let randomButton = document.getElementById("random-button")
let checkButton = document.getElementById("check-button")


function printList() {
    return ` <div class="box" draggable="true"  id="boxone"></div>
    <div class="box" draggable="true" id="boxtwo"></div>
    <div class="box" draggable="true" id="boxthree"></div>
    <div class="box" draggable="true" id="boxfour"></div>
    <button id="random-button">Random</button>
    <button id="check-button">Check</button>
    `
}

let toplam = null;
let anametin = null;
let boxControl = () => {
    toplam = boxone.innerText + boxtwo.innerText + boxthree.innerText + boxfour.innerText;
}
let randomQuestion = (e) => {
    let randomNumber = Math.floor(Math.random() * 10)
    if (e.target.id == "random-button") {
        boxone.innerHTML = wordList[randomNumber].wordLeft2
        boxtwo.innerHTML = wordList[randomNumber].wordLeft4
        boxthree.innerHTML = wordList[randomNumber].wordLeft
        boxfour.innerHTML = wordList[randomNumber].wordLeft3
        anametin = wordList[randomNumber].word
        boxControl();
    }
}

let checkQuestion = (e, toplam) => {
    if (e.target.id == "check-button") {
        if (anametin == toplam) {
            alert("Doğru = " + "Anametin = " + anametin)
            // randomQuestion(e);
        } else {
            alert("Yanlış tekrar deneyin")
        }

    }
}

mainList.addEventListener("click", function (e) {
    boxControl();
    randomQuestion(e);
    checkQuestion(e, toplam);
})