input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    cakLandPump.pumpStart(cakLand.BoardSide.RIGHT, 100)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    cakLandPump.pumpStop(cakLand.BoardSide.RIGHT)
})
