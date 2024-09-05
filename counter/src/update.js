const hh = require("hyperscript-helpers");
const { h, diff, patch } = require("virtual-dom");
const createElement = require("virtual-dom/create-element");
const MSGS = require("./index");

function update(msg, model, value) {
    switch (msg) {
      case MSGS.MSGS:
        return model + 1;
      case MSGS.SUBTRACT:
        return model - 1;
      case MSGS.MANUAL:
        if (isNaN(value)) {
          return model;
        }
        return parseInt(value);
      default:
        return model;
    }
  }

module.exports = {update};