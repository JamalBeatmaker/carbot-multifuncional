function segue_linha () {
    if (hackbit.detectline(DigitalPin.P4, true) && hackbit.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        40,
        hackbitmotors.Motors.M1B,
        40
        )
    } else if (hackbit.detectline(DigitalPin.P4, false) && hackbit.detectline(DigitalPin.P10, false)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        50,
        hackbitmotors.Motors.M1B,
        50
        )
    } else if (hackbit.detectline(DigitalPin.P4, false) && hackbit.detectline(DigitalPin.P10, true)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        -95,
        hackbitmotors.Motors.M1B,
        45
        )
    } else if (hackbit.detectline(DigitalPin.P4, true) && hackbit.detectline(DigitalPin.P10, false)) {
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        45,
        hackbitmotors.Motors.M1B,
        -90
        )
    }
}
let distancia2 = 0
led.enable(false)
basic.forever(function () {
    distancia2 = hackbit.us_sonar(
    DigitalPin.P13,
    DigitalPin.P14,
    hackbit.PingUnit.cm
    )
    serial.writeValue("Distancia", distancia2)
    segue_linha()
    if (distancia2 <= 10) {
        hackbitmotors.MotorStopAll()
    }
})
