"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todos = response.data;
    var id = todos.id;
    var title = todos.title;
    var finished = todos.completed;
    console.log("\n \n   Todo With ID :".concat(id, "\n   Has a title of : ").concat(title, "\n   Is it finished? ").concat(finished, "\n\n   "));
});
