
const { permute } = require('../../utills/permute');

exports.findABCPermute = async (req, res) => {
    try {
        const { input } = req.body
        const result = permute(input)

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};