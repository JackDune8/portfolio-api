import express from 'express';
import projectsRouter from "./routes/projects.routes.js";

const app = express();

app.use(express.json());

//anade las rutas de projects.js
app.use(express.static('./public'))

app.use("/projects",projectsRouter);

app.listen(3000,()=> console.log ("Servidor listo en http://localhost:3000"));
