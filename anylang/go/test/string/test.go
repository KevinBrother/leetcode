package main

import (
	"fmt"
	"strings"
)

func add(x, y int) (z int) {
	defer func() {
		println(z) // 输出: 203
	}()

	z = x + y
	return z + 200 // 执行顺序: (z = z + 200) -> (call defer) -> (return)
}

func main() {
	// println(add(1, 2)) // 输出: 203
	dataStruct()
}

func dataStruct() {
	// string
	var str1 = "str1"
	var str2 string = "str2"
	str3 := "str3"

	newStr := strings.Replace("abcd", "b", "a", 1)

	fmt.Println(str1, str2, str3, len(str1), str1[0], "newStr:", newStr)

}
