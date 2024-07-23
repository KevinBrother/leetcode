#include <stdio.h>
#include <stdlib.h>

#include <vector>

class Solution {
   public:
    int countGoodTriplets(std::vector<int> arr, int a, int b, int c) {
        int rst = 0;
        int length = arr.size();
        for (int i = 0; i < length; i++) {
            for (int j = i + 1; j < length; j++) {
                for (int k = j + 1; k < length; k++) {
                    if (abs(arr[i] - arr[j]) <= a && abs(arr[j] - arr[k]) <= b && abs(arr[i] - arr[k]) <= c) {
                        rst++;
                    }
                }
            }
        }

        return rst;
    }
};

int main() {
    Solution s;
    // int arr[] = {3, 0, 1, 1, 9, 7};
    std::vector<int> arr = {3, 0, 1, 1, 9, 7};
    printf("countGoodTriplets({3,0,1,1,9,7}, 7, 2, 3) %d", s.countGoodTriplets(arr, 7, 2, 3));
    return 0;
}
