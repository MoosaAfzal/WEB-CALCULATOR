var x = document.getElementById("Audio")
// function to clear the screen
function ClearScreen () {
    document.getElementById("Display").value = "";
    x.play()
}
// function to display values when button is Clicked
function Display(Value) {
    document.getElementById("Display").value += Value;
    x.play()
}
// function to solve and give result
function Calculate() {
    var a = document.getElementById("Display").value;
    var b = eval(a);
    document.getElementById("Display").value = b;
    x.play()
}
// function to delete one value
function Delete() {
    let a = document.getElementById("Display");
    let b = a.value;
    a.value = b.substring(0,b.length-1);
    x.play()
}