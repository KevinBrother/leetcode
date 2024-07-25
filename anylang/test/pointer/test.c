#include <stdio.h>
// #include <stdlib.h>
#include <malloc/_malloc.h>
#include <string.h>

int main() {
    int a = 1;
    int *b = &a;

    printf("*b: %d, b pvalue: %p , b ivalue %d \n", *b, b, b);

    char *description;
    printf("before desc addr: %p , description pvalue: %p  , description sValue: %s\n", &description, description);

    description = malloc(200 * sizeof(char));
    char str[] = "very good";

    strcpy(description, str);
    puts(description);
    printf("after desc addr: %p , description pvalue: %p, description sValue: %s ,first Char: %c \n", &description, description, description, description[0]);

    free(description);
    printf("free desc addr: %p , description pvalue: %p, description sValue: %s ,first Char: %c \n", &description, description, description, description[500]);

    return 0;
}