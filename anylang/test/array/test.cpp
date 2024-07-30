
#include <iostream>
#include <vector>
// 增删改查

int main() {
    std::vector<int> a;

    printf("%d\n", a.size());

    try {
        a[1];
    } catch (const std::exception &e) {
        std::cerr << e.what() << '\n';
    }

    a.push_back(10);
    a.push_back(20);
    a.pop_back();

    for (int i = 0; i < a.size(); i++) {
        printf("%d\n", a[i]);
    }

    return 0;
}