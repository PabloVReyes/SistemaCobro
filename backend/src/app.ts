import express, { Express } from "express";
import * as http from "http";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import responseTime from 'response-time';
import path from "path";
import fs from 'fs';
import morgan from 'morgan';
require('dotenv').config();

class server {
    private app: Express;
    private server: http.Server;
    private port: number;

    constructor() {
        this.app = express();
        this.port = parseInt(`${process.env.PORT}`) || 3000;
        this.server = http.createServer(this.app)
    }

    middleware() {
        this.app.use(cors({ origin: '*' }))
        this.app.use(cookieParser())
        this.app.use(responseTime())
    }

    settingPublicRoute() {
        const public_path = path.resolve(__dirname, '../uploads');
        this.app.use("/uploads", express.static(public_path))
    }

    settingLogFile() {
        const logDir = path.join(__dirname, '../log')
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir)
        }

        const logFile = fs.createWriteStream(path.join(__dirname, '../log/request.log'), { flags: 'a' })
        this.app.use(morgan('combined', { stream: logFile }))
    }

    settingDataFormProcess() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json())
    }

    settingRoutes() {
        const router = require('./routes/routes')
        this.app.use('/', router)
    }

    execute() {
        this.middleware();
        this.settingPublicRoute();
        this.settingLogFile();
        this.settingDataFormProcess();
        this.settingRoutes()
        this.server.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`)
        })
    }
}

const Server = new server();

Server.execute();