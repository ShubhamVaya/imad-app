var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var page1 = {
    title: 'page1',
    content: `<p> Ab is pure page me jo bhi add karna ho kar sakta hai.. and aise kitne bhi pages banane ho bana sakta hai bus un sab pages ko server.js me jake link kar dena.</p>
        <pre> Jo head tag me meta tag hai that is used for formatting and displaying the content of the web page based on the size of the device.</pre>
        <p> U can even make changes in the inspect element option in the browser.</p>
        <p>padding isliye diye hai because as we change the size of the browser apne text bhi us screen me fit ho sake with some padding in all the sides.. and yaad rakhna pre tag jaisa hai waisa hi rahega (ie it wont change its text when the browser is resized. </p>`
};

function createTemplate (data) {
var title = data.title;
var content = data.content;
var htmltemp = `
<html>
<head>
    <title>${title}</title>
    <meta name="viewport" content="width-device-height, initial-scale=1" />
    <style>
        .c1{
            margin: 0 auto;
            font-family: Bradley Hand ITC;
            color: purple;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 40px;
        }
    </style>
</head>
<body class="c1">
    <div>
        <a href="/">Home</a>
    </div>
    <hr>
    <div>
        ${content}
    </div>
</body>
</html>
`;
return htmltemp;
}
// Aise har page ke liye kar sakte hai by using a common variable as var pages= {yaha par un sare objects ko likh lo like u wrote from line 8 to line 14}
//and if u do so the change the app.get fucntion as app.get('/:pageName', function (req, res) {
    //res.send(createTemplate(pages[pageName)));
    //Then u can delete the page1 and page2.html as the enitre file is now as an object that can be used to reduce the code

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
}); //isko khol ke dekhna ho to gotoapp click karke url me "/counter" without quotes daal.

app.get('/page1', function (req, res) {
   res.send(createTemplate(page1));
});

app.get('/page2', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
