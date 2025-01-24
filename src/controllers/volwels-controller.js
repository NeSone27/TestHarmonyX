
exports.findVolwels = async (req, res) => {
    try {
        const { input } = req.body
        const volwels = ['a', 'e', 'i', 'o', 'u']
        let count = 0
        let stack = 0

        for (let i = 0; i < input.length; i++) {
            const findVolwels = volwels.find(item => item == input[i])
            if (findVolwels) {
                stack++
            } else {
                if (stack != 0) {
                    count++
                    stack = 0
                }
            }
        }
        if (stack != 0) {
            count++
        }
        res.status(200).json(count);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};