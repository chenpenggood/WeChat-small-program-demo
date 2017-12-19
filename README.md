# WeChat-small-program-demo
微信小程序，入门小dome，仿网易读书

入门小程序
==========


  看了一些关于小程序的demo,自己也仿写了这个dome，在此基础上做了有些小改动，还有些功能欠缺，后期可以不上，但基本页面功能都有，有入门兴趣的同学可以学一学。

----
  
#### 手机测试截图：

![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/fengmian.png?raw=true) 
![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/leader.png?raw=true)

![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/category.png?raw=true) 
![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/booklist.png?raw=true)

![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/mine.png?raw=true) 
![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/news.png?raw=true)

![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/stories.png?raw=true) 
![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/book.png?raw=true)

![img](https://github.com/chenpenggood/WeChat-small-program-demo/blob/master/assets/screenshot/author.png?raw=true)

-----
#### 项目准备：

1、[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=201715) 他能帮助我们快速的进行小程序的开发,可以边写边预览，只需保存一下就可以。

2、[Iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/) 一个阿里爸爸做的开源图库，它不仅有几百个公司的开源图标库，还有各式各样的小图标。有了这个图标库真是大大提高了我们的效率，我们能够根据需要进行图标搜索，还能够设置颜色、大小和图片格式，这个项目中仅仅下载了我需要的图片。

3、[EasyMock 简单高效的伪造数据](https://www.easy-mock.com/) 用于后台的数据模拟，得到JSON数据，方便开发，个人免费， 前端自定义数据格式，同时方便后台的输出格式。

4、[微信小程序开发文档](https://www.w3cschool.cn/weixinapp/9wou1q8j.html)  W3C的这个文档真是超级详细，我们能够在这里查找到微信小程序的API、组件以及一些框架等。

5、 [WeUI](https://weui.io/), 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一，有兴趣的同学可研究一下，本项目纯手写。

-----
#### 代码准备

 1. app.json 全局设置，快捷添加页面、底部切换栏、头部导航

		{
		  "pages":[
		    "pages/index/index",          // 封面
		    "pages/logs/logs",            // 日志 
		    "pages/leader/leader",        // 首页
		    "pages/leader/stories/stories",
		    "pages/leader/authors/authors",
	    "pages/stack/stack",        	  // 分类
		    "pages/stack/booklist/booklist", 
		    "pages/stack/booklist/bookdetail/bookdetail",
		    "pages/bookdesk/bookdesk",    // 书架
		    "pages/mine/mine",            // 个人中心
		    "pages/mine/news/news",
		    "pages/mine/editInfo/editInfo"
		  ],
			// 全局头部导航栏设，每个页面也可以单独设置
		  "window":{
		    "backgroundTextStyle":"light",
		    "navigationBarBackgroundColor": "#fff",
		    "navigationBarTitleText": "蒂花之秀读书",
		    "navigationBarTextStyle":"black"
		  },
			// 底部切换栏
		  "tabBar":{
		    "color": "#6d4015",
		    "selectedColor": "#1296db",
		    "backgroundColor": "#ffffff",
		    "borderStyle": "#e0e0e0",
		    "list": [
		      {
		        "pagePath": "pages/leader/leader",
		        "iconPath": "./assets/icons/lingdu.png",
		        "selectedIconPath": "./assets/icons/lingdu_sel.png",
		        "text": "首页"
		        },
		      {
		        "pagePath": "pages/stack/stack",
		        "iconPath": "./assets/icons/stack.png",
		        "selectedIconPath": "./assets/icons/stack_sel.png",
		        "text": "分类"
		        },
		      {
		        "pagePath": "pages/bookdesk/bookdesk",
		        "iconPath": "./assets/icons/bookdesk.png",
		        "selectedIconPath": "./assets/icons/bookdesk_sel.png",
		        "text": "书架"
		      },
		      {
		        "pagePath": "pages/mine/mine",
		        "iconPath": "./assets/icons/mine.png",
		        "selectedIconPath": "./assets/icons/mine_sel.png",
		        "text": "我的"
		      }
		    ]
		  }
		}

 2. 数据请求和双向绑定
 
		 /**
		   * 生命周期函数--监听页面加载
		   */
		  onLoad: function (options) {
		    // 请求数据
		    var that = this;
		    wx.request({
		      url: "https://www.easy-mock.com/mock/5a31e9eb513048307be27a9a/test/",
		      success: function(res){
		        that.setData({authors: res.data.data.index});
		      }
		    })
		  },
		
	注：关于数据的操作（修改，添加，删除，清空），动态显示的方法，稍后补上
	
 3. 提示弹窗

		 /**
		   * 生命周期函数--监听页面显示
		   */
		  onShow: function () {
		      // 加载提示
		      wx.showToast({
		        title: '加载中',
		        icon: 'loading',
		        mask: true,
		        duration: 500
		      });
		      setTimeout(function () {
		        wx.hideToast();
		      }, 500)
		  },

 4. 模板编写（抽取相同部分）

		/**
		 * mineInfo.wxml: template标签包裹， name属性，即这个模板的名字
		 */
		<template name="mineInfo">
		   <view class='page-items page-flex' bindtap='toMyInfo' id='{{id}}'>
		    <view class='page-items-lt'>
		      <image src='../../assets/images/mines/{{urlName}}.png'></image>
		    </view>
		    <view class='page-items-md'>{{title}}</view>
		    <view wx:if="{{id != 6}}" class='page-items-others'>{{num}}</view>
		    <view class='page-items-ft'>>></view>
		  </view>
		</template>  
	
	模板引用 
		
		<import src="./mineInfo/mineInfo.wxml"/>

	wxml中需要写入的地方：
		
		<template is="mineInfo" data="{{...mineNew}}"></template>

	注：js中，的数据结构
		
		data: {
			mineNew: {
				urlName: "",
				title: "",
				num: ""
			}	
		}

	wxss的引用：
	
		@import "./mineInfo/mineInfo.wxss";

	注：这里只是最简单的模板引用，稍微复杂的模板有多个template，在引用的文件中需要通过模板的name判断你需要的模板，有兴趣的同学可以试试。
	[小程序模板](https://www.w3cschool.cn/weixinapp/weixinapp-template.html)

		<template name="odd">
		  <view> odd </view>
		</template>
		<template name="even">
		  <view> even </view>
		</template>
		
		<block wx:for="{{[1, 2, 3, 4, 5]}}">
		    <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
		</block>
