def on_numeric_time(hour, minute, second, month, day, year):
    timeanddate.set24_hour_time(13, 30, 0)
timeanddate.numeric_time(on_numeric_time)

strip = neopixel.create(DigitalPin.P0, 43, NeoPixelMode.RGB)

def on_forever():
    basic.show_string(timeanddate.time(timeanddate.TimeFormat.HHMM2_4HR))
basic.forever(on_forever)

def on_forever2():
    if convert_to_text(timeanddate.time(timeanddate.TimeFormat.HHMM2_4HR)) == "13:30":
        strip.show_rainbow(1, 360)
    if convert_to_text(timeanddate.time(timeanddate.TimeFormat.HHMM2_4HR)) == "13:31":
        strip.show_rainbow(1, 360)
basic.forever(on_forever2)
