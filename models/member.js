"use strict";

module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    displayName: DataTypes.STRING
  }, {
    tableName: "member",
    classMethods: {
      associate: function(models) {
        Member.hasMany(models.Task)
      }
    }
  });

  return Member;
};
