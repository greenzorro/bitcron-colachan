## Bitcron博客模版源码

效果如下，完整样式可以预览Huburt的博客 [https://www.hubertwang.me/](https://www.hubertwang.me/)

![](https://raw.githubusercontent.com/greenzorro/bitcron-colachan/master/preview/light-home.jpg)

要提醒一下，这是 [Bitcron](https://bitcron.com/) 模板，它不能用在 wordpress 或其他博客系统中。

老实说这不是个多么灵活的模板，没有自定义背景图，没有自定义主题颜色，而且多数内容都是静态的，基本是按照我自己的需求定制的。

但是我相信，既然你有兴趣采用 Bitcron 这套博客系统，一定是个热爱钻研之人，水平一定在我之上，将它改造成你的专属模版一定不在话下。

注：还可以[在此下载相关设计资源](https://www.dropbox.com/sh/35zp8ef7t2w4d43/AADSv0YaAHX-74GAG5xUNWIpa?dl=0)，请随意取用，希望你喜欢，需要梯子。

## 深色版

![](https://raw.githubusercontent.com/greenzorro/bitcron-colachan/master/preview/dark-home.jpg)

深色版的设计很用心，文字的颜色柔和，利于阅读。

![](https://raw.githubusercontent.com/greenzorro/bitcron-colachan/master/preview/dark-detail.jpg)

隆重感谢 [Hubert](https://www.hubertwang.me/)，在此基础上创造了深色版，一并提交上来了。浅色版与深色版在同一套模板内，不是两套模板。这深色版不简单，不只是改改颜色而已。它能跟随系统的颜色模式（比如 Mac 与 iOS）变化而改变，如果你的访客设置了深浅模式自动切换，那么 Ta 在看你博客时也能无缝衔接！

可以看到甚至对图片做了处理，在深色模式下图片有反色效果。截图来自iPad。

![](https://raw.githubusercontent.com/greenzorro/bitcron-colachan/master/preview/compare-light.png)

![](https://raw.githubusercontent.com/greenzorro/bitcron-colachan/master/preview/compare-dark.png)

## 写给从 Farbox 过来的朋友

应该有些朋友是从 Farbox 过来的，Bitcron 与 Farbox 是同一个作者，这套博客系统可以说是Farbox的升级重制版。虽然外表看起来没有多大的变化，但是系统底层可以说是翻天覆地，能够创造的可能性比 Farbox 要大得多。

如果你之前有自己的 Farbox 模板，迁移过来也并不难。粗略估计，Farbox 模板想用在 Bitcron 里，需要改动的代码量不会超过5%。只是你需要仔细看看 Bitcron 的 API，细微差异还是有的。

## FAQ

### 首页首屏中央的文字要怎么改？

这里由于用了特殊字体，所以我做成图片了。在开发人员工具里可以看到有张背景图 slogen.png。所以，要改掉这里文字，有两个办法：

1. 自己做一张新的 slogen.png，把 url 替换掉。
2. 去掉背景图，改用浏览器支持的字体实现。

### 主导航的菜单项如何修改？ 

在 include 文件夹下的 header.jade 里，都是静态的，需要手工修改。

### 日志分类如何实现？

在 Dropbox 对应的网站目录下新建文件夹，用分类名来命名（生活、相册、设计等等），把相应文章放进去就可以了。
