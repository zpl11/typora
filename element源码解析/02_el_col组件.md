从 github 上将代码拉取下来之后发现跑不起来。。。
然后发现目前的代码需要的环境是 node 14.17.3  npm 6.14.3
node 更换版本的话可以使用 nvm 版本管理器来管理多个版本，不过我是直接卸载了目前的 node 重新安装了 node 哈哈，然后 npm 的话就是 npm install npm@6.14.3 就更换过版本了。好了代码跑起来了，重新书接上回。

el-row 中 :row 直接就是默认的 24份数，传入多少就按比例分配，那么是如何实现的呢?

可以看到  el-col-6 默认的样式就是 100% 宽度的 25%

![image-20220725221445018](D:\笔记\photo\image-20220725221445018.png)

那么它怎么实现只要传入 :span = "6" 就能将这个参数传入到 样式中，并且能默认占 25% 呢?

首先要知道 element 组件的样式文件在哪里

![image-20220725221136323](D:\笔记\photo\image-20220725221136323.png)

那么直接写入的  :span="6" 其中的 6 是怎么传参数到 style 中的?

想想我们用 vue 的时候，在 class 中使用三元表达式从而能过动态的改变样式，这里更加高级一点，在 style 中传入样式变量 `:style="{ '--bkColor': bkColor, '--fontColor': fontColor }"` 在 scss 中使用变量接收 `color: var(--fontColor);` 这样就可以动态的根据传入的 props 改变颜色了。

[参考vue ,通过props接收,动态变量传入scss中,运用:css3(var](https://blog.csdn.net/weixin_37835649/article/details/124387119)

然后我去看了 element 源码，发现它实现的比较暴力

![image-20220725222401133](D:\笔记\photo\image-20220725222401133.png)

看到了这里，没有太详细的学过 scss 的语法，但是可以看出直接使用便利的方法根据 24 份基础变量，直接得到元素宽度的百分数。这下知道为什么是默认 24 份了吧。。。

在 el-row 中传的参数

![image-20220725222603677](D:\笔记\photo\image-20220725222603677.png)

直接声明一个 class 样式数组，当是 span 传入的参数不是 span 的时候 el-col-offset-6 当是 span 的时候 el-col-6 ，然后联系到上面 scss 将宽度按照百分比来设置。

