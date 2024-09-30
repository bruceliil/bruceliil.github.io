// JavaScript Document

import * as THREE from 'three';
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from './three/examples/jsm/environments/RoomEnvironment.js';

$(function(){

    let widScrollT = 0;
    var winH = $(window).height();
    //渲染器
    var renderer,labelRenderer,bloomComposer;
    function initThree(){
        renderer = new THREE.WebGLRenderer({antialias:true,alpha:true})
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xcccccc, 1);
        renderer.setClearAlpha(0)
        renderer.physicallyCorrectLights=true
        document.querySelector(".home_s1_bg .canvas_3d").appendChild(renderer.domElement)


    }

    
    //场景
    var scene;
    function initScene(){
        scene = new THREE.Scene();


    }

    //相机
    var camera;
    function initCamera(){
        camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,0.001, 1000000)
        camera.position.set(0,0,3.3);
    }

    //灯光
    function initLight(){
        // const light = new THREE.HemisphereLight( 0xdddddd, 0xffffff, 1 );
        // scene.add( light );
    }

    //几何体
    function initGeometry(){

        const axesHelper = new THREE.AxesHelper( 5 );
        // scene.add( axesHelper );

        let box_group = new THREE.Group();
        let box_group2 = new THREE.Group();
        let box_group3 = new THREE.Group();
        let cube = new THREE.Group();
       
        // const loadingManager = new THREE.LoadingManager();
        // const textureLoader = new THREE.TextureLoader(loadingManager);

        // let bumpTexture = textureLoader.load('./images/threeimg/Snow005_1K-JPG_NormalGL.jpg')
        // bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping
        // bumpTexture.repeat.set(10,10)
        // let aoTexture = textureLoader.load('./images/threeimg/Snow005_1K-JPG_Displacement.jpg')
        // aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping
        // aoTexture.repeat.set(10,10)

        // let material = new THREE.MeshStandardMaterial({
        //     color:new THREE.Color("rgb(224,228,230)"),
        //     emissive:new THREE.Color("rgba(214,214,214,0.2)"),
        //     emissiveIntensity:0.8,
        //     roughness:1,
        //     metalness:1,
        //     bumpMap :bumpTexture,
        //     envMap:aoTexture
        // })

        const GlbLoader = new GLTFLoader()   
        GlbLoader.load("./images/threeimg/dna1.gltf", (obj) => { 
            // obj.scene.scale.set(0.4,0,0)
            // TweenMax.to( obj.scene.scale,1,{ x: 1, y: 1, z: 1, repeat:0,ease:Power0.easeNone } )
            obj.scene.traverse((item) => {
                if (item.name == "摄像机") {
                    camera =  item.clone()
                }

                if (item.name == "DNA") {
                    let rz = item.rotation.z
                    TweenMax.to( item.rotation,20,{ z: Math.PI*2 + rz, repeat:-1,ease:Power0.easeNone } )
                }
            })

            cube.add(obj.scene);
            
            // cube.traverse((item) => {
            //     if (item.type == "Mesh") {
            //         item.material = material
            //     }

            // })

            
        })

        box_group.add( cube );
        // box_group.rotation.y = Math.PI * 0.5
        // box_group.rotation.z = -Math.PI * 1
        
        box_group2.add( box_group );
        // box_group2.rotation.z = Math.PI * 0.3
        // box_group2.position.x = -0.4
        // box_group2.position.y = -2

        // box_group2.scale.set(1.6,1.6,1.6)
        // box_group2.rotation.y = -Math.PI * 0.4
        // box_group2.position.x = 4

        box_group3.add( box_group2 );

        scene.add(box_group3) 


		$("body").on("mousemove",function(e){
            let x = e.clientX;
            let y = e.clientY;
			box_group3_move(x,y)
		})
        function box_group3_move(x,y){
            let left = x / window.innerWidth * 0.2 + 0.1
            let top = y / window.innerHeight * 0.4
            console.log(left,top)
            TweenMax.to( box_group3.rotation,1,{ y:-left,x:top,  ease:"power1.Out",} )
        }
        box_group3_move(0.5,0.5)

        
        $(window).scroll(function(){
			widScrollT = $(window).scrollTop();
        
			if(widScrollT > 0){
				var box_ry= sMoveFun(0,-0.30, 0, winH*1);
				var box_px= sMoveFun(0,4.2, 0, winH*1);
				var box_py= sMoveFun(0,-1, 0, winH*1);
				var box_scale= sMoveFun(1,1.6, 0, winH*1);

                TweenMax.to( box_group2.rotation, 0.6, { y:Math.PI * box_ry, ease:"power1.Out",} )
                TweenMax.to( box_group2.position, 0.6, { x:box_px,z:box_py, ease:"power1.Out",} )
                TweenMax.to( box_group2.scale, 0.6, { x:box_scale,y:box_scale,z:box_scale, ease:"power1.Out",} )
			}

            let top2 = winH * 8
            if(widScrollT > top2){
				var box_ry2= sMoveFun(-0.34,0, top2, top2 + winH*1);
				var box_px2= sMoveFun(4.5,0, top2, top2 + winH*1);
				var box_py2= sMoveFun(-1,0, top2, top2 + winH*1);
				var box_scale2= sMoveFun(1.6,1, top2, top2 + winH*1);

                TweenMax.to( box_group2.rotation, 0.6, { y:Math.PI * box_ry2, ease:"power1.Out",} )
                TweenMax.to( box_group2.position, 0.6, { x:box_px2,z:box_py2, ease:"power1.Out",} )
                TweenMax.to( box_group2.scale, 0.6, { x:box_scale2,y:box_scale2,z:box_scale2, ease:"power1.Out",} )
			}





        })
        



    }


    function initResize(){
        //更新相机宽高比
        camera.aspect = window.innerWidth / window.innerHeight;
        //更新相机投影矩阵
        camera.updateProjectionMatrix();
        //更新渲染器
        renderer.setSize(window.innerWidth , window.innerHeight)
    }

    //执行初始化
    function threeStart(){
        initThree();
        initScene();
        initCamera();
        initLight();
        initGeometry();
        animation();


        window.addEventListener("resize", initResize)


    }



    //渲染更新
    const clock = new THREE.Clock()
    let t1 = 0;
    function animation(){
        let time = clock.getElapsedTime();
        let t = clock.getElapsedTime() % 10

        // timeUniforms.uTime.value = time;
        // techPass.material.uniforms.uTime.value = time;

        // //更新渲染时执行


        // if(controls){ controls.update() }
        renderer.render(scene, camera);
        requestAnimationFrame(animation);
    }



    threeStart();

    // //操作组件，需要引入OrbitControls.js
    var controls = new OrbitControls(camera,renderer.domElement);//创建控件对象
    controls.enableDamping = true

    //运动函数-滚动触发（元素起始位置，元素结束位置，运动起始位置，运动结束位置）
    var sMoveFun = function(oStart,oEnd,sStart,sEnd){
        var ret;
        if(widScrollT >= sStart && widScrollT <= sEnd){		//运行过程中
            ret = oStart + (oEnd - oStart) / (sEnd - sStart) * (widScrollT - sStart)
        }else if(widScrollT < sStart){	//进入之前
            ret = oStart
        }else if(widScrollT > sEnd){	//离开之后
            ret = oEnd
        }
        return ret;
    }

    

})



