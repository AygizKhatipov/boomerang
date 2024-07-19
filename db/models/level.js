const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {
      this.belongsTo(models.Enemy, {
        foreignKey: 'id_enemy',
      });
    }
  }
  Level.init(
    {
      id_enemy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Level',
    },
  );
  return Level;
};
