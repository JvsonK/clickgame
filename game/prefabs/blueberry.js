'use strict';

var Blueberry = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'blueberry', frame);
  this.anchor.setTo(0.5, 0.5);

  this.game.physics.arcade.enableBody(this);

  // initialize your prefab here
  
};

Blueberry.prototype = Object.create(Phaser.Sprite.prototype);
Blueberry.prototype.constructor = Blueberry;

Blueberry.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Blueberry;
