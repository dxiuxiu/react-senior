# linux 命令

⼀般线上机器都为 linux
为了保持⼀致测试机最好也使⽤ linux
测试机或线上机出现问题本地不能复现需要连接测试机或线上机排查问题

git bash 窗⼝⽀持 linux 命令
开头 + tab 键自动补齐

## rm

rm -rf *  - 删除当前目录下的所有文件
rm -rf fileName/directory  - 删除当前目录下的所有文件

### 语法

rm (选项)(参数)

### 选项

+ -f 强制删除文件或目录
+ -r或-R 递归处理,将指定目录下的所有文件与子目录一并处理

+ -i 删除已有文件或目录之前先询问用户
+ --preserve-root 不对根目录进行递归操作
+ -v 显示指令的详细执行过程
+ -d 直接把欲删除的目录的硬连接数据删除成0,删除该目录

## 查看⽂件夹中内容

```shell
$ ls # 看平铺
$ ll # 看列表
$ ls -a # 看所有
```

## 移动

```shell
$ mv index.html dist # index.html 移动到 dist 文件夹下
```

## 重命名

```shell
$ mv index.html index1.html # index.html 重命名为 index1.html
```

## 拷贝 cp

```shell
$ cp a.js a1.js # a.js 拷贝重命名为 a1.js
```

## 新建文件夹 mkdir dirName

## 新建文件 touch 

```shell
$ touch d.js # 
$ vi d.js # 原本没有 d.js 就新建并进入到 vim 编辑器，有就直接打开进入 vim 编辑器
```

## 查看内容

+ 借⽤ vim
+ cat 查看所有
+ head 查看前⼏⾏
+ tail 打印最末尾的⼏⾏

## cat

## vi

```shell
$ vi fileName
```

+ 按 i 键进⼊输⼊模式才能进⾏编辑

+ 点击 esc 键退出 insert 模式

+ 点击冒号 + w(:w) 回车保存

+ 冒号 + q(:q) 退出

+ 添加内容后不想保存直接退出 :q! 强制退出

+ vimtutor 教程

## 远程登录

本地登录到线上机器 192.168.10.21 ⽤户名 work

```shell
$ ssh work@192.168.10.21
```
