/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.map = new Map;
    this.n1 = nums1.length;
    this.n2 = nums2.length;
    this.nums1 = nums1;
    this.nums2 = nums2;
    for (let i = 0; i < this.n2; i++) {
        this.setOrDefault(nums2[i], 1);
    }
};

FindSumPairs.prototype.setOrDefault = function (key, value) {
    const get = this.map.get(key);
    if (get) {
        this.map.set(key, value + get);
    } else {
        this.map.set(key, value);
    }
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    this.map.set(this.nums2[index], this.map.get(this.nums2[index]) - 1);
    this.nums2[index] += val;
    this.setOrDefault(this.nums2[index], 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let ret = 0;
    for (const m of this.nums1) {
        let target = tot - m;
        if (this.map.has(target)) {
            ret += this.map.get(target);
        }
    }
    return ret;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */