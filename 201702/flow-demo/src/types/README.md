# types

> Flow 支持`JavaScript`的原始类型，以及Flow提供的扩展类型，还可以自己自定义类型

## 原始类型

- Booleans
- Strings
- Numbers
- null
- undefined (void in Flow types)
- Symbols

JavaScript中原始类型也对应一个「包装数据类型」，比如字符串类型对应`String`

**语法：**

> - 变量名后加`:tagName` 
> - Maybe types
>   - `:?tagName` 
>   - `key?: tagName`
> - 参数默认值：`:tagName = 'defaultValue'`

```
// 语法1
const name: string = 'yun';

// 语法2：允许`null` 和`void`
function acceptsBoolean (value: ?boolean) {}
acceptsBoolean(); // pass
acceptsBoolean(null); // pass
acceptsBoolean(1212); // Error
acceptsBoolean(undefined); // pass

// 语法3: 允许`void`，不允许`null`
const user = {
    say?: function
};

// 语法4
function acceptsNameString (value?: string) {}
acceptsNameString(); // pass
acceptsNameString('1'); // pass
acceptsNameString(undefined); // pass
acceptsNameString(null); // Error -> 传空值和undefined都可以，唯独null不行

// 语法5：允许void，不允许null
function defaultValue (value: string = '李四') {}

```

## 字面量类型

> `1`, `true`, `false`, `'11'` 这些在js的世界中都是字面量，是声明变量最方便的一种方法。
> 通常用来限制值

```
// 固定值
function getAdmin (id: 1) {}
getAdmin(1); // pass
getAdmin(2); // Error

// 可能多个值
function getColor (color: 'success' | 'danger') {}
getColor('success'); // pass
getColor('warning'); // Error
```





