function partition(s: string): string[][] {
  const rst: string[][] = [];
  const path: string[] = [];
  const s_len = s.length;

  function dfs(i: number) {
    if (i === s_len) {
      rst.push([...path]);
      //   return;
    }

    for (let j = i; j < s_len; j++) {
      const str = s.slice(i, j + 1);
      console.log(str);
      if (!isBack(str)) {
        continue;
      }

      path.push(str);
      dfs(j + 1);
      path.pop();
    }
  }

  dfs(0);

  return rst;
}

function isBack(s: string) {
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }

    start++;
    end--;
  }

//   console.log(s, true);
  return true;
}

const s = "efe";

console.log(partition(s));
// console.log(isBack(s))
