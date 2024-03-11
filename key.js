class Key{
    //capitalise class names!
        //constructors execute as soon as an object from this class is created
        constructor (sprite, x, y, size, points){
            //all we're going to do for now is to print the values to the console
            console.log(x);
            console.log(y);
            console.log(points);
    
    }
}

Key = new Key(25,300, 300);

class Key{
    constructor(sprite, x, y, size, points){
        this.sprite = sprite; //note this time we do use = and semi-colons.
				this.x = x;
				this.y = y;
				this.size = size;
				this.points = points;
                this.added;
    }
}
addDimensions() //note! Note function keyword but still use brackets!
    return this.added = this.x + this.y;

