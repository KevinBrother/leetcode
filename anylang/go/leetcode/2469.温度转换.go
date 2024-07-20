package leetcode

func ConvertTemperature(celsius float64) []float64 {
	arr := make([]float64, 2)
	// var arr [2]float64 // error
	arr[0] = celsius + 273.15
	arr[1] = celsius*1.80 + 32.00
	return arr
}
