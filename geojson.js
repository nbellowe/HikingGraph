function drawRect(ctx, x,y,w,h){
    ctx.fillStyle = "red";
    ctx.strokeStyle = "orange";
    ctx.drawRect(x,y,w,h);
    ctx.strokeRect(x,y,w,h);
}

var maxDim = 900;
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = window.ctx = canvas.getContext("2d");
var size = canvas.width = canvas.height = 400;
var width = size / tempArray.length;

function getPaths(geoJson){
    var toReturn = [];

    var ftrs = geoJson.features;
    for(var i = 0; i < ftrs.length; i++){
        var ftr = ftrs[i];
        toReturn.push(ftr.geometry.coordinates[0]);
    }

    return toReturn;
}

function getElevationPath(path){

    // query this url with the correct points:
    // https://maps.googleapis.com/maps/api/elevation/json?locations=39.9440287,-105.2901363&key=AIzaSyCNXMjRj14ZmYDOT-EFjwebvSMHua6Ww6A

    //locations=???? and pass that in.
    return [];
}

function makePicture(ctx, 3dPath){
    for(var i=0; i<3dPath.length; i++){
        var z = 3dPath[i][2];
        var proportion = z/maxDim;
        var height = proportion * size
        drawRect(ctx, i*width, size-height, width, height);
    }
}

function main(){
    var geoJson = {};

    var paths = getPaths(geoJson);

    for(var i=0; i<paths.length; i++){
        var path = paths[i];
        var 3dPath = getElevationPath(path);
        makePicture(3dPath);
    }

}
