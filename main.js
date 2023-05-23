function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 150, 100, 250, 250);
    fill("green");
    stroke("green");
    rect(50, 20, 480, 15);
    rect(50, 390, 480, 15);
    rect(25, 40, 15, 350);
    rect(545, 40, 15, 350);

    fill("red");
    stroke("red");
    circle(30, 30, 60);
    circle(550, 30, 60);
    circle(30, 400, 60);
    circle(550, 400, 60);
}

function take_snapshot(){
    save('studenta_name.png');
}