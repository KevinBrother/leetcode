package main

import (
	"fmt"
	"leetcodeModule/leetcode"
)

func main() {

	leetcode.CheckTree()

	fmt.Println("SmallestEvenMultiple: ", leetcode.SmallestEvenMultiple(5))

	for _, v := range leetcode.ConvertTemperature(36.5) {
		fmt.Println("ConvertTemperature: ", v)
	}

	fmt.Println("Sum: ", leetcode.Sum(1, 2))
}
