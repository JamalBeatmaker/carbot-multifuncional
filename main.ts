led.enable(false)
basic.forever(function () {
    if (hackbitsensor.detectline(DigitalPin.P4, false) && hackbitsensor.detectline(DigitalPin.P10, false)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        50,
        hackbitmotors.Motors.M1B,
        50
        )
    } else if (hackbitsensor.detectline(DigitalPin.P4, true) && hackbitsensor.detectline(DigitalPin.P10, false)) {
        hackbitmotors.MotorRun(hackbitmotors.Motors.M1A, 50)
        hackbitmotors.MotorStop(hackbitmotors.Motors.M1B)
    } else if (hackbitsensor.detectline(DigitalPin.P4, false) && hackbitsensor.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorRun(hackbitmotors.Motors.M1B, 50)
        hackbitmotors.MotorStop(hackbitmotors.Motors.M1A)
    } else if (hackbitsensor.detectline(DigitalPin.P4, true) && hackbitsensor.detectline(DigitalPin.P10, true)) {
        hackbitmotors.MotorStopAll()
    }
})
