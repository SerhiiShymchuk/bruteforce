

function makeTryGenerator(chars, length) {
    const indices = Array(length).fill(0)

    return function () {
        const str = indices.map(i => chars[i]).join('')
        incrementArr(indices, chars.length-1)
        return str
    }
}
function incrementArr(nums, max) {
    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] < max) {
            nums[i]++
            break
        }
        nums[i] = 0
    }
    return nums
}
function generateTries(chars, length, count) {
    const trygen = makeTryGenerator(chars, length)
    const tries = []
    for (let i = 0; i < count; i++) {
        tries.push(trygen())
    }
    return tries
}

console.log(generateTries('abcdef', 5, 100000))
setTimeout(console.log, 1e8)
