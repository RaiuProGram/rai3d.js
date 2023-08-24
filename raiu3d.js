var r3ds, r3dg, r3df;

r3d.can_name = "c";


r3d.start = function() {
    //Game 1
    r3dg.location_x, r3dg.location_y, r3dg.location_z;
    //Game 2
    r3dg.fov, r3dg.view_angle_x, r3dg.view_angle_z;
    //Files html
    r3df.can = function() {return document.getElementById(r3d.can_name);}, r3f.ctx;
    //Files vahe
    r3df.point_deg;
}


function render(nx, ny, nz) {
    r3df.point_deg = Math.atan2(nx, ny) * 180 / Math.PI;

}

function angle(x, y) {
    return Math.atan2(x, y) * 180 / Math.PI;
}


function draw() {
    ctx = can().getContext('2d');
    ctx.beginPath();
    ctx.arc(pa, 300, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();
}