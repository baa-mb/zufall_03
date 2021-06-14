input.onButtonPressed(Button.A, function () {
    basic.showNumber(kopf)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(10000 - kopf)
})
let kopf = 0
kopf = 0
for (let index = 0; index < 10000; index++) {
    if (randint(0, 1) == 0) {
        kopf += 1
    }
}
basic.showString("Fertig")
