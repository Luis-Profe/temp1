basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(2000)
    basic.clearScreen()
    if (input.temperature() >= 20) {
        music.playMelody("A B A G A B C5 B ", 120)
    }
})
