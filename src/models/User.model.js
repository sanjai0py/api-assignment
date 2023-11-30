const {Sequelize} = require("sequelize");

// Define the User model
const User = (sequelize, DataTypes) => {
    return sequelize.define("User", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
                // defaultValue: Sequelize.UUIDV4,
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
};

module.exports = User;
