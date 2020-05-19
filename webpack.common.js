const path = require("path");
const glob_entries = require("webpack-glob-folder-entries");

function returnEntries(globPath){
  let entries = glob_entries(globPath, true);
  let folderList = new Array();
  for (let folder in entries){
     folderList.push(path.join(__dirname, entries[folder]));
  }
  return folderList;
}

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [ 
            {
                test: /\.html$|njk|nunjucks/,
                use: [
                    'html-loader',
                    {
                    loader: 'nunjucks-html-loader',
                    options : { searchPaths: [...returnEntries('./src/templates/**/')] }
                    }
                ]
              },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
}