import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {

  platforma !: Phaser.Physics.Arcade.StaticGroup
  player !: any
 
  constructor() {
    super('GameScene');
  }
  
  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );  
  }

  create() {
    this.add.image(400, 300, 'sky')
    this.add.image(400, 300, 'star')

    this.platforma = this.physics.add.staticGroup()
    this.platforma.create(400, 568, 'ground').setScale(2).refreshBody

    this.platforma.create(600, 400, 'ground');
    this.platforma.create(50, 250, 'ground');
    this.platforma.create(750, 220, 'ground');
    // CHÃO

    this.player = this.physics.add.sprite(100, 450, 'dude');

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(this.player, this.platforma);

}
}
