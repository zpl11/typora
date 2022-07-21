wepack基本配置流程

wepack 中添加 babel ES6 解析器

Element 中 Vue.use(elRow) 的使用，import 可以是任意的名字，得到 export default 出来的变量。

Vue.use 使用方法，抛出的对象必须有 install 对象，同事 Vue.use 在调用改对象的时候会默认给该对象传递 Vue 变量。

element 使用 js 封装的组件中使用了 h.render 方法来渲染组件。

要理解是 webpack 将 import 使用的包整合到一起，babel 只是将 ES6 语法转换成 ES5 语法。所以要验证 import 和 export 语法需要构建 webpack 环境，

参考文章
	[webpack基础环境构建](https://webpack.js.org/concepts/#loaders)
	[webpack添加Babel插件](https://webpack.docschina.org/loaders/babel-loader/)
	[Vue.use详解](https://juejin.cn/post/6844903946343940104)

想学习 element 源码，网上搜索了一圈之后发现大多还是让直接访问 `eplay` 文件，但是我下载下来之后访问 `play` 文件，发现有个 `ga` 报错。这个报错去 `element` `issue` 上查看发现有人提出，但是也还没有解决。于是就将 `app.vue` 中的代码删了直接写的。

![image-20220721211137680](D:\笔记\photo\image-20220721211137680.png)

![image-20220721211352261](D:\笔记\photo\image-20220721211352261.png)

根据 `element-ui` 的官网顺序，先学习的是 `el-row` 组件的使用。首先在官网上看到`el-row` 的属性，有 `gutter` `type` `justify` `align` `tag`  这几种属性。对应的 `element-ui` 源码中的 `props`对象

![image-20220721211840133](D:\笔记\photo\image-20220721211840133.png)

哦对了介绍一下`element-ui` 的目录构成，主要的 `packages` 中是组件

![image-20220721212119045](D:\笔记\photo\image-20220721212119045.png)

`example` 中是一个独立的 `vue`项目，`play.js` 类似于 `main.js` 

![image-20220721212218819](D:\笔记\photo\image-20220721212218819.png)

根据这个目录结构，并且因为没办法直接在 `play` 文件夹下创建目录并且新建页面，所以我将 `app.vue` 中的内容直接替换了。

好进入正轨，查看 `el-row` 是怎么被 `Vue` 直接使用的。

在 `play.js` 中将 `Vue.use(element)` 替换成 `Vue.use(ELRow)` 因为常用 `ELement`组件所以知道组件是可以被按需引入的。这里要研究 `ELRow` 所以只是单纯的按需引入它。然后在 `app.vue`中直接使用。

那么为什么 `Vue.use(ELRow)` 之后直接就可以在 `Vue`中使用了呢。这涉及到 Vue 的一个全局函数，简单来说 Vue.use 将插件绑定到 Vue 上，如果插件是对象的形式的话需要在对象上有 install 属性。那么我们观察 ELRow 文件中的 index.js 可以发现 ELRow 中有 install 属性。并且 Vue use 在使用的时候会将 Vue 变量传入到 install 对象方法中

![image-20220721213055440](D:\笔记\photo\image-20220721213055440.png)

到了这里使用 element 组件的时候就跟自己封装的 vue 组件差不多了，直接使用 props 传递的变量和属性，不同的是 element 直接在 js 文件中使用的 h render 函数完成的组件渲染。

![image-20220721213316568](D:\笔记\photo\image-20220721213316568.png)

看到这里的话基本上就明白了 el-row 的原理。至于 render 方法和 Vue.use 使用了之后在 Vue 框架中究竟发生了什么就不是目前研究的了，应该是 Vue 中研究的了。

但是我好奇  `import Row from './src/row';` 这一句话，Row 在 row.js也没看到定义的地方，那么使用 `export default` 抛出来的对象能够随便使用任意一个变量接收吗？为了搞清楚这个我要自己写两个 js 文件，一个 export default 出来属性，另一个使用 import  XXX 随便一个变量来引入抛出的对象，并且调用抛出的对象来完成对象中方法的调用。

一下是我自己不清楚的地方了，element 源码 ELRow 的解析就上面那一点。

于是我要创建两个js文件，并且可以使用 import 进行导入。然是 import 属于 ES6 语法，于是想到了使用 Babel 进行语法解析，可以 babel 进行语法解析无法将两个文件打包到一起并且执行。这里我对 babel.js  webpack  具体作用并不太清除。

最后了解到  babel 是将 ES6 转换成 ES5 语法的解析器

webpack 将页面打包到一起在 plugin 插件中使用 babel 进行语法转换

首先使用 npm init -y 来初初始化文件夹创建出来 package.json 文件，再创建 webpack.config.js 文件，在 webpack,js 中配置 entry 和 out 文件，并且在 rules 中配置上 babel 来解析 ES6 语法。最终验证使用任何参数接受 export 出来的蚕食都可以的

![image-20220721214703427](D:\笔记\photo\image-20220721214703427.png)