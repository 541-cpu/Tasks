# HTML学习笔记

## HTML简介

HTML定义了整个页面的结构和内容，包括文本、图像、链接等。

---



## 标签

HTML通过一系列标签来定义文本、图像、链接等；标签是由尖括号包围的关键字。

### 单标签

- `<br>` 换行

- `<hr>` 水平线

- ```<img>```图片

- `<input>` 输入框

- ```<meta>``` 网页元信息

- ```<link>``` 引入 CSS / 图标

- ```<base> ``基准链接

- ```<col>``` 表格列

- `<embed>` 嵌入媒体

- `<param>` 插件参数

- `<source>` 音视频源

- `<track>` 字幕

- 

**注**:只有开始，没有结束标签，也不用写 `</xxx>`

### 双标签

- ```<html> ... </html>```

  - **可包含**：只能包含 `<head>` 和 `<body>`（必须按这个顺序）

  - **必填属性**：`lang`（指定语言，如 `zh-CN`/`en`）

  - *使用示例*

  ```
  <html lang="zh-CN">
    <head>...</head>
    <body>...</body>
  </html>
  ```

- ```<head> ... </head>```

  - **可包含**：`<title>`（必填）、`<meta>`、`<link>`、`<style>`、`<script>`、`<base>`
  - **无必填属性**，核心是设置网页元信息
  - **使用示例**：

  ```
  <head>
    <meta charset="UTF-8"> <!-- 必写：字符编码 -->
    <title>网页标题</title> <!-- 必写：标签页名称 -->
    <link rel="stylesheet" href="style.css"> <!-- 选填：引入外部CSS -->
  </head>
  ```

- ```<body> ... </body>```

  - **可包含**：所有页面可见元素（标题、段落、图片、链接、列表、表单等）
  - **无必填属性**，是网页内容的容器
  - **使用示例**：

  ```
  <body>
    <h1>首页标题</h1>
    <p>正文内容</p>
    <img src="pic.jpg" alt="图片"> <!-- 单标签也可放在这里 -->
  </body>
  ```

- ```<title> ... </title>```

  - **可包含**：纯文本（不能嵌套任何标签）

  - **无必填属性**，内容会显示在浏览器标签页

  - *使用示例**：

  ```
  <title>我的第一个HTML页面</title>
  ```

- ```<span> ... </span>```

  - **可包含**：行内元素（文字、`<a>`、`<i>`、`<strong>`等），不能包含块级元素（`<div>`/`<p>`等）

  - **常用属性**：`class`/`id`（用于 CSS 样式）、`style`（行内样式）

  - *使用示例**：

```
<p>这是<span style="color: red; font-weight: bold;">红色加粗</span>的文字</p>
```

- ```<h1> ~ <h6>```

  - **可包含**：行内元素（文字、`<span>`、`<a>`等），不能包含块级元素
  - **无必填属性**，`h1`一个页面仅用 1 个，按层级递减使用
  - **使用示例**：

  ```
  <h1>网站主标题</h1>
  <h2>文章标题</h2>
  <h3>小节标题</h3>
  ```

- ```<div> ... </div>```

  - **可包含**：任意元素（块级 + 行内，如`<p>`/`<span>`/`<ul>`/`<img>`等）
  - **常用属性**：`class`/`id`/`style`（布局核心）
  - **使用示例**：

  ```
  <div class="header" style="width: 100%; height: 80px;">
    <h1>网站头部</h1>
    <a href="/">首页</a>
  </div>
  ```

- ```<p> ... </p>```

  - **可包含**：行内元素（文字、`<span>`、`<a>`、`<img>`等），不能包含块级元素（`<div>`/`<h1>`/`<p>`等）
  - **无必填属性**，自动生成段落间距
  - **使用示例**：

  ```
  <p>HTML是超文本标记语言，<a href="https://www.w3.org/">W3C</a>制定了相关标准。</p>
  ```

- ```<a> ... </a>```

  - **可包含**：行内元素（文字、`<span>`、`<img>`等），不能包含块级元素
  - **必填属性**：`href`（跳转地址）；常用属性：`target`（打开方式）、`title`（提示文字）
  - **使用示例**：

  ```
  <!-- 跳转到外部链接，新窗口打开 -->
  <a href="https://github.com" target="_blank" title="访问GitHub">GitHub</a>
  <!-- 锚点定位 -->
  <a href="#footer">跳转到页脚</a>
  <div id="footer">页脚内容</div>
  ```

- ```<ul> <ol> <li>```

   ````<ul>/<ol>````

  - **可包含**：只能包含 `<li>` 标签
  - **常用属性**：`class`/`id`（CSS 样式）

   `<li>`

  - **可包含**：任意元素（块级 + 行内，如`<p>`/`<div>`/`<a>`等）
  - **无必填属性**
  - **使用示例**：

  ```
  <!-- 无序列表 -->
  <ul>
    <li>Python</li>
    <li>Java
      <ul> <!-- 嵌套列表 -->
        <li>SpringBoot</li>
      </ul>
    </li>
  </ul>
  <!-- 有序列表 -->
  <ol start="2"> <!-- start：从2开始编号 -->
    <li>第一步</li>
    <li>第二步</li>
  </ol>
  ```

- ```<label> <select> <option>```

   `<label>`

  - **可包含**：行内元素（文字、`<input>`等）

  - **常用属性**：`for`（与`<input>`的`id`绑定，必填用于提升可访问性

  ```<select>```

  - **可包含**：`<option>`、`<optgroup>`（分组选项）

  - **常用属性**：`name`（表单提交用）、`id`（与<label>绑定）

   `<option>`

  - **可包含**：纯文本
  - **常用属性**：`value`（提交的实际值，必填）、`selected`（默认选中）
  - **使用示例**：

  ```
  <label for="course">选择课程：</label>
  <select name="course" id="course">
    <option value="">--请选择--</option>
    <option value="math" selected>数学</option> <!-- 默认选中 -->
    <option value="english">英语</option>
  </select>
  ```

- ```<form>...</form>```

  - **可包含**：所有表单元素（`<input>`/`<select>`/`<button>`/`<textarea>`等）+ 普通元素（`<div>`/`<p>`/`<label>`等）
  - **常用属性**：`action`（提交地址）、`method`（提交方式：GET/POST）、`enctype`（文件上传时用）
  - **使用示例**：

  ```
  <form action="/login" method="POST">
    <div>
      <label for="username">用户名：</label>
      <input type="text" id="username" name="username" required> <!-- required：必填 -->
    </div>
    <button type="submit">登录</button>
  </form>
  ```

- ```<button> ... </button>```

  - **可包含**：行内元素（文字、`<span>`、`<img>`等），不能包含块级元素

  - **必填属性**：`type`（`submit`/`reset`/`button`，默认`submit`）

  - **使用示例**：

```
<!-- 提交按钮 -->
<button type="submit">提交表单</button>
<!-- 自定义功能按钮 -->
<button type="button" onclick="alert('点击成功')">
  <span>点击我</span>
