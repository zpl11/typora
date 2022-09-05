el-radio 组件中使用了 mixins 混淆，将 Emitter 中的 dispatch 和 broadcast 能够在组件中直接使用。

dispatch 遍历父级节点，将方法 emit 到父级节点上。

broadcast 遍历子集节点，并且将方法 emit 到子集节点上。

this.model 指的是 data 中的东西

radio.vue template 中使用的数据都是 computed 中计算过的数据。

![image-20220905170206422](\elementPhoto\image-20220905170206422.png)

emitter 中的方法

![image-20220905170329285](\elementPhoto\image-20220905170329285.png)