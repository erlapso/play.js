var play = require('../lib/play').Play();

// play with a callback
play.sound('../wavs/sfx/intro.wav', function(err, data){
  
  // these are all "fire and forget", no callback
  play.sound('../wavs/sfx/alarm.wav');
  play.sound('../wavs/sfx/crinkle.wav');
  play.sound('../wavs/sfx/flush.wav');
  play.sound('../wavs/sfx/ding.wav');
});
