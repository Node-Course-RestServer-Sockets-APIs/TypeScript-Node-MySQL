"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//
const user_routes_1 = __importDefault(require("../routes/user-routes"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        this.apiPaths = { users: "/api/user" };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        //Middleware
        this.middleware();
        //Connect to routes
        this.routes();
        //Connect to database
        this.database();
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Database Up.");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middleware() {
        //Cors - Validacion de la url de origen
        this.app.use((0, cors_1.default)());
        //Express - servir la pagina
        this.app.use(express_1.default.static("public"));
        //JSON - Lectura y parseo
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.users, user_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server Up on port " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map