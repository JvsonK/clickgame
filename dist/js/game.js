(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(288, 504, Phaser.AUTO, 'clickgame');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":3,"./states/gameover":4,"./states/menu":5,"./states/play":6,"./states/preload":7}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');

  },
  create: function() {

    this.game.input.maxPointers = 1;
    this.game.state.start('preload');

  }
};

module.exports = Boot;

},{}],4:[function(require,module,exports){

'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],5:[function(require,module,exports){

'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var style = { font: '48px Arial', fill: '#ffffff', align: 'center'};
    this.background = this.game.add.sprite(0, 0, 'background');

    this.titleText = this.game.add.text(this.game.world.centerX, 300, 'BaconFighter!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click/Touch Anywhere!', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);

  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};

module.exports = Menu;

},{}],6:[function(require,module,exports){

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
},{"../prefabs/bacon":2}],7:[function(require,module,exports){

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
},{}]},{},[1])