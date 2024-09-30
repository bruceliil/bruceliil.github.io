import * as THREE from 'three';
import { OrbitControls } from '../three/examples/jsm/controls/OrbitControls.js';

// 加载着色器文件的函数
async function loadShader(url) {
    const response = await fetch(url);
    return await response.text();
}

async function init() {
    // 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xcccccc, 1);
    renderer.setClearAlpha(0);
    renderer.physicallyCorrectLights = true;
    document.querySelector(".home_s1_bg .canvas_3d").appendChild(renderer.domElement);

    // 场景
    const scene = new THREE.Scene();

    // 相机
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 1000000);
    camera.position.set(0, 0, 8);

    // 控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // 加载顶点和片段着色器
    const vertexShader = await loadShader('./shaders/vertexShader.glsl');
    const fragmentShader = await loadShader('./shaders/fragmentShader.glsl');

    // 几何体和材质
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
            iTime: {value: 0},
            iResolution: {value: new THREE.Vector3()}
        }
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 调整窗口大小时更新渲染器和相机
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // 渲染循环
    function animate(time) {
        // 更新 uniform 变量以便着色器进行渲染
        material.uniforms.iTime.value = time * 0.001;
        material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight, 1);
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate(0);
}

init();