// routes/items.js
import { Router } from 'express';
import Item from '../models/item.model.js';

const router = Router();

// CREATE
router.post('/add', (req, res) => {
  const { name, age, email } = req.body;

  const newItem = new Item({ name, age, email });

  newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// READ
router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE
router.post('/update/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.name = req.body.name;
      item.age = req.body.age;
      item.email = req.body.email;

      item.save()
        .then(() => res.json('Item updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE
router.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
