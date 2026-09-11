class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
    let isDuplicate = false;

    nums.forEach((number: number, index: number) => {
        if (nums.indexOf(number) !== index) {
            isDuplicate = true;
        }
    });

    return isDuplicate;
}
}
