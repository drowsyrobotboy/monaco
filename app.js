module.exports={
  notepad: function() {
    var exec = require('child_process').exec,
    child;

    child = exec('notepad',
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
  },
  toggleDev: function() {
    var ipc = require('ipc');
    ipc.send('c2s', 'toggleDev');
  },
  fullscreen: function() {
    var ipc = require('ipc');
    ipc.send('c2s', 'fullscreen');
  },
  reload: function() {
    var ipc = require('ipc');
    ipc.send('c2s', 'reload');
  },
  minimize: function() {
    var ipc = require('ipc');
    ipc.send('c2s', 'minimize');
  },
  close: function() {
    var ipc = require('ipc');
    ipc.send('c2s', 'close');
  }
};
