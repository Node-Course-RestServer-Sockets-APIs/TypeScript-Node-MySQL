"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new sequelize_1.Sequelize("node", "root", "mysql", {
    host: "localhost",
    dialect: "mysql",
    // logging:false
});
exports.default = sequelize;
//# sourceMappingURL=connection.js.map