input.onGesture(Gesture.TiltRight, function () {
    images.createBigImage(`
        . # . # . # . # . .
        # . # . # . # . # .
        . # . # . # . # . .
        . . # . # . # . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
    music.playMelody("A B A B A F E G ", 120)
    basic.showArrow(ArrowNames.North)
    basic.showIcon(IconNames.Pitchfork)
    music.playMelody("A C5 B A G B A G ", 120)
    music.playMelody("A B A G A F G E ", 120)
    music.playMelody("A F D C E D F G ", 119)
    music.playMelody("C B A B C5 B A B ", 120)
    basic.showLeds(`
        . # . # .
        # . # . #
        # # . # #
        # . # . #
        . # # # .
        `)
})
basic.forever(function () {
	
})
