#include <iostream>
#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=15 lang=cpp
 *
 * [15] 三数之和
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> rst;
        sort(nums.begin(), nums.end());
        for(int i = 0; i < nums.size() - 2; i++) {
            int x = nums[i];
            if(i > 0 && x == nums[i -1]) continue;

            int left = i +1, right = nums.size() - 1;

            while(left < right) {
                 int curValue = nums[i], leftValue = nums[left], rightValue = nums[right];
                int sum = curValue + leftValue + rightValue;
                if(sum == 0)
                    rst.push_back({nums[i], nums[left], nums[right] });
                sum > 0 ? right-- : left++ ;
            }
        }
        
        return rst;
    }
};
// @lc code=end

int main() {
    Solution s;
    vector<int> target = {-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6};
    vector<vector<int>> rst = s.threeSum(target);

    for(vector<int> v: rst) {
        for(int i : v) {
            cout << i << ", ";
        }
        cout << endl;
    }
}
