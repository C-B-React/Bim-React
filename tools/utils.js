const fs = require('fs');
const path = require('path');
const files_sum = [];
Array.prototype.sum2array = function (value, index) {
    const new_array = [];
    this.forEach(item => {
        if (item !== undefined) {
            item.forEach(item => {
                new_array.push(item);
            })
        }
    });
    return new_array;
};
Array.prototype.removeItem = function remove(item) {
    const result = [];
    this.forEach(function (element) {
        if (element != item) {
            result.push(element);
        }
    });
    return result;
}

module.exports = {
    css_com: function (src, dist) {
        fs
            .readdirSync(src)
            .map(file => {
                if (fs.statSync(src+'/' + file + '').isDirectory()) {
                    files_sum.push(file);
                    return fs.readdirSync(src+'/' + file + '');
                } else {
                    console.log("=========》 "+src+"/" + file + " isn't dir");
                    return;
                }
            })
            .sum2array()
            .map(item => {if(item.endsWith('.css')) return item;})
            .removeItem(undefined)
            .map((item, index) => {if (item !== 'no_css') return fs.readFileSync(src+'/' + files_sum[index] + '/' + item)})
            .map((item, index) => {return fs.writeFileSync(dist+'/' + files_sum[index] + '/' + files_sum[index] + '.css', item.toString())});
    }
}