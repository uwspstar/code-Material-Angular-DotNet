var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillRect(x,y,width,height)
c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(300, 100, 100, 100);
c.fillStyle = 'rgba(300,200,100,0.5)';
c.fillRect(400, 300, 100, 100);


// lines

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();


// arc /cicle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 3, false);
c.strokeStyle = "blue";
c.stroke();


for (var i = 0; i < 3000; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 3, false);
    c.strokeStyle = "blue";
    c.stroke();

}
console.log(canvas);
