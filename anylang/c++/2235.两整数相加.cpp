#include <stdio.h>

class Solution {
   public:
    int sum(int num1, int num2) {
        return num1 + num2;
    }
};

int main() {
    Solution s;
    printf("sum: %d", s.sum(1, 2));
    return 0;
}