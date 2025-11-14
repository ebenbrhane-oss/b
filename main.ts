radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.go(BBDirection.Forward, 100)
        bitbot.setLedColor(0x00FF00)
    } else if (receivedNumber == 1) {
        bitbot.rotate(BBRobotDirection.Left, 60)
        bitbot.setLedColor(0xFF8000)
    } else if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Right, 60)
        bitbot.setLedColor(0x00FFFF)
    } else if (receivedNumber == 3) {
        bitbot.stop(BBStopMode.Coast)
        bitbot.setLedColor(0xFF0000)
    }
})
radio.setGroup(1)
