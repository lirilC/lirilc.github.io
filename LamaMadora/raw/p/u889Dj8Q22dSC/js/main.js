selfDestructableSetIntervalWhichWaitsForSomething= setInterval(function(){
    if(typeof THREE != "undefined"){
    console.log(`
           *                     +     *                                                                      
              **       *                 *  *                                                             *   
       *   * *          *                  Puedes actualizar las propiedades de Vv11 desde la consola,        
                   *                                               *  usa ese código para refrescar la escena 
                      +       *    *       *                           *                                      
         *       +                  +      *                                                                  
            renderer.render( scene, camera ); 
    `); 

    const loader = new SVGLoader(); 

    getSizes= function( oBjE ){ 
        boundingBox = new THREE.Box3().setFromObject( oBjE ); 
        return { x: boundingBox.max.x - boundingBox.min.x, y: boundingBox.max.y - boundingBox.min.y, z: boundingBox.max.z - boundingBox.min.z }; 
    } 
    
    THREE.Group.prototype.translate= function( x, y, z ){ 
        this.translateX( x ); 
        this.translateY( y ); 
        this.translateX( z ); 
    } 
gOfSVG= []
gOfObj= []

    group = new THREE.Group(); 

const objLoader = new OBJLoader()
/*objLoader.load(
'/LamaMadora/raw/p/i8eE2s38vBNE5/resources/caballo.obj',
(object) => {
gOfObj[gOfObj.length]= object
gOfObj[gOfObj.length - 1].scale.x= 0.0237156784
gOfObj[gOfObj.length - 1].scale.y= 0.0237156784
gOfObj[gOfObj.length - 1].scale.z= 0.0237156784
gOfObj[gOfObj.length - 1].rotation.x= (Math.PI / 180) * 180
gOfObj[gOfObj.length - 1].rotation.y= (Math.PI / 180) * 180
gOfObj[gOfObj.length - 1].rotation.z= (Math.PI / 180) * 720

gOfObj[gOfObj.length - 1].position.x= -2.0342499999999992
gOfObj[gOfObj.length - 1].position.y= 2.7000449999999967
gOfObj[gOfObj.length - 1].position.z=1.43485018

scene.add(gOfObj[gOfObj.length - 1])
},
(xhr) => {
console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
},
(error) => {
console.log(error)
}
)
*/

    loadSVG= function( svgLink, eXDepth, mAterial ){     
        loader.load(
            // resource URL
            svgLink,
            // called when the resource is loaded
            function ( data ) {
        
                const paths = data.paths;
        
                for ( let i = 0; i < paths.length; i ++ ) {
        
                    path = paths[ i ];
        
        
                    shapes = SVGLoader.createShapes( path );
        
                    for ( let j = 0; j < shapes.length; j ++ ) {
        
                        shape = shapes[ j ];
                        eXtrudagetious = new THREE.ExtrudeGeometry( shape, {depth: eXDepth, bevelEnabled: false} );
                        mesh = new THREE.Mesh( eXtrudagetious, mAterial ); 
                        group.add( mesh );
        
                    }
        
                }
                gOfSVG[gOfSVG.length]= group

                gOfSVG[gOfSVG.length - 1].position.x= -getSizes( gOfSVG[gOfSVG.length - 1] ).x / 2
                gOfSVG[gOfSVG.length - 1].position.y= getSizes( gOfSVG[gOfSVG.length - 1] ).y / 2
                gOfSVG[gOfSVG.length - 1].position.z= -0.033
                gOfSVG[gOfSVG.length - 1].scale.y= -0.8573749999999999
                gOfSVG[gOfSVG.length - 1].scale.x= 0.8573749999999999
                gOfSVG[gOfSVG.length - 1].scale.z= 0.8573749999999999
                scene.add( gOfSVG[gOfSVG.length - 1] ); 
            },
            // called when loading is in progresses
            function ( xhr ) {
        
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
        
                console.log( 'An error happened' );
        
            }
        );
    }; 

    loadSVG( '/LamaMadora/raw/p/u889Dj8Q22dSC/resources/Calles/City_2.svg', 1.21352318, new THREE.MeshStandardMaterial({ color: 0xcfe56f, roughness: 1, reflectivity: 0.27 }) );
    loadSVG( '/LamaMadora/raw/p/u889Dj8Q22dSC/resources/Calles/City_2-grass1.svg', 0.07822712, new THREE.MeshStandardMaterial({ color: 0x72ff5c, roughness: 1, reflectivity: 0.27 }) ); 
    loadSVG( '/LamaMadora/raw/p/u889Dj8Q22dSC/resources/Calles/City_2-grass2.svg', 0.07822712, new THREE.MeshStandardMaterial({ color: 0x72ff5c, roughness: 1, reflectivity: 0.27 }) ); 
    loadSVG( '/LamaMadora/raw/p/u889Dj8Q22dSC/resources/Calles/City_2-grass3.svg', 0.07822712, new THREE.MeshStandardMaterial({ color: 0x72ff5c, roughness: 1, reflectivity: 0.27 }) ); 
    loadSVG( '/LamaMadora/raw/p/u889Dj8Q22dSC/resources/Calles/City_2-grass4.svg', 0.07822712, new THREE.MeshStandardMaterial({ color: 0x72ff5c, roughness: 1, reflectivity: 0.27 }) ); 
    loadSVG( '/LamaMadora/raw/p/u889Dj8Q22dSC/resources/Calles/City_2-grass5.svg', 0.07822712, new THREE.MeshStandardMaterial({ color: 0x72ff5c, roughness: 1, reflectivity: 0.27 }) ); 
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.001, 89 );
    camera.position.z= 0.888; 
    camera.position.x = -0.01; 
    camera.position.y = -0.7;
    camera.rotation.x= Math.PI / 180 * 90; 
    scene = new THREE.Scene();
    
    __v = new THREE.Mesh( new THREE.BoxGeometry( 0.09, 0.03, 0.21 ), new THREE.MeshPhongMaterial({ color: 0xdddddd , reflectivity: 0.47 }) );
    __v.position.x=   0
    __v.position.y= 0
    __v.position.z= -0.033 - 0.02 - 0.5 + 1.2 / 2 - 10; 
    __v.rotation.z= 0
    
    scene.add( __v ); 
    
    geometry = new THREE.BoxGeometry( 0.17, 0.3, 0.06 );
    material = new THREE.MeshPhongMaterial({ color: 0xffdccd });
    
    //Beruda Vv11
    Vv11 = new THREE.Object3D();
    Vv11.car_name= `Beruda Vv11`
    Vv11.startingSpeed= 0.005
    Vv11.speed= Vv11.startingSpeed
    Vv11.speedIncrement= 0.000999
    Vv11.speedDecrement= 0.011411
    Vv11.topSpeed= 0.051
    Vv11c = new THREE.Mesh( geometry, material );
    
    
    Vv11w = new THREE.Shape();
    Vv11w.absarc(0, 0, 0.02);
    
    // Create a new geometry by extruding the triangleShape
    // The option: 'amount' is how far to extrude, 'bevelEnabled: false' prevents beveling
    Vv11w1 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
    Vv11w2 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
    Vv11w3 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
    Vv11w4 = new THREE.ExtrudeGeometry(Vv11w, {depth: 0.009, bevelEnabled: false});
    
    
    
    
    right_head_light = new THREE.Mesh( new THREE.BoxGeometry( 0.01975, 0.005, 0.0087 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) ); 
    
    right_head_light.position.x= 0.066; 
    right_head_light.position.y= 0.15; 
    right_head_light.position.z= -0.003; 
    
    Vv11.add( right_head_light ); 
    
    
    head_light = new THREE.Mesh( new THREE.BoxGeometry( 0.01975, 0.005, 0.0087 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) ); 
    
    head_light.position.x= -0.066; 
    head_light.position.y= 0.15; 
    head_light.position.z= -0.003; 
    
    
    Vv11.add( head_light ); 
    
    
    targetHL1P = new THREE.Object3D();
    targetHL2P = new THREE.Object3D();
    
    
    head_light1 = new THREE.SpotLight( 0xcddde7, 5,  2.8 ); 
    head_light1.color= {r: 1, g: 1, b: 1}; 
    head_light1.intensity= 4.98; 
    head_light1.penumbra= 0.73;
    head_light1.power= 8;
    head_light1.position.x= -0.066; 
    head_light1.position.y= 0.15; 
    head_light1.position.z= -0.003; 
    head_light1.rotation.x= -Math.PI / 4; 
    head_light1.rotation.y= 0; 
    head_light1.rotation.z= 0; 
    head_light1.target = targetHL1P;
    head_light1.target.position.x= -0.07; 
    head_light1.target.position.y= 1.28; 
    head_light1.target.position.z= -0.003; 
    
    head_light2 = new THREE.SpotLight( 0xcddde7, 5,  2.8 ); 
    head_light2.color= {r: 1, g: 1, b: 1}; 
    head_light2.intensity= 4.98; 
    head_light2.penumbra= 0.73;
    head_light2.power= 8;
    head_light2.position.x= 0.066; 
    head_light2.position.y= 0.15; 
    head_light2.position.z= -0.003; 
    head_light2.rotation.x= -Math.PI / 4; 
    head_light2.rotation.y= 0; 
    head_light2.rotation.z= 0; 
    head_light2.target = targetHL2P;
    head_light2.target.position.x= 0.07; 
    head_light2.target.position.y= 1.28; 
    head_light2.target.position.z= -0.003; 
    
    
    Vv11.add( head_light1.target ); 
    Vv11.add( head_light1 ); 
    
    
    Vv11.add( head_light2.target ); 
    Vv11.add( head_light2 ); 


    // Geometry doesn't do much on its own, we need to create a Mesh from it
    Vv11w1 = new THREE.Mesh(Vv11w1, material);
    Vv11w2 = new THREE.Mesh(Vv11w2, material);
    Vv11w3 = new THREE.Mesh(Vv11w3, material);
    Vv11w4 = new THREE.Mesh(Vv11w4, material);
    
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
    
    
    Vv11w1.position.z= -0.033; 
    Vv11w2.position.z= -0.033; 
    Vv11w3.position.z= -0.033; 
    Vv11w4.position.z= -0.033; 
    
    Vv11.add( Vv11c )
    Vv11.add( Vv11w1 );
    Vv11.add( Vv11w2 );
    Vv11.add( Vv11w3 );
    Vv11.add( Vv11w4 );
    
    //
    //
    
    //GueRddx d6687
    d6687 = new THREE.Object3D();
    d6687.car_name= `GueRddx d6687`
    d6687.startingSpeed= 0.008
    d6687.speed= d6687.startingSpeed
    d6687.speedIncrement= 0.008545
    d6687.speedDecrement= 0.012992
    d6687.topSpeed= 0.093
    d6687c = new THREE.Mesh( new THREE.BoxGeometry( 0.17, 0.308, 0.051 ), new THREE.MeshPhongMaterial({ color: 0xf71215 }) );
    
    
    d6687w = new THREE.Shape();
    d6687w.absarc(0, 0, 0.02);
    
    d6687w1 = new THREE.ExtrudeGeometry(d6687w, {depth: 0.009, bevelEnabled: false});
    d6687w2 = new THREE.ExtrudeGeometry(d6687w, {depth: 0.009, bevelEnabled: false});
    d6687w3 = new THREE.ExtrudeGeometry(d6687w, {depth: 0.009, bevelEnabled: false});
    d6687w4 = new THREE.ExtrudeGeometry(d6687w, {depth: 0.009, bevelEnabled: false});
    
    
    
    
    right_head_light = new THREE.Mesh( new THREE.BoxGeometry( 0.02124, 0.0062, 0.0066 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) ); 
    
    right_head_light.position.x= 0.066; 
    right_head_light.position.y= 0.154; 
    right_head_light.position.z= -0.003; 
    
    d6687.add( right_head_light ); 
    
    
    head_light = new THREE.Mesh( new THREE.BoxGeometry( 0.02124, 0.0062, 0.0066 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) ); 
    
    head_light.position.x= -0.066; 
    head_light.position.y= 0.154; 
    head_light.position.z= -0.003; 
    
    
    d6687.add( head_light ); 
    
    
    targetHL1P = new THREE.Object3D();
    targetHL2P = new THREE.Object3D();
    
    
    head_light1 = new THREE.SpotLight( 0xcddde7, 5,  2.8 ); 
    head_light1.color= {r: 1, g: 1, b: 1}; 
    head_light1.intensity= 6.38; 
    head_light1.penumbra= 0.73;
    head_light1.power= 8;
    head_light1.position.x= -0.066; 
    head_light1.position.y= 0.154; 
    head_light1.position.z= -0.003; 
    head_light1.rotation.x= -Math.PI / 4; 
    head_light1.rotation.y= 0; 
    head_light1.rotation.z= 0; 
    head_light1.target = targetHL1P;
    head_light1.target.position.x= -0.07; 
    head_light1.target.position.y= 1.28; 
    head_light1.target.position.z= -0.003; 
    
    head_light2 = new THREE.SpotLight( 0xcddde7, 5,  2.8 ); 
    head_light2.color= {r: 1, g: 1, b: 1}; 
    head_light2.intensity= 6.38; 
    head_light2.penumbra= 0.73;
    head_light2.power= 8;
    head_light2.position.x= 0.066; 
    head_light2.position.y= 0.154; 
    head_light2.position.z= -0.003; 
    head_light2.rotation.x= -Math.PI / 4; 
    head_light2.rotation.y= 0; 
    head_light2.rotation.z= 0; 
    head_light2.target = targetHL2P;
    head_light2.target.position.x= 0.07; 
    head_light2.target.position.y= 1.28; 
    head_light2.target.position.z= -0.003; 
    
    
    d6687.add( head_light1.target ); 
    d6687.add( head_light1 ); 
    
    
    d6687.add( head_light2.target ); 
    d6687.add( head_light2 ); 


    d6687w1 = new THREE.Mesh(d6687w1, new THREE.MeshPhongMaterial({ color: 0x101320 }));
    d6687w2 = new THREE.Mesh(d6687w2, new THREE.MeshPhongMaterial({ color: 0x101320 }));
    d6687w3 = new THREE.Mesh(d6687w3, new THREE.MeshPhongMaterial({ color: 0x101320 }));
    d6687w4 = new THREE.Mesh(d6687w4, new THREE.MeshPhongMaterial({ color: 0x101320 }));
    
    d6687w1.rotation.x= Math.PI / 2
    d6687w2.rotation.x= Math.PI / 2
    d6687w3.rotation.x= Math.PI / 2
    d6687w4.rotation.x= Math.PI / 2
    d6687w1.rotation.y= Math.PI / 2
    d6687w2.rotation.y= Math.PI / 2
    d6687w3.rotation.y= Math.PI / 2
    d6687w4.rotation.y= Math.PI / 2
    d6687w1.rotation.z= 0
    d6687w2.rotation.z= 0
    d6687w3.rotation.z= 0
    d6687w4.rotation.z= 0
    
    d6687w1.position.x= -0.095
    d6687w2.position.x= 0.085
    d6687w3.position.x= -0.095
    d6687w4.position.x= 0.085
    
    d6687w1.position.y= -0.11
    d6687w2.position.y= -0.11
    d6687w3.position.y= 0.11
    d6687w4.position.y= 0.11
    
    
    d6687w1.position.z= -0.033; 
    d6687w2.position.z= -0.033; 
    d6687w3.position.z= -0.033; 
    d6687w4.position.z= -0.033; 
    
    d6687.add( d6687c )
    d6687.add( d6687w1 );
    d6687.add( d6687w2 );
    d6687.add( d6687w3 );
    d6687.add( d6687w4 );
    
    //
    //
    
    
    //Exclude n9r
    n9r = new THREE.Object3D();
    n9r.car_name= `Exclude n9r`
    n9r.startingSpeed= 0.004
    n9r.speed= n9r.startingSpeed
    n9r.speedIncrement= 0.000622
    n9r.speedDecrement= 0.011876
    n9r.topSpeed= 0.041
    n9rc = new THREE.Mesh( new THREE.BoxGeometry( 0.21, 0.327, 0.063 ), new THREE.MeshPhongMaterial({ color: 0xf7baad }) );
    
    
    n9rw = new THREE.Shape();
    n9rw.absarc(0, 0, 0.02);
    
    n9rw1 = new THREE.ExtrudeGeometry(n9rw, {depth: 0.009, bevelEnabled: false});
    n9rw2 = new THREE.ExtrudeGeometry(n9rw, {depth: 0.009, bevelEnabled: false});
    n9rw3 = new THREE.ExtrudeGeometry(n9rw, {depth: 0.009, bevelEnabled: false});
    n9rw4 = new THREE.ExtrudeGeometry(n9rw, {depth: 0.009, bevelEnabled: false});
    
    
    
    
    right_head_light = new THREE.Mesh( new THREE.BoxGeometry( 0.01895, 0.0062, 0.0092 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) ); 
    
    right_head_light.position.x= 0.088; 
    right_head_light.position.y= 0.173; 
    right_head_light.position.z= -0.003; 
    
    n9r.add( right_head_light ); 
    
    
    head_light = new THREE.Mesh( new THREE.BoxGeometry( 0.01895, 0.0062, 0.0092 ), new THREE.MeshBasicMaterial({ color: 0xffffff }) ); 
    
    head_light.position.x= -0.088; 
    head_light.position.y= 0.173; 
    head_light.position.z= -0.003; 
    
    
    n9r.add( head_light ); 
    
    
    targetHL1P = new THREE.Object3D();
    targetHL2P = new THREE.Object3D();
    
    
    head_light1 = new THREE.SpotLight( 0xd7a6a7, 5,  2.8 ); 
    head_light1.color= {r: 1, g: 1, b: 1}; 
    head_light1.intensity= 6.38; 
    head_light1.penumbra= 0.73;
    head_light1.power= 8;
    head_light1.position.x= -0.066; 
    head_light1.position.y= 0.173; 
    head_light1.position.z= -0.003; 
    head_light1.rotation.x= -Math.PI / 4; 
    head_light1.rotation.y= 0; 
    head_light1.rotation.z= 0; 
    head_light1.target = targetHL1P;
    head_light1.target.position.x= -0.07; 
    head_light1.target.position.y= 1.28; 
    head_light1.target.position.z= -0.003; 
    
    head_light2 = new THREE.SpotLight( 0xd7a6a7, 5,  2.8 ); 
    head_light2.color= {r: 1, g: 1, b: 1}; 
    head_light2.intensity= 6.38; 
    head_light2.penumbra= 0.73;
    head_light2.power= 8;
    head_light2.position.x= 0.066; 
    head_light2.position.y= 0.173; 
    head_light2.position.z= -0.003; 
    head_light2.rotation.x= -Math.PI / 4; 
    head_light2.rotation.y= 0; 
    head_light2.rotation.z= 0; 
    head_light2.target = targetHL2P;
    head_light2.target.position.x= 0.07; 
    head_light2.target.position.y= 1.28; 
    head_light2.target.position.z= -0.003; 
    
    
    n9r.add( head_light1.target ); 
    n9r.add( head_light1 ); 
    
    
    n9r.add( head_light2.target ); 
    n9r.add( head_light2 ); 


    n9rw1 = new THREE.Mesh(n9rw1, new THREE.MeshPhongMaterial({ color: 0x7fbda7 }));
    n9rw2 = new THREE.Mesh(n9rw2, new THREE.MeshPhongMaterial({ color: 0x7fbda7 }));
    n9rw3 = new THREE.Mesh(n9rw3, new THREE.MeshPhongMaterial({ color: 0x7fbda7 }));
    n9rw4 = new THREE.Mesh(n9rw4, new THREE.MeshPhongMaterial({ color: 0x7fbda7 }));
    
    n9rw1.rotation.x= Math.PI / 2
    n9rw2.rotation.x= Math.PI / 2
    n9rw3.rotation.x= Math.PI / 2
    n9rw4.rotation.x= Math.PI / 2
    n9rw1.rotation.y= Math.PI / 2
    n9rw2.rotation.y= Math.PI / 2
    n9rw3.rotation.y= Math.PI / 2
    n9rw4.rotation.y= Math.PI / 2
    n9rw1.rotation.z= 0
    n9rw2.rotation.z= 0
    n9rw3.rotation.z= 0
    n9rw4.rotation.z= 0
    
    n9rw1.position.x= -0.095
    n9rw2.position.x= 0.085
    n9rw3.position.x= -0.095
    n9rw4.position.x= 0.085
    
    n9rw1.position.y= -0.11
    n9rw2.position.y= -0.11
    n9rw3.position.y= 0.11
    n9rw4.position.y= 0.11
    
    
    n9rw1.position.z= -0.033; 
    n9rw2.position.z= -0.033; 
    n9rw3.position.z= -0.033; 
    n9rw4.position.z= -0.033; 
    
    n9r.add( n9rc )
    n9r.add( n9rw1 );
    n9r.add( n9rw2 );
    n9r.add( n9rw3 );
    n9r.add( n9rw4 );
    
    //
    //
    
    ambiance = new THREE.PointLight( 0x000000, 5,  2.8 ); 
    ambiance.color= {r: 0.37, g: 0.5788, b: 0.363}; 
    ambiance.intensity= 0.28; 
    ambiance.position.x= 0; 
    ambiance.position.y= -1; 
    ambiance.position.z= 0.3; 
    ambiance.rotation.x= -Math.PI / 4; 
    ambiance.rotation.y= 0; 
    ambiance.rotation.z= 0; 
    
    scene.add( ambiance ); 
    
    
    

    un_grado_en_radianes= Math.PI / 180; 
    

    
    Vv11.position.x= 104
    Vv11.position.y= -37
    Vv11.rotation.z= 2.478


    d6687.position.x= 70.73400670029389
    d6687.position.y= -52.08887428552435
    d6687.rotation.z= 6.5449846949787664
    
    n9r.position.x= 71.73400670029389
    n9r.position.y= -52.08887428552435
    n9r.rotation.z= 6.5449846949787664

    oCamera= Vv11
    
    scene.add( Vv11 );
    scene.add( d6687 );
    scene.add( n9r );

    Car= Vv11
    Cars= []
    Cars[Cars.length]= Vv11
    Cars[Cars.length]= d6687
    Cars[Cars.length]= n9r

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    
    getInQuadrant= function(ángulo){ 
        ángulo= ángulo; 
        while(ángulo < -360)ángulo+=360; 
        while(ángulo > 360)ángulo-=360; 
        if(ángulo < 0)ángulo=(360+ángulo); 
        return ángulo; 
    } 
      
    xEYConElÁngulo= function( d, á ){ 
        á= á * Math.PI / 180; //Convertir de grados a radianes 
        
        if(á < Math.PI / 2)return {x: d * parseFloat(Math.cos(á)), y: parseFloat(-(d * Math.sin(á)))}; 
        if(á == Math.PI / 2)return {x: 0, y: -d}; 
        if(á <= Math.PI)return {x: parseFloat(-(d * Math.cos(Math.PI - á))), y: parseFloat(-(d * Math.sin(Math.PI - á)))}; 
        if(á <= Math.PI / 2 * 3)return {x: parseFloat(-(d * Math.sin((Math.PI / 2 * 3) - á))), y: parseFloat(d * Math.cos((Math.PI / 2 * 3) - á))}; 
        if(á <= Math.PI * 2)return {x: parseFloat(d * Math.cos((Math.PI * 2) - á)), y: parseFloat((d * Math.sin((Math.PI * 2) - á)))}; 
    } 
    
    ángDeLaPendiente= function(x1, y1, x2, y2){ 
        c1= { x: x1, y: y1 }; 
        c2= { x: x2, y: y2 }; 
                          
        if(c2.x <= c1.x){ 
            cS= c1; 
            c1= c2; 
            c2= cS; 
            return getInQuadrant(-getInQuadrant((Math.atan2(-( c2.y - c1.y ) , -( c2.x - c1.x ))*(180/Math.PI)))); 
        }else{ 
            return getInQuadrant(getInQuadrant((Math.atan2(-( c2.y - c1.y ) , ( c2.x - c1.x ))*(180/Math.PI)))); 
        }; 
    } 
    

    v3 = new THREE.Vector3( 0, 0, 0 ); 
    
    curve = new THREE.QuadraticBezierCurve(
        new THREE.Vector3( Car.children[8].getWorldPosition(v3).x, Car.children[8].getWorldPosition(v3).y, -1.1 ),
        new THREE.Vector3( 0.20, 0.15, -1.1 ),
        new THREE.Vector3( 0.10, 0, -1.1 )
    );
    
    
    points = curve.getPoints( 50 );
    x = new THREE.BufferGeometry().setFromPoints( points );
    
    
    zz = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
    
    // Create the final object to add to the scene
    curveObject = new THREE.Line( x, zz );
    curveObject.name = 'qB';
    
    scene.add( curveObject ); 
    
    
    bEZ= new Bezier( [ { x: curve.v0.x , y: curve.v0.y } , { x: curve.v1.x , y: curve.v1.y } , { x: curve.v2.x , y: curve.v2.y } ] ) 
    
    points = curve.getPoints( 50 );
    x = new THREE.BufferGeometry().setFromPoints( points );
    zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
    oldCurve = new THREE.Line( x, zz );
    oldCurve.name = 'oQB';
    
    scene.add( oldCurve ); 
    
    

    curve2 = new THREE.QuadraticBezierCurve3( 
        new THREE.Vector3( Car.children[9].getWorldPosition(v3).x + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Car.rotation.z / un_grado_en_radianes + 90 ) ) ).x , Car.children[9].getWorldPosition(v3).y + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Car.rotation.z / un_grado_en_radianes + 90 ) ) ).y , (-0.033 - 0.012) ),
        new THREE.Vector3( Car.children[9].getWorldPosition(v3).x , Car.children[9].getWorldPosition(v3).y , (-0.033 - 0.012) ),
        new THREE.Vector3( (Car.children[9].getWorldPosition(v3).x - xEYConElÁngulo( 0.22, parseFloat($(".bugger").text()) ).x) , (Car.children[9].getWorldPosition(v3).y - xEYConElÁngulo( 0.22, parseFloat($(".bugger").text())).y), (-0.033 - 0.012) )
    ); 
        
    points2 = curve2.getPoints( 50 );
        
    x = new THREE.BufferGeometry().setFromPoints( points2 );
        
    zz = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
        
    curveObject2 = new THREE.Line( x, zz );
    
    scene.add( curveObject2 ); 
    

    bEZ2= new Bezier( [ { x: curve2.v0.x , y: curve2.v0.y } , { x: curve2.v1.x , y: curve2.v1.y } , { x: curve2.v2.x , y: curve2.v2.y } ] );
                

    points2 = curve2.getPoints( 50 );
    x = new THREE.BufferGeometry().setFromPoints( points2 );
    zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
    oldCurve2 = new THREE.Line( x, zz );
    
    scene.add( oldCurve2 ); 


    elipse = new THREE.EllipseCurve(
        0,  0,            
        0.22, 0.22,           
        0,  2 * Math.PI,  
        false,            
        0                 
    );
    
    pts = elipse.getPoints( 360 );
    geometry = new THREE.BufferGeometry().setFromPoints( pts );
    
    
    elps = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xff0000 } ) ); 
    
    elps.position.z= (-0.033 - 0.012); 
    
    scene.add( elps ); 



    elipse2 = new THREE.EllipseCurve(
        0,  0,            
        0.22, 0.22,           
        0,  2 * Math.PI,  
        false,            
        0                 
    );
    
    pts2 = elipse2.getPoints( 360 );
    geometry2 = new THREE.BufferGeometry().setFromPoints( pts );
    
    material2 = new THREE.LineBasicMaterial( { color: 0xff0000 } );
    
    
    elps2 = new THREE.Line( geometry2, material2 ); 
    
    elps2.position.z= (-0.033 - 0.012); 
    
    scene.add( elps2 ); 


    _x = new THREE.EllipseCurve(
        0,  0,            
        0.35, 0.35,           
        0,  2 * Math.PI,  
        false,            
        0                 
    );
    
    geometry = new THREE.BufferGeometry().setFromPoints( _x.getPoints( 360 ) );
    
    
    __sx = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x7c7dff } ) ); 
    
    __sx.position.x= Car.position.x; 
    __sx.position.y= Car.position.y; 
    __sx.position.z= -78; 

    scene.add( __sx ); 

    
    closestP= {}; 
    
    closestP2= {}; 



    intersección = new THREE.Mesh( new THREE.BoxGeometry( 0.013, 0.013, 0.013 ), new THREE.MeshPhongMaterial({ color: 0x1fa2b2 }) );
    
    intersección2 = new THREE.Mesh( new THREE.BoxGeometry( 0.013, 0.013, 0.013 ), new THREE.MeshPhongMaterial({ color: 0x1fa2b2 }) );

    
    
    Terreno = new THREE.Mesh( new THREE.BoxGeometry( 1711, 1711, 1.89 ), new THREE.MeshStandardMaterial({ color: 0xd2e2c1, roughness: 1, reflectivity: 0.47 }) );
    
    Terreno.position.z= ( -0.033 - 0.02 - 0.5 - 0.445 )
    
    scene.add( intersección ); 


    scene.add( intersección2 ); 


    scene.add( Terreno ); 
    
    gM1 = new THREE.Mesh( new THREE.BoxGeometry( 1, 2, 0.787 ), new THREE.MeshPhongMaterial({ color: 0xfef0fe , reflectivity: 0.47 }) );
    gM1.position.x= -2.124; 
    gM1.position.y= 3.1; 
    gM1.position.z= 1.05402318; 
    
    scene.add( gM1 ); 
    
    gM2 = new THREE.Mesh( new THREE.BoxGeometry( 1, 2.1, 26.22 ), new THREE.MeshPhongMaterial({ color: 0xfef0fe , reflectivity: 0.47 }) );
    gM2.position.x=  1.5; 
    gM2.position.y= 8.7; 
    gM2.position.z= -0.033 - 0.02 - 0.5 + 26.22 / 2; 
    
    scene.add( gM2 ); 
    
    gM3 = new THREE.Mesh( new THREE.BoxGeometry( 1, 2.1, 2.8 ), new THREE.MeshPhongMaterial({ color: 0x010f01 , reflectivity: 0.47 }) );
    gM3.position.x=  9.5; 
    gM3.position.y= -0.008; 
    gM3.position.z= -0.033 - 0.02 - 0.5 + 2.8 / 2; 
    
    scene.add( gM3 ); 
    
    gM4 = new THREE.Mesh( new THREE.BoxGeometry( 1.88889, 1.899, 1.99 ), new THREE.MeshPhongMaterial({ color: 0xfef0fe , reflectivity: 0.47 }) );
    gM4.position.x=  9.5; 
    gM4.position.y= -0.008; 
    gM4.position.z= -0.033 - 0.02 - 0.5 + 1.99 / 2; 
    
    scene.add( gM4 ); 
    
    gM5 = new THREE.Mesh( new THREE.BoxGeometry( 3.12516, 0.899, 2.99 ), new THREE.MeshPhongMaterial({ color: 0xd892fe , reflectivity: 0.47 }) );
    gM5.position.x=  9.5; 
    gM5.position.y= -0.008; 
    gM5.position.z= -0.033 - 0.02 - 0.5 + 2.99 / 2; 
    
    scene.add( gM5 ); 
    
    gM6 = new THREE.Mesh( new THREE.BoxGeometry( 0.12516, 1.2299, 12.99 ), new THREE.MeshPhongMaterial({ color: 0xd235ee , reflectivity: 0.47 }) );
    gM6.position.x=  9.5; 
    gM6.position.y= -0.008; 
    gM6.position.z= -0.033 - 0.02 - 0.5 + 12.99 / 2; 
    
    scene.add( gM6 ); 
    
    gM7 = new THREE.Mesh( new THREE.BoxGeometry( 0.42516, 2.3299, 8.1 ), new THREE.MeshPhongMaterial({ color: 0xdd2112 , reflectivity: 0.47 }) );
    gM7.position.x=  9.5; 
    gM7.position.y= -0.008; 
    gM7.position.z= -0.033 - 0.02 - 0.5 + 8.1 / 2; 
    
    scene.add( gM7 ); 
    
    gM8 = new THREE.Mesh( new THREE.BoxGeometry( 1.42516, 0.3499, 18.1 ), new THREE.MeshPhongMaterial({ color: 0xd555f2 , reflectivity: 0.47 }) );
    gM8.position.x=  9.5; 
    gM8.position.y= -0.008; 
    gM8.position.z= -0.033 - 0.02 - 0.5 + 18.1 / 2; 
    
    scene.add( gM8 ); 
    
    gM9 = new THREE.Mesh( new THREE.BoxGeometry( 2.72516, 0.007499, 10.1 ), new THREE.MeshPhongMaterial({ color: 0x32342d , reflectivity: 0.47 }) );
    gM9.position.x=  9.5; 
    gM9.position.y= -0.008; 
    gM9.position.z= -0.033 - 0.02 - 0.5 + 10.1 / 2; 
    
    scene.add( gM9 ); 
    
    gM10 = new THREE.Mesh( new THREE.BoxGeometry( 1.2, 1.98, 2.8 ), new THREE.MeshPhongMaterial({ color: 0x52972d , reflectivity: 0.47 }) );
    gM10.position.x=  9.5; 
    gM10.position.y= -0.008; 
    gM10.position.z= -0.033 - 0.02 - 0.5 + 2.8 / 2; 
    
    scene.add( gM10 ); 
    
    Stereo = new THREE.Mesh( new THREE.BoxGeometry( 0.2, 0.78, 0.8 ), new THREE.MeshPhongMaterial({ color: 0xf9a6d6 , reflectivity: 0.47 }) );
    Stereo.position.x=  9.5; 
    Stereo.position.y= -0.008; 
    Stereo.position.z= -0.033 - 0.02 - 0.5 + 2.8 / 2 + 1; 
    
    scene.add( Stereo ); 
    
    
    luz_direccional = new THREE.DirectionalLight( 0xfdfdde ); 
    luz_direccional.intensity= 1.5; 
    luz_direccional.castShadow= true; 
    luz_direccional.position.set( 5, 2.04, 2.991 ); 
    
    scene.add( luz_direccional ); 
    
    dirLight = new THREE.DirectionalLight( 0xfdfdde ); 
    dirLight.intensity= 0.5; 
    dirLight.position.set( -5, -2.04, -2.991 ); 
    
    scene.add( dirLight ); 
        
    
    ad= {}; 
    ad.d= 10000; 
    for( ww= 0; ww < 360; ww++ ){ 
        if( bEZ.project( { x: pts[ww].x + elps.position.x , y: pts[ww].y + elps.position.y } ).d < ad.d ) 
        { 
            ad= bEZ.project( { x: pts[ww].x + elps.position.x , y: pts[ww].y + elps.position.y } ); 
            ad.x= pts[ww].x + elps.position.x; 
            ad.y= pts[ww].y + elps.position.y; 
            ad.eX= parseInt(ww); 
        } 
    
        if( parseInt( ww ) == pts.length - 2 ){
            closestP= ad; 
        }
    }
        
    intersección.position.x= closestP.x
    intersección.position.y= closestP.y
    intersección.position.z= (-0.033 - 0.012)




    ad= {}; 
    ad.d= 10000; 
    for( ww= 0; ww < 360; ww++ ){ 
        if( bEZ2.project( { x: pts2[ww].x + elps2.position.x , y: pts2[ww].y + elps2.position.y } ).d < ad.d ) 
        { 
            ad= bEZ2.project( { x: pts2[ww].x + elps2.position.x , y: pts2[ww].y + elps2.position.y } ); 
            ad.x= pts2[ww].x + elps2.position.x; 
            ad.y= pts2[ww].y + elps2.position.y; 
            ad.eX= parseInt(ww); 
        } 
    
        if( parseInt( ww ) == pts2.length - 2 ){
            closestP2= ad; 
        }
    }
        
    intersección2.position.x= closestP2.x
    intersección2.position.y= closestP2.y
    intersección2.position.z= (-0.033 - 0.012)


    
    
    renderer.render( scene, camera ); 
    
    
    izquierda= 37; 
    derecha= 39; 
    arriba= 38; 
    abajo= 40; 
    
    a= 65; 
    d= 68; 
    w= 87; 
    s= 83; 
    q= 81; 
    e= 69; 
    f= 70; 
    
    keysDown= { a: false , d: false , w: false , s: false , q: false , e: false, f: false , izquierda: false , derecha: false , arriba: false , abajo: false, Shift: false }
    
    
    speed= 0.051; 
    wSpeed= 0.031
    wRotation=0
    wRotationIncrement=0.22
    wRotationLimit=3.672
    
    caminando= false
    
    window.display= {}
    
    display.log= function(t){
        document.querySelector("display log").innerHTML= `${t}`.replaceAll(`i̇́`, `<i>`).replaceAll(`ᶖ`, `</i>`).indexOf(`</i>`) < `${t}`.replaceAll(`i̇́`, `<i>`).replaceAll(`ᶖ`, `</i>`).indexOf(`<i>`)? `<i>${t}`.replaceAll(`i̇́`, `<i>`).replaceAll(`ᶖ`, `</i>`): `${t}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.replaceAll(`i̇́`, `<i>`).replaceAll(`ᶖ`, `</i>`)
    }
    
    display.narrator= function(){
        if(display.logs.length){
            xx= 0
            logInterval= setInterval(function(){
                (function(){
                    if(typeof logMarqueInterval == "undefined"){
                        display.log(typeof display.logs[xx] == "undefined"? '': display.logs[xx].replaceAll(`<i>`, `i̇́`).replaceAll(`</i>`, `ᶖ`).replaceAll(`&nbsp;`, ``))
                        marque(document.querySelector("display log").innerHTML.replaceAll(`<i>`, `i̇́`).replaceAll(`</i>`, `ᶖ`), "log", 0)
                        if(xx == display.logs.length - 1){clearInterval(logInterval); display.logs= []; return}
                        xx++
                    }
                    }
                )()
            }, 1000)
        }
    }
    
    marque = function(i, a, b){ 
    text = i; 
    a= document.querySelectorAll(a)
    if(typeof logMarqueInterval != "undefined")return
    logLength= text.replaceAll(`i̇́`, ``).replaceAll(`ᶖ`, ``).replaceAll(`&nbsp;`, ` `).length
    var d= 0
    if(logLength - 14 <= 21)return
    logMarqueInterval= setInterval( 
        function(){
                if(d >= logLength - 24){
                    clearInterval(logMarqueInterval)
                    logMarqueInterval= undefined
                }
                d++
                text = `${text.slice(1, text.length)}${text[0]}`; 
                display.log(text)
    }, 1000) 
    }; 
    
    setTimeout(function(){
        display.logs= [,`_`,,`_`,,`Hola, bienvenido a El Refugio, __v.`,,,,`Pásatela bien un rato. Es seguro este lugar; uno de pocos en Vv11.`,,`¡Además está increíble!`,,`_`,,`_`,,,,,,,`_`,,`_`,,`Presiona i̇́fᶖ para bajarte de un carro en el que estés.`,,`_`,,  `Puedes correr con i̇́wᶖ, i̇́aᶖ y i̇́dᶖ, pero si quieres correr cansándote debes tener siempre presionado i̇́Shiftᶖ.`,, `Puedes subirte a cualquier carro acercándote a él y presionando i̇́fᶖ.`,,`_`,,`_`,,]
        display.narrator()
    }, 5853)
    
    dCamera= 2.36758210000191832 * 10 ** -1; 
    

    camera.position.x= oCamera.position.x + xEYConElÁngulo( ( 1.5 + dCamera ), getInQuadrant( -getInQuadrant( oCamera.rotation.z / un_grado_en_radianes + 270 ) ) ).x; 
    camera.position.y= oCamera.position.y + xEYConElÁngulo( ( 1.5 + dCamera ), getInQuadrant( -getInQuadrant( oCamera.rotation.z / un_grado_en_radianes + 270 ) ) ).y; 
        
    camera.rotation.y= oCamera.rotation.z; 
    
    
    //c = new THREE.Quaternion();  
    
    //a2 = new THREE.Vector3( 0, 1, 0 );  
    
    document.addEventListener("keydown", function(i){ 
        //console.log(i.keyCode);  
    
        //1.position.z11.rotation.x= -Math.PI / 2; 
        /*console.log(Car.rotation.x + " " + Car.rotation.y + " " + Car.rotation.z); */ 
        switch(i.keyCode){ 
            case a: 
                keysDown.a= true; 
                break; 
            case d: 
                keysDown.d= true; 
                break; 
            case w: 
                keysDown.w= true; 
                break; 
            case s: 
                keysDown.s= true; 
                break; 
            case q: 
                keysDown.q= true; 
                break; 
            case e: 
                keysDown.e= true; 
                break; 
            case f: 
                keysDown.f= true; 
                break; 
        }; 
        
        if(i.shiftKey){
            keysDown.Shift= true
        }
        
        renderer.render( scene, camera ); 
        
        // console.log(getInQuadrant(-Car.children[10].rotation.y / un_grado_en_radianes));  
        
    
    }); 
    
    document.addEventListener("keyup", function(zZ){ 
        switch(zZ.keyCode){ 
            case a: 
                keysDown.a= false; 
                break; 
            case d: 
                keysDown.d= false; 
                break; 
            case w: 
                keysDown.w= false; 
                break; 
            case s: 
                keysDown.s= false; 
                break; 
            case q: 
                keysDown.q= false; 
                break; 
            case e: 
                keysDown.e= false; 
                break; 
            case f: 
                keysDown.f= false; 
                break; 
        }; 
        if(!zZ.shiftKey){
            keysDown.Shift= false
        }
        if(zZ.keyCode === f){
            if(!caminando){
                caminando= true
                setTimeout(function(){
                __v.position.z= -0.033 - 0.02 - 0.5 + 1.2 / 2; 
                __v.rotation.z= Car.rotation.z
                __v.position.y += 0.2 * Math.cos(Car.rotation.z + 90 * un_grado_en_radianes)
                __v.position.x -= 0.2 * Math.sin(Car.rotation.z + 90 * un_grado_en_radianes)
                oCamera= __v
    
                renderer.render( scene, camera ); }, 1682)
            }else if(nC <= 0.35){
                setTimeout(function(){
                caminando= false
                __v.position.z= -100; 
                oCamera= cC
                Car= cC
    
                renderer.render( scene, camera ); }, 1282)
                if(!display.logs.length){
                    display.logs= [cC.car_name, cC.car_name, ``, `_`, ``]
                    display.narrator()
                }
            }
        }
        
    }); 
    
    
    document.addEventListener("blur", function(){
        wRotation= 0
    })
    
    
    
    
    
    
    
    
    /*skip=  63; */ 
    
    skip= 0; 
    
    
    lentitud= 3; 
    
    lentitudMáx= 2; 
    aceleración= 1; 
    
    setInterval(function(){ 
        if(!caminando)(function()
            {__v.position.x= Car.position.x
            __v.position.y= Car.position.y})()

        if(skip > 0){
            skip--; 
            return; 
        }
        
        if(keysDown.a){
            if(!caminando){
                //Car.position.x-= speed; 
                //console.log(Car.children[9].rotation.y);  
    
                if(Car.children[9].rotation.y < Math.PI / 4 * 3)
                {
                    Car.children[9].rotation.y+= 0.023; 
                    Car.children[10].rotation.y+= 0.023;  
                }
    
                renderer.render( scene, camera ); 
            }
        }
        if(keysDown.d){
            if(!caminando){
                //Car.position.x+= speed; 
                //console.log(Car.children[9].rotation.y);   
                if(Car.children[9].rotation.y > Math.PI / 4)
                {
                    Car.children[9].rotation.y-= 0.023; 
                    Car.children[10].rotation.y-= 0.023; 
                }
            }
        }
        if(keysDown.w && !keysDown.s){
            if(!caminando){
                if(Car.speed + Car.speedIncrement <= Car.topSpeed){Car.speed+= Car.speedIncrement}else{Car.speed= Car.topSpeed}
            }else{
                if(keysDown.a){
                    if(wRotation + wRotationIncrement <= wRotationLimit)wRotation+= wRotationIncrement
                    __v.position.y += wSpeed * Math.cos(__v.rotation.z + wRotation * un_grado_en_radianes)
                    __v.position.x -= wSpeed * Math.sin(__v.rotation.z + wRotation * un_grado_en_radianes)
                    __v.rotation.z+= wRotation * un_grado_en_radianes
                }
                if(keysDown.d){
                    if(wRotation - wRotationIncrement >= -wRotationLimit)wRotation-= wRotationIncrement
                    __v.position.y += wSpeed * Math.cos(__v.rotation.z + wRotation * un_grado_en_radianes)
                    __v.position.x -= wSpeed * Math.sin(__v.rotation.z + wRotation * un_grado_en_radianes)
                    __v.rotation.z+= wRotation * un_grado_en_radianes
                }
                if(!keysDown.a && !keysDown.d){
                    __v.position.y += wSpeed * Math.cos(__v.rotation.z)
                    __v.position.x -= wSpeed * Math.sin(__v.rotation.z)
                }
                if(!keysDown.a && !keysDown.d && keysDown.Shift){
                    wRotation= 0
                }
            }
        }else{
            wRotation= 0
            if(Car.speed - Car.speedDecrement > Car.startingSpeed){Car.speed-= Car.speedDecrement}else{Car.speed= Car.startingSpeed}
        }

        if(Car.speed > Car.startingSpeed){
            Car.position.x+= xEYConElÁngulo(Car.speed, parseFloat($(".bugger").text())).x; 
            Car.position.y+= xEYConElÁngulo(Car.speed, parseFloat($(".bugger").text())).y; 
            skip= skip == 0? lentitud: skip; 
            lentitud -= aceleración; 
            lentitud= lentitud < 0? 0: lentitud; 
        }
        
        if(keysDown.s && !keysDown.w){
            if(!caminando){
                Car.position.y-= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).y; 
                Car.position.x-= xEYConElÁngulo(speed, parseFloat($(".bugger").text())).x; 
            }
        }
    
        $("debuggers .bugger span").text(getInQuadrant(getInQuadrant(-Car.rotation.z / un_grado_en_radianes + 270) + (getInQuadrant(-Car.children[10].rotation.y / un_grado_en_radianes) - 270))); 
        $("debuggers .bugger span").attr("title", getInQuadrant(getInQuadrant(-Car.rotation.z / un_grado_en_radianes + 270) + (getInQuadrant(-Car.children[10].rotation.y / un_grado_en_radianes) - 270))); 
        $("debuggers .wheel .rotate").css({"rotate": -(Car.children[10].rotation.y / un_grado_en_radianes - 90) + "deg"}); 
        $("debuggers .Vv11 .rotate").css({"rotate": -(Car.rotation.z / un_grado_en_radianes + 180) + "deg"}); 
        $("debuggers .wheelRelativoAlMundo .rotate").css({"rotate": (-(Car.rotation.z / un_grado_en_radianes + 180) - (Car.children[10].rotation.y / un_grado_en_radianes - 90)) + "deg"}); 
        $("debuggers .tan span").text("x: " + xEYConElÁngulo(1, parseFloat($("debuggers .bugger span").text())).x.toFixed(2) + ", y: " + xEYConElÁngulo(1, parseFloat($("debuggers .bugger span").text())).y.toFixed(2)); 
        $("debuggers .tan span").attr("title", "x: " + xEYConElÁngulo(1, parseFloat($("debuggers .bugger span").text())).x.toFixed(2) + ", y: " + xEYConElÁngulo(1, parseFloat($("debuggers .bugger span").text())).y.toFixed(2)); 
        !1? $("debuggers .tan span").css({"background": "#d67274"}): $("debuggers .tan span").css({"background": "#25cc54"}); 
    
        scene.remove( curveObject ); 
    
        scene.remove( curveObject2 ); 
        
        scene.remove( oldCurve ); 
        
        scene.remove( oldCurve2 ); 
    
        scene.remove( intersección ); 
    
        scene.remove( intersección2 ); 
    
        renderer.render( scene, camera ); 
    
        //yProjection= parseFloat($("debuggers .tan span").text()) <= 1? parseFloat($("debuggers .tan span").text()) * 0.22: (1 - -(1 - parseFloat($("debuggers .tan span").text()))) * 0.22;  
        //xProjection= parseFloat($("debuggers .tan span").text()) <= 1? (1 - parseFloat($("debuggers .tan span").text())) * 0.22: -(1 - parseFloat($("debuggers .tan span").text())) * -0.22;  
        elps.position.x= Car.children[10].getWorldPosition(v3).x; 
        elps.position.y= Car.children[10].getWorldPosition(v3).y; 

        elps2.position.x= Car.children[9].getWorldPosition(v3).x; 
        elps2.position.y= Car.children[9].getWorldPosition(v3).y; 
        
    
    
        points = curve.getPoints( 50 );
        x = new THREE.BufferGeometry().setFromPoints( points );
        zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        oldCurve = new THREE.Line( x, zz );
    
        scene.add( oldCurve ); 
    


        points2 = curve2.getPoints( 50 );
        x = new THREE.BufferGeometry().setFromPoints( points2 );
        zz = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        oldCurve2 = new THREE.Line( x, zz );
        
        scene.add( oldCurve2 ); 



        intersección = new THREE.Mesh( new THREE.BoxGeometry( 0.013, 0.013, 0.013 ), new THREE.MeshPhongMaterial({ color: 0x1fa2b2 }) );
    
        intersección2 = new THREE.Mesh( new THREE.BoxGeometry( 0.013, 0.013, 0.013 ), new THREE.MeshPhongMaterial({ color: 0x1fa2b2 }) );
    
        scene.add( intersección ); 
        
        scene.add( intersección2 ); 
    
        
        ad= {}; 
        ad.d= 10000; 
        for( ww= 0; ww < 360; ww++ ){ 
    
            if( bEZ.project( { x: pts[ww].x + elps.position.x , y: pts[ww].y + elps.position.y } ).d < ad.d ) 
            { 
                ad= bEZ.project( { x: pts[ww].x + elps.position.x , y: pts[ww].y + elps.position.y } ); 
                ad.x= pts[ww].x + elps.position.x; 
                ad.y= pts[ww].y + elps.position.y; 
                ad.eX= parseInt(ww); 
            } 
        
            if( parseInt( ww ) == pts.length - 2 ){
                closestP= ad; 
            }
        }
            
        intersección.position.x= closestP.x
        intersección.position.y= closestP.y
        intersección.position.z= (-0.033 - 0.012)




        ad= {}; 
        ad.d= 10000; 
        for( ww= 0; ww < 360; ww++ ){ 
            if( bEZ2.project( { x: pts2[ww].x + elps2.position.x , y: pts2[ww].y + elps2.position.y } ).d < ad.d ) 
            { 
                ad= bEZ2.project( { x: pts2[ww].x + elps2.position.x , y: pts2[ww].y + elps2.position.y } ); 
                ad.x= pts2[ww].x + elps2.position.x; 
                ad.y= pts2[ww].y + elps2.position.y; 
                ad.eX= parseInt(ww); 
            } 
        
            if( parseInt( ww ) == pts2.length - 2 ){
                closestP2= ad; 
            }
        }
            
        intersección2.position.x= closestP2.x
        intersección2.position.y= closestP2.y
        intersección2.position.z= (-0.033 - 0.012)
    


        
        ángulo=  0; 
            //console.log( "<190W " + ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, closestP.x , closestP.y ) );  
            if((Car.speed > Car.startingSpeed && keysDown.w || Car.speed > Car.startingSpeed) && !keysDown.s){ 
                if(!caminando){
                    //When this, which was before a condition, but then we left the value to be compared by its3lf (without <= sMt... or smt) b3cause any number by itself technically is true. /*But 0 by itself returns false. that's why it got stuck */
    
                    /*if( ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, Car.children[8].getWorldPosition(v3).x , Car.children[8].getWorldPosition(v3).y ) ){
                        if( ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, closestP.x , closestP.y ) ){
                            ángulo= ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, Car.children[8].getWorldPosition(v3).x , Car.children[8].getWorldPosition(v3).y ) * -1 + ( ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, closestP.x , closestP.y )); 
                            //console.log( "-" + ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, Car.children[8].getWorldPosition(v3).x , Car.children[8].getWorldPosition(v3).y) + ", " + ( ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, closestP.x , closestP.y )) + ": " + Car.children[10].getWorldPosition(v3).x + ", " + Car.children[10].getWorldPosition(v3).y + ", " + closestP.x + ", " + closestP.y ); 
                            //console.log( ángulo ); 
                        }else{
                            //console.log( "else" + ángulo ); 
                        }
                    } */
                    ángulo= ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, Car.children[8].getWorldPosition(v3).x , Car.children[8].getWorldPosition(v3).y ) * -1 + ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, closestP.x , closestP.y ); 
                    /*console.log(ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, Car.children[8].getWorldPosition(v3).x , Car.children[8].getWorldPosition(v3).y ) + ", " + ángDeLaPendiente( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y, closestP.x , closestP.y ) + ", " + ángulo ); */ 
                    //console.log( ángulo )
        
                    viejaPosición= { x: Car.children[10].getWorldPosition(v3).x , y: Car.children[10].getWorldPosition(v3).y }
                    recorded_position= Car.children[10].rotation.y <= Math.PI / 2? { x: Car.children[10].getWorldPosition(v3).x , y: Car.children[10].getWorldPosition(v3).y  }: { x: Car.children[9].getWorldPosition(v3).x , y: Car.children[9].getWorldPosition(v3).y  };
        
        
                    Car.rotation.z -= ángulo * un_grado_en_radianes; 
                    renderer.render( scene, camera ); 
                    
        
                    Car.children[10].rotation.y <= Math.PI / 2? (function(){Car.position.x-= Car.children[10].getWorldPosition(v3).x - recorded_position.x; 
                                            Car.position.y+= recorded_position.y - Car.children[10].getWorldPosition(v3).y; })(): (function(){Car.position.x-= Car.children[9].getWorldPosition(v3).x - recorded_position.x; 
                                            Car.position.y+= recorded_position.y - Car.children[9].getWorldPosition(v3).y; })(); 
                    renderer.render( scene, camera ); 
                }
            } 
            //$(".burger span").html("");  
            //$(".burger").attr( "title" , "" );  
    
            if(keysDown.s && !keysDown.w){ 
                if(!caminando){
                    ángulo= ángDeLaPendiente( Car.children[9].getWorldPosition(v3).x , Car.children[9].getWorldPosition(v3).y, Car.children[9].getWorldPosition(v3).x + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Car.rotation.z / un_grado_en_radianes + 90 ) ) ).x , Car.children[9].getWorldPosition(v3).y + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Car.rotation.z / un_grado_en_radianes + 90 ) ) ).y ) * -1 + ángDeLaPendiente( Car.children[9].getWorldPosition(v3).x , Car.children[9].getWorldPosition(v3).y, closestP2.x , closestP2.y ); 
        
                    recorded_position= Car.children[9].rotation.y <= Math.PI / 2? { x: Car.children[10].getWorldPosition(v3).x , y: Car.children[10].getWorldPosition(v3).y  }: { x: Car.children[9].getWorldPosition(v3).x , y: Car.children[9].getWorldPosition(v3).y  };
        
        
                    Car.rotation.z += ángulo * un_grado_en_radianes; 
                    renderer.render( scene, camera ); 
                    
        
                    Car.children[9].rotation.y <= Math.PI / 2? (function(){Car.position.x-= Car.children[10].getWorldPosition(v3).x - recorded_position.x; 
                                            Car.position.y+= recorded_position.y - Car.children[10].getWorldPosition(v3).y; })(): (function(){Car.position.x-= Car.children[9].getWorldPosition(v3).x - recorded_position.x; 
                                            Car.position.y+= recorded_position.y - Car.children[9].getWorldPosition(v3).y; })(); 
                    renderer.render( scene, camera ); 
                }
            } 
    
    
    
        curve = new THREE.QuadraticBezierCurve3(
                new THREE.Vector3( Car.children[8].getWorldPosition(v3).x , Car.children[8].getWorldPosition(v3).y , (-0.033 - 0.012) ),
                new THREE.Vector3( Car.children[10].getWorldPosition(v3).x , Car.children[10].getWorldPosition(v3).y , (-0.033 - 0.012) ),
                new THREE.Vector3( (Car.children[10].getWorldPosition(v3).x + xEYConElÁngulo(0.22, parseFloat($(".bugger").text())).x) , (Car.children[10].getWorldPosition(v3).y + xEYConElÁngulo(0.22, parseFloat($(".bugger").text())).y), (-0.033 - 0.012) )
            ); 
    
        
        points = curve.getPoints( 50 );
        x = new THREE.BufferGeometry().setFromPoints( points );
        
        zz = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
        
        curveObject = new THREE.Line( x, zz );
    
        bEZ= new Bezier( [ { x: curve.v0.x , y: curve.v0.y } , { x: curve.v1.x , y: curve.v1.y } , { x: curve.v2.x , y: curve.v2.y } ] );
    
    
    
    
        //console.log(curveObject);  
        
        scene.add( curveObject ); 
    

        curve2 = new THREE.QuadraticBezierCurve3( 
            new THREE.Vector3( Car.children[9].getWorldPosition(v3).x + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Car.rotation.z / un_grado_en_radianes + 90 ) ) ).x , Car.children[9].getWorldPosition(v3).y + xEYConElÁngulo( 0.22, getInQuadrant( -getInQuadrant( Car.rotation.z / un_grado_en_radianes + 90 ) ) ).y , (-0.033 - 0.012) ),
            new THREE.Vector3( Car.children[9].getWorldPosition(v3).x , Car.children[9].getWorldPosition(v3).y , (-0.033 - 0.012) ),
            new THREE.Vector3( (Car.children[9].getWorldPosition(v3).x - xEYConElÁngulo( 0.22, parseFloat($(".bugger").text()) ).x) , (Car.children[9].getWorldPosition(v3).y - xEYConElÁngulo( 0.22, parseFloat($(".bugger").text())).y), (-0.033 - 0.012) )
        ); 
            
        points2 = curve2.getPoints( 50 );
            
        x = new THREE.BufferGeometry().setFromPoints( points2 );
            
        zz = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
            
        curveObject2 = new THREE.Line( x, zz );
        bEZ2= new Bezier( [ { x: curve2.v0.x , y: curve2.v0.y } , { x: curve2.v1.x , y: curve2.v1.y } , { x: curve2.v2.x , y: curve2.v2.y } ] );
        
        scene.add( curveObject2 ); 
        
        
        if(caminando){
            cTC=false
            nC= Infinity
            for(var c in Cars){
                distanceFromCar= Math.sqrt( Math.pow( __v.position.x - Cars[c].position.x, 2 ) + Math.pow( __v.position.y - Cars[c].position.y, 2 ) )
                if(distanceFromCar <= 0.35 && distanceFromCar < nC){
                    nC= distanceFromCar
                    cTC= true
                    cC= Cars[c]
                    __sx.position.x= Cars[c].position.x
                    __sx.position.y= Cars[c].position.y
                    __sx.position.z= -0.033; 
                }
            }
            if(!cTC){
                __sx.position.z= -79; 
            }   
        }else{
            __sx.position.z= -79; 
        }   
        
        distanceFromStereo= Math.sqrt( Math.pow( (caminando? __v.position.x: Car.position.x) - Stereo.position.x, 2 ) + Math.pow( (caminando? __v.position.y: Car.position.y) - Stereo.position.y, 2 ) )
        
        if(distanceFromStereo > 21){
            $("audio")[0].volume= 0
        }else{
            $("audio")[0].play()
            $("audio")[0].volume= (100 - distanceFromStereo * 100 / 21) / 100
        }
        
        camera.position.x= oCamera.position.x + xEYConElÁngulo( ( 1.5 + dCamera ), getInQuadrant( -getInQuadrant( oCamera.rotation.z / un_grado_en_radianes + 270 ) ) ).x; 
        camera.position.y= oCamera.position.y + xEYConElÁngulo( ( 1.5 + dCamera ), getInQuadrant( -getInQuadrant( oCamera.rotation.z / un_grado_en_radianes + 270 ) ) ).y; 
        
        camera.rotation.y= oCamera.rotation.z; 
    
        renderer.render( scene, camera ); 
    
        /*console.log( curveObject == oldCurve ); */ 
    }, 1); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    console.log("selfDestructableSetIntervalWhichWaitsForSomething" + "     ₛₐᵢₓᵆ: " + "I Self Destructed ", selfDestructableSetIntervalWhichWaitsForSomething)
    clearInterval(selfDestructableSetIntervalWhichWaitsForSomething); }else{console.log("../THREE is undefined")}}, 100)