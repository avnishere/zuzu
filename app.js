var http = require('http');
var url = require('url');
var convertExcel = require('excel-as-json').processFile;
var fs = require('fs');


http.createServer(function (req,resp) {

    if(req.url === "/dashboard"){
        fs.createReadStream(__dirname + "/pages/p_dashboard.html").pipe(resp);
    }

    if(req.url === "/menu"){
        fs.createReadStream(__dirname + "/pages/p_menu.html").pipe(resp);
    }

    if(req.url === "/aadhaar"){
        fs.createReadStream(__dirname + "/pages/p_aadhaar.html").pipe(resp);
    }

    if(req.url === "/allotment"){
        fs.createReadStream(__dirname + "/pages/p_allotment.html").pipe(resp);
    }
    if(req.url === "/passbook"){
        fs.createReadStream(__dirname + "/pages/p_passbook.html").pipe(resp);

    }
    if(req.url === "/payment_folder"){
        fs.createReadStream(__dirname + "/pages/p_payment_folder.html").pipe(resp);
    }
    if(req.url === "/pension_auto"){
        fs.createReadStream(__dirname + "/pages/p_pension_auto.html").pipe(resp);
    }
    if(req.url === "/pension_manual"){
        fs.createReadStream(__dirname + "/pages/p_pension_manual.html").pipe(resp);

    }
    if(req.url === "/reports"){
        fs.createReadStream(__dirname + "/pages/p_reports.html").pipe(resp);
    }
    if(req.url === "/sanct_allot"){
        fs.createReadStream(__dirname + "/pages/p_sanct_allot.html").pipe(resp);
    }
    if(req.url === "/sanction"){
        fs.createReadStream(__dirname + "/pages/p_sanction.html").pipe(resp);
    }
    if(req.url === "/uc"){
        fs.createReadStream(__dirname + "/pages/p_uc.html").pipe(resp);
    }
    if(req.url === "/excel"){
        var jsonString = "";
        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
            convertExcel("Payment_File_Sample.xlsx", null, null, function (err,data) {
                resp.setHeader('content-type', 'application/json');
                resp.writeHead(200);
                resp.end(JSON.stringify(data));
            });
        });
    }


    if(req.url.indexOf('.css') !== -1){
        fs.readFile(__dirname + req.url, function (err, data) {
            if(!err){
                resp.writeHead(200, {'Content-Type': 'text/css'});
                resp.write(data);
                resp.end();
            }
        });
    }


    if(req.url.indexOf('.js') !== -1){
        fs.readFile(__dirname + req.url, function (err, data) {

            resp.writeHead(200, {'Content-Type': 'text/javascript'});
            resp.write(data);
            resp.end();
        });
    }

    if(req.url.indexOf('.png') !== -1){
        fs.readFile(__dirname + req.url, function (err, data) {
            resp.writeHead(200, {'Content-Type': 'image/png'});
            resp.write(data);
            resp.end();
        });
    }

    if(req.url.indexOf('.jpg') !== -1){
        fs.readFile(__dirname + req.url, function (err, data) {
            resp.writeHead(200, {'Content-Type': 'image/jpg'});
            resp.write(data);
            resp.end();
        });
    }







}).listen(1337,"0.0.0.0");