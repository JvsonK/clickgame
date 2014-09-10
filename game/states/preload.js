
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.spritesheet('background', 'assets/back.png', 288, 504, 3);
    this.load.image('yeoman', 'assets/yeoman-logo.png');
    this.load.image('bacon', 'assets/bacon.png');
    this.load.image('blueberry', 'assets/blueberry.png');
    this.load.image('strawberry', 'assets/strawberry.png');
    this.load.image('egg', 'assets/egg.png');

  },

  create: function() {
    this.asset.cropEnabled = false;

  },

  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },



  onLoadComplete: function() {
    this.ready = true;
  }

};

module.exports = Preload;
[]