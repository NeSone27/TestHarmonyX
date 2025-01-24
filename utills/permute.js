const permute = (input) => {
    if (input.length == 1) return [input]

    let result = []
    for (let i = 0; i < input.length; i++) {
        const char = input[i]
        const temp = input.slice(0, i) + input.slice(i + 1)
        const concatString = permute(temp)
        for (let j = 0; j < concatString.length; j++) {
            result.push(char + concatString[j]);
        }
    }

    return result
}

module.exports = {
    permute
};