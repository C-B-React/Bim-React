// var fs = require("fs");
// var path = require("path");

// function copyCSS(src = "src", dist = "lib") {
//     fs.readdir(src, function (error, files) {
//         if (error) {
//             return console.log("读取失败");
//         }
//         files.forEach((file) => {
//             fs.stat(src + "/" + file, function (error, stats) {
//                 if (error) {
//                     return console.log("读取失败2")
//                 }
//                 const isDirectory = stats.isDirectory();
//                 if (isDirectory) {
//                     fs.readdir(src + "/" + file, function (error, subFiles) {
//                         if (error) {
//                             return console.log("读取失败3")
//                         }
//                         subFiles.forEach((subFile) => {
//                             if (subFile.endsWith(".css")) {
//                                 fs.readFile(src + "/" + file + "/" + subFile, function (error, data) {
//                                     if (error) {
//                                         return console.log("读取失败4")
//                                     }
//                                     fs.writeFile(dist + "/" + file + "/" + subFile, data.toString(), function (err) {
//                                         if (err) {
//                                             return console.log("读取失败")
//                                         }
//                                         console.log("文件" + subFile + "写入完成")
//                                     })
//                                 })
//                             }
//                         })
//                     })
//                 }
//             })
//         })
//     })
// }
// copyCSS();
/* rebuild 2018/04/08 */
const fs=require('fs');
const path=require('path');
const files_sum=[];
Array.prototype.sum2array=function (value,index) {
    const new_array=[];
    this.forEach(item=>{
        if (item!==undefined) {
            item.forEach(item=>{
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
fs
    .readdirSync('src')
    .map(file => {
        if (fs.statSync('src/' + file + '').isDirectory()) {
           console.log('file==========>'+file);
           files_sum.push(file);
            return fs.readdirSync('src/' + file + '');
        } else {
            console.log("readdirSync   src/" + file + " isn't dir");
            return;
        }
    })
    .sum2array()
    .map(item => {
        if (item.endsWith('.css')) {
            return item;
        }else{
            return 'no_css';
        }
    })
    .removeItem('no_css')
    .map((item,index) => {
        if (item!=='no_css') {
            return fs.readFileSync('src/' + files_sum[index] + '/' + item)
        }
    }).map((item,index)=>{
        return fs.writeFileSync('dist/'+files_sum[index]+'/'+files_sum[index]+'.css',item.toString())
    });
    //console.log(files_sum);
    //console.log(a);
    // .forEach(subFiles=>{
    //     console.log(subFiles);
    //     // if (subFiles!==undefined) {
    //     //     eachFiles_all.push(su)
    //     // }
    // })
    // .map(subFiles => {
    //     if (subFiles !== undefined) {
    //         Array.from(subFiles).map(eachFile=>{
    //             //console.log(eachFile);
    //             //return eachFile;
    //             eachFiles_all.push(eachFile);
    //         });
           
    //        // return Array.from(subFiles);
    //        return eachFiles_all;
    //     }
    // });
         
     

    // .map(item => {
    //     console.log('second map    '+item);
    //     return item;
        // console.log('filein' + subFiles_item);
        
        // console.log(typeof('typeof' + item));
        // tarArray.push(item);
        // console.log(tarArray);
        
        // const tarArray=subFiles_item.split(',');
        // console.log(tarArray);
       /*  try {
            if (subFiles_item.endsWith('.css')) {
                console.log(fs.readFileSync('src/' + file + '/' + subFiles_item));
                return fs.readFileSync('src/' + file + '/' + subFiles_item);
            } else {
                console.log('readFileSync  src/' + file + '/' + subFiles_item + '  Failed');
                return;
            }
        } catch (error) {
            console.log('error file is  '+subFiles_item+'');
        } */
        // if (subFiles_item.endsWith('.css')) {
        // console.log(fs.readFileSync('src/'+file+'/'+subFiles_item));     return
        // fs.readFileSync('src/'+file+'/'+subFiles_item); }else{
        // console.log('readFileSync  src/'+file+'/'+subFiles_item+'  Failed');
        // return; }
   
   // })

// fs
//     .readdirSync('src')
//     .map(file => {
//         if (fs.statSync('src/' + file + '').isDirectory()) {
//             fs
//                 .readdirSync('src/' + file + '')
//                 .map(subFiles_item => {
//                     if (subFiles_item.endsWith('.css')) {
//                         const writeData = fs.readFileSync('src/file/' + subFiles_item + '')
//                     }
//                 })
//         }
//     })

// const promisify = (fn, receiver) => {
//     return (...args) => {
//         return new Promise((resolve, reject) => {
//             fn.apply(receiver, [
//                 ...args,
//                 (err, res) => {
//                     return err
//                         ? reject(err)
//                         : resolve(res);
//                 }
//             ]);
//         });
//     };
// };
// const pro_readdir=promisify(fs.readdir,fs);
// const pro_stat=promisify(fs.stat,fs);
// const pro_readFile=promisify(fs.readFile,fs);
// const pro_writeFile=promisify(fs.writeFile,fs);
// pro_readdir('src')
//     .then(function (files) {
//         //console.log(files);
//         files.map(files_item => pro_stat('src/' + files_item + '').then(function (stats) {
//            // console.log('stats =====>   ' + stats);
//           if (stats.isDirectory()) {
//               pro_readdir('src/' + files_item + '').then(function (subFiles) {
//                   subFiles.map(subFiles_item=>{
//                       if (subFiles_item.endsWith('css')) {
//                           pro_readFile('src/file/'+subFiles_item+'').then(function (data) {
//                               pro_writeFile('dist/file/'+)
//                           }).catch(function (err) {
//                               console.log(err);
//                           })
//                       }
//                   })
//               }).catch(function (err) {
//                   console.log(err);
//               })
//           }
//         }).catch(function (err) {
//             console.log(err);
//         }))
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
/* new change */
// pro_readdir('src').then(files => {
//     // console.log('files=====> '+files); return Promise.resolve(files)
//     // files.map(files_item=>pro_stat('src')) return
//     // files.map(files_item=>pro_stat('src/' + files_item + ''));
//     // return Promise.resolve(files.map(files_item => {
//     //     return Promise.resolve(pro_stat('src/' + files_item + '')); 
//     // }));
// files.map(files_item => pro_stat('src/' + files_item + '').then(stats => console.log(stats)))
// }).then(stats => {
//     console.log('2files=====> ' + stats);
// });
// pro_readdir('src').then(files=>{
//    console.log(files);
//    console.log(typeof(files));
//    console.log(typeof(Array.from(files)));
//    return Arrary.from(files);
//    return files.map(files_item=>{return });
// //    return Promise.resolve(Array.from(files));
// }).then
// .map(files_item => {
//     console.log(files_item);
// })
/* end */



// const pro_readdir = (subFile) => {
//     return new Promise(resolve => {
//         fs
//             .readFile(src + "/" + file + "/" + subFile, function (err, data) {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve({subFile:subFile,data:data});
//             });
//     })
// }
// const writeIn = (subFile, data) => {
//     return new Promise(resolve => {
//         fs
//             .writeFile(dist + "/" + file + "/" + subFile, data.toString(), function (err) {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }
//                 resolve(console.log('File  '+dist+'  writeFinished'));
//             });
//     })
// }
// module.exports={
//     css_com:function (src,dist) {

//     }
// }
/* end */