function updateCanvas() {
    background("white");
    randomNumber = math.floor((math.random() * quickDrawDataset) + 1);
    sketch = quickDrawDataset[randomNumber];
    document.getElementById('sketchName').innerHTML = 'Sketch to be draw: ' + sketch
}

function setup() {
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}

function draw() {
    checkSketch()
    if (drawnSketch == sketch)
    {
        answerHolder = "set"
        score++;
        document.getElementById('score').innerHTML = 'Score: ' + score;
    }
}

function checkSketch() {
    timerCounter++;
    document.getElementById('time').innerHTML = 'Timer: ' + timerCounter;
    if(timerCounter > 400){
        timerCounter = 0;
        timerCheck = "completed"
    }
    if(timerCheck =="completed" || answerHolder == "set"){
        timerCheck = "";
        answerHolder = "";
        updateCanvas()
    }
}