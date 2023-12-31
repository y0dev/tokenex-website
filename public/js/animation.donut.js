// // import "../css/style.css";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "dat.gui";

// // Debug
// const gui = new dat.GUI();

// // Div
// // const div = document.querySelector("#resources div.box");

// // Canvas
// const canvas = document.querySelector("canvas#donut");

// // Scene
// const scene = new THREE.Scene();

// // Objects
// const geometry = new THREE.TorusGeometry(1.0, 0.2, 16, 100);

// // Materials
// const material = new THREE.PointsMaterial({
//   size: 0.005,
// });
// // const material = new THREE.MeshBasicMaterial();
// // material.color = new THREE.Color(0xff0000);

// // Mesh
// const sphere = new THREE.Points(geometry, material);
// scene.add(sphere);

// // Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1);
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.z = 4;
// // scene.add(pointLight);

// /**
//  * Sizes
//  */
// const sizes = {
//   width: canvas.offsetWidth,
//   height: canvas.offsetHeight,
// };

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height / 2,
//   0.1,
//   100
// );
// camera.position.x = 0;
// camera.position.y = 0;
// camera.position.z = 2;
// scene.add(camera);

// // Controls
// // const controls = new OrbitControls(camera, canvas);
// // controls.enableDamping = true;

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// /**
//  * Animate
//  */

// const clock = new THREE.Clock();

// export const animateDonut = () => {
//   const elapsedTime = clock.getElapsedTime();

//   // Update objects
//   //   sphere.rotation.y = 0.5 * elapsedTime;

//   // Update Orbital Controls
//   //   controls.update();

//   // Render
//   renderer.render(scene, camera);

//   // Call tick again on the next frame
//   window.requestAnimationFrame(animateDonut);
// };
