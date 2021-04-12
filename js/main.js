start = () => {
    let input_stroke = document.getElementById('stroke').value;
    let golf = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Doble Bogey", "Go Home!"];
    playGolf = (par, strokes) =>{
        return (strokes ==1) ? document.getElementById('output').innerHTML = golf [0]:
        (strokes <= par - 2) ? document.getElementById('output').innerHTML = golf [1]:
        (strokes == par - 1) ? document.getElementById('output').innerHTML = golf [2]:
        (strokes == par ) ? document.getElementById('output').innerHTML = golf [3]:
        (strokes == par + 1) ? document.getElementById('output').innerHTML = golf [4]:
        (strokes <= par + 2) ? document.getElementById('output').innerHTML = golf [5]:
        document.getElementById('output').innerHTML = golf [6];
    }
    result = playGolf(4,input_stroke);
    document.querySelector("#output").textContent = result;
}
restart = () => {
    document.getElementById('stroke').value = " ";
    document.querySelector("#output").textContent = " ";
  }