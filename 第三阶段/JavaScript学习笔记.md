# JavaScript

## JavaScript简介

JavaScript 是一种轻量级的编程语言。

JavaScript 是可插入 HTML 页面的编程代码。

JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。

---

## JavaScript 用法

HTML 中的 JavaScript 脚本代码必须位于 **<script>** 与 **</script>** 标签之间。

JavaScript 脚本代码可被放置在 HTML 页面的 **<body>** 和 **<head>** 部分中。

<!DOCTYPE html>
<html>
<body>
.
.
<script>
document.write("<h1>这是一个标题</h1>");
document.write("<p>这是一个段落</p>");
</script>
.
.
</body>
</html>

## JavaScript输出

JavaScript 可以通过不同的方式来输出数据：

- 使用 **window. Alert()** 弹出警告框。
- 使用 **document. Write()** 方法将内容写到 HTML 文档中。
- 使用 **inner HTML** 写入到 HTML 元素。
- 使用 **console.log()** 写入到浏览器的控制台。

### window. Let()

可以弹出警告框来显示数据：

<!DOCTYPE html>
<html>
<body>
<h1>我的第一个页面</h1><p>我的第一个段落。</p>

<script>window.alert(5 + 6);
</script>
</body>
</html>