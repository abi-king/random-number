const tel = document.querySelector(".tel")
const btn = document.querySelector(".btn")

const TEL__NUMBESR = [
    "+998 90 222 03 20",
    "+998 90 690 52 55",
    "+998 99 975 64 87",
    "+998 90 222 03 40",
    "+998 90 352 22 22",
    "+998 99 543 53 55",
    "+998 90 690 52 55",
    "+998 90 222 03 20",
    "+998 99 543 53 55",
    "+998 90 222 03 40",
    "+998 90 690 52 55",
]


function random() {
    btn.style.display = "none"
    let interval = setInterval(() => {
        let index = Math.floor(Math.random() * TEL__NUMBESR.length)
        tel.innerHTML = TEL__NUMBESR[index]

    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        btn.style.display = "inline-block"
        // tel.innerHTML = "+998 90 222 03 20" // aldsh hisoblanadi


    }, 2500);



}



























