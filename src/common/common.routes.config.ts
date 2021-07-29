import express from 'express';
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string; //name of implementing route, for debug purposes

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
    abstract configureRoutes(): express.Application;
}