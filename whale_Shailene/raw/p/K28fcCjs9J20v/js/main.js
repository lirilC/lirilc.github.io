/**   _   _____ _   _   
*    | | |_   _| |_| |
*    | |_ _| | |  _  |
*    |___|_|_| |_| |_|
*    @author lo.th / http://lo-th.github.io/labs/
*    AMMO LAB MAIN
*/

'use strict';


var demos = {
    'BASIC': ['empty', 'basic', 'moto_basic', 'car_basic', 'collision', 'ragdoll', 'terrain', 'supermaket', 'kinematics', 'kinem_test','character', 'joints', 'point2point', 'contact', 'testmesh','compound', 'tower','rayTest','ghost', 'fps', 'bullet',],
    'SOFT': ['soft_cloth', 'soft_rope', 'soft_rope2', 'soft_box', 'soft_pig', 'soft_ball', 'soft_convex'],
    'ADVANCED':[ 'asteroid', 'basketball', 'car_advanced', 'car_multy', 'car_Breakers', 'car_terrain', 'moto_akira', 'kinem_body','mecanum', 'drone', 'millions', 'water', 'break_glass', 'break_diamond', 'dragon', 'chess',],
};


/*


var demos = [
    'basic', 'terrain', 'supermaket', 'collision', 'ragdoll',
    'car_advanced', 'car_basic','car_multy', 'car_Breakers', 'car_terrain',
    'moto_basic','moto_akira',
    'kinematics', 'kinem_body','kinem_test',
    'soft_cloth', 'soft_rope', 'soft_rope2', 'soft_box', 'soft_pig', 'soft_ball', 'soft_convex',// 'soft_basic', // ,
    'character', 'joints', 'empty',  'asteroid', 'point2point', 'contact', 'testmesh', 'water',
    'mecanum', 'drone', 'millions', 'basketball',
    'compound', 'tower', 
    'break_glass', 'break_diamond',
    'rayTest',
    'ghost', 
    'fps',
    'dragon', 'chess', 'bullet',
];*/

//demos.sort();

var demo, physic;
var demoName = 'basic';
var currentMode = '';

//////////////////////////////

var isWithCode = false;

function init(){

    //view = new View();
    view.init( initAmmo );
    intro.init('Ammo: Kripken | Lab: 3th');
    

}

function initAmmo () {

    physic = SHOT.engine;
    physic.init( next );
    
}

function next(){

    intro.clear();
    
    physic.setView( view );
    physic.log = editor.log;
    physic.tell = function () { editor.tell( 'three '+ view.getFps() + ' / ammo ' + physic.getFps() );  }
    //physic.tell = function () { editor.tell( 'three '+ view.getFps() + ' / ammo ' + Math.floor(physic.getDelta()*1000) );  }
    physic.getKey = function () { return user.key; }



    editor.init( launch, isWithCode, '#308AFF', 'Ammo.lab' );
    editor.addExtraOption( physic.setMode );
    //view.setRefEditor( editor );
    view.setEditor( editor );
    view.setUser( user );
    view.unPause = unPause;

    //physic.start();

    ready();

}

function unPause () {

    physic.start();

}

function ready () {

    editor.load('demos/kinematics.js');
    function demo() {


    physic.set({

        fps:60,
        substep:2,// more substep = more accurate simulation default set to 2
        gravity:[0,-10,0],
        fixed: false,

    })

    // basic geometry body

    physic.add({ type:'plane', friction:1 }); // infinie plane

    var i = 200, pos = [], s, d, rot = [0,0,90];
    
    while( i-- ) {

        h = Math.rand(0.1,4);
        d = Math.rand(0.1,1);

        pos[0] = Math.rand(-5,5); 
        pos[1] = Math.rand(2,20) + ( i*h );
        pos[2] = Math.rand(-5,5);

        switch( Math.randInt(0,4) ){

            case 0 : physic.add({ type:'sphere',   size:[d,d,d], pos:pos, mass:2, friction:1, angular:0.1 }); break;
            case 1 : physic.add({ type:'box',      size:[d,h,d], pos:pos, mass:2 }); break;
            case 2 : physic.add({ type:'cone',     size:[d,h,d], pos:pos, mass:2, friction:1, rolling:0.3, angular:0.1 }); break;
            case 3 : physic.add({ type:'capsule',  size:[d,h,d], rot:rot, pos:pos, mass:2, friction:1, rolling:0.3, angular:0.1 }); break;
            case 4 : physic.add({ type:'cylinder', size:[d,h,d], rot:rot, pos:pos, mass:2, friction:1, rolling:0.3, angular:0.1 }); break;

        }
    }

};

}

function launch ( name, full ) {

    physic.reset( full );
    demo = new window['demo'];

}

function follow ( name, o ) { 

    physic.setCurrentFollow( name, o );

};

function ui ( option ) { editor.setOption( option ); };