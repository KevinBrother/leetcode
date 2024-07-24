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

func remove(slice []int, i int) []int {
	copy(slice[i:], slice[i+1:])
	return slice[:len(slice)-1]
}

// 创建切片
func slice() {
	s := []int{5, 6, 7, 8, 9}
	fmt.Println(remove(s, 2)) // "[5 6 8 9]"

	fmt.Println("s: ", s)

	var noLen = []int{1, 2, 3}
	fmt.Printf("init noLen: %v, noLen ptr: %p\n", noLen, noLen)

	noLen = append(noLen, 4, 5)
	fmt.Printf("append noLen: %v, noLen ptr: %p\n", noLen, noLen)

	noLen = append(noLen, noLen...)

	fmt.Println("after noLen: ", noLen)

	months := [...]string{1: "January", 12: "December"}
	months[8] = "August"

	fmt.Println("months: ", months, "months[0]: ", months[0], "months[1]: ", months[1], "len(months): ", len(months))

	summer := months[4:7]
	q2 := months[4:7]

	fmt.Printf("summer: %+v, &summer: %p , len(summer): %v, cap(summer): %v\n", summer, &summer, len(summer), cap(summer))
	fmt.Printf("&q2: %p\n", &q2)
	fmt.Printf("summer value: %p,  p2 value: %p\n", summer, q2)

}

func main() {
	fmt.Println("========= fmt array start ===========")
	array()
	fmt.Println("=========  fmt slice start ===========")
	slice()
}
