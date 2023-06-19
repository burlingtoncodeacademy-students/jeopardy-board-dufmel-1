let playBtn = document.getElementById("play-btn")

let playerOneName = document.getElementById("playerOneName")
let playerTwoName = document.getElementById("playerTwoName")

playBtn.addEventListener("click", (e) => {
    e.preventDefault()

    window.location = `http://localhost:5500/round-1.html?nameOne=${playerOneName.value}&nameTwo=${playerTwoName.value}&scoreOne=0&scoreTwo=0`;
})

