const crusher = new Tone.BitCrusher(4).toDestination();
const rvb = new Tone.Reverb(20).toDestination();
const pingPong = new Tone.PingPongDelay("8n", 0.3).connect(crusher);
const synth1 = new Tone.Synth().connect(pingPong);
const synth2 = new Tone.FMSynth().toDestination();
const synth3 = new Tone.MembraneSynth().connect(crusher);
const keyboard = new AudioKeys({
    rows: 2
});

const loop1 = new Tone.Loop(function (time) {
    synth1.triggerAttackRelease(randomNote(), "8n", time);
    document.getElementById("tempo").innerHTML = Tone.Transport.bpm.value;
}, "8n").start(0);

loop1.probability = 0.6;


const loop2 = new Tone.Loop(function (time) {
    synth2.triggerAttackRelease(randomNote2(), "8n", time);
}, "1n").start(0);

loop2.probability = 0.5;

const loop3 = new Tone.Loop(function (time) {
    synth3.triggerAttackRelease(60, "8n", time);
}, "8n").start(10);

loop3.probability = 0.3;

// const loopFx = new Tone.Loop(function (time){

// }, "1n").start(0);


function randomNote() {
    // const escala = ["272.2", "302", "360.6", "395.3", "453.7", "544.4", "604.1", "721.2"];
    // const escala = ["602", "643", "708", "828", "887", "950", "1052"];
    // const escala = ["A3", "A4", "C4", "B4", "E4", "F3", "G4", "A4"];
    const escala =  ['C4', 'Db4', 'Eb4', 'G4', 'Ab4'];
    return escala[Math.floor(Math.random() * escala.length)];
}

function randomNote2() {
    // const escala = ["98.83", "113.4", "136.1", "151", "180.3", "197.7", "226.9"];
    // const escala = ["602", "643", "708", "828", "887", "950", "1052"];
    // const escala = ["A2", "A3", "C3", "B3", "E3", "F2", "G3", "A3"];
    const escala =  ['C4', 'Db4', 'Eb4', 'G4', 'Ab4'];
    return escala[Math.floor(Math.random() * escala.length)];
}
Tone.Transport.bpm.value = 142.6167756;
function playIt() {
    Tone.start();
    Tone.Transport.start();
    Tone.Transport.bpm.rampTo(142.6167756, 77);
}

function stopIt() {
    Tone.Transport.stop();
}

function acelera() {
    Tone.Transport.bpm.rampTo(7000, 77);
}
function lentito() {
    Tone.Transport.bpm.rampTo(7, 77);
}

keyboard.down((key) => {
    Tone.start();
    synth1.triggerAttackRelease(key.frequency, "16n");
})

