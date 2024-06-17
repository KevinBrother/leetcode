#include <iostream>
#include <vector>

using namespace std;
/*P
 * @lc app=leetcode.cn id=167 lang=cpp
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0, right = numbers.size() -1;
        while(true) {
            int sum = numbers[left] + numbers[right];

            if(sum == target ) return { left+1,right+1 };
            sum > target ? right-- : left ++; 
        }
    }
};
// @lc code=end

int main() {
    Solution s;
    vector<int> numbers = {1,2,3};
    vector<int> rst = s.twoSum(numbers, 3);
    for(int i : rst) 
        cout << i << " ";
    cout << endl;
    return 0;
}
