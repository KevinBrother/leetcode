#include <stdio.h>
#include <string.h>

void dataStruct() {
    char str[] = "abcd";
    char newStr[strlen(str)];

    char dst[2];

    printf("sizeof(newStr): %lu\n", sizeof(newStr));
    printf("strncpy(dst, str + 2, 2) %s\n", strncpy(dst, str + 2, 2));

    /*
    snprintf(newStr, sizeof(newStr), "%c%c%c%c", str[0], 'a', dst);
    printf("newStr: %s\n", newStr);
    */

    str[1] = 'z';
    printf("str: %s\n", str);
}

int main() {
    dataStruct();
    return 0;
}