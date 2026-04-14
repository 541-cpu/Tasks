# JavaScript学习笔记

## JavaScript的导入方式

- 在<head>或<body>中用<script>导入JavaScript
- 单独创建一个.js文件，在<head>中<script src="路径（./js/）"></script>即可导入JavaScript

**先打印内联样式，再打印外联样式，最后打印<body>中的内联样式**

## 函数

```
function//关键字 function_name//函数名(参数1, 参数2, 参数3, ...) {
  // 函数体：执行特定任务的代码
  return 返回值; // 可选，无return则默认返回undefined
}
```

### 执行结果对比

#### 无返回值函数 `hello()`

```
function hello() {
  console.log('Hello, world!'); // 直接在函数内打印内容
}
hello(); // 调用函数，控制台输出：Hello, world!
```

**逻辑**：函数内部直接执行打印操作，无`return`语句，调用后仅执行逻辑，不返回任何值（默认返回`undefined`）

####  有返回值函数 `hello_with_return()`

```
function hello_with_return() {
  return 'hello, world! - 返回值'; // 通过return返回字符串
}
let a = hello_with_return(); // 调用函数，接收返回值并赋值给变量a
console.log(a); // 控制台输出：hello, world! - 返回值
```

**逻辑**：函数通过`return`将结果返回，调用时需用变量接收返回值，再通过`console.log()`打印；若直接调用`console.log(hello_with_return())`，也可直接输出返回值。

### **核心区别总结**

| 函数类型     | 执行方式                 | 结果呈现形式                               |
| :----------- | :----------------------- | :----------------------------------------- |
| 无返回值函数 | 函数内直接执行输出逻辑   | 调用函数即触发输出                         |
| 有返回值函数 | 函数通过`return`返回结果 | 需接收返回值后再输出（或直接打印调用结果） |

### 其他知识点

- `return`的核心作用是**将函数内部的结果传递到外部**，而非直接输出；

- 若函数有`return`但未接收返回值，返回值会被丢弃，无法在外部使用。

## 事件处理

函数触发条件

### 事件知识点解析

| 事件名称    | 描述             | 实际应用场景                                     |
| :---------- | :--------------- | :----------------------------------------------- |
| onClick     | 点击事件         | 按钮点击触发操作（如提交表单、弹窗显示）         |
| onMouseOver | 鼠标经过         | 鼠标悬浮时显示下拉菜单、图片放大效果             |
| onMouseOut  | 鼠标移出         | 鼠标离开后恢复元素初始样式、隐藏悬浮层           |
| onChange    | 文本内容改变事件 | 输入框内容变化时实时校验（如密码强度检测）       |
| onSelect    | 文本框选中       | 选中输入框文字时触发复制 / 提示操作              |
| onFocus     | 光标聚集         | 输入框获得焦点时显示输入提示、改变边框样式       |
| onBlur      | 移开光标         | 输入框失去焦点时执行内容验证（如手机号格式检查） |

### 事件绑定

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件处理</title>
</head>
<body>
    <!-- 绑定onclick事件 -->
    <button onclick="click_event()">这是一个点击事件按钮</button>
    <!-- 绑定onfocus和onblur事件 -->
    <input type="text" onfocus="focus_event()" onblur="blur_event()" placeholder="请输入内容">//一个标签可以绑定多个属性

    <script>
        // 点击事件处理函数
        function click_event() {
            alert('点击事件触发了');
        }

        // 光标聚焦事件处理函数
        function focus_event() {
            // 输入框获得焦点时改变背景色
            document.querySelector('input').style.backgroundColor = '#e6f7ff';
            console.log('输入框获得光标');
        }

        // 光标失焦事件处理函数
        function blur_event() {
            // 输入框失去焦点时恢复背景色，并提示内容
            const inputVal = document.querySelector('input').value;
            document.querySelector('input').style.backgroundColor = '#fff';
            if (inputVal) {
                alert(`你输入的内容是：${inputVal}`);
            } else {
                alert('输入框为空，请输入内容');
            }
        }
    </script>
