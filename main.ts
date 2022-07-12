led.enable(false)
basic.forever(function () {
    if (hackbitsensor.detectline(DigitalPin.P4, true) && hackbitsensor.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        70,
        hackbitmotors.Motors.M1B,
        70
        )
    } else if (hackbitsensor.detectline(DigitalPin.P4, false) && hackbitsensor.detectline(DigitalPin.P10, false)) {
        hackbitmotors.MotorStopAll()
    } else if (hackbitsensor.detectline(DigitalPin.P4, false) && hackbitsensor.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        0,
        hackbitmotors.Motors.M1B,
        40
        )
    } else if (hackbitsensor.detectline(DigitalPin.P4, true) && hackbitsensor.detectline(DigitalPin.P10, false)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        40,
        hackbitmotors.Motors.M1B,
        0
        )
    }
})
