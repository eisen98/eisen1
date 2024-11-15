import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.module.js';

// 创建场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建一个立方体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 设置相机的位置
camera.position.z = 5;

// 动画循环
function animate() {
  requestAnimationFrame(animate);

  // 让立方体旋转
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // 渲染场景
  renderer.render(scene, camera);
}

animate();

// 监听窗口大小变化
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});