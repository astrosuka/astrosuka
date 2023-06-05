import ByteBeatNode from 'https://greggman.github.io/html5bytebeat/dist/1.x/ByteBeat.module.js';
document.querySelector('#buttonByte').addEventListener('click', playPause);
document.querySelector('#buttonReset').addEventListener('click', resetear);

let g_context;
let g_byteBeatNode;
let g_playing = false;

async function init() {
  g_context = new AudioContext();
  g_context.resume();  // needed for safari
  await ByteBeatNode.setup(g_context);
  g_byteBeatNode = new ByteBeatNode(g_context);
  g_byteBeatNode.setType(ByteBeatNode.Type.byteBeat);
  g_byteBeatNode.setExpressionType(ByteBeatNode.ExpressionType.infix);
  g_byteBeatNode.setDesiredSampleRate(8000);
  await g_byteBeatNode.setExpressions(['129*t%(t>>7)']);
}

async function playPause() {
  if (!g_context) {
    await init();
  }
  if (!g_playing) {
    g_playing = true;
    g_byteBeatNode.connect(g_context.destination);
  } else {
    g_playing = false;
    g_byteBeatNode.disconnect();
  }
}
function resetear(){
    g_byteBeatNode.reset()
}
