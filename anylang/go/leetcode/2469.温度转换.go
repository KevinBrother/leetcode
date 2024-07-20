package leetcode

import (
	"fmt"
)

func convertTemperature(celsius float64) []float64 {
	arr := make([]float64, 2)
	// var arr [2]float64 // error
	arr[0] = celsius + 273.15
	arr[1] = celsius*1.80 + 32.00
	return arr
}

func ConvertTemperature() {
	for _, v := range convertTemperature(36.5) {
		fmt.Println("ConvertTemperature: ", v)
	}
}
