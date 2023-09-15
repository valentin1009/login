const fs = require('fs');

/**
 * The only problem that I can see is that you use same callback method on both cases (success or error). In case of read failure the program will crash
 * Otherwise, the script run correctly so i can't find any critical bug.
 */
function readFile(path, callback) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            callback(null, err);
        } else {
            callback(data, null);
        }
    });
}
function writeFile(path, data, callback) {
    fs.writeFile(path, data, 'utf8', err => {
        if (err) {
            callback(err);
        } else {
            callback();
        }
    });
}
readFile('input.txt', (data, error) => {
    if (error) {
        console.error('There is a problem with the input file');
        return false;
    }

    const newData = data.toUpperCase();
    writeFile('output.txt', newData, () => {
        console.log('File written successfully');
    });
});