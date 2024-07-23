package leetcode

import (
	"fmt"
)

func abs(num int) int {
	if num > 0 {
		return num
	}
	return -num
}

func countGoodTriplets(arr []int, a int, b int, c int) int {
	length := len(arr)
	rst := 0
	for i := 0; i < length; i++ {
		for j := i + 1; j < length; j++ {
			for k := j + 1; k < length; k++ {
				if abs(arr[i]-arr[j]) <= a && abs(arr[j]-arr[k]) <= b && abs(arr[i]-arr[k]) <= c {
					rst++
				}
			}
		}
	}

	return rst
}

func CountGoodTriplets() {
	arr := []int{3, 0, 1, 1, 9, 7}
	// arr := []int{1, 1, 2, 2, 3}
	fmt.Println("countGoodTriplets({3,0,1,1,9,7}, 7, 2, 3)", countGoodTriplets(arr, 7, 2, 3))
}
