#include <stdio.h>
#include <stdlib.h>

// 查
void search(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            // printf("arr[%d]: %d\n", i, arr[i]);
        }
    }
}

// 改
void update(int arr[], int idx, int newValue) {
    arr[idx] = newValue;
}

// 增
void addElement(int *arr, int *size, int newValue) {
    (*size)++;

    printf("before realloc arr pValue %p\n", arr);

    arr = realloc(arr, (*size) * sizeof(int));

    printf("after realloc arr pValue %p\n", arr);

    arr[*size - 1] = newValue;
}

// 删
void deleteElement(int *arr, int *size, int idx) {
    if (idx < 0 || idx > *size) {
        printf("idx out of bounds\n");
    }

    // 整体向后移
    for (int i = idx; i < *size - 1; i++) {
        arr[i] = arr[i + 1];
    }

    (*size)--;
}

int main() {
    int size = 6;

    int *arr = malloc(size * sizeof(int));
    arr[0] = 1;
    arr[1] = 10;
    arr[2] = 20;
    arr[3] = 30;
    arr[4] = 40;
    arr[5] = 50;

    int i = 0;
    printf("arr[%d]: %d\n", i, arr[i]);

    search(arr, size, 20);
    update(arr, 3, 20);

    addElement(arr, &size, 999);
    for (int j = 0; j < size; j++) {
        printf("arr[%d]: %d、", j, arr[j]);
    }
    printf("\n");

    printf("size: %d\n", size);

    deleteElement(arr, &size, 4);

    for (int j = 0; j < size; j++) {
        printf("arr[%d]: %d、", j, arr[j]);
    }
    printf("\n");

    printf("size: %d\n", size);
    return 0;
}