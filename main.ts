// main.ts
// Add your code here
namespace usercode {
    /**
     * Inicializa el PCA9685 y establece un servo.
     */
    //% block="Inicializar PCA9685 en la dirección $address"
    export function inicializarPCA9685(address: number): void {
        PCA9685.init(address); // Inicializa el chip PCA9685
        PCA9685.setDebug(true); // Habilita la depuración
    }

    /**
     * Establece la posición de un servo.
     * @param servoNum Número del servo (1-16).
     * @param degrees Grados (0-180) a los que mover el servo.
     * @param address Dirección I2C del PCA9685.
     */
    //% block="Establecer servo $servoNum a $degrees grados en la dirección $address"
    export function establecerServo(servoNum: PCA9685.ServoNum, degrees: number, address: number): void {
        PCA9685.setServoPosition(servoNum, degrees, address);
    }

    /**
     * Establece el ciclo de trabajo de un LED conectado al PCA9685.
     * @param ledNum Número del LED (1-16).
     * @param dutyCycle Ciclo de trabajo (0-100) para el LED.
     * @param address Dirección I2C del PCA9685.
     */
    //% block="Establecer LED $ledNum con ciclo de trabajo $dutyCycle en la dirección $address"
    export function establecerLED(ledNum: PCA9685.LEDNum, dutyCycle: number, address: number): void {
        PCA9685.setLedDutyCycle(ledNum, dutyCycle, address);
    }
}