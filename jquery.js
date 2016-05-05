<html>
    <body>
        <canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
        Your browser does not support the HTML5 canvas tag.
        </canvas>

        <script>
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        // Syntax: ctx.arc(x,y,r,startAngle,endAngle,counterclockwise(boolean) );
        ctx.beginPath();  //start drawing
        ctx.arc(95,50,40,0,2*Math.PI);  //draw arc whose x is 95, y is 50, radius 40, start at 0 angle, end at 2*Math.PI angle
        ctx.stroke();  //end drawing
        ctx.beginPath();  //start drawing
        ctx.arc(80,40,10,0,2*Math.PI); //draw smaller cirle (because circle above is bigger)
        ctx.stroke();  //end drawing
        ctx.closePath();
        </script>
    </body>
</html>