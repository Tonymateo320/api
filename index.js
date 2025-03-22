
const express = require("express");
const app = express();
const tasks = [];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenido a la API de tareas ");
});

app.get("/tasks", (req, res) => res.json(tasks));

app.post("/tasks", (req, res) => {
    const {task } = req.body;
    if (!task) return res.status(400).json({ error: "Debes proporcionar una tarea" });

    tasks.push(task);
    res.json({ message: `Tarea "${task}" agregada.`, tasks });
});

app.delete("/tasks/:index", (req, res) => {
    const index = parseInt(req.params.index);
    if (index < 0 || index >= tasks.length) return res.status(400).json({ error: "Índice inválido." });

    const removedTask = tasks.splice(index, 1);
    res.json({ message: `Tarea "${removedTask}" eliminada.`, tasks });
});

app.put("/tasks/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const { newTask } = req.body;

    if (index < 0 || index >= tasks.length) return res.status(400).json({ error: "Índice inválido." });
    if (!newTask) return res.status(400).json({ error: "Debes proporcionar una nueva tarea." });

    tasks[index] = newTask;
    res.json({ message: `Tarea actualizada a "${newTask}".`, tasks });
});


module.exports = app;