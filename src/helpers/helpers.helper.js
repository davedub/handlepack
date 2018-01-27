'use strict';

exports.title = "webpackhbs";

exports.yell = function(msg) {
    return msg.toUpperCase();
};

exports.whisper = function(msg) {
    return msg.toLowerCase();
};

exports.randomNumber = function(x) {
  return Math.round( Math.random() * 100);
}