</body>
</html>
```

## JavaScript变量与数据类型

### 变量

JavaScript中使用三个关键字来声明变量

- var   ：var声明的变量具有函数作用域
- let  ：let声明的变量具有块级作用域（更安全、灵活）
- const  ：声明一个常量

## JavaScript的控制语句

### 条件语句

#### if

- **`if`**：关键字，标识这是一个条件判断语句。

- **`(condition)`**：条件表达式，位于括号内。其结果必须是布尔值（true 或 false）。

- **`{ ... }`**：代码块，当条件为 true 时，大括号内的逻辑代码会被运行。

if (condition) {

  // 如果条件为真，执行这里的代码

 }

#### else

- **执行顺序**：先判断 `if` 后的条件，为真则走 `if` 代码块；为假则直接跳转到 `else` 代码块执行。

- **语法关联**：`else` 必须紧跟在 `if` 代码块之后，不能单独使用。

#### else if

- **执行顺序**：从 `if` 开始依次判断条件，只要某一个条件为真，就执行对应代码块，后续的 `else if` 和 `else` 都会被跳过。

- **语法约束**：`else if` 必须紧跟在 `if` 或前一个 `else if` 的代码块之后，不能单独使用；`else` 作为最后兜底分支，可省略（若无需处理所有条件为假的情况）。

### 循环语句

#### for（有限循环、知道循环次数）

`for`循环是编程中**定次循环**的常用结构，语法由**三个关键部分**组成，以分号分隔：

```
console.log('FOR 循环');
for (let i = 0; i < 10; i++) {
  // 循环体：满足条件时重复执行的代码
}
```

| 部分        | 作用                                                         |
| :---------- | :----------------------------------------------------------- |
| `let i = 0` | 初始化表达式：循环开始前定义并赋值循环变量，仅执行一次       |
| `i < 10`    | 循环条件：每次循环前判断，结果为`true`则执行循环体，`false`则终止循环 |
| `i++`       | 更新表达式：每次循环体执行完毕后执行，用于修改循环变量（如自增 / 自减） |

#### while（无限循环、知道循环条件）

```
while (循环条件) {
  // 循环体：条件为真时重复执行的代码
}
```

| 组成部分     | 作用                                                         |
| :----------- | :----------------------------------------------------------- |
| `while`      | 关键字，标识该结构为`while`循环                              |
| `(循环条件)` | 布尔表达式（返回`true`/`false`），是循环执行的 “开关”，每次执行前都会判断 |
| `{ 循环体 }` | 条件为真时执行的代码块，需包含修改循环条件的逻辑（否则会无限循环） |

- **避免无限循环**：循环体内必须有能让条件最终变为`false`的操作（如`i++`、`变量赋值`），否则程序会一直执行循环体，导致卡死；
- **先判断再执行**：若初始条件为`false`，循环体一次都不会执行。

#### break和continue

| 关键字         | 核心作用                                                   | 循环后续执行逻辑               |
| :------------- | :--------------------------------------------------------- | :----------------------------- |
| **`break`**    | 强制**跳出整个循环**，直接终止循环的所有后续执行           | 循环彻底结束，不再进行条件判断 |
| **`continue`** | 跳过**当前循环次**的剩余代码，直接进入下一次循环的条件判断 | 循环未终止，仅跳过本次剩余代码 |

## DOM

### DOM 核心概念解读

| 关键表述                     | 通俗解释                                                     |
| :--------------------------- | :----------------------------------------------------------- |
| 浏览器创建页面的文档对象模型 | 网页加载时，浏览器会把 HTML 代码转换成**树形结构的对象**，让 JS 能 “看懂” 并操作页面 |
| 文档树是层次结构表示         | HTML 的标签嵌套关系对应树的节点层级（如`<html>`是根，`<body>`是子节点，`<div>`是孙节点） |
| 文档节点是根节点             | DOM 树的最顶层是`document`对象，所有页面元素都从这个对象开始查找和操作 |
| 提供编程接口供 JS 操作       | DOM 定义了一系列方法 / 属性，让 JS 能增删改查页面元素（如改文字、加样式、删除标签） |

### DOM获取文档元素

#### 获取DOM元素

**通过 ID 获取（单个元素）**

```
// 语法：document.getElementById('ID名')
const box = document.getElementById('box1'); 
```

- 注意：ID 在页面中需唯一，返回匹配的 DOM 元素，找不到则返回`null`。

**通过类名获取（元素集合）**

```
// 语法：document.getElementsByClassName('类名')
const items = document.getElementsByClassName('box2'); 
```

- 返回`HTMLCollection`集合，需通过下标（如`items[0]`）获取单个元素。

**通过标签名获取（元素集合）**

```
// 语法：document.getElementsByTagName('标签名')
const divs = document.getElementsByTagName('div'); 
```

- 返回`HTMLCollection`集合，同样通过下标访问单个元素。

**通过选择器获取（灵活）**

```
// 获取单个匹配元素（CSS选择器语法）
const firstBox = document.querySelector('#box1 .item'); 
// 获取所有匹配元素（返回NodeList集合）
const allBoxes = document.querySelectorAll('.box2'); 
```

- 推荐使用：支持 CSS 所有选择器，比前三种更灵活。

#### 操作元素内容

**`innerHTML`（含 HTML 标签）**

```
// 读取内容
const content = box.innerHTML; 
// 设置内容（可解析HTML标签）
box.innerHTML = '<h3>新的标题</h3>'; 
```

- 注意：是**属性**不是方法，不能加括号`()`。

**`innerText`（纯文本）**

```
// 仅读取/设置纯文本，忽略HTML标签
box.innerText = '普通文本内容'; 
```

**`textContent`（所有文本，含隐藏）**

- 与`innerText`类似，但会获取`<style>`/`<script>`里的文本，以及 CSS 隐藏的文本。

#### 操作元素样式

**行内样式（`style`属性）**

```
// 单个样式（CSS属性名驼峰化，如background-color → backgroundColor）
box.style.width = '200px';
box.style.backgroundColor = 'red';
// 多个样式（通过cssText）
box.style.cssText = 'width:200px; color: white;';
```

**类名样式（推荐）**

```
// 添加类名
box.classList.add('active');
// 移除类名
box.classList.remove('active');
// 切换类名（有则删，无则加）
box.classList.toggle('active');
// 判断是否有类名
const hasActive = box.classList.contains('active');
```

#### 操作元素属性

**标准属性（如`src`/`href`/`title`）**

```
// 获取属性
const src = img.getAttribute('src');
// 设置属性
img.setAttribute('src', 'new.jpg');
// 移除属性
img.removeAttribute('title');
```

- 简单属性也可直接用`元素.属性`：`img.src = 'new.jpg'`。

**自定义属性（`data-\*`）**

```
// HTML：<div data-id="123"></div>
const div = document.querySelector('div');
// 获取自定义属性
const id = div.dataset.id; 
// 设置自定义属性
div.dataset.id = '456'; 
```

#### 操作DOM节点

**创建节点**

```
// 创建元素节点
const newDiv = document.createElement('div');
// 创建文本节点
const text = document.createTextNode('新内容');
```

**添加节点**

```
// 把文本节点添加到新div里
newDiv.appendChild(text);
// 把新div添加到body里
document.body.appendChild(newDiv);
// 在指定元素前插入节点
document.body.insertBefore(newDiv, box);
```

**删除节点**

```
// 父元素删除子节点
box.parentElement.removeChild(box);
// 直接删除自身（ES6+）
box.remove();
```

**复制节点**

```
// 浅复制（仅复制节点本身，不包含子节点）
const clone1 = box.cloneNode(false);
// 深复制（复制节点及所有子节点）
const clone2 = box.cloneNode(true);
```

### 2. DOM 真正的 4 大核心作用

#### ① 读取页面内容

```
// 读取标题
let title = document.querySelector('h1').textContent;
```

#### ② 修改页面（最常用）

```
// 改文字
document.getElementById('msg').innerText = "登录成功";

