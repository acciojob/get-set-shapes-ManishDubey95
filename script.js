//complete this code
class Rectangle{
    _width;
    _height;
    constructor(width, height){
        this._width = width;
        this._height = height;
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    getArea(){
        return this._width*this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        // Call the constructor of the parent class (Rectangle)
        super(side, side);
    }

    getPerimeter() {
        return 4 * this.width;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
