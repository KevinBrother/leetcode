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
            int len = nums.size();
            int x = nums[i];
            if(i > 0 && x == nums[i -1]) continue;
            if(x + nums[i + 1] + nums[i +2] > 0) break; // 优化一 当前数与后面两个数都已经大于 0 了，代表整个列表已经没有 等于零的可能。
            if(x + nums[len - 2] + nums[len -1] < 0) continue; // 优化二 当前数与后面最大的两个数都小于 0 了， 代表当前轮次 已经没有 等于零的可能。
            int left = i +1, right = len - 1;

            while(left < right) {
                int sum = x + nums[left] + nums[right];
                if(sum > 0) {
                    --right;
                }else if (sum < 0){
                    ++left;
                }else  {
                    rst.push_back({nums[i], nums[left], nums[right] });
                    for(++left; left < right && nums[left] == nums[left -1] ; ++left);
                    for(--right; left < right && nums[right] == nums[right + 1]; --right);
                }
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