// 改样式
document.body.style.background = "#f5f5f5";

// 改类名
box.classList.add('active');
```

#### ③ 监听用户行为（交互）

```
// 点击按钮弹出提示
btn.addEventListener('click', function() {
  alert('你点了我！');
});

// 监听输入框输入
input.addEventListener('input', function() {
  console.log(this.value);
});
```

#### ④ 动态增删元素

```
// 创建一个新div
let div = document.createElement('div');
div.textContent = "动态添加的内容";
document.body.appendChild(div);
```

示例

```
<script>
document.addEventListener('click', function() {
  document.body.style.backgroundColor = 'red';
});
</script>
```

*逐句解释*

1. `document`

- 意思就是**整个网页文档**
- 你可以把它理解成：JS 用来操控页面的 “总入口”

2. `addEventListener`

- 翻译：**添加一个事件监听器**
- 作用：监听用户有没有做某个动作（点击、滑动、输入……）

3. `'click'`

- 意思是：**监听 “点击” 这个动作**
- 只要用户点鼠标 / 点屏幕，就会触发后面的函数

4. `function() { ... }`

- 这是一个**点击之后要执行的代码块**
- 点击 → 运行大括号里的内容

5. `document.body`

- 指网页的**身体部分**（就是你能看到的整个页面）

6. `.style`

- 操控这个元素的**样式**（颜色、大小、位置……）

7. `.backgroundColor

- 意思：**背景颜色**
- 小驼峰写法，对应 CSS 里的 `background-color`

8. `= 'red'`

- 把背景颜色**设置成红色**

* 整段连起来就是*

> 给整个网页添加一个点击监听
>
> 当用户点击页面时
>
> 把页面 body 的背景颜色改成红色

*超简化理解版*

- 谁被点？→ **整个页面**
- 点了干嘛？→ **变红色背景**