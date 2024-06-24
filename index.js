const express = require("express");
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

app.get("/users",(req,res) =>{
    const html= `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")};
    </ul>`;
    res.send(html);
})

app.get("/api/users", (req,res) =>{
    return res.json(users);
})


app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users/", (req,res) => {
    const body = req.body;
    users.push({...body , id: users.length +1});
    FileSystem.writeFile("./MOCK_DATA.json",JSON.stringify(users), (err,data) =>{
        return res.json({ status: "success",id: users.length})
    });
})

app.listen(PORT , () =>{
    console.log(`Server started at PORT ${PORT}`)
})