const crusher = new Tone.BitCrusher(4).toDestination();
const pingPong = new Tone.PingPongDelay("8n", 0.3).connect(crusher);
const synth = new Tone.Synth().connect(pingPong);
const synth2 = new Tone.FMSynth().toDestination();
const keyboard = new AudioKeys({
    rows: 2
});


const temita = new Tone.Loop(function (time) {
    synth.triggerAttackRelease(randomNote(), "8n", time);
    document.getElementById("tempo").innerHTML = Tone.Transport.bpm.value;
}, "8n").start(0);


const temita2 = new Tone.Loop(function (time) {
    synth2.triggerAttackRelease(randomNote2(), "8n", time);
}, "1n").start(0);

function randomNote() {
    // const escala = ["272.2", "302", "360.6", "395.3", "453.7", "544.4", "604.1", "721.2"];
    // const escala = ["602", "643", "708", "828", "887", "950", "1052"];
    const escala = ["A3", "A4", "C4", "B4", "E4", "F3", "G4", "A4"];
    return escala[Math.floor(Math.random() * escala.length)];
}

function randomNote2() {
    // const escala = ["98.83", "113.4", "136.1", "151", "180.3", "197.7", "226.9"];
    // const escala = ["602", "643", "708", "828", "887", "950", "1052"];
    const escala = ["A2", "A3", "C3", "B3", "E3", "F2", "G3", "A3"];
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
    synth2.triggerAttackRelease(key.frequency, "6n");
})