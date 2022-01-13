import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("node", "root", "mysql", {
	host: "localhost",
	dialect: "mysql",
	// logging:false
});

export default sequelize;
