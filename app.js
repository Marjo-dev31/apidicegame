import express from 'express';
import cors from 'cors'
import { type } from 'os';


const PORT = 8000;
const app = express();
// app.use(express.json());
app.use(cors({origin: '*'}))

const players = [
{
    id: '1',
    name: 'playerOne',
    score: 0
},
{
    id: '2',
    name: 'playerTwo',
    score: 0
}]

app.get('/players', (req,res)=>{
   res.send(players)
})

app.get('/players/:id', (req,res)=>{
    res.send(players[req.params.id - 1])
 })

app.post('/players/:id', (req,res)=>{
        if(req.params.id == players[0].id){
        players[0].score = players[0].score + 1
        return res.status(200).send({message: 'post ok', players})
    } else if(req.params.id == players[1].id) {
        players[1].score = players[1].score + 1
        return res.status(200).send({message: 'post 2 ok', players})
    } else {
     return res.status(200).send({message: `Players with id ${req.params.id} does not exist`})
}
}
)

app.listen(PORT, console.log(`It's alive on port : ${PORT}`))