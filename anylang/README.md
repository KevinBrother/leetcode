# any language 的入门方法

## 工程化

[go modules](https://www.digitalocean.com/community/tutorials/how-to-use-go-modules)

## 数据结构与算法

[编程入门](https://leetcode.cn/studyplan/primers-list/)
[编程基础 0 到 1](https://leetcode.cn/studyplan/programming-skills/)

### 数据结构总结

#### 字符串

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


```

#### map

``` go
```

## 设计模式

...
...
