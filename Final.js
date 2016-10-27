/*Author: Miller Kahihu and Tiffany Tang*/
var color = "#000000";
function selectColor(hexcode)
{
    color = hexcode;
}
function selectBrush(brush)
{

}
function draw
{
       
}
function getMousePos(canvas, e) 
{
    var rect = canvas.getBoundingClientRect();
    return 
    {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}
function main()
{
    var canvas = document.getElementById("myCanvas");
    var pen = canvas.getContext("2d");
    canvas.addEventListner("mousedown", function(e)
    {
        pen.fillStyle = color;
        getMousePos(canvas, e);
        draw();
    });
}
