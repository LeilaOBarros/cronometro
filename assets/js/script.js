"use strict"

var hrs = 0;
var min = 0;
var seg = 0;

var tempo = 1000; //1 segundo equivale a 1000 milésimos
var crono;

function iniciar() {
    crono = setInterval(() => {cronometro();}, tempo);
}

function pausar() {
    clearInterval(crono);
}

function parar() {
    clearInterval(crono);
    hrs = 0;
    min = 0;
    seg = 0;
    document.getElementById('contador').innerHTML = '00h:00m:00s';
}

function cronometro () {
    seg++;

    if(seg == 60){
        seg = 0;
        min++;

        if(min == 60){
            min = 0;
            hrs++
        }
    }

    var format = (hrs < 10 ? '0' + hrs : hrs) + 'h:' + (min < 10 ? '0' + min : min) + 'm:' + (seg < 10 ? '0' + seg : seg) + 's';
    document.getElementById('contador').innerHTML = format;
}