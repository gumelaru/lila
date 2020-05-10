var data = [
    [22, 'Working late'],
    [18, 'Good evening'],
    [12, 'Good afternoon'],
    [5, 'Good morning'],
    [0, 'Whoa, early bird']
];

hr = new Date().getHours();
for (var i = 0; i< data.length; i++){
    if (hr >= data[i][0]){
        console.log(data[i][1]);
        break;
    }
}

<!DOCTYPE html>
<html>
<body onload="typeWriter()">

<h1>Typewriter</h1>

<button>Click me</button>

<p id="demo"></p>

<script>
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
</script>

</body>
</html>