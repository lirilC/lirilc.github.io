var a_flosers= ""
var carMat;
var option = {

    follow:true,
    currentCar: 'fordM',

}
recTangl= function(f,shads){
    return view.material({
        color: f,
        metalness:1,
        roughness:1,
        opacity:1,
        depthWrite: true,
        premultipliedAlpha:true,
        //side: THREE.DoubleSide,
    })
}
pawn_material= function(f){
    return view.material({
        color: f,
        roughness: 0.4,
        metalness: 0.5
    })
}
addPawn= function(nm, color, posiTion){
    physic.add( {
        shape: view.getGeometry( 'chess','pawn_shape' ),//geometry( o.type + '_shape'),
        geometry: view.getGeometry( 'chess', 'pawn', true ),
        name: nm, 
        material: pawn_material(color),
        type: 'convex', 
        size: [ 0.2 ], 
        geoScale: [ 0.2 ], 
        pos: posiTion, 
        rot: [0,0,0],
        mass:  10, 
        friction: 1,
        rolling:0.9,
        angular:0.5,
        margin:0.03
    } ); 
}
var CARS = [
    { n:'001', name:'fordM'  , radius:0.36, nw:4, w:'1', mass:1109,  wPos:[0.76, 0, 1.46] },
    { n:'002', name:'vaz'    , radius:0.36, nw:4, w:'1', mass:1003,  wPos:[0.72, 0, 1.31] },
    { n:'003', name:'coupe'  , radius:0.36, nw:4, w:'1', mass:900,   wPos:[0.96, 0, 1.49] },
    { n:'005', name:'ben'    , radius:0.40, nw:4, w:'2', mass:1256,  wPos:[0.88, 0, 1.58] },
];
function vehicle ( id, pos, shapeType ) {

    var o = CARS[id];
    o.type = 'car';
    o.shapeType = shapeType || 'box';
    
    o.pos = pos || [0,0,0];
    o.rot = [0,-90,0];

    var shape = view.getGeometry( 'cars', 'shape'+o.n );
    var chassis = view.getGeometry( 'cars', 'mcar'+o.n );
    var down = view.getGeometry( 'cars', 'down'+o.n );
    var inside = view.getGeometry( 'cars', 'inside'+o.n );
    var yy = shape.boundingBox.min.y;

    o.material = carMat;

    if( inside ) o.geometry = view.mergeGeometry([chassis, down, inside]);
    else o.geometry = view.mergeGeometry([chassis, down]);

    o.wheelMaterial = carMat;//view.getMat().cars;

    // The maximum length of the suspension (metres)
    o.s_length = 0.1;//o.radius;// * 0.5;
    //The maximum distance the suspension can be compressed in Cm 
    //o.s_travel = (o.radius*2)*100;
    o.mass = o.mass / 5;
    // Maximum suspension force
    o.s_force = o.mass*10;


    o.s_compression = 0.84;
    o.s_damping = 0.88;
    o.s_stiffness = 40;

    o.wPos[1] = o.radius;//*2;
    
    o.shape = shape;
    //o.mesh = mesh;
    o.wheel = view.getGeometry( 'cars', 'w00' + o.w );
    o.nWheel = o.nw;

    //o.name = 'car_'+ id;

    o.helper = false;

    return o;

};
var recTangle_info= [
    {pic: "https://i.huffpost.com/gen/1693767/images/o-BURNING-MONEY-facebook.jpg", title: "Cabos sueltos", description: "Una forma muy costosa (200) de perder tu turno (vuelves a donde estabas antes).", price: 200},
    {pic: "https://i.pinimg.com/originals/84/b7/c7/84b7c7fb7d548d5e65f271c5a70b0d00.jpg", title: "Desterrado", description: "Te van a desterrar por dos turnos a menos de que pagues.", price: 23, funcTion: function(){

    }, re_fusTion: function(){
        chaR(activeChar).skip= 2
        physic.matrix( [ { name:CARS[activeChar].name, pos: [ -63, 2, -68], noVelocity:true } ] )
    }},
    {pic: "http://canadajournal.net/wp-content/uploads/2014/12/Lost-Luggage-Found-20-Years-Later-Video.jpg", title: "Where're my bags?", description: "Recuberarás tus maletas.", price: 82, funcTion: function(){
        for(var i= 2 + parseInt(Math.random()* 19); i; i--){
            physic.add({type:'box', group:1, size:[0.3 + Math.random()*0.2,0.9 + Math.random()*0.9,1.2* Math.random()*1.1], pos:[27.5,3,-42.5 - Math.random()*7], rot:[Math.random()*180,Math.random()*180,Math.random()*180], mass: Math.random() * 2,material: recTangl([0x794e4e, 0x8e6f6f, 0xcea392, 0x625b5b][parseInt(Math.random() * 4 + 1)]) });
        }
    }},
    {pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1061%2F1924%2Fproducts%2FAngel_Halo_Emoji_Icon_0ff75c27-5416-4ac6-bf1a-2a2d44b0a32b_grande.png%3Fv%3D1542446807&f=1&nofb=1&ipt=f487639cb89ec13d835512f33e085847741d7530bc21efbbddb86fe26fbfc9d4&ipo=images", title: "A lo que vinimos", description: "Obtendr&aacute;s un alo para tu carro.", price: 20, funcTion: function(){
        alo= new THREE.Mesh( new THREE.TorusGeometry(0.2, 0.025, 16, 32), recTangl(0xe3b661) );
        aloBelow= new THREE.Mesh( new THREE.TorusGeometry(0.2, 0.025, 16, 32), recTangl(0xe3b661) );
        view.getScene().getObjectByName(chaR(activeChar).caR).add(aloBelow)
        view.getScene().getObjectByName(chaR(activeChar).caR).add(alo)
        aloBelow.rotation.x= 90 * Math.PI/180
        alo.rotation.x= -90 * Math.PI/180
        alo.position.y= 2
        aloBelow.position.y= 2
    }},
    {pic: "https://st4.depositphotos.com/18565272/20737/i/450/depositphotos_207379520-stock-photo-colombian-currency-wad-fifty-thousand.jpg", title: "En efectivo", description: "Cambiar&aacute;s 37 denominaciones por efectivo.", price: 37, funcTion: function(){
        for(var i= 37; i; i--){
            physic.add({type:'box', group:1, size:[0.001,0.2,0.1], pos:[17.5,3,-42.5 - Math.random()*7], rot:[Math.random()*180,Math.random()*180,Math.random()*180], mass: 0.001,material: recTangl(0xd9966e), castShadow: false });
        }
    }},
    {pic: "https://img.lagaceta.com.ar/fotos/notas/2022/12/18/tapada-dibu-martinez-fue-clave-para-argentina-se-quede-mundial-qatar-973812-224916.jpg", title: "Flores de colores", description: "Un bal&oacute;n, tres 2; (2022). ..S&oacute;lo un bal&oacute;n. &iexcl;Felicidades a Argentina por ganar la Copa Mundial de la FIFA!", price: 1, funcTion: function(){
        physic.add({ 
            name:'ball', type:'highsphere', mass:1.24, 
            size:[0.2], pos:[12.5,4,-45.5], 
            friction: 0.5, restitution:0.6, 
            material: mat.bball 
        });
        var material= function(c){return new THREE.MeshBasicMaterial( {color: c} )};

        var cone= function(c){
            one= new THREE.Mesh( new THREE.ConeGeometry( 0.10025, 0.20050, 12 ), material(c) )
            one.position.y=0.55
            one.rotation.x= 180 * Math.PI/180
            return one
        };
        var heXaii= function(){
          return (function (fn) {
            return new Function('return ' + fn)();
          })(`0x${heXai()}`)
        }

        heXa= ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
        function heXai(){
            let reTurn= ""

            while(reTurn.length<6){
            reTurn= reTurn + heXa[parseInt(Math.random() * heXa.length)]
            }

            return reTurn
        }

        a_flosers= heXai() + 39;
        for(a_flosers= a_flosers; parseInt(a_flosers.slice(6));a_flosers= a_flosers.slice(0, 6) + (parseInt(a_flosers.slice(6)) - 1)){
            physic.add ({ type:'box', name: `floser${a_flosers}`, pos:[view.getScene().getObjectByName(CARS[activeChar].name).position.x,view.getScene().getObjectByName(CARS[activeChar].name).position.y + 3,-42.5 - Math.random()*7], rot:[Math.random()*359,Math.random()*359,Math.random()*390], size:[0.03, 1.1, 0.03], mass:0.002,material:recTangl(0xcc8d57) } );
            view.getScene().getObjectByName(`floser${a_flosers}`).add(cone(heXaii()))
        }
        /*physic.add ({ type:'box', name: "flower", pos:[view.getScene().getObjectByName(CARS[activeChar].name).position.x,view.getScene().getObjectByName(CARS[activeChar].name).position.y + 3,-42.5 - Math.random()*7], rot:[Math.random()*359,Math.random()*359,Math.random()*390], size:[0.03, 1.1, 0.03], mass:0.002,material:recTangl(0xcc8d57) } );
        view.getScene().getObjectByName("flower").add(cone(0xff223d))*/
    }},
    {pic: "https://www.wikihow.com/images/thumb/0/00/Win-Playing-UNO-Step-7-Version-2.jpg/aid320316-v4-728px-Win-Playing-UNO-Step-7-Version-2.jpg", title: "&iexcl;UNO&reg;!", description: "&iexcl;Solo te queda una carta!, &iexcl;ganaste en UNO&reg;", price: 100, funcTion: function(){
        heXa= ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
        function heXai(){
            let reTurn= ""

            while(reTurn.length<6){
            reTurn= reTurn + heXa[parseInt(Math.random() * heXa.length)]
            }

            return reTurn
        }
        c_name= `C_${heXai()}`
        physic.add({type:'box', name: c_name, group:1, size:[0.001,0.2,0.1], pos:[view.getScene().getObjectByName(CARS[activeChar].name).position.x + Math.sin(view.getScene().getObjectByName(CARS[activeChar].name).rotation._y) * 3, view.getScene().getObjectByName(CARS[activeChar].name).position.y + 3,view.getScene().getObjectByName(CARS[activeChar].name).position.z + Math.cos(view.getScene().getObjectByName(CARS[activeChar].name).rotation._y) * 3], rot:[Math.random()*180,Math.random()*180,Math.random()*180], mass: 0.001,material: recTangl(0xff0000), castShadow: false });
        cube = new THREE.Mesh(  new THREE.BoxGeometry( 0.002,0.154709997,0.053777997 ), new THREE.MeshBasicMaterial( {color: 0xffffff} ) );
        view.getScene().getObjectByName(c_name).add(cube)
    }}
]
function demo () {
    view.moveCam({ theta:-90, phi:40, distance:13, target:[47, 0,-44] });

    physic.set(); // reset default setting

    // infinie plane
    physic.add({type:'plane', group:1});

    // side wall
    physic.add({type:'box', group:1, size:[100,20,1], pos:[0,10,50.5] });
    physic.add({type:'box', group:1, size:[30,12,1], pos:[25,6,40.5] });
    physic.add({type:'box', group:1, size:[30,12,1], pos:[-25,6,40.5] });
    physic.add({type:'box', group:1, size:[100,20,1], pos:[0,10,-50.5] });
    physic.add({type:'box', group:1, size:[30,12,1], pos:[25,6,-40.5] });
    physic.add({type:'box', group:1, size:[30,12,1], pos:[-25,6,-40.5] });
    physic.add({type:'box', group:1, size:[1,20,100], pos:[50.5,10,0] });
    physic.add({type:'box', group:1, size:[1,12,30], pos:[40.5,6,25] });
    physic.add({type:'box', group:1, size:[1,12,30], pos:[40.5,6,-25] });
    physic.add({type:'box', group:1, size:[1,20,100], pos:[-50.5,10,0] });
    physic.add({type:'box', group:1, size:[1,12,30], pos:[-40.5,6,25] });
    physic.add({type:'box', group:1, size:[1,12,30], pos:[-40.5,6,-25] });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[37.5,0,-45.5], name: "recTangle0", material: recTangl(0xff1212) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[32.5,0,-45.5], name: "recTangle1", material: recTangl(0x0f9ba0) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[27.5,0,-45.5], name: "recTangle2", material: recTangl(0x2f2fff) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[22.5,0,-45.5], name: "recTangle3", material: recTangl(0xd7ff8c) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[17.5,0,-45.5], name: "recTangle4", material: recTangl(0xb3c82d) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[12.5,0,-45.5], name: "recTangle5", material: recTangl(0xd99836) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-12.5,0,-45.5], name: "recTangle6", material: recTangl(0xf2656d) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-17.5,0,-45.5], name: "recTangle7", material: recTangl(0xffc2fd) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-22.5,0,-45.5], name: "recTangle8", material: recTangl(0x070707) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-27.5,0,-45.5], name: "recTangle9", material: recTangl(0x77f717) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-32.5,0,-45.5], name: "recTangle10", material: recTangl(0xf23467) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-37.5,0,-45.5], name: "recTangle11", material: recTangl(0x043754) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,-37.5], name: "recTangle12", material: recTangl(0xbd8311) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,-32.5], name: "recTangle13", material: recTangl(0xfff234) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,-27.5], name: "recTangle14", material: recTangl(0x3182cc) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,-22.5], name: "recTangle15", material: recTangl(0xcff719) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,-17.5], name: "recTangle16", material: recTangl(0xfc2719) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,-12.5], name: "recTangle17", material: recTangl(0xc345d9) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,12.5], name: "recTangle18", material: recTangl(0xbf920d) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,17.5], name: "recTangle19", material: recTangl(0xbc23d5) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,22.5], name: "recTangle20", material: recTangl(0xbc01f5) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,27.5], name: "recTangle21", material: recTangl(0xb34c23) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,32.5], name: "recTangle22", material: recTangl(0xbd2d8c) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[-45.5,0,37.5], name: "recTangle23", material: recTangl(0xf3246d) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[37.5,0,45.5], name: "recTangle24", material: recTangl(0xd2fccf) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[32.5,0,45.5], name: "recTangle25", material: recTangl(0x3df298) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[27.5,0,45.5], name: "recTangle26", material: recTangl(0xd23fff) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[22.5,0,45.5], name: "recTangle27", material: recTangl(0xdf8928) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[17.5,0,45.5], name: "recTangle28", material: recTangl(0x190213) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[12.5,0,45.5], name: "recTangle29", material: recTangl(0xcc22d1) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-12.5,0,45.5], name: "recTangle30", material: recTangl(0x10d729) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-17.5,0,45.5], name: "recTangle31", material: recTangl(0xdb90ff) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-22.5,0,45.5], name: "recTangle32", material: recTangl(0xbbf837) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-27.5,0,45.5], name: "recTangle33", material: recTangl(0xfecfec) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-32.5,0,45.5], name: "recTangle34", material: recTangl(0xc8f972) });
    physic.add({type:'box', group:1, size:[5,0.1,9], pos:[-37.5,0,45.5], name: "recTangle35", material: recTangl(0x04d754) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,37.5], name: "recTangle36", material: recTangl(0xf1a191) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,32.5], name: "recTangle37", material: recTangl(0x201874) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,27.5], name: "recTangle38", material: recTangl(0x869279) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,22.5], name: "recTangle39", material: recTangl(0x109849) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,17.5], name: "recTangle40", material: recTangl(0x957913) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,12.5], name: "recTangle41", material: recTangl(0x392798) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,-12.5], name: "recTangle42", material: recTangl(0x910471) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,-17.5], name: "recTangle43", material: recTangl(0x010473) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,-22.5], name: "recTangle44", material: recTangl(0x975976) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,-27.5], name: "recTangle45", material: recTangl(0x313546) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,-32.5], name: "recTangle46", material: recTangl(0x978274) });
    physic.add({type:'box', group:1, size:[9,0.1,5], pos:[45.5,0,-37.5], name: "recTangle47", material: recTangl(0x397414) });

    
    /*var i, s, x, y, t;
    for( i = 0; i < 20; i++){
        t = Math.randInt(0,1)
        x = Math.rand(-50, 50);
        z = Math.rand(-50, 50);
        s = Math.rand(0.5, 5);
        d = Math.rand(0.5, 5);
        b = Math.rand(0.5, 5);
        physic.add({ type:t===1 ?'box':'sphere', size:t===1?[s,d,b]: [s,s,s], pos:[x,s*0.5,z], mass:s, state:4 });
    }*/

    
    physic.set({
        fps:60,
        numStep:8,// more numStep = more accurate simulation default set to 2
        gravity:[ 0, option.gravity ,0 ],
    })

    view.load ( 'cars.sea', afterLoad, true );

    view.load ( 'chess.sea', afterLoadGeometry, true, true );
    window.mat= {}
    mat['bball'] = view.material({
        name:'bball',
        roughness: 0.4,
        metalness: 0.7,
        map: { url:'bball.jpg', repeat:[2,1], flip:true },
        normalMap: { url:'bball_n.jpg', repeat:[2,1], flip:true },
    });
    
   
};
function afterLoadGeometry(){
    addPawn('p1', 0xff0000, [40,0,-48])
    addPawn('p2', 0x00ff00, [40,0,-47])
    addPawn('p3', 0x0000ff, [40,0,-46])
    addPawn('p4', 0xffff00, [40,0,-45])
} 
function Yoch_fordM( o ){
    if(option.currentCar!="fordM")return
    if(0==o.name.indexOf("recTangle") && ("undefined"==typeof oldColor || ("undefined"!=typeof oldColor && oldColor.recT.name != o.name))){
        if("undefined"!=typeof oldColor){oldColor.recT.material.color= oldColor.col; active_recTangle= null;}
        if("undefined"==typeof oldColor || ("undefined"!=typeof oldColor && oldColor.recT.name != o.name)){
            info.show(recTangle_info[parseInt(o.name.slice(9))])
        }
        oldColor= {recT:view.getScene().getObjectByName(o.name), col: view.getScene().getObjectByName(o.name).material.color}
        if(parseInt(o.name.slice(9)) == chaR(activeChar).posiTion){
            active_recTangle= parseInt(o.name.slice(9));
            view.getScene().getObjectByName(o.name).material.color= {r:0.3,g:1,b:0.3}
        }else{
            view.getScene().getObjectByName(o.name).material.color= {r:0.5,g:0.5,b:0.5}
            active_recTangle= null;
        }
    }else if("undefined"!=typeof oldColor && oldColor.recT.name != o.name){
        oldColor.recT.material.color= oldColor.col;
        active_recTangle= null;
        delete oldColor
        info.clear()
    }
} 
function Yoch_vaz( o ){
    if(option.currentCar!="vaz")return
    if(0==o.name.indexOf("recTangle") && ("undefined"==typeof oldColor || ("undefined"!=typeof oldColor && oldColor.recT.name != o.name))){
        if("undefined"!=typeof oldColor){oldColor.recT.material.color= oldColor.col; active_recTangle= null;}
        if("undefined"==typeof oldColor || ("undefined"!=typeof oldColor && oldColor.recT.name != o.name)){
            info.show(recTangle_info[parseInt(o.name.slice(9))])
        }
        oldColor= {recT:view.getScene().getObjectByName(o.name), col: view.getScene().getObjectByName(o.name).material.color}
        if(parseInt(o.name.slice(9)) == chaR(activeChar).posiTion){
            active_recTangle= parseInt(o.name.slice(9));
            view.getScene().getObjectByName(o.name).material.color= {r:0.3,g:1,b:0.3}
        }else{
            view.getScene().getObjectByName(o.name).material.color= {r:0.5,g:0.5,b:0.5}
            active_recTangle= null;
        }
    }else if("undefined"!=typeof oldColor && oldColor.recT.name != o.name){
        oldColor.recT.material.color= oldColor.col;
        active_recTangle= null;
        delete oldColor
        info.clear()
    }
}
function Yoch_coupe( o ){
    if(option.currentCar!="coupe")return
    if(0==o.name.indexOf("recTangle") && ("undefined"==typeof oldColor || ("undefined"!=typeof oldColor && oldColor.recT.name != o.name))){
        if("undefined"!=typeof oldColor){oldColor.recT.material.color= oldColor.col; active_recTangle= null;}
        if("undefined"==typeof oldColor || ("undefined"!=typeof oldColor && oldColor.recT.name != o.name)){
            info.show(recTangle_info[parseInt(o.name.slice(9))])
        }
        oldColor= {recT:view.getScene().getObjectByName(o.name), col: view.getScene().getObjectByName(o.name).material.color}
        if(parseInt(o.name.slice(9)) == chaR(activeChar).posiTion){
            active_recTangle= parseInt(o.name.slice(9));
            view.getScene().getObjectByName(o.name).material.color= {r:0.3,g:1,b:0.3}
        }else{
            view.getScene().getObjectByName(o.name).material.color= {r:0.5,g:0.5,b:0.5}
            active_recTangle= null;
        }
    }else if("undefined"!=typeof oldColor && oldColor.recT.name != o.name){
        oldColor.recT.material.color= oldColor.col;
        active_recTangle= null;
        delete oldColor
        info.clear()
    }
}
function Yoch_ben( o ){
    if(option.currentCar!="ben")return
    if(0==o.name.indexOf("recTangle") && ("undefined"==typeof oldColor || ("undefined"!=typeof oldColor && oldColor.recT.name != o.name))){
        if("undefined"!=typeof oldColor){oldColor.recT.material.color= oldColor.col; active_recTangle= null;}
        if("undefined"==typeof oldColor || ("undefined"!=typeof oldColor && oldColor.recT.name != o.name)){
            info.show(recTangle_info[parseInt(o.name.slice(9))])
        }
        oldColor= {recT:view.getScene().getObjectByName(o.name), col: view.getScene().getObjectByName(o.name).material.color}
        if(parseInt(o.name.slice(9)) == chaR(activeChar).posiTion){
            active_recTangle= parseInt(o.name.slice(9));
            view.getScene().getObjectByName(o.name).material.color= {r:0.3,g:1,b:0.3}
        }else{
            view.getScene().getObjectByName(o.name).material.color= {r:0.5,g:0.5,b:0.5}
            active_recTangle= null;
        }
    }else if("undefined"!=typeof oldColor && oldColor.recT.name != o.name){
        oldColor.recT.material.color= oldColor.col;
        active_recTangle= null;
        delete oldColor
        info.clear()
    }
}
function afterLoad () {


    physic.set({
        fps:60,
        substep:2,
        gravity:[0,-10,0],
        worldscale:1,
    })

    // infinie plane
    physic.add({type:'plane'});

    carMat = view.material({
        
        name:'extra',
        roughness: 0.2,
        metalness: 0.8,
        map:{ url:'cars.png'},
        transparent:true,
        side: 'Double',
        premultipliedAlpha: true,

    });

    // create cars
    var list = [];
    var g = [];
    for (var i = 0; i < CARS.length; i++){ 
        list.push( CARS[i].name );
        physic.add( vehicle( i, [47, 0,-49+(i*2.4)], 'convex') );
    }

    setTimeout(function(){for(var e= 0; e<=3;e++){
        chaR(e).name= prompt(`\u00bfQui\u00e9n conducir\u00e1 el ${CARS[e].name}\u003f`)
    };
    changeChar(0)
    dices.setThrower(activeChar)
    }, 3000)

    ui ({

        base:option,
        function: applyOption,

        follow: { type:'bool' },
        currentCar: { type:'list', list:list },
    
    });

    var fordM_raycaster = physic.add({ type:'ray',name:'fordM_raycaster', pos:[0,0,0], parent: view.getScene().getObjectByName("fordM"), start:[0,0.2,0], end:[0,-5,0], mask:1, precision:1, callback: Yoch_fordM, material: {opacity: 0} });
    var vaz_raycaster = physic.add({ type:'ray',name:'vaz_raycaster', pos:[0,0,0], parent: view.getScene().getObjectByName("vaz"), start:[0,0.2,0], end:[0,-5,0], mask:1, precision:1, callback: Yoch_vaz, material: {opacity: 0} });
    var coupe_raycaster = physic.add({ type:'ray',name:'coupe_raycaster', pos:[0,0,0], parent: view.getScene().getObjectByName("coupe"), start:[0,0.2,0], end:[0,-5,0], mask:1, precision:1, callback: Yoch_coupe, material: {opacity: 0} });
    var ben_raycaster = physic.add({ type:'ray',name:'ben_raycaster', pos:[0,0,0], parent: view.getScene().getObjectByName("ben"), start:[0,0.2,0], end:[0,-5,0], mask:1, precision:1, callback: Yoch_ben, material: {opacity: 0} });
    view.getScene().getObjectByName("fordM_raycaster").material.opacity= 0;
    view.getScene().getObjectByName("vaz_raycaster").material.opacity= 0;
    view.getScene().getObjectByName("coupe_raycaster").material.opacity= 0;
    view.getScene().getObjectByName("ben_raycaster").material.opacity= 0;
    view.getScene().getObjectByName("fordM_raycaster").material.transparent= true;
    view.getScene().getObjectByName("vaz_raycaster").material.transparent= true;
    view.getScene().getObjectByName("coupe_raycaster").material.transparent= true;
    view.getScene().getObjectByName("ben_raycaster").material.transparent= true;
    // ! \\ set the car we drive
    // use keyboard to controle car w
    physic.postUpdate= update
};
function update(){
//view.getScene().getObjectByName("p3").rotateX(0)
//view.getScene().getObjectByName("p3").rotateZ(0)
}
function applyOption () {

    follow( option.follow ? option.currentCar : 'none' )
    physic.drive (option.currentCar);

}
window.activeChar= 0
window.active_recTangle= null
function changeChar (x) {

    follow( CARS[x].name )
    physic.drive (CARS[x].name);
    option.currentCar= CARS[x].name
    activeChar= x
    /*Object.values(char)[0].posiTion= 2*/
}


