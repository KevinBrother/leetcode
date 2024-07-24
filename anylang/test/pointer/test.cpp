#include <iostream>



int main() {
    int a = 10;   // 声明一个整数变量 a
    int &r = a;   // r 是 a 的引用
    int &&forward = 20;

    // 输出 a 和 r 的值以及它们的地址
    std::cout << "Value of a: " << a << std::endl;           // 输出 10
    std::cout << "Value of r: " << r << std::endl;           // 输出 10
    std::cout << "Address of a: " << &a << std::endl;         // 输出 a 的地址
    std::cout << "Address of r: " << &r << std::endl;         // 输出 r 的地址

    return 0;
}