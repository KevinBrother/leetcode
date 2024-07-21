package leetcode

import "fmt"

func xorOperation(n int, start int) int {
	if n == 0 {
		return 0
	}

	rst := start
	for i := 1; i < n; i++ {
		rst ^= start + 2*i
	}

	return rst
}

func XorOperation() {
	fmt.Println("xorOperation(5, 0): ", xorOperation(5, 0))
	fmt.Println("xorOperation(4, 3): ", xorOperation(4, 3))
	fmt.Println("xorOperation(1, 7): ", xorOperation(1, 7))
}