window.char= {
    c0: {posiTion: -1, adquisiTions:[], currencies: 1000, skip: 0, caR: "fordM"},
    c1: {posiTion: -1, adquisiTions:[], currencies: 1000, skip: 0, caR: "vaz"},
    c2: {posiTion: -1, adquisiTions:[], currencies: 1000, skip: 0, caR: "coupe"},
    c3: {posiTion: -1, adquisiTions:[], currencies: 1000, skip: 0, caR: "ben"}
}
window.chaR= function(N){
    return Object.values(char)[N]
}
display.log= function(t){
    document.querySelector("display log").innerHTML= `${t}`
}
burger.write= function(t){
    document.querySelector(".burger span").innerHTML= `${t}`
}

info.clear= function(){
    $("display img").attr("src", "")
    display.log('')
    burger.write('')
}
info.show= function(i){
    if("undefined"==typeof i){
        info.clear()
        return
    }
    $("display img").attr("src", i.pic)
    display.log(i.title)
    burger.write(i.description)
}


dices.throw= function(no_luck__experienced_method){if(no_luck__experienced_method || !!!no_luck__experienced_method){return [parseInt(Math.random() * 6) + 1, parseInt(Math.random() * 6) + 1]}}

dices.inform= function(th){
    Throw= th;
    alert(`${th[0]} y ${th[1]} (${(th[0] + th[1])})`)    
}
dices.disable_throw= function(){
    $("#Throw").attr("disabled", "true")
    $("#Throw").text(`Tirar los dados`)
    $("#Throw").blur()
}
dices.setThrower= function(T){
    $("#Throw").removeAttr("disabled")
    activeChar= T;
    $("#Throw").text(`Tirar los dados. (${chaR(T).name})`)
}
