class Car{
    constructor(make,modle){
        this.make = make
        this.modle = modle
    }
    getDetails(){
        return `${this.make} ${this.modle}`;
    }
}
export {
    Car
}