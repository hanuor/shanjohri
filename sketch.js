function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255, 204, 0);
//
//    beginShape();
//    fill(255,191,0);
//    vertex(100,240);
//    vertex(200,180);
//    vertex(220,120);
//    vertex(160,140);
//    vertex(420,120);
//    vertex(320,160);
//    vertex(400, 180);
//    vertex(280, 200);
//    vertex(260,240);
//    endShape();
    

}

function draw(){
    for(var x = 50; x <= width-50;x +=50 ){
        for(var y = 50; y <= height-50;y +=50 ){
            line(x-5, y-5, x+5, y+5);
            line(x+5, y-5, x-5, y+5);
        }
    }
    
}