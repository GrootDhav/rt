function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseRealsed(classifyCanvas);
}

function preload()
{
    classifier=ml5.imageClassifier('Doodle Net')

}

[7:52 pm, 08/11/2022] Shruti dixit Whitehat Ma’am: quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","com…
[7:53 pm, 08/11/2022] Shruti dixit Whitehat Ma’am: function updateCanvas() {
  background("white");
  random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
  console.log(quick_draw_data_set[random_number]);
  sketch = quick_draw_data_set[random_number];
  document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;
}
[7:53 pm, 08/11/2022] Shruti dixit Whitehat Ma’am: function draw() {
  // Set stroke weight to 10
  strokeWeight(13);
  // Set stroke color to black
  stroke(0);
  // If mouse is pressed, draw line between previous and current mouse positions
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  check_sketch()
  if(drawn_sketch == sketch)
  {
    answer_holder = "set"
    score++;
    document.getElementById('score').innerHTML = 'Score: ' + score;
  }

}

function classifyCanvas() {
  classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  drawn_sketch = results[0].label;
  document.getElementById('label').innerHTML = 'Your Sketch: ' + drawn_sketch;

  document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
}


function check_sketch()
{
  timer_counter++;
  document.getElementById('time').innerHTML = 'Timer: ' + timer_counter;
  console.log(timer_counter)
  if(timer_counter > 400)
    {
      timer_counter = 0;
      timer_check = "completed"
    }
    if(timer_check =="completed" || answer_holder == "set")
    {
      timer_check = "";
      answer_holder = "";
      updateCanvas();
    }

}