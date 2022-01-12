import dotenv from "dotenv";
import Server from "./models/server";

//Configurate dotenv
dotenv.config();

//Create and run server
const server = new Server();

server.listen();
