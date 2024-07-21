#include <stdio.h>
#include <iostream>
#include <map>
#include <vector>

class Solution {
   public:
    int numIdenticalPairs(std::vector<int>& nums) {
        int rst = 0;
        std::map<int, int> hash;

        for (int i = 0; i < nums.size(); i++) {
            // int val = nums[i];
            // int count = hash[val];
            // hash[val] = count > 0 ? ++count : 1;

            std::cout << hash[nums[i]] << std::endl;

            ++hash[nums[i]];
        }

        for (const auto& [key, val] : hash) {
            rst += getNums(val);
        }

        return rst;
    }

   private:
    int getNums(int x) {
        return x * (x - 1) / 2;
    }
};

int main() {
    std::vector<int> arr = {1, 2, 3, 1, 1, 3};
    Solution s;

    printf("numIdenticalPairs({1,2,3,1,1,3}) %d", s.numIdenticalPairs(arr));
    return 0;
}