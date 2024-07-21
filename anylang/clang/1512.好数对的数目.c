#include <stdio.h>
#include <string.h>

struct Map {
    int key;
    int val;
};

int getNums(int x) {
    return x * (x - 1) / 2;
}

int numIdenticalPairs(int *nums, int numsSize) {
    int rst = 0;
    int len = 101;
    int arr[101];

	memset(arr, 0, sizeof(arr));

    for (int i = 0; i < numsSize; i++) {
        int val = nums[i];
        int count = arr[val];
        arr[val] = count > 0 ? ++count : 1;
    }

    for (int i = 0; i < len; i++) {
        rst += getNums(arr[i]);
    }

    return rst;
}

int main() {
    int arr[] = {1, 2, 3, 1, 1, 3};
    printf("numIdenticalPairs({1,2,3,1,1,3}) %d", numIdenticalPairs(arr, 6));
    return 0;
}