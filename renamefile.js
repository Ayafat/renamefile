var fs =require('fs');
fs.rename('mynew.txt','myrenamedfile.txt',function(err){
    if(err)throw err;
    console.log('file renamed');
});

