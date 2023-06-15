input.onButtonPressed(Button.A, function () {
    SENColor.calibrate()
})
led.enable(false)
basic.forever(function () {
    basic.pause(1000)
    serial.writeValue("Verde Direita", SENColor.getColor(color.green))
    if (SENColor.getColor(color.green) > 210 && SENColor.getColor(color.green) < 250) {
    	
    }
})
