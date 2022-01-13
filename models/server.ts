import express, { Application } from "express";
import cors from "cors";

//
import userRoutes from "../routes/user-routes";
import sequelize from "../database/connection";

class Server {
	private app: Application;
	private port: string;
	private apiPaths = { users: "/api/user" };

	constructor() {
		this.app = express();
		this.port = process.env.PORT || "8000";

		//Middleware
		this.middleware();
		//Connect to routes
		this.routes();
		//Connect to database
		this.database();
	}

	async database() {
		try {
			await sequelize.authenticate();
			console.log("Database Up.");
		} catch (error: any) {
			throw new Error(error);
		}
	}

	middleware() {
		//Cors - Validacion de la url de origen
		this.app.use(cors());

		//Express - servir la pagina
		this.app.use(express.static("public"));

		//JSON - Lectura y parseo
		this.app.use(express.json());
	}

	routes() {
		this.app.use(this.apiPaths.users, userRoutes);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Server Up on port " + this.port);
		});
	}
}

export default Server;
