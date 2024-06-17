#include <iostream>
#include <vector>
using namespace std;

/*
 * @lc app=leetcode.cn id=167 lang=cpp
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<int> result = {2,7,11,15, 100};
        return result;
    }
};

int main(){
    Solution s;

    vector<int> numbers = {2,7,11,15};
    int target = 9;
    vector<int> result = s.twoSum(numbers, target);

    cout << "Hello LeetCode" << endl;
    return 0;
}
// @lc code=end

