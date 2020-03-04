const router = require('express').Router();
db = require('../../database/db_methods');

router.get('/', (req, res) => {
    db.findClasses()
    .then(Class => {
      if(Class) {
        res.status(200).json(Class);
      } else {
        res.status(404).json({ message: 'Classes not found' });
      }
    })
    .catch(err => {
     console.log(err);
    })
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.findClassById(id)
    .then(Class => {
      if(Class) {
        res.status(200).json(Class);
      } else {
        res.status(404).json({ message: 'Class not found' });
      }
    })
    .catch(err => {
     console.log(err);
    })
  });

  router.get('/:id/comments', (req, res) => {
    const { id } = req.params;

    db.findComments(id)
    .then(comment => {
      res.json(comment);
    })
    .catch(err => {
        console.log(err)
      res.status(500).json({ message: 'problem with the db', error: err });
    })
  });

  router.post('/', (req, res) => {
    const classData = req.body;
  
    db.addClass(classData)
      .then(ids => {
        res.status(201).json({ created: ids[0] });
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new class' });
      });
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.updateClass(id ,changes)
      .then(ids => {
        res.status(201).json({ created: ids[0] });
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new class' });
      });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    db.removeClass(id)
      .then(count => {
        if (count) {
          res.json({ removed: count });
        } else {
          res.status(404).json({ message: 'Could not find class with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete class' });
      });
  });

  router.post('/:id/comments', (req, res) => {
    const comment = req.body;
  
    db.addComment(comment)
      .then(ids => {
        res.status(201).json({ created: ids[0] });
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new class' });
      });
  });

  router.put('/:id/comments/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.updateComment(id ,changes)
      .then(ids => {
        res.status(201).json({ created: ids[0] });
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new class' });
      });
  });

  router.delete('/:id/comments/:id', (req, res) => {
    const { id } = req.params;
  
    db.removeComment(id)
      .then(count => {
        if (count) {
          res.json({ removed: count });
        } else {
          res.status(404).json({ message: 'Could not find class with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete class' });
      });
  });

  module.exports = router;