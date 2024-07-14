#include <stdio.h>
#include <stdint.h>
#include <math.h>
#include <limits.h>

int minSubArrayLen(int target, int *nums, int numsSize)
{
   int sum = 0;
   int rst = INT_MAX;

   int left = 0, right = left;
   while (right < numsSize)
   {
      sum += nums[right];

      while (sum >= target)
      {
         rst = fmin(rst, right - left + 1);
         sum -= nums[left];
         ++left;
      }

      ++right;
   }

   return rst == INT_MAX ? 0 : rst;
}

int main()
{
   int nums[] = {2, 3, 1, 2, 4, 3};
   printf("result: %d", minSubArrayLen(7, nums, 6));
   return 0;
}