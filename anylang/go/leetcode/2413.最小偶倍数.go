package leetcode

func SmallestEvenMultiple(n int) int {
	if n%2 == 0 {
		return n
	}
	return n * 2
}
