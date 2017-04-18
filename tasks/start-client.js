const path = require('path');
const args = ['start'];
const opts = {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..', 'client'),
    shell: true
};

require('child_process').spawn('yarn', args, opts);
