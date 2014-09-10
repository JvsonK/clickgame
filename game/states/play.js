
  'use strict';
  var Bacon = require('../prefabs/bacon');

  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.background = this.game.add.sprite(0, 0, 'background');
      this.background.animations.add('rotate');
      this.background.animations.play('rotate', 12, true);

      this.labelScore = this.game.add.text(this.game.world.centerX, 200, 'the score ' + this.score, { font: '16px Arial', fill: '#ffffff', align: 'center'});

      var baconGroup = this.game.add.group();
        for (var i = 0; i < 10; i++) {
          var bacon = new Bacon(this.game, this.game.world.randomX, this.game.world.randomY);
          baconGroup.add(bacon);
        }

    },  
      
    update: function() {

    }
    /*
    clickListener: function() {
      this.game.state.start('gameover');
    }
    */
  };
  
  module.exports = Play;