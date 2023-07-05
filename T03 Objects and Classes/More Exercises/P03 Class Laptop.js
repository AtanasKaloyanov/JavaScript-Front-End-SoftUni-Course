class Laptop {
    info = {
        producer: '',
        age: 0,
        brand: ''
    }

    isOn = false
    quality = 0

    constructor(info, quality) {
        this.info = info
        this.quality = quality
    }

    turnOn() {
        this.isOn = true
        this.quality--
    }

    turnOff() {
        this.isOn = false
        this.quality--
    }

    showInfo() {
        return JSON.stringify(this.info)
    }

    get price() {
        return 800 - this.info.age * 2 + this.quality * 0.5
    }

}

// Inputs:

// let info = { producer: "Dell", age: 2, brand: "XPS" }
// let laptop = new Laptop(info, 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// console.log(laptop.quality)
// laptop.turnOn()
// console.log(laptop.isOn)
// console.log(laptop.price)

// let info = {producer: "Lenovo", age: 1, brand: "Legion"}
// let laptop = new Laptop(info, 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// laptop.turnOn()
// laptop.turnOff()
// console.log(laptop.isOn)

