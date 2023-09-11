var Terminado = { 
    preload: function(){
        juego.load.bitmapFont('ice', 'fonts/arcade.png', 'fonts/arcade.xml');   
        juego.load.image('bg','img/pista2.png');
    },
    
    create: function(){
        fondo = juego.add.tileSprite(0, 0, 290, 540,'bg');
        juego.add.bitmapText(35,215, 'ice', 'GAME \nOVER',25);
        juego.add.bitmapText(20,300, 'ice','CLICK PARA REINTENTAR',10);
        
    },

    update: function(){
        fondo.tilePosition.y +=3;
        if (juego.input.activePointer.isDown) {
			juego.state.start('Inicio');
            musicaFondo.stop();
		}
	},
    
};