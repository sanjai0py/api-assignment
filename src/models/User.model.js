const {Sequelize} = require("sequelize");

// Define the User model
const User = (sequelize, DataTypes) => {
    return sequelize.define("User", {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
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
            secretImg: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",
            },
        }
    );
};

module.exports = User;
