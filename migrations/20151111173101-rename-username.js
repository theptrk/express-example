'use strict';

module.exports = {
  up: function(queryInterface, DataTypes, done) {
    queryInterface
      .renameColumn('member', 'username', 'displayName')
      .complete(done)
  },

  down: function(queryInterface, DataTypes, done) {
    queryInterface
      .renameColumn('member', 'displayName', 'username')
      .complete(done)
  }
};
