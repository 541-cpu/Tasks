# HTML学习笔记

## HTML简介

HTML定义了整个页面的结构和内容，包括文本、图像、链接等。

---



## 标签

HTML通过一系列标签来定义文本、图像、链接等；标签是由尖括号包围的关键字。

### 单标签

#### `<br>` 换行

<p>这个<br>段落<br>演示了分行的效果</p>

#### `<hr>` 水平线

<p>这是一个段落。</p>
<hr>
<p>这是一个段落。</p>
<hr>
<p>这是一个段落。</p>

#### ```<img>```图片

<img src="*图片url链接*" width="宽" height="高" />
<p>
一个图像:
<img src="smiley.gif" alt="Smiley face" width="32" height="32"></p>

<p>
一个动图:
<img src="hackanm.gif" alt="Computer man" width="48" height="48"></p>

<p>
注意插入动图的语法和静态图的语法是一样的。
</p>
e-g
<p>点击太阳或其他行星，注意变化：</p>

<img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">
  <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">
  <area shape="circle" coords="124,58,8" alt="Venus" href="venus.htm">
</map>

*HTML* 图像标签
| **标签**                                              | **描述**        |
|-----------------------------------------------------|---------------|
| [<img>](https://www.runoob.com/tags/tag-img.html)   | 定义图像          |
| [<map>](https://www.runoob.com/tags/tag-map.html)   | 定义图像地图        |
| [<area>](https://www.runoob.com/tags/tag-area.html) | 定义图像地图中的可点击区域 |

#### `<input>` 输入框

#### ```meta>``` <meta> 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。
META 元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。
元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。
<meta> 一般放置于 <head> 区域
### 为搜索引擎定义关键词:
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
### 为网页定义描述内容:
<meta name="description" content="免费 Web & 编程 教程">
### 定义网页作者:
<meta name="author" content="Runoob">
### 每30秒钟刷新当前页面:
<meta http-equiv="refresh" content="30">

#### ```<link>``` :link> 标签定义了文档与外部资源之间的关系。
<link> 标签通常用于链接到样式表
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

#### ```<base> ```:base> 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:
<head>
<base href="http://www.runoob.com/images/" target="_blank">
</head>

#### ```<col>``` 表格列

#### `<embed>` 嵌入媒体

#### `<param>` 插件参数

#### `<source>` 音视频源

#### `<track>` 字幕

#### ```<!--这是一个注释-->```在浏览器不会显示注释

<!-- 这是一个注释 -->

**注**:只有开始，没有结束标签，也不用写 `</xxx>`

### 双标签

#### ```<b>```、```<i>```、```<code>```、```<sub>```、```<sup>```

<b>加粗文本</b><br>斜体文本</i><br>电脑自动输出</code><br>这是 <sub> 下标</sub> 和 <sup> 上标</sup>

#### ```<html> ... </html>```

- **可包含**：只能包含 `<head>` 和 `<body>`（必须按这个顺序）

- **必填属性**：`lang`（指定语言，如 `zh-CN`/`en`）

- *使用示例*

```
<html lang="zh-CN">
  <head>...</head>
  <body>...</body>
</html>
```

#### ```<head> ... </head>```

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

#### ```<body> ... </body>```

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

#### ```<title> ... </title>```
- <title> 标签定义了不同文档的标题。
- <title> 在 HTML/XHTML 文档中是必需的。
- <title> 元素:
1. 定义了浏览器工具栏的标题
2. 当网页添加到收藏夹时，显示在收藏夹中的标题
3. 显示在搜索引擎结果页面的标题
一个简单的 HTML 文档：
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>文档标题</title>
</head>

<body>
文档内容......
</body>

</html>

#### ```<span> ... </span>```

- **可包含**：行内元素（文字、`<a>`、`<i>`、`<strong>`等），不能包含块级元素（`<div>`/`<p>`等）

- **常用属性**：`class`/`id`（用于 CSS 样式）、`style`（行内样式）

- *使用示例**：

```
<p>这是<span style="color: red; font-weight: bold;">红色加粗</span>的文字</p>
```

#### ```<h1> ~ <h6>```

- **可包含**：行内元素（文字、`<span>`、`<a>`等），不能包含块级元素

- **无必填属性**，`h1`一个页面仅用 1 个，按层级递减使用

- **使用示例**：

  <h1>这是一个标题。</h1>
  <h2>这是一个标题。</h2>
  <h3>这是一个标题。</h3>

#### ```<div> ... </div>```

- **可包含**：任意元素（块级 + 行内，如`<p>`/`<span>`/`<ul>`/`<img>`等）
- **常用属性**：`class`/`id`/`style`（布局核心）
- **使用示例**：

```
<div class="header" style="width: 100%; height: 80px;">
  <h1>网站头部</h1>
  <a href="/">首页</a>
</div>
```

#### ```<p> ... </p>```

- **可包含**：行内元素（文字、`<span>`、`<a>`、`<img>`等），不能包含块级元素（`<div>`/`<h1>`/`<p>`等）
- **无必填属性**，自动生成段落间距
- **使用示例**：

<p>这是一个段落
<p>这是另一个段落

#### ```<a> ... </a>```

<a href="/index.html">本文本</a> 是一个指向本网站中的一个页面的链接。</p>

<p><a href="https://www.microsoft.com/">本文本</a> 是一个指向万维网上的页面的链接。</p>

#### ```<ul> <ol> <li>```

##### ````<ul>/<ol>````

- **可包含**：只能包含 `<li>` 标签
- **常用属性**：`class`/`id`（CSS 样式）

##### `<li>`

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

#### ```<label> <select> <option>```

##### `<label>`

- **可包含**：行内元素（文字、`<input>`等）

- **常用属性**：`for`（与`<input>`的`id`绑定，必填用于提升可访问性

##### ```<select>```

- **可包含**：`<option>`、`<optgroup>`（分组选项）

- **常用属性**：`name`（表单提交用）、`id`（与<label>绑定）

#####  `<option>`

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

#### ```<form>...</form>```

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

#### ```<button> ... </button>```

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

#### ```<iframe> ... </iframe>```

- **可包含**：无（标签内为空，内容由`src`属性指定的外部页面填充）
- **必填属性**：`src`（嵌入页面地址）；常用属性：`width`/`height`（尺寸）、`frameborder`（边框，0 为无）
- **使用示例**：

```
<iframe src="https://map.baidu.com" width="100%" height="400" frameborder="0"></iframe>
```

#### ```<textarea> ... </textarea>```

- **可包含**：纯文本（也可留空，通过`placeholder`提示）
- **常用属性**：`name`（表单提交用）、`rows`（显示行数）、`cols`（显示列数）、`placeholder`（提示文字）
- **使用示例**：

```
<label for="remark">备注：</label>
<textarea id="remark" name="remark" rows="3" cols="30" placeholder="请输入备注信息"></textar
```

#### ```<script> ... </script>```

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

#### ```<style> ... </style>```:style> 标签定义了HTML文档的样式文件引用地址.
在<style> 元素中你也可以直接添加样式来渲染 HTML 文档:
<head>
<style type="text/css">
body {
    background-color:yellow;
}
p {
    color:blue
}
</style>
</head>

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

## HTML属性

### 全局属性

全局属性是所有 HTML 元素都可以使用的属性。

**id**：用于链接锚点，通常在同一页面中跳转到某个特定位置。

<!-- 链接到页面中的某个部分 -->
<a href="#section1">跳转到第1部分</a>

<div id="section1">这是第1部分</div>

**class**：为元素指定一个或多个类名，用于 CSS 或 JavaScript 选择。

<a href="https://www.example.com" class="external-link">外部链接</a>

**style: 直接在元素上定义CSS样式**
<a href="https://www.example.com" style="color: red;">红色链接</a>
**data-**：用于存储自定义数据，通常通过 JavaScript 访问。

<div data-user-id="12345">User Info</div>

**rel**:定义链接与目标页面的关系。

- `noopener`: 防止新的浏览上下文（页面）访问`window.opener`属性和`open`方法。

- `noreferrer`: 不发送referer header（即不告诉目标网站你从哪里来的）。

- `noopener noreferrer`: 同时使用`noopener`和`noreferrer`。

  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">安全链接</a>

**download**：提示浏览器下载链接目标而不是导航到该目标。（如果指定了文件名，浏览器会提示下载并保存为指定文件名）

<a href="file.pdf" download="example.pdf">下载文件</a>

**title**：定义链接的额外信息，当鼠标悬停在链接上时显示的工具提示。

<a href="https://www.example.com" title="访问 Example 网站">访问 Example</a>

### 自定义属性

HTML5 引入了 **data-\*** 属性，允许开发者自定义属性来存储额外的数据。

**data-\***：用于存储自定义数据，通常通过 JavaScript 访问。

```
<div data-user-id="12345" data-role="admin">User Info</div>
```



### 特定元素的属性

某些属性仅适用于特定的 HTML 元素。

**`href`**（用于 `<a>` 和 `<link>` 元素）：指定链接的目标 URL。

```
<a href="https://www.example.com">Visit Example</a>
```

** hreflang**: 指定链接的目标URL的语言。

<a href="https://www.example.com/es" hreflang="es">访问西班牙语网站</a>

**`src`**（用于 `<img>`, `<script>`, `<iframe>` 等元素）：指定外部资源的 URL。

```
<img src="image.jpg" alt="An example image">
```

alt（用于 `<img>` 元素）：为图像提供替代文本，当图像无法显示时显示。

```
<img src="image.jpg" alt="An example image">
```

**`type`**（用于 `<input>` 和 `<button>` 元素）：指定输入控件的类型。

<a href="style.css" type="text/css">样式表</a>

**`value`**（用于 `<input>`, `<button>`, `<option>` 等元素）：指定元素的初始值。

```
<input type="text" value="Default Value">
```

disabled（用于表单元素）：禁用元素，使其不可交互。

```
<input type="text" disabled>
```

**`checked`**（用于 `<input type="checkbox">` 和 `<input type="radio">`）：指定复选框或单选按钮是否被选中。

```
<input type="checkbox" checked>
```

**`placeholder`**（用于 `<input>` 和 `<textarea>` 元素）：在输入框中显示提示文本。

```
<input type="text" placeholder="Enter your email">
```

**`target`**（用于 `<a>` 和 `<form>` 元素）：定义链接的打开方式。

- `_blank`: 在新窗口或新标签页中打开链接。
- `_self`: 在当前窗口或标签页中打开链接（默认）。
- `_parent`: 在父框架中打开链接。
- `_top`: 在整个窗口中打开链接，取消任何框架。

```
<a href="https://www.example.com" target="_blank">Open in new tab</a>
```

### 布尔属性

布尔属性是指不需要值的属性，它们的存在即表示 true，不存在则表示 false。

**disabled**：禁用元素。

```
<input type="text" disabled>
```

**readonly**：使输入框只读。

```
<input type="text" readonly>
```

**required**：指定输入字段为必填项。

```
<input type="text" required>
```

**autoplay**：（用于 `<audio>` 和 `<video>` 元素）：自动播放媒体。

```
<video src="video.mp4" autoplay></video>
```

### 自定义属性

HTML5 引入了 **data-\*** 属性，允许开发者自定义属性来存储额外的数据。

**data-\***：用于存储自定义数据，通常通过 JavaScript 访问。

```
<div data-user-id="12345" data-role="admin">User Info</div>
```

### 事件处理属性

HTML 元素可以通过事件处理属性来响应特定的事件，如点击、鼠标悬停等。

**onclick**：当用户点击元素时触发。

```
<button onclick="alert('Button clicked!')">Click Me</button>
```

**onmouseover**：当用户将鼠标悬停在元素上时触发。

```
<div onmouseover="this.style.backgroundColor='yellow'">Hover over me</div>
```

**onchange**：当元素的值发生变化时触发。

```
<input type="text" onchange="alert('Value changed!')">
```
### 空链接
以下是常见的几种设置空链接的方法，以及它们之间的区别：
| **方法**                    | **作用**        | **是否会跳转** | **场景适用性**        |
|---------------------------|---------------|-----------|------------------|
| href="#"                  | 导航到页面顶部       | 是         | 占位符，捕获点击事件       |
| href="javascript:void(0)" | 阻止默认行为，不刷新页面  | 否         | 阻止跳转，配合 JS 使用    |
| href=""                   | 刷新当前页面        | 是         | 需要页面刷新时          |
| href="about:blank"        | 打开空白页面        | 是         | 新窗口打开空白页面        |
| role="button"             | 链接表现为按钮，无默认行为 | 否         | 配合 JS 实现按钮功能，无跳转 |
### 图片链接
 <p>创建图片链接:
<a href="https://www.runoob.com/html/html-tutorial.html">
<img  border="10" src="smiley.gif" alt="HTML 教程" width="32" height="32"></a></p>

<p>无边框的图片链接:
<a href="https://www.runoob.com/html/html-tutorial.html">
<img border="0" src="smiley.gif" alt="HTML 教程" width="32" height="32"></a></p>

### 创建电子邮件链接p>
这是一个电子邮件链接：
<a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">
发送邮件</a>
</p>

<p>
<b>注意:</b> 单词之间空格使用 %20 代替，以确保浏览器可以正常显示文本。
</p>


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

![tp](https://free-img.400040.xyz/4/2026/04/01/69cd0dce582ab.png)



## 参考

- [罗大富前端入门教程](https://www.bilibili.com/video/BV1BT4y1W7Aw/?spm_id_from=333.337.search-card.all.click)
- [菜鸟教程-HTML教程](https://www.runoob.com/html/html-intro.html)

