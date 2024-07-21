package leetcode

import "fmt"

func smallestEvenMultiple(n int) int {
	if n%2 == 0 {
		return n
	}
	return n * 2
}

func SmallestEvenMultiple() {
	fmt.Println("SmallestEvenMultiple: ", smallestEvenMultiple(5))
}
