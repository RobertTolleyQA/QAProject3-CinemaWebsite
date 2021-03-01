'use strict';

const router = require('express').Router();

const { Discuss } = require('../config/db');




//*create
router.post("/create", (req, res, next) => {

    const discuss = new Discuss(req.body);
    console.log(discuss);
    discuss.save().then((result) => {
        res.status(201).send(`${discuss} created`);
    })
        .catch((err) => next(err));
});


//*read - getAll
router.get("/getAll", (req, res, next) => {
    Discuss.find((err, discuss) => {
        if (err) {
            next(err);
        }
        res.send(discuss);
    });
});

//*Read by movie title
router.get("/getName/:movie", (req, res, next) => {
    Discuss.find({ movie: req.params.movie }, (err, result) => {
        if (err) {
            next(err)
        }
        res.status(200).send(result)
    })
})

//*update
router.patch("/updateById/:id", (req, res, next) => {
    Discuss.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (err) => {
            if (err) {
                next(err);
            }
            res.status(202).send(`Successfully updated!`);
        })
});

//!delete
router.delete("/delete/:id", (req, res, next) => {
    Discuss.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});




module.exports = router;