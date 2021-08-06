document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const charid = urlParams.get('charid');
    loadCharacter(charid);
}, false);

function loadCharacter(charid) {
    //replacing database connection
    var data = getCharacterData(charid);
    document.getElementById('name').innerHTML = data[0];
    document.getElementById('aka').innerHTML = data[1];
    document.getElementById('race').innerHTML = data[2];
    document.getElementById('nationality').innerHTML = data[3];
    document.getElementById('status').innerHTML = data[4];
    document.getElementById('appearance').innerHTML = data[5];
    document.getElementById('portrayed').innerHTML = data[6];
    document.getElementById('weapon').innerHTML = data[7];
    document.getElementById('height').innerHTML = data[8];
    document.getElementById('dob').innerHTML = data[9];
    document.getElementById('description').innerHTML = data[10];
    document.getElementById('h1').innerHTML = data[0];
    document.getElementById('mainImage').innerHTML = "<img id='poster' src='../images_audio/"+charid+".png' width='280' height='420' alt='"+data[0]+"'></img>";

    if (data[11]!=""){
        document.getElementById('details').innerHTML += "<li>Vehicle: <span id='vehicle'>"+data[11]+"</span></li>";
    }
    
    if (data[12] == "h") {
        document.getElementsByTagName("body")[0].classList.add("hero");
    } else {
        document.getElementsByTagName("body")[0].classList.add("villain");
    }

}


