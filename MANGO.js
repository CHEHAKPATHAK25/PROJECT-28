class MANGO {
    Constructor (r) {
        var options = {
            isStatic : true,
            restitution : 0,
            frictiopn : 1
        }
        this.body = Bodies.circle(x,y,{r : 5},options);
        this.image = loadImage("");
        scale.Image(4);
        World.add(world,this.body);
    }
    display() {
        image(this.image,x,y,width)
        imageMode(CENTER);
    }
}