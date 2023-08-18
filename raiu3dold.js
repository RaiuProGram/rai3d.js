var sinuasukoht, fov = 120, poore = 0;
var fov1x, fov1y, fov2x, fov2y;w
function c() {
    return document.getElementById("c");  
}
function render(nx, ny, nz) {
    
}

function get1(r, theta) {
    return [r * Math.cos(Math.PI * theta / 180.0), r * Math.sin(Math.PI * theta / 180.0)];
}

function tp() {
    var a = x1 - x2;
    var b = y1 - y2;
    return Math.sqrt( a*a + b*b );
}

function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI;
    return theta;
}