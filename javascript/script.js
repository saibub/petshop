
function imageChanger(value) {
    var img = document.getElementById("imgf");
    var newimg = value; 
    img.innerHTML = `<img id="img" src="assets/images/${newimg}.jpg" alt="Cute dog image" />`;
}