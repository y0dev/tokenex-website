import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Canvas
const canvas1 = document.querySelector(".image canvas#pcb");

/**
 * Sizes
 */
const sizes = {
  width1: canvas1.offsetWidth,
  height1: canvas1.offsetHeight,
};

// Scene
const scene = new THREE.Scene();

// Create a circular path for the PCB board outline
const radius = 50; // Specify the radius of the PCB board
const segments = 100; // Specify the number of segments to create a smooth circular shape
const path = new THREE.Path();
path.absarc(0, 0, radius, 0, Math.PI * 2, false);

// Define the extrusion settings for the PCB board outline
const extrusionSettings = {
  depth: 1, // Specify the thickness of the PCB board
  bevelEnabled: false, // Disable bevel for a simple outline
};

// // Create the geometry by extruding the circular path
// const geometry = new THREE.ExtrudeGeometry(path, extrusionSettings);

// // Create a material for the PCB board
// const material = new THREE.MeshBasicMaterial({ color: 0x555555 });

// // Create the mesh using the geometry and material
// const pcbBoard = new THREE.Mesh(geometry, material);

// // Add the PCB board mesh to the scene
// scene.add(pcbBoard);

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

// Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

/**
 * Animate
 */
const clock = new THREE.Clock();

export function animatePCB() {
  const elapsedTime = clock.getElapsedTime();

  // Render
  renderer1.render(scene, camera);

  // Update Orbital Controls
  //   controls.update();

  // Call tick again on the next frame
  window.requestAnimationFrame(animatePCB);
}

export function onWindowResizeForPCB() {
  // camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer1.setSize(sizes.width1, sizes.height1);
}
