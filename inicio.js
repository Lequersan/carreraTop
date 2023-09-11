var fondo;
var inicio;
var Inicio = {
    
    preload: function(){
        juego.load.bitmapFont('ice', 'fonts/azo-fire.png', 'fonts/azo-fire.xml');
		juego.load.image('inicio','img/inicio.jpg');
        juego.load.image('start','img/start.png');

        
    },
    
    create: function(){
        fondo = juego.add.tileSprite(0, 0, 290, 540,'inicio');
        juego.add.bitmapText(40,45, 'ice', 'GROVER LEQUERNAQUE',17);
        juego.add.bitmapText(70,515, 'ice', 'U19202482',22);
        inicio = juego.add.sprite(50, 200, 'start');
        
    },
    update: function(){
        if (juego.input.activePointer.isDown) {
			juego.state.start('Juego');
		}

    }
    
};