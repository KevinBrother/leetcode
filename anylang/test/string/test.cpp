// #include <stdio.h>
// #include <string.h>

#include <cstdio>
#include <cstring>
#include <iostream>
#include <string>

using namespace std;

class Solution {
   public:
    void dataStruct() {
        std::string str = "abcd";

        cout << "str:" + str << ", str.size() | str.length: " << str.length() << endl;

        std::string newStr = str.replace(1, 1, "a");
        cout << "newStr: " + newStr << endl;
        cout << "str after str.replace(1, 1, \"a\"): " + str << endl;

        str[1] = 'z';
        cout << "str after str[1] = 'z': " + str << endl;
    }
};

int main() {
    Solution s;
    s.dataStruct();
    return 0;
}
