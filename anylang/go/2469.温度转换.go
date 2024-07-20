package main

import "fmt"

func convertTemperature(celsius float64) []float64 {
	var arr []float64
	arr[0] = celsius + 273.15
	arr[1] = celsius*1.80 + 32.00
	return arr
}

func main() {
	rst := convertTemperature(36.5)
    for( )
	fmt.Printf(rst)
}
