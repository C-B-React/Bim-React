const utils=require('./utils');
let args = process.argv.splice(2);
if (args != false) {
    switch (args[0]) {
        /**
         *  CSS move
         */
        case '-css':
            try {
                utils.css_com(args[1], args[2]);
            } catch (err) {
                console.log(new Error(err));
                return;
            }
            break;

        case '':
            console.log('param is null');

            break;
    }
} else {
    console.log(new Error('Command cannot be empty'));
    return;
}