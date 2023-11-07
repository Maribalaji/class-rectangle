
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;

    }
    area(){
        console.log("Area of rectangle is "+ this.width*this.height);
    }
    perimeter(){
        let c=2*(this.width+this.height)
        console.log(`perimeter of rectangle is ${c}`);
    }
}
let user=new Rectangle(10,10);
user.area();
user.perimeter();
