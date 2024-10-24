basic.forever(function () {
    if (input.soundLevel() <= 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(100)
    } else {
        if (input.soundLevel() >= 125) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.clearScreen()
            basic.pause(100)
        } else {
            if (input.soundLevel() >= 200) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.clearScreen()
                basic.pause(100)
            }
        }
    }
})
