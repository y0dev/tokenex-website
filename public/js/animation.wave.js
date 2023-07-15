import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import circle from "../img/circle.png";

let f = 0.002;
let t = 0;
let a = 3;
function graph(x, z) {
  return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
}

// Div
// const div = document.querySelector("#resources div.box");

// Canvas
const canvas = document.querySelector("canvas#wave");

/**
 * Sizes
 */
const sizes = {
  width: canvas.offsetWidth,
  height: canvas.offsetHeight,
};

// Scene
const scene = new THREE.Scene();

const count = 75;
const sep = 2.5;

const positions = [];
for (let xi = 0; xi < count; xi++) {
  for (let zi = 0; zi < count; zi++) {
    let x = sep * (xi - count / 2);
    let z = sep * (zi - count / 2);
    let y = 0; //graph(x, z);
    positions.push(x, y, z);
  }
}
const vertices = new Float32Array(positions);

// Attribute
const attribute = new THREE.BufferAttribute(vertices, 3);
attribute.count = positions.length / 3;

// Objects
const geometry = new THREE.BufferGeometry({});
geometry.setAttribute("position", attribute);

// Text Loader
const circleTexture = new THREE.TextureLoader().load("../img/circle.png");
circleTexture.minFilter = THREE.LinearFilter;
circleTexture.magFilter = THREE.LinearFilter;

const material = new THREE.PointsMaterial({
  map: circleTexture,
  color: 0xffffff,
  size: 1,
  transparent: false,
  alphaTest: 0.5,
  opacity: 1,
});

// Mesh
const sphere = new THREE.Points(geometry, material);
scene.add(sphere);

// Base camera
const camera = new THREE.PerspectiveCamera();
camera.fov = 75;
camera.position.x = 10;
camera.position.y = 30;
camera.position.z = 140;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setClearColor(0x202124);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

export function animateWave() {
  const elapsedTime = clock.getElapsedTime();
  t += 15;
  // a += 0.1;
  let i = 0;
  for (let xi = 0; xi < count; xi++) {
    for (let zi = 0; zi < count; zi++) {
      let x = sep * (xi - count / 2);
      let z = sep * (zi - count / 2);
      vertices[i + 1] = graph(x, z);
      i += 3;
    }
  }
  // Update the buffer attribute
  attribute.needsUpdate = true;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(animateWave);
}

export function onWindowResizeForWave() {
  // camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
}

// function createTweenScrubber(tween, seekSpeed) {
//   seekSpeed = seekSpeed || 0.001;

//   function stop() {
//     TweenMax.to(tween, 2, { timeScale: 0 });
//   }

//   function resume() {
//     TweenMax.to(tween, 2, { timeScale: 1 });
//   }

//   function seek(dx) {
//     var progress = tween.progress();
//     var p = THREE.Math.clamp(progress + dx * seekSpeed, 0, 1);

//     tween.progress(p);
//   }

//   var _cx = 0;

//   // desktop
//   var mouseDown = false;
//   document.body.style.cursor = "pointer";

//   window.addEventListener("mousedown", function (e) {
//     mouseDown = true;
//     document.body.style.cursor = "ew-resize";
//     _cx = e.clientX;
//     stop();
//   });
//   window.addEventListener("mouseup", function (e) {
//     mouseDown = false;
//     document.body.style.cursor = "pointer";
//     resume();
//   });
//   window.addEventListener("mousemove", function (e) {
//     if (mouseDown === true) {
//       var cx = e.clientX;
//       var dx = cx - _cx;
//       _cx = cx;

//       seek(dx);
//     }
//   });
//   // mobile
//   window.addEventListener("touchstart", function (e) {
//     _cx = e.touches[0].clientX;
//     stop();
//     e.preventDefault();
//   });
//   window.addEventListener("touchend", function (e) {
//     resume();
//     e.preventDefault();
//   });
//   window.addEventListener("touchmove", function (e) {
//     var cx = e.touches[0].clientX;
//     var dx = cx - _cx;
//     _cx = cx;

//     seek(dx);
//     e.preventDefault();
//   });
// }
