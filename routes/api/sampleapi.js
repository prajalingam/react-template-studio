const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Sample = require('../../models/sample');

router.get('/', async function(req, res) {
    try {
        const resp = await Sample.find();
        if (resp) {
            res.json(resp);
        } else {
            res.status(404).send('No sample Data available');
        }
    } catch (e) {
        res.status(500).send('Server Error');
    }
});

router.post(
    '/',
    [
        check('sample', 'Sample data is required')
            .not()
            .isEmpty()
    ],
    async function(req, res) {
        try {
            const errors = validationResult(req);
            console.log(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
            } else {
                const sampleObj = {
                    sample: req.body.sample
                };
                const sample = new Sample(sampleObj);
                await sample.save();
                res.status(200).send('Sample Saved');
            }
        } catch (e) {
            console.log(e);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
