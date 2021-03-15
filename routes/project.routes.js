const express = require('express');
const router = express.Router();
const fileParser = require('../config/cloudinary-setup.config');
const Project = require('../models/Project.model');

router.get('/projects', (req, res, next) => {
  Project.find()
    .then(projectsFromDB => res.status(200).json(projectsFromDB))
    .catch(err => next(err));
});

router.post('/projects/create', (req, res, next) => {
  console.log('req.body', req.body)
  Project.create(req.body)
    .then(aNewproject => {
      // console.log('Created new project: ', aNewproject);
      res.status(200).json(aNewproject);
    })
    .catch(err => next(err));
});

router.post('/projects/upload', fileParser.single('image'), (req, res, next) => {
  console.log('req.file', req.file);
  if(!req.file) {
    next(new Error('No file uploaded'));
    return;
  }
  res.json(req.file.path);
})

module.exports = router;