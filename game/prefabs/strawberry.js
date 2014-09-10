'use strict';

var Strawberry = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'strawberry', frame);
  this.anchor.setTo(0.5, 0.5);

  this.game.physics.arcade.enableBody(this);

  // initialize your prefab here
  
};

Strawberry.prototype = Object.create(Phaser.Sprite.prototype);
Strawberry.prototype.constructor = Strawberry;

Strawberry.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Strawberry;
