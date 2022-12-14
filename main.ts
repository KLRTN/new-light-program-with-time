timeanddate.numericTime(function (hour, minute, second, month, day, year) {
    timeanddate.set24HourTime(13, 30, 0)
})
let strip = neopixel.create(DigitalPin.P0, 43, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HHMM24hr))
})
basic.forever(function () {
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "08:55") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "08:56") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "08:57") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "08:58") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "08:59") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
basic.forever(function () {
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "10:25") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "10:26") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "10:27") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "10:28") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "10:29") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
basic.forever(function () {
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "11:55") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "11:56") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "11:57") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "11:58") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "11:59") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
basic.forever(function () {
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "12:30") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "12:31") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "12:32") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "12:33") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "12:34") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
basic.forever(function () {
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "13:00") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "13:01") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "13:02") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "13:03") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "13:04") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
basic.forever(function () {
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:30") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:31") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:32") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:33") {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:34") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
basic.forever(function () {
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:30") {
        strip.showRainbow(1, 360)
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:31") {
        strip.showRainbow(1, 360)
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:32") {
        strip.showRainbow(1, 360)
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:33") {
        strip.showRainbow(1, 360)
    }
    if (convertToText(timeanddate.time(timeanddate.TimeFormat.HHMM24hr)) == "14:34") {
        strip.showRainbow(1, 360)
    }
})
