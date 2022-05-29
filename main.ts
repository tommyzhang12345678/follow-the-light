input.onButtonPressed(Button.A, function () {
	
})
function doSomething () {
    basic.showLeds(`
        . . # . .
        . . # . #
        # # # # .
        . # . # .
        # . . . #
        `)
    basic.pause(200)
    basic.clearScreen()
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . . # . #
            # # # # .
            . # . # .
            # . . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.pause(200)
        doSomething()
        basic.pause(200)
        doSomething()
        basic.pause(200)
        doSomething()
        basic.pause(200)
        doSomething()
        basic.pause(200)
        doSomething()
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
