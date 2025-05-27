# 学习路径

## 很晚才开始刷算法，2021年才开始

刷过一遍 [小浩算法](https://www.geekxh.com/1.4.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%B3%BB%E5%88%97/408.html#_01%E3%80%81%E5%89%AA%E6%9E%9D%E6%A6%82%E8%BF%B0
) 算是刚开始接触，也为后面找工作打下了比较好的编码基础，那段时间的offer收割机

## 2023年6月中旬，个人代码状态不好，开始第二轮的刷题

[算法通关手册](https://algo.itcharge.cn/00.Introduction/01.Data-Structures-Algorithms/)

## 2024年2月～7月，开始第三轮的刷题

[算法通关手册](https://algo.itcharge.cn/00.Introduction/01.Data-Structures-Algorithms/)
[灵神](https://github.com/EndlessCheng/codeforces-go/blob/master/leetcode/README.md) 刷到回溯的剪枝

## 2025年5月末，第四轮

## 登记

二分法掌握的不是很好，细节点没能完全掌握，需要第三轮加强下[注意点](https://algo.itcharge.cn/01.Array/03.Array-Binary-Search/02.Array-Binary-Search-02/)


## 其他

### 回溯思路
- 回溯算法的难度主要体现在递归逻辑和状态管理上
- 先理解回溯的基本模板，掌握[递归]和 [状态恢复] 的基本操作。
``` python
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```
- 多练习剪枝优化, 学习如何通过条件判断减少不必要的递归

### 理解回溯与动态规划的区别
- 回溯用于搜索所有解，而动态规划用于优化重叠子问题。