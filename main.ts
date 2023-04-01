input.onButtonPressed(Button.A, function () {
    iskloppend = 1
})
input.onButtonPressed(Button.AB, function () {
    if (snelheid == 0) {
        snelheid = 500
    } else {
        snelheid = 0
    }
})
input.onButtonPressed(Button.B, function () {
    iskloppend = 0
})
let snelheid = 0
let iskloppend = 0
iskloppend = 0
snelheid = 0
basic.forever(function () {
    if (iskloppend == 1) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(snelheid)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(snelheid)
    }
})
