import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Canvas
const canvas1 = document.querySelector(".box canvas#globe");
const canvas2 = document.querySelector(".image canvas#globe");

/**
 * Sizes
 */
const sizes = {
  width1: canvas1.offsetWidth,
  height1: canvas1.offsetHeight,
  width2: canvas2.offsetWidth,
  height2: canvas2.offsetHeight,
};

// Scene
const scene = new THREE.Scene();

const count = 1600;
const sep = 5;
const positions = [];
const scales = [];
for (let idx = 0; idx < count; idx++) {
  const u = Math.random() * 2 - 1;
  const v = Math.random() * 2 - 1;
  const theta = Math.PI * u;
  const phi = 2 * Math.PI * v;
  let x = sep * Math.sin(theta) * Math.cos(phi);
  let y = sep * Math.sin(theta) * Math.sin(phi);
  let z = sep * Math.cos(theta);
  positions.push(x, y, z);
  // Random initial scale between 0.5 and 1.0
  scales.push(Math.random() * 0.5 + 0.5);
}

const vertices = new Float32Array(positions);
const scalesAttribute = new THREE.Float32BufferAttribute(scales, 1);

// Attribute
const attribute = new THREE.BufferAttribute(vertices, 3);
attribute.count = positions.length / 3;

// Create a geometry for the sphere
const radius = 2;
const detail = 32;
const geometry = new THREE.SphereGeometry(radius, detail, detail);
geometry.setAttribute("position", attribute);
geometry.setAttribute("scale", scalesAttribute);

// Text Loader
const circleTexture = new THREE.TextureLoader().load("../img/circle.png");
circleTexture.minFilter = THREE.LinearFilter;
circleTexture.magFilter = THREE.LinearFilter;

// Create a material for the points
const material = new THREE.PointsMaterial({
  map: circleTexture,
  color: 0xffffff,
  size: 0.2,
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
camera.position.z = 15;
scene.add(camera);

/**
 * Renderer
 */
const renderer1 = new THREE.WebGLRenderer({
  canvas: canvas1,
});
// renderer.setClearColor(0x202124);
renderer1.setSize(sizes.width1, sizes.height1);
renderer1.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const renderer2 = new THREE.WebGLRenderer({
  canvas: canvas2,
});
renderer2.setClearColor(0x202124);
renderer2.setSize(sizes.width2, sizes.height2);
renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

/**
 * Animate
 */
const clock = new THREE.Clock();

export function animateSphere() {
  const elapsedTime = clock.getElapsedTime();
  const scaleSpeed = 0.5; // Speed of the pulsing animation

  for (let i = 0; i < count; i++) {
    scales[i] = Math.abs(Math.sin(elapsedTime * scaleSpeed + i * 0.1)); // Adjust the scale based on time and index
  }

  // Update the buffer attribute
  scalesAttribute.needsUpdate = true;

  // Rotate the points object
  sphere.rotation.y += 0.005;

  // Render
  renderer1.render(scene, camera);
  renderer2.render(scene, camera);

  // Update Orbital Controls
  //   controls.update();

  // Call tick again on the next frame
  window.requestAnimationFrame(animateSphere);
}

export function onWindowResizeForSphere() {
  // camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer1.setSize(sizes.width1, sizes.height1);
  renderer2.setSize(sizes.width2, sizes.height2);
}
