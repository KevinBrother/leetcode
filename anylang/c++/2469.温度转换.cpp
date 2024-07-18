#include <iostream>
#include <vector>

class Solution {
   public:
    std::vector<double> convertTemperature(double celsius) {
        double Kelvin = celsius + 273.15;
        double Fahrenheit = celsius * 1.80 + 32.00;

        std::vector<double> rst = {Kelvin, Fahrenheit};
        return rst;
    }
};

int main() {
    Solution s;
    auto rst = s.convertTemperature(36.50);
    for (const auto& item : rst) {
        std::cout << item << std::endl;
    }

    return 0;
}