class SS{
    constructor(a,b){
        var options={
            bodyA : a,
            bodyB : b,
            length : 5,
            stiffness : 0.5
        }

        this.body = Constraint.create(options);
        World.add(world, this.body);

    }


    display(){
        var posA = this.body.bodyA.position;
        var posB = this.body.bodyB.position;

        strokeWeight(5);
        line(posA.x, posA.y, posB.x, posB.y)



    }








}