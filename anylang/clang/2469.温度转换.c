#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
double* convertTemperature(double celsius, int* returnSize) {
    *returnSize = 2;
    double* arr = malloc(*returnSize * sizeof(double));

    arr[0] = celsius + 273.15;
    arr[1] = celsius * 1.80 + 32.00;
    return arr;
}

int main() {
    int returnSize;
    double* rst = convertTemperature(36.50, &returnSize);

    for (int i = 0; i != returnSize; ++i) {
        printf("returnSize:%d, before free rst%d: %.5f\n", returnSize, i, rst[i]);
    }

    free(rst);
    printf("returnSize:%d, after free rst0: %.5f,rst1: %.5f\n", returnSize, rst[0], rst[1]);
    return 0;
}