</button>
```

- ```<iframe> ... </iframe>```

  - **可包含**：无（标签内为空，内容由`src`属性指定的外部页面填充）
  - **必填属性**：`src`（嵌入页面地址）；常用属性：`width`/`height`（尺寸）、`frameborder`（边框，0 为无）
  - **使用示例**：

  ```
  <iframe src="https://map.baidu.com" width="100%" height="400" frameborder="0"></iframe>
  ```

- ```<textarea> ... </textarea>```

  - **可包含**：纯文本（也可留空，通过`placeholder`提示）
  - **常用属性**：`name`（表单提交用）、`rows`（显示行数）、`cols`（显示列数）、`placeholder`（提示文字）
  - **使用示例**：

  ```
  <label for="remark">备注：</label>
  <textarea id="remark" name="remark" rows="3" cols="30" placeholder="请输入备注信息"></textar
  ```

- ```<script> ... </script>```

  - **可包含**：JavaScript 代码（内嵌），或通过`src`属性引入外部 JS 文件（此时标签内不能写代码）
  - **常用属性**：`src`（外部 JS 地址）、`type`（默认`text/javascript`，可省略）、`defer`/`async`（加载方式）
  - **使用示例**：

  ```
  <!-- 内嵌JS -->
  <script>
    console.log('Hello HTML');
  </script>
  <!-- 外部JS -->
  <script src="main.js" defer></script> <!-- defer：页面加载完再执行 -->
  ```

- ```<style> ... </style>```

  - **可包含**：CSS 样式代码
  - **无必填属性**，建议放在`<head>`内
  - **使用示例**：

  ```
  <head>
    <style>
      /* 给p标签设置样式 */
      p {
        color: #333;
        font-size: 16px;
        line-height: 1.5;
      }
      /* 给类名为box的div设置样式 */
      .box {
        width: 200px;
        height: 100px;
        background: #f5f5f5;
      }
    </style>
  </head>
  ```

**注**：在浏览器的页面上使用键盘上的 **F12** 按键开启调试模式，就可以看到组成标签。

（*AI协助总结*）

### 简便记忆

- **用来 “放内容、包文字” 的 → 基本都是双标签**

- **用来 “换行、画线、插图片、输入框” 的 → 基本都是单标签**

---

## HTML文档结构

```
<!DOCTYPE html>(只有正确声明html版本，才能在浏览器上显示网页内容)*必须有且必须写在第一行*
<html>(文档起点)*必须有*
<head>(头部标签，用来存放网页元信息‘不显示在页面’)*必须有*
<body>(主体标签，用来存放可见内容‘文字图片、链接、列表、表单等)*必须有*
</html>*必须有*
```

**注**：在第一行输入“*！*”，会有提示，选择一个“*！*”，然后按“*Tab*”就能生成一个完整的HTML文档，按“*End*”可以查看右边内容。如下图

![屏幕截图 - 路过图床](https://imgchr.com/i/peG23gH)

## 参考

- [罗大富前端入门教程](https://www.bilibili.com/video/BV1BT4y1W7Aw/?spm_id_from=333.337.search-card.all.click)
- [菜鸟教程-HTML教程](https://www.runoob.com/html/html-intro.html)

