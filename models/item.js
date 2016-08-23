"use strict";

module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: DataTypes.STRING
  });

  return Item;
};
