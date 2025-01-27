cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 0)
basic.showIcon(IconNames.Happy)
if (!(input.buttonIsPressed(Button.A))) {
	
}
basic.forever(function () {
    I2C_LCD1602.ShowString("micro bit", 0, 0)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 50)
    }
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Left_Z_Motor, 0)
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Right_Z_Motor, 100)
    }
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Left_Z_Motor, 100)
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Right_Z_Motor, 0)
    }
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 50)
    }
})
