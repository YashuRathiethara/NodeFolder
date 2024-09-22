const { error } = require('node:console');
// const fs = require('node:fs');

exports.getFileStats = function(filePath) 
{
  try {
    return fs.statSync(filePath);
  } 
  
  catch (err) {
  }
}  


exports.getFileStats2 = function(filePath)
{
  try {
    return fs.stat(filePath, (err, fs.Stats))
    
  }
  catch{
    return Error;
  }
}

const fs = require('fs').promises;
exports.getFileStats3 = async function(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats;
  } catch (err) {
    console.error(err);
    throw err;
  }
};