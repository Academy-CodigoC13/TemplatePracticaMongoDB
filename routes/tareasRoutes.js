const express = require("express");
const router = express.Router();

router.get("/tareas/completadas", async (req, res) => {
  try {
    const tareasCompletadas = await req.context.Tarea.find({ completed: true });
    res.json(tareasCompletadas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/tareas/:id/completar", async (req, res) => {
  try {
    const tarea = await req.context.Tarea.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    tarea.completed = true;
    await tarea.save();

    res.json(tarea);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/tareas/buscar/:palabra", async (req, res) => {
  try {
    const tareasEncontradas = await req.context.Tarea.find({
      $or: [
        { title: { $regex: req.params.palabra, $options: "i" } },
        { description: { $regex: req.params.palabra, $options: "i" } },
      ],
    });
    res.json(tareasEncontradas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
