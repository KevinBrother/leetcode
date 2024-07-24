package main

import "fmt"

// 创建 数组
func array() {
	var a [10]int
	var s = [5]string{"a", "b"}
	var noLen = [...]int{1, 2, 3}
	// 修改
	a[0] = 1

	fmt.Println("a: ", a, ", cap(s):", cap(s), ", s: ", s, ", len(s):", len(s), ", noLen: ", noLen)

	// 截取
	b := a[:3]
	fmt.Println("b: ", b, ", a: ", a)

}

// 创建切片
func slice() {
	var noLen = []int{1, 2, 3}
	fmt.Println("noLen: ", noLen)
}

func main() {
	fmt.Println("========= fmt array start ===========")
	array()
	fmt.Println("=========  fmt slice start ===========")
	slice()
}
