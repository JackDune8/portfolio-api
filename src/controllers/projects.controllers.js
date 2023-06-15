
let projects = [
    { id:1, name: "Mi proyecto potato 1", img: "/assets/images/shop.svg" },
    { id:2, name: "Mi proyecto carrot 2", img: "/assets/images/shop.svg" },
    { id:3, name: "Mi proyecto potato 3", img: "/assets/images/shop.svg" },
    { id:4, name: "Mi proyecto carrot 4", img: "/assets/images/shop.svg" },
];


function all (req,res){
    const query = req.query;

    if(!query.search){
        res.send(projects);
        return;
    }

    const search = query.search.toLowerCase();

    const result = projects.filter((p)=>{

        const name = p.name.toLowerCase();
        return name.match(search);
    });

    res.send(result);
}

function create (req,res){
    const id= req.params.id;
    console.log("ID:", id);
    const project = projects.find((p)=>p.id ==id);
    if(!project){
        res.status(404);
    }
    res.send(project);

}

function one (req,res){
    const body = req.body;
    projects.push(body);
    console.log(req.body);
    res.send("ok");

}

function destroy (req,res){
    const id= req.params.id;
    console.log("ID:", id);

    const index = projects.findIndex((p)=>p.id ==id);

    projects.splice(index,1);

    if(index == -1){
        res.status(404);
        res.send("not found");
    }
    res.send("Project deleted successfully");

}

function update (req,res){
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
}

export default {all,create,one,destroy,update};