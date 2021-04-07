"use strict";
exports.__esModule = true;
exports.BookManage = void 0;
var BookManage = /** @class */ (function () {
    function BookManage(id, title, author, ratings, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ratings = ratings;
        this.price = price;
    }
    BookManage.prototype.setId = function (id) {
        this.id = id;
    };
    BookManage.prototype.setTitle = function (title) {
        this.title = title;
    };
    BookManage.prototype.setAuthor = function (author) {
        this.author = author;
    };
    BookManage.prototype.setRatings = function (ratings) {
        this.ratings = ratings;
    };
    BookManage.prototype.setPrice = function (price) {
        this.price = price;
    };
    BookManage.prototype.getId = function () {
        return this.id;
    };
    BookManage.prototype.getTitle = function () {
        return this.title;
    };
    BookManage.prototype.getAuthor = function () {
        return this.author;
    };
    BookManage.prototype.getRatings = function () {
        return this.ratings;
    };
    BookManage.prototype.getPrice = function () {
        return this.price;
    };
    BookManage.prototype.getAll = function () {
        return this.id + ' ' + this.title + ' ' + this.author + ' ' + this.ratings + ' ' + this.price;
    };
    return BookManage;
}());
exports.BookManage = BookManage;
