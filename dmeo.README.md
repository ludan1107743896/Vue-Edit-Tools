## 页面编辑逻辑
> 页面添加创建
```javascript
// 1、当页面为初始化页面时候时，直接通过 editorProjectConfig.getProjectConfig() 创建 newPageData
const newPageData = { // 这是基本页面架构
    name: '',
	title: '未命名场景',
	description: '秀e秀,新建立一个微场景页面，可以来看看。',
	coverImage: '',
	auther: 'ludan',
	script: '',
	width: 375,
	height: 644,
    pages: [],
    uuid: createUUID(), // 唯一表示
	elements: [],
	commonStyle: {
		backgroundColor: '',
		backgroundImage: '',
		backgroundSize: 'cover'
	},
	config: {}
}
```

## 思路图
> 1、右侧slider 选中之后插件选中之后触发 addElement, 
获取 ele-config 中选择项配置, 通过名称获取相应组件 props;组成的数据结构是

```javascript
const _obj = {
	elName: 'qk-text',
	title: '文字',
	icon: 'iconfont iconwenben',
	// 每个组件设置props来展示哪些显示哪些编辑项
	valueType: '', // 标识数据类型，用于表单组件
	defaultStyle: {
		height: 40
	},
	needProps: { // 通过计算得来
		text: "这是一段文字"
	}
}
```
>2、 addElement 中添加属性
```javascript
const commonStyle = {
	..._obj,
	zIndex: activePage.elements.length + 1
}


// addElement  添加元素方法
addElement(state, elData){
	let index = state.projectData.pages.findIndex(v => {return v.uuid === state.activePageUUID})
	state.projectData.pages[index].elements.push(elData);
},

//  存储选中 id 值
setActiveElementUUID(state, data){
	state.activeElementUUID = data;
},
```

