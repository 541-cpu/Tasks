# Git练习提交文档

## Hello.md练习

1. 在Git Bash中定位到需要推送的.md      `cd /文件所在路径（在Git Bash中分隔要用/）`

2. 初始化仓库 `git init`  --在文件夹创建一个.git隐藏目录，保证被Git追踪==不能在根目录直接初始化（D盘、C盘）==

3. 将文件放入暂存区`git add 文件名`、`git add` (整个文件夹)  推送文件是必须先放在暂存区

4. 将文件存到本地仓库`git commit -m "说明"` 将所有暂存区的文件打包存入本地仓库==-m 后面必须有说明，方便后面追踪==

5. 远程仓库关联`git remote add 仓库别名 远程仓库地址`  仓库别名默认用origin，==GitHub只能填仓库地址，不能具体到仓库的文件夹== 

   若显示`remote origin already exists`则表示该仓库已经关联过别名，需要删除后重新关联`git remote rm origin` 

6. 将本地的分支与远程分支统一`git branch -M main` Git分支为master，远程分支为main，不统一分支会报`src refspec main does not match any`错误

7. 将分支推送到远程仓库`git push -u 仓库别名 分支名`==push的正确参数是远程别名+分支名，而不是仓库地址
推送成功后会跳出登录页面，登录了账号后即可在GitHub对应仓库找到本地文件![jietu](https://free-img.400040.xyz/4/2026/03/29/69c89ab51624f.png)
![jietu2](https://free-img.400040.xyz/4/2026/03/29/69c89ab50fc5c.png)
![jietu3](https://free-img.400040.xyz/4/2026/03/29/69c89ab51678e.png)

## 练习中的问题

1. 我的Git Bash和我的Hello.md不在一个文件中，所以刚开始打开Git Bash输入`git init`报错![jietu4](https://free-img.400040.xyz/4/2026/03/29/69c89ab518f88.png)

2. 第一次打开终端时打开的是Windows的终端，导致Git中`ls`不能运行，打开Git Bash后要先定位到推送文件位置

3. 在推送到远程仓库时报错![jitu5](https://free-img.400040.xyz/4/2026/03/29/69c89ab5160ff.png)

   原因是远程仓库地址错误，误用了仓库的网页浏览地址而不是Git克隆地址（直接定位到了仓库具体文件夹的地址）；并且本地分支和远程分支名未统一。

4. 推送语法错误，把远程仓库地址写在了分支位置![jietu6](https://free-img.400040.xyz/4/2026/03/29/69c89ab51daab.png)

   推送语法为`git remote add 分支名 仓库地址`
