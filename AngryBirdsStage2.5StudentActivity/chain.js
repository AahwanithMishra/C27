class Chain {
    constructor(firstbody, secondbody){
        
        var options = {
            bodyA : firstbody,
            bodyB : secondbody,
            stiffness : 0.05,
            length : 100
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        //line(x1,y1,           x2,y2)
        //bird       log
        strokeWeight(4);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}
