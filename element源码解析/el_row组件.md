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

