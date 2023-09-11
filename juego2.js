var fondo;
var carro;
var cursores;
var enemigos;
var timer;
var gasolinas;
var timerGasolina;

var Juego2 = {

	preload: function(){
		juego.load.image('bg','img/pista2.png');
		juego.load.image('carro','img/prota.png');
		juego.load.image('enemigo1','img/auto3.png');
		juego.load.image('gasolina','img/barril.png');
		juego.load.audio('choque','audio/choque3.mp3');
		juego.load.audio('puntos','audio/puntos.wav');
		juego.load.bitmapFont('ice', 'fonts/arcade.png', 'fonts/arcade.xml');
		juego.forceSingleUpdate = true;

	},

	create: function(){
		fondo = juego.add.tileSprite(0, 0, 290, 540,'bg');

		carro = juego.add.sprite(juego.width/2, 496, 'carro');
		carro.anchor.setTo(0.5);

		enemigos=juego.add.group();
		juego.physics.arcade.enable(enemigos,true);
		enemigos.enableBody=true;
		enemigos.createMultiple(20,'enemigo1');
		enemigos.setAll('anchor.x',0.5);
		enemigos.setAll('anchor.y',0.5);
		enemigos.setAll('outOfBoundsKill',true);
		enemigos.setAll('checkWorldBounds',true);

		gasolinas=juego.add.group();
		juego.physics.arcade.enable(gasolinas,true);
		juego.physics.arcade.enable(carro,true);
		gasolinas.enableBody=true;
		gasolinas.createMultiple(20,'gasolina');
		gasolinas.setAll('anchor.x',0.5);
		gasolinas.setAll('anchor.y',0.5);
		gasolinas.setAll('outOfBoundsKill',true);
		gasolinas.setAll('checkWorldBounds',true);

		timer = juego.time.events.loop(1500,this.crearCarroMalo,this);
		timerGasolina = juego.time.events.loop(2000,this.crearGasolina,this);
		cursores=juego.input.keyboard.createCursorKeys();

		//puntos=3;
		txtPuntos = juego.add.bitmapText(85, 20, 'ice', '3', 10);
		juego.add.bitmapText(15, 20, 'ice', 'Puntos: ',10);

		//vidas = 3;
		if (vidas ==3) {
			txtVidas = juego.add.bitmapText(200,20, 'ice', '3', 10);
		}else if (vidas ==2) {
			txtVidas = juego.add.bitmapText(200,20, 'ice', '2', 10);
		}else{
			txtVidas = juego.add.bitmapText(200,20, 'ice', '1', 10);
		}
		juego.add.bitmapText(135,20, 'ice', 'Vidas: ',10);
		
		juego.add.bitmapText(12,525, 'ice', 'GROVER',10);
		juego.add.bitmapText(230,20, 'ice', 'NV 2',10);
		
	},

	update: function(){
		fondo.tilePosition.y +=3;
		

		if (cursores.right.isDown && carro.position.x<245) {
			carro.position.x+=5;
		}
		else if (cursores.left.isDown && carro.position.x>45) {
			carro.position.x-=5;
		}

		juego.physics.arcade.overlap(carro,gasolinas,colisionGasolina,null,this);
		juego.physics.arcade.overlap(carro,enemigos,colisionAuto,null,this);

	},

	crearCarroMalo: function(){
		var posicion = Math.floor(Math.random()*3)+1;
		var enemigo = enemigos.getFirstDead();
		enemigo.physicsBodyType = Phaser.Physics.ARCADE;
		enemigo.reset(posicion*80,0);
		enemigo.body.velocity.y = 400;
		enemigo.anchor.setTo(1);

		if (puntos==6) {
			juego.state.start('Juego3');
			
		}
	},

	crearGasolina: function(){
		var posicion = Math.floor(Math.random()*3)+1;
		var gasolina = gasolinas.getFirstDead();
		gasolina.physicsBodyType = Phaser.Physics.ARCADE;
		gasolina.reset(posicion*73,0);
		gasolina.body.velocity.y = 400;
		gasolina.anchor.setTo(0.5);
	}

};

function colisionGasolina(c,g){
	c;

	if (g.kill()) {
		var sonidoPuntos = juego.sound.add('puntos');
		sonidoPuntos.play();
	}
	puntos++;
	txtPuntos.text = puntos;
}

function colisionAuto(c,e){
	c;
	if (e.kill()) {
		vidas -= 1;
		txtVidas.text = vidas;
		var sonido = juego.sound.add('choque');
		sonido.play();
	}

	if (vidas ==0) {
		juego.state.start('Terminado');
	}
}

	
