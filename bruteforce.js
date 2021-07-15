function makeTryGenerator(chars, length) { //chars='12345' length=3
    const indices = Array(length).fill(0) //indices=[0,1,1]
    const incrementArr = makeIncrementArr(indices, chars.length-1)
    return function () { //trygen fn
        const str = indices.map(i => chars[i]).join('') //str='121'
        incrementArr()
        return str
    }
}
function makeIncrementArr(nums, max) { //nums=[0,1,1] max=4
    const lastIndex = nums.length-1
    return function () {
        for (let i = lastIndex; i >= 0; i--) { //i=2
            if (nums[i] < max) { //0 < 4
                nums[i]++ 
                break
            }
            nums[i] = 0
        }
    }
}
function generateTries(chars, length, count) { //chars='12345' length=3 count=50
    const trygen = makeTryGenerator(chars, length) //trygen=line4 fn
    const tries = [] //tries=['111', '112', '113', '114', '115', '121']
    for (let i = 0; i < count; i++) { //i=5
        tries.push(trygen())
    }
    return tries
}

console.log(generateTries('12345', 3, 50))
setTimeout(console.log, 1e8)

