package leetcode

import "fmt"

func getNums(x int) int {
	return x * (x - 1) / 2
}

func numIdenticalPairs(nums []int) int {
	var rst = 0
	countMap := make(map[int]int)

	for _, v := range nums {
		count := countMap[v]
		if count > 0 {
			countMap[v] = count + 1
		} else {
			countMap[v] = 1
		}
	}

	for _, v := range countMap {
		rst += getNums(v)
	}

	return rst
}

func NumIdenticalPairs() {
	arr := []int{1, 2, 3, 1, 1, 3}
	fmt.Println("numIdenticalPairs([1,2,3,1,1,3])", numIdenticalPairs(arr))
}
