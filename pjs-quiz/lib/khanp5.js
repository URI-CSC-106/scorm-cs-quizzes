// Remaps graphical Khan Academy/p5js functions to void.

var CENTER = null;
var CORNER = null;
var UP = null;
var LEFT = null;
var RIGHT = null;
var DOWN = null;
var imageMode = function(a){return false;};
var translate = function(){return 0;};
var transform = function(){return 0;};
var scale = function(){return 0;};
var pushMatrix = function(){return 0;};
var popMatrix = function(){return 0;};
var resetMatrix = function(){return 0;};
var applyMatrix = function(){return 0;};
var rotate = function(){return 0;};
var rotateZ = function(){return 0;};
var shearX = function(){return 0;};
var shearY = function(){return 0;};
var redraw = function(){return 0;};
var toImageData = function(){return 0;};
var ambientLight = function(){return 0;};
var directionalLight = function(){return 0;};
var lightFalloff = function(){return 0;};
var lightSpecular = function(){return 0;};
var pointLight = function(){return 0;};
var noLights = function(){return 0;};
var spotLight = function(){return 0;};
var beginCamera = function(){return 0;};
var endCamera = function(){return 0;};
var frustum = function(){return 0;};
var box = function(){return 0;};
var sphere = function(){return 0;};
var ambient = function(){return 0;};
var emissive = function(){return 0;};
var shininess = function(){return 0;};
var specular = function(){return 0;};
var fill = function(){return 0;};
var stroke = function(){return 0;};
var strokeWeight = function(){return 0;};
var smooth = function(){return 0;};
var noSmooth = function(){return 0;};
var point = function(){return 0;};
var vertex = function(){return 0;};
var endShape = function(){return 0;};
var bezierVertex = function(){return 0;};
var curveVertex = function(){return 0;};
var curve = function(){return 0;};
var line = function(){return 0;};
var bezier = function(){return 0;};
var rect = function(){return 0};
var ellipse = function(){return 0;};
var background = function(){return 0;};
var image = function(){return 0;};
var getImage = function(){return 0;};
var textWidth = function(){return 0;};
var text$line = function(){return 0;};
var $ensureContext = function(){return 0;};
var $newPMatrix = function(){return 0;};
var triangle = function(){return 0;};
var arc = function(){return 0;};
var quad = function(){return 0;};
var beginShape = function(){return 0;};
var endShape = function(){return 0;};
var noFill =function(){return 0;};
var noStroke = function(){return 0;};
var color = function(){return 0;};
var blendColor = function(){return 0;};
var lerpColor = function(){return 0;};
var capturedTextValues = [];

var text = function(value){capturedTextValues.push(value); return 0;};
var textSize = function(){return 0;};
var textFont = function(){return 0;};
var mouseIsPressed = null;
var width = 400;
var height = 400;
var draw = function(fn){fn(); return 0;};
var playSound = function(){return 0;};
var mouseX = function(){return 0;};
var mouseY = function(){return 0;};
var rectMode = function(){return 0;};
var pmouseX = function(){return 0;};
var mouseClicked = function(){return 0;};
var mousePressed = function(){return 0;};
var mouseReleased = function(){return 0;};
var mouseMoved = function(){return 0;};
var mouseDragged = function(){return 0;};
var mouseOver = function(){return 0;};
var mouseOut = function(){return 0;};
var key = 0;
var keyCode = 0;
var keyIsPressed = function(){return 0;};
var keyPressed = function(){return 0;};
var keyReleased = function(){return 0;};
var keyTyped = function(){return 0;};
var random = function(low, high) {
  return (low + high) / 2;
};

var dist = function(x1, y1, x2, y2){
  return (y2-y1)/(x2-x1);return 0;
}
var constrain = function(){return 0;};
var min = function(){return 0;};
var max = function(){return 0;};
var abs = function(){return 0;};
var log = function(){return 0;};
var pow = function(x, y){ return Math.pow(x, y);};
var sq = function(n){return n*n;};
var sqrt = function(){return 0;};
var round = function(number){return Math.round(number);};
var ceil = function(number){return Math.ceil(number);};
var floor = function(number){return Math.floor(number);};
var PVector = function(){return 0;};
var cos = function(){return 0;};
var sin = function(){return 0;};
var tan = function(){return 0;};
var day = function(){return 0;};
var month = function(){return 0;};
var hour = function(){return 0;};
var minute = function(){return 0;};
var second = function(){return 0;};
var millis = function(){return 0;};
var debug = function(){return 0;};
var size = function(){return 0;}

var println = function(value){capturedPrintValues.push(value)};
var print = function(value){capturedPrintValues.push(value)};

// Set an aalsis 
let autograder = application.remote;
