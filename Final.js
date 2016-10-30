/*Author: Miller Kahihu and Tiffany Tang*/
var color = "#000000";
function selectColor(hexcode) 
{
    color = hexcode;
    document.getElementById("hexcode").value = color;
}

function changeColor()
{
    var hex = document.getElementById("hexcode").value;
    if(hex.charAt(0) != "#")
    {
        color = "#" + hex;
        document.getElementById("hexcode").value = color;
    }
    else
    {
        color = hex;
    }
}
function getMousePos(canvas, e) 
{
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
        y: Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
    };
}

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var clickColor = new Array();

function addClick(x, y, dragging)
{
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickColor.push(color)
}

function draw(canvas, pen)
{ 
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.lineJoin = "round";       
    for(var i=0; i < clickX.length; i++) 
    {        
        pen.beginPath();
        pen.lineWidth = 7;
        if(clickDrag[i] && i)
        {
            pen.moveTo(clickX[i-1], clickY[i-1]);
        }
        else
        {
            pen.moveTo(clickX[i]-1, clickY[i]);
        }
        pen.lineTo(clickX[i], clickY[i]);
        pen.closePath();
        pen.strokeStyle = clickColor[i];
        pen.stroke();
    }
}
function main()
{
    canvas = document.getElementById("myCanvas");
    pen = canvas.getContext("2d");
    canvas.addEventListener("mousedown", function(e)
    {      
        var mouse = getMousePos(canvas, e);
        paint = true;
        addClick(mouse.x, mouse.y);
        draw(canvas, pen);
    });
    canvas.addEventListener("mousemove", function(e)
    {
        if(paint)
        {
            var mouse = getMousePos(canvas, e);
            addClick(mouse.x, mouse.y, true);
            draw(canvas, pen);
        }
    });
    canvas.addEventListener("mouseup", function(e)
    {
        paint = false;
    });
}
