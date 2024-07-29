// 347. Top K Frequent Elements



// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.









/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let freqMap = new Map()
    let results = []

    for(let i = 0; i < nums.length; i++){

        if(freqMap.has(nums[i])){
            let count = freqMap.get(nums[i])
            freqMap.set(nums[i], count + 1)
        }else{
            freqMap.set(nums[i], 1)
        }
    }

    let mapArr = Array.from(freqMap)

    mapArr.sort((a,b) => b[1] - a[1])

    let SortedMap = new Map(mapArr)

    for(let [num, count] of SortedMap){

        if(results.length < k){
            results.push(num)
        }
    }

    return results
};
