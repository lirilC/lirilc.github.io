import * as THREE from 'three';


const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.17, 0.3, 0.06 );
const material = new THREE.MeshNormalMaterial();

var Vv11 = new THREE.Object3D();
const Vv11c = new THREE.Mesh( geometry, material );


const Vv11w = new THREE.Shape();
Vv11w.absarc(0, 0, 0.02);

// Create a new geometry by extruding the triangleShape
// The option: 'amount' is how far to extrude, 'bevelEnabled: false' prevents beveling
var Vv11w1 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
var Vv11w2 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
var Vv11w3 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
var Vv11w4 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});

// Geometry doesn't do much on its own, we need to create a Mesh from it
var Vv11w1 = new THREE.Mesh(Vv11w1, material);
var Vv11w2 = new THREE.Mesh(Vv11w2, material);
var Vv11w3 = new THREE.Mesh(Vv11w3, material);
var Vv11w4 = new THREE.Mesh(Vv11w4, material);

Vv11w1.rotation.x= Math.PI / 2
Vv11w2.rotation.x= Math.PI / 2
Vv11w3.rotation.x= Math.PI / 2
Vv11w4.rotation.x= Math.PI / 2
Vv11w1.rotation.y= Math.PI / 2
Vv11w2.rotation.y= Math.PI / 2
Vv11w3.rotation.y= Math.PI / 2
Vv11w4.rotation.y= Math.PI / 2
Vv11w1.rotation.z= 0
Vv11w2.rotation.z= 0
Vv11w3.rotation.z= 0
Vv11w4.rotation.z= 0

Vv11w1.position.x= -0.095
Vv11w2.position.x= 0.085
Vv11w3.position.x= -0.095
Vv11w4.position.x= 0.085

Vv11w1.position.y= -0.11
Vv11w2.position.y= -0.11
Vv11w3.position.y= 0.11
Vv11w4.position.y= 0.11

Vv11.add( Vv11c )
Vv11.add( Vv11w1 );
Vv11.add( Vv11w2 );
Vv11.add( Vv11w3 );
Vv11.add( Vv11w4 );

scene.add( Vv11 );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


renderer.render( scene, camera ); 

var izquierda= 37; 
var derecha= 39; 
var arriba= 38; 
var abajo= 40; 

var un_grado_en_radianes= Math.PI / 180; 

var speed= 0.002; 

document.addEventListener("keydown", function(i){ 
	//console.log(i.keyCode);  

	switch(i.keyCode){ 
		case izquierda: 
			//Vv11.position.x-= speed; 
			console.log(Vv11w3.rotation.y); 

			if(Vv11w3.rotation.y < Math.PI / 4 * 3)
			{
				Vv11w3.rotation.y+= 0.023; 
				Vv11w4.rotation.y+= 0.023;  
			}

			renderer.render( scene, camera ); 
			break; 
		case derecha: 
			//Vv11.position.x+= speed; 
			console.log(Vv11w3.rotation.y); 
			if(Vv11w3.rotation.y > Math.PI / 4)
			{
				Vv11w3.rotation.y-= 0.023; 
				Vv11w4.rotation.y-= 0.023; 
			}
			break; 
		case arriba: 
			Vv11.position.y+= speed; 
			break; 
		case abajo: 
			Vv11.position.y-= speed; 
			break; 
		case 16: 
			Vv11.rotation.z-= 0.023; 
			break; 
		case 17: 
			Vv11.rotation.z+= 0.023; 
			break; 
	}; 
	
	renderer.render( scene, camera ); 
       
	$("debuggers .wheel .rotate").css({"rotate": -(Vv11w4.rotation.y / un_grado_en_radianes - 90) + "deg"}); 
	$("debuggers .Vv11 .rotate").css({"rotate": -(Vv11.rotation.z / un_grado_en_radianes + 180) + "deg"}); 
}); 