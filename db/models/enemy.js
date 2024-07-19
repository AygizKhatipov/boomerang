const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enemy extends Model {
    static associate(models) {
      this.hasOne(models.Level, {
        foreignKey: 'id_enemy',
      });
    }
  }
  Enemy.init(
    {
      name: DataTypes.STRING,
      speed: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Enemy',
    },
  );
  return Enemy;
};
