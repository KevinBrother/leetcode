#include <stdio.h>
#include <iostream>

class Solution {
   public:
    int xorOperation(int n, int start) {
        if (n == 0) {
            return 0;
        }

        int rst = start;
        for (int i = 1; i < n; i++) {
            int next = start + 2 * i;
            rst = rst ^ next;
        }

        return rst;
    }
};

int main() {
    // printf("xorOperation(5, 0): %d", xorOperation(5, 0));
    Solution s;
    std::cout << "xorOperation(5, 0): " << s.xorOperation(5, 0) << std::endl;
    return 0;
}
