const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect("mongodb://localhost:27017/tareas", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Esquema y modelo de Tarea
const tareaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Tarea = mongoose.model("Tarea", tareaSchema);

// Rutas CRUD básicas
app.use(express.json());

// Obtener todas las tareas
app.get("/tareas", async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Agregar una nueva tarea
app.post("/tareas", async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    const tareaGuardada = await nuevaTarea.save();
    res.json(tareaGuardada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una tarea
app.put("/tareas/:id", async (req, res) => {
  try {
    const tareaActualizada = await Tarea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(tareaActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar una tarea
app.delete("/tareas/:id", async (req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id);
    res.json({ message: "Tarea eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
