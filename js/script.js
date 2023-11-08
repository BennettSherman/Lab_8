function init(){
    var button = document.getElementById('entrybutton');

    function revealText(){
        var textbox = document.getElementById('entryinput');
        document.getElementById('textoutput').innerHTML = textbox.value;
        alert("Bennett Sherman:  " + textbox.value);
    }

    button.addEventListener('click', revealText);
}

window.addEventListener('load', init);
