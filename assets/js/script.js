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
    document.getElementById('contador').innerHTML = '00:00:00';
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

    var format = (hrs < 10 ? '0' + hrs : hrs) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.getElementById('contador').innerHTML = format;
}