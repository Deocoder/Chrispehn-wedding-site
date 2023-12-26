const countdown = () => {
  const countDate = new Date("Jan 27 , 2024 08:00:00").getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  //how the fuck does time work
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  console.log(day)

  // Calculate this shit
  const textDay = Math.floor(gap / day)
  console.log(textDay)
  const textHour = Math.floor((gap % day) / hour)
  const textMinutes = Math.floor((gap % hour) / minute)
  const textSeconds = Math.floor((gap % minute) / second)

  document.querySelector(".day").innerText = textDay
  document.querySelector(".hour").innerText = textHour
  document.querySelector(".minute").innerText = textMinutes
  document.querySelector(".second").innerText = textSeconds
}

setInterval(countdown, 1000)

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question")

  questions.forEach(function (question) {
    const header = question.querySelector("h3")
    const answer = question.querySelector(".answer")

    header.addEventListener("click", function () {
      answer.style.display = answer.style.display === "block" ? "none" : "block"
    })
  })
})

// Navbar
function openNav() {
  document.getElementById("myNav").style.height = "100%"
  console.log(document.getElementById("myNav"))
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%"
}
