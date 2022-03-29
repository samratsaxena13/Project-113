function preload() {
}

function setup() {
    canvas = createCanvas(550, 450);
    canvas.position(390, 100);
    video = createCapture(VIDEO);
    video.hide();
}


function draw() {
    
    fill(159,42,83);
    stroke(159,42,83);
    rect(0, 0, 550, 450);
    
    image(video, 25, 25, 500, 400);

    fill(216, 112, 147);
    stroke(255, 192, 203);
    circle(0, 0, 100);

    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(55, 8, 40, 10);

    fill(216, 112, 147);
    stroke(255, 192, 203);
    circle(105, 13, 10);
    circle(115, 13, 10);
    circle(125, 13, 10);
    circle(135, 13, 10);
    circle(145, 13, 10);

    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(155, 8, 40, 10);

    fill(216, 112, 147);
    stroke(255, 192, 203);
    circle(205, 13, 10);
    circle(215, 13, 10);
    circle(225, 13, 10);
    circle(235, 13, 10);
    circle(245, 13, 10);

    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(255, 8, 40, 10);

    fill(216, 112, 147);
    stroke(355, 192, 203);
    circle(305, 13, 10);
    circle(315, 13, 10);
    circle(325, 13, 10);
    circle(335, 13, 10);
    circle(345, 13, 10);

    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(355, 8, 40, 10);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(405, 13, 10);
    circle(415, 13, 10);
    circle(425, 13, 10);
    circle(435, 13, 10);
    circle(445, 13, 10);
    
    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(455, 8, 40, 10);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(550, 0, 100)

    fill(255, 192, 203);
    stroke(216, 112, 147);
    circle(550, 75, 50);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(550, 150, 100)

    fill(255, 192, 203);
    stroke(216, 112, 147);
    circle(550, 225, 50);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(550, 300, 100)

    fill(255, 192, 203);
    stroke(216, 112, 147);
    circle(550, 375, 50);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(550, 450, 100)

    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(55, 433, 40, 10);

    fill(216, 112, 147);
    stroke(255, 192, 203);
    circle(105, 438, 10);
    circle(115, 438, 10);
    circle(125, 438, 10);
    circle(135, 438, 10);
    circle(145, 438, 10);

    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(155, 433, 40, 10);

    fill(216, 112, 147);
    stroke(255, 192, 203);
    circle(205, 438, 10);
    circle(215, 438, 10);
    circle(225, 438, 10);
    circle(235, 438, 10);
    circle(245, 438, 10);

    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(255, 433, 40, 10);

    fill(216, 112, 147);
    stroke(355, 192, 203);
    circle(305, 438, 10);
    circle(315, 438, 10);
    circle(325, 438, 10);
    circle(335, 438, 10);
    circle(345, 438, 10);

    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(355, 433, 40, 10);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(405, 438, 10);
    circle(415, 438, 10);
    circle(425, 438, 10);
    circle(435, 438, 10);
    circle(445, 438, 10);
    
    fill(255, 192, 203);
    stroke(216, 112, 147);
    rect(455, 433, 40, 10);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(550, 0, 100)

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(0, 0, 100)

    fill(255, 192, 203);
    stroke(216, 112, 147);
    circle(0, 75, 50);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(0, 150, 100)

    fill(255, 192, 203);
    stroke(216, 112, 147);
    circle(0, 225, 50);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(0, 300, 100)

    fill(255, 192, 203);
    stroke(216, 112, 147);
    circle(0, 375, 50);

    fill(216, 112, 147);
    stroke(455, 192, 203);
    circle(0, 450, 100)

}

function take_snapshot() {
    save('picture.png');
}