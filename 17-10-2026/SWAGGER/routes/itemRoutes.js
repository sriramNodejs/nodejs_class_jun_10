const express = require("express");
const router = express.Router();

// In-memory data store for demo CRUD
let items = [
  { id: 1, name: "Item One", description: "Description for item one" },
];

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the item
 *         name:
 *           type: string
 *           description: The name of the item
 *         description:
 *           type: string
 *           description: The description of the item
 *       example:
 *         id: 1
 *         name: Sample Item
 *         description: A sample description
 */

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Returns the list of all the items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: The list of the items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/", (req, res) => {
  res.status(200).json(items);
});

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Get the item by id
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     responses:
 *       200:
 *         description: The item description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: The item was not found
 */
router.get("/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.status(200).json(item);
});

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: The item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.post("/", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description || "",
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     summary: Update the item by the id
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was updated
 *       404:
 *         description: The item was not found
 */
router.put("/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Item not found" });
  items[index] = { ...items[index], ...req.body };
  res.status(200).json(items[index]);
});

/**
 * @swagger
 * /api/items/{id}:
 *   delete:
 *     summary: Remove the item by id
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     responses:
 *       200:
 *         description: The item was deleted
 *       404:
 *         description: The item was not found
 */
router.delete("/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Item not found" });
  const deletedItem = items.splice(index, 1);
  res.status(200).json(deletedItem[0]);
});

module.exports = router;
