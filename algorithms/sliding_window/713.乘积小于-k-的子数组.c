/*
 * @lc app=leetcode.cn id=713 lang=c
 *
 * [713] 乘积小于 K 的子数组
 */
#include <stdio.h>

// @lc code=start
int numSubarrayProductLessThanK(int *nums, int numsSize, int k)
{
    if (k <= 1)
    {
        return 0;
    }

    int rst = 0, left = 0, right = 0, product = 1;
    while (right < numsSize)
    {
        product *= nums[right];
        while (product >= k)
        {
            product /= nums[left++];
        }

        rst += right - left + 1;
        right++;
    }

    return rst;
}
// @lc code=end

int main()
{
    int arr[] = {10, 5, 2, 6}, k = 100;
    printf("rst: %d \n", numSubarrayProductLessThanK(arr, 4, k));

    return 0;
}
