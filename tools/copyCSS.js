var fs = require("fs");
var path = require("path");

function copyCSS(src = "src", dist = "lib") {
    fs.readdir(src, function (error, files) {
        if (error) {
            return console.log("读取失败");
        }
        files.forEach((file) => {
            fs.stat(src + "/" + file, function (error, stats) {
                if (error) {
                    return console.log("读取失败2")
                }
                const isDirectory = stats.isDirectory();
                if (isDirectory) {
                    fs.readdir(src + "/" + file, function (error, subFiles) {
                        if (error) {
                            return console.log("读取失败3")
                        }
                        subFiles.forEach((subFile) => {
                            if (subFile.endsWith(".css")) {
                                fs.readFile(src + "/" + file + "/" + subFile, function (error, data) {
                                    if (error) {
                                        return console.log("读取失败4")
                                    }
                                    fs.writeFile(dist + "/" + file + "/" + subFile, data.toString(), function (err) {
                                        if (err) {
                                            return console.log("读取失败")
                                        }
                                        console.log("文件" + subFile + "写入完成")
                                    })
                                })
                            }
                        })
                    })
                }
            })
        })
    })
}

copyCSS();