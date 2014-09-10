'use strict';

var Bacon = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'bacon', frame);
	this.anchor.setTo(0.5, 0.5);
	this.game.physics.arcade.enableBody(this);
	this.body.collideWorldBounds = true;
	this.body.bounce.setTo(1, 1);
	this.body.velocity.x = this.game.rnd.integerInRange(-500, 500);
	this.body.velocity.y = this.game.rnd.integerInRange(-500, 500);
	this.inputEnabled = true;
	this.events.onInputDown.add(this.destroyBacon, this);
};

Bacon.prototype = Object.create(Phaser.Sprite.prototype);
Bacon.prototype.constructor = Bacon;

Bacon.prototype.destroyBacon = function() {
	this.destroy();
	this.score += 1;
};

Bacon.prototype.update = function() {
	this.angle += 1;
};

module.exports = Bacon;
