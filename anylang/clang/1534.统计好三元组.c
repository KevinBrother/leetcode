#include <stdlib.h>
#include <stdio.h>

int countGoodTriplets(int* arr, int arrSize, int a, int b, int c) {
    int rst = 0;
    for (int i = 0; i < arrSize; i++) {
        for (int j = i + 1; j < arrSize; j++) {
            for (int k = j + 1; k < arrSize; k++) {
                if (abs(arr[i] - arr[j]) <= a && abs(arr[j] - arr[k]) <= b && abs(arr[i] - arr[k]) <= c) {
                    rst++;
                }
            }
        }
    }

    return rst;
}

int main() {
    int arr[] = {3, 0, 1, 1, 9, 7};
    // arr := []int{1, 1, 2, 2, 3}
    printf("countGoodTriplets({3,0,1,1,9,7}, 7, 2, 3) %d", countGoodTriplets(arr, 6, 7, 2, 3));
    return 0;
}
