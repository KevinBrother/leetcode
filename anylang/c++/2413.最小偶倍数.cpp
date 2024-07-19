#include <stdio.h>

int smallestEvenMultiple(int n) {
    return n % 2 == 0 ? n : n * 2;
}

class Solution {
   public:
    int smallestEvenMultiple(int n) {
        return n % 2 == 0 ? n : n * 2;
    }
};

int main() {
    Solution s;
    int rst = s.smallestEvenMultiple(5);
    printf("rst: %d\n", rst);
    return 0;
}