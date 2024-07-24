package main

import "fmt"

func nilPtr() {
	var p *string
	fmt.Println(p)
	fmt.Printf("p的值是%p\n", p)

	// p = new(string)

	if p != nil {
		fmt.Println("非空")
	} else {
		fmt.Println("空值 nil, 指向空地址")
	}
}

func easyType() {
	a := 10
	b := &a
	fmt.Printf("a value:%d a addr:%p\n", a, &a) // a:10 ptr:0xc00001a078
	fmt.Printf("b value:%p b type:%T\n", b, b)  // b:0xc00001a078 type:*int
	fmt.Printf("b addr: %p\n", &b)
}

func newMake() {
	// var a *int // 它的值是 nil（指向空地址）
	a := new(int)
	*a = 100

	// fmt.Println(*a)

	var bMap = make(map[string]int)
	bMap["测试"] = 100
	fmt.Println("bMap:", bMap)
}

func usePoint(p *[5]int) {
	fmt.Println(p, &p)
}

func usePoint2(p *int) {
	fmt.Println(p, &p)
}

func main() {
	// nilPtr()

	// easyType()

	// newMake()

	arr := [5]int{1, 2, 3, 4, 5}
	fmt.Printf("arr: %v, &arr: %p\n", arr, &arr)

	ptr := arr
	fmt.Printf("ptr: %v, &ptr: %p\n", ptr, &ptr)

	// usePoint(&arr)
	// usePoint2(ptr)

}
