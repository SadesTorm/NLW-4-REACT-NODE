import express, { request, response } from 'express';

const app = express();



app.get("/", (request, response) => {
    return response.json({
        message: "Bem Vindo ao NLW4",
        data: "23/02/2021"
    });
});

app.post("/",(request,response)=>{

    return response.json({message:"Dados gravado com sucesso."})
})


app.listen(3333, () => console.log("Server Running"));
