'use strict';

var Egg = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'egg', frame);
  this.anchor.setTo(0.5, 0.5);

  this.game.physics.arcade.enableBody(this);

  // initialize your prefab here
  
};

Egg.prototype = Object.create(Phaser.Sprite.prototype);
Egg.prototype.constructor = Egg;

Egg.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Egg;
