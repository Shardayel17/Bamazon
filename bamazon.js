var mysql = require("mysql");
var inquirer = require("inquirer");
var inStock = 0;
var totalPrice = 0;



var connection = mysql.createConnection({
    host: "localhost",
    port: 3300,
    user: "root",
    password: "root",
    database: "BamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    ProductDisplay();

});


function ProductDisplay() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log('');
        console.log("Products Available");
        console.log('');



        for (var i = 0; i < res.length; i++) {
            console.log('Item ID: ' + res[i].id + '      Product: ' + res[i].product + '      Department: ' + res[i].department);
            console.log('Price: ' + res[i].price + '      Quanity Left: ' + res[i].quanity);
            console.log(' ');
        }

        Productmanagement();

    });
}


function Productmanagement() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw console.log("connection error:" + err);
        inquirer
            .prompt([
                {
                    name: 'selectId',
                    type: 'list',
                    message: 'Choose an option below to manage inventory:',
                    choices: ["Add inventory", "Add a new product", "Remove a product", "Quit"]



                }
});








//https://github.com/monfrair/bamazon/blob/master/bamazonManager.js