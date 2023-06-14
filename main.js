const express = require ('express');
const app = express();

let projects = [
    { id:1, name: "Mi proyecto 1", img: "/assets/images/shop.svg" },
    { id:2, name: "Mi proyecto 2", img: "/assets/images/shop.svg" },
    { id:3, name: "Mi proyecto 3", img: "/assets/images/shop.svg" },
    { id:4, name: "Mi proyecto 4", img: "/assets/images/shop.svg" },

];

app.use(express.json());

app.get("/projects",(req,res)=>{
    console.log('Mi endpoint de projects !');
    res.send(projects);
    
});

app.get("/projects/:id",(req,res)=>{

    const id= req.params.id;
    console.log("ID:", id);
    const project = projects.find((p)=>p.id ==id);
    if(!project){
        res.status(404);
    }
    res.send(project);
});

app.post("/projects",(req,res)=>{
    const body = req.body;
    projects.push(body);
    console.log(req.body);
    res.send("ok");

});

app.delete("/projects/:id", (req,res)=>{

    const id= req.params.id;
    console.log("ID:", id);

    const index = projects.findIndex((p)=>p.id ==id);

    projects.splice(index,1);

    if(index == -1){
        res.status(404);
        res.send("not found");
    }
    res.send("Project deleted successfully");
});

app.put("/projects/:id", (req,res)=>{

    const id = req.params.id;
    const project = projects.find((p)=>p.id ==id);
    if(!project){
        res.status(404);
        res.send("not found");
    }
    const body = req.body;
    project.name = body.name;

    console.log(project);
    console.log(req.body)
    res.send("actualizado");
});

app.listen(3000,()=> console.log ("Servidor listo en http://localhost:3000"));
