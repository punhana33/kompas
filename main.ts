let derece = 0
basic.forever(function () {
    derece = input.compassHeading()
    if (derece <= 45) {
        basic.showString("simal")
    } else if (derece <= 135) {
        basic.showString("serq")
    } else if (derece <= 225) {
        basic.showString("cenub")
    } else if (derece <= 315) {
        basic.showString("qerb")
    } else {
        basic.showString("simal")
    }
})
