var juego = new Phaser.Game(290, 540, Phaser.CANVAS, 'bloque_juego');

juego.state.add('Inicio',Inicio);
juego.state.add('Juego',Juego);
juego.state.add('Juego2',Juego2);
juego.state.add('Juego3',Juego3);
juego.state.add('Terminado',Terminado);
juego.state.add('Logro',Logro);
juego.state.start('Inicio');

