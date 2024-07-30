# any language 的入门方法

## 工程化

[go modules](https://www.digitalocean.com/community/tutorials/how-to-use-go-modules)

## 数据结构与算法

[编程入门](https://leetcode.cn/studyplan/primers-list/)
[编程基础 0 到 1](https://leetcode.cn/studyplan/programming-skills/)

### 数据结构总结

#### 字符串

- 字符串都是不可变的，都需要通过某些方法来改变
- 增删改查

``` go
// 文档地址： https://pkg.go.dev/strings@go1.22.5#section-documentation
// 定义
var str1 = "str1"
var str2 string = "str2"
str3 := "str3"

// 获取长度
len(str1);


// 获取第一个字符
str1[0]

// 修改第一个字符
// 在 Go 中，字符串是不可变的，因此无法直接修改字符串的某个字符

// func Replace(s, old, new string, n int) string;
newStr := strings.Replace("abcd", "b", "a", 1)

```

``` c

 char str[] = "abcd";
 str[1] = 'a';
```

``` c++
std::string str = "abcd";
str.replace(1, 1, "a");

```

#### 数组

``` go
// 数组，长度不可变
var arr0 [5]int = [5]int{1, 2, 3, 4, 5}

// 切片，长度可变
var arr1 = []int{1, 2, 3, 4, 5}
```

``` c
// 数组,长度不可变
int arr2[] = {1, 2, 3, 4, 5}
// malloc 分配内存，可通过 realloc 修改长度
int *arr = malloc(size * sizeof(int));
arr = realloc(arr, (*size) * sizeof(int));
```

``` c++
std::vector<int> arr3 = {1, 2, 3, 4, 5};
arr3.size();
arr3.push_back(6);
arr3.pop_back();
```

#### map

``` go
```

## 其他

### go

显式类型定义与隐式类型定义

``` go
var arr0 [5]int = [5]int{1, 2, 3, 4, 5}
var arr1 = [5]int{1, 2, 3, 4, 5}
```

## 设计模式

...
...
