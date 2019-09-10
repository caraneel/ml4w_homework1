let myMobileNet;
let myVideo;
let img;

function preload() {
  myVideo = createCapture(VIDEO);
  myMobileNet = ml5.imageClassifier("MobileNet");
  img = loadImage('assets/4eyes.jpg');

}

function setup() {
  // console.log(myMobileNet);
  createCanvas(600, 400);
  background(0);
  myMobileNet.classify(myVideo, gotResults);
  myDiv = createElement('div', '');
  myVideo.hide();


  //query
  textSize(25);
  fill(255);
  text('how many eyes do you have?', 10, 40);

}

function classifyVideo() {
  classifier.classify(gotResult);
}


function gotResults(err, results) {

  let words = ["sunglasses", "water bottle", "pen"];

  const result = results[0].label;

  // Split the first result string by comma and get the first word
  const oneWordRes = result.split(',')[0];

  // Get the top 3 results as strings in an array
  const top3Res = results.map(r => r.label);
  console.log(top3Res);

  //look for glasses
  if (top3Res.includes("sunglass")) {
        background(0);
    console.log("four eyes");
    textSize(30);
    fill(255);
    text("four eyes!", width / 3, 40);
    image(img, 50, 50, img.width / 2, img.height /2);

  } else {
    background(0);
    text("two eyes!", width / 3, height / 2);
  }


  // myDiv.html(results[0].label);
  myMobileNet.classify(myVideo, gotResults);

}

function draw() {

}
