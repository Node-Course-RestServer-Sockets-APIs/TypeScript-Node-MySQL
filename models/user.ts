import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

const User = sequelize.define("User", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	state: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: 1,
	},
});

export default User;
