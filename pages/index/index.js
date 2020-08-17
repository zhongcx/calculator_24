const app = getApp()
var that;
var minNum = 1, //最小值
  maxNum = 10,//最大值
  opt = ['+', '-', '*', '/'];//运算

Page({
  data: {
    array: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ],
    index_1: 0,
    index_2: 2,
    index_3: 2,
    index_4: 2,
    result_info: '',//提示的结果信息
    array_result: [],//计算结果列表
  },
  onLoad: function () {
    that = this;
    console.log('Welcome to Mini Code')
  },

  //改变四个值的选择后
  bindPickerChange: function (e) {
    console.log("picker发送选择改变，携带值为", e);
    this.setData({
      ["index_" + e.target.dataset.value]: e.detail.value,
    });
  },
  //开始计算
  bindSubmit: function (e) {
    var resultStr = [];
    var index_value_arr = [
      that.data.array[that.data.index_1],
      that.data.array[that.data.index_2],
      that.data.array[that.data.index_3],
      that.data.array[that.data.index_4],
    ];
    var arrLine = that.perm(index_value_arr); 
    for (var i = 0; i < arrLine.length; i++) {
      var result = that.getResult(arrLine[i][0], arrLine[i][1], arrLine[i][2], arrLine[i][3]) 
      for (var j = 0; j < result.length; j++) {
        resultStr.push(result[j]);
      }
    }
    that.data.array_result = resultStr;
    that.setData({
      result_info: '共有' + that.data.array_result.length + '个结果',
      array_result: that.data.array_result,
    })

  },
  //随机生成四个数字并计算结果
  bindRandom: function (e) {
    that.setData({
      index_1: Math.floor(Math.random() * 10),//下标，0到9的随机整数
      index_2: Math.floor(Math.random() * 10),//下标，0到9的随机整数
      index_3: Math.floor(Math.random() * 10),//下标，0到9的随机整数
      index_4: Math.floor(Math.random() * 10),//下标，0到9的随机整数
      result_info: '',
      array_result: [],
    })
  },
  //清空按钮
  bindClear: function (e) {
    //清空提示信息
    //清空列表项
    that.setData({
      result_info: '',
      array_result: [],
    })
  },
  //====================计算逻辑
  operate: function (f, m, n) {
    //简单的计算函数，正常情况返回计算结果，异常情况返回 NaN
    if (isNaN(m) || isNaN(n)) return NaN;
    if (f == '*') return (m * n);
    else if (f == '/') return n ? (m / n) : NaN;//如果除数为0，则返回 NaN
    else if (f == '-') return (m - n);
    else return (parseFloat(m) + parseFloat(n));
  },
  compute: function (a, b, c, d, opt1, opt2, opt3) {
    ///获取一组数字的计算结果
    ///abcd为4个计算数
    ///opt1,opt2,opt3为这四个数依次的运算符号
    var result = []; //定义数组保存计算结果
    try {
      //开始根据5种结合方式进行计算

      //第一种：{[(A,B)C]D}
      var r1 = that.operate(opt1, a, b);
      var r2 = that.operate(opt2, r1, c);
      var r3 = that.operate(opt3, r2, d);
      if (!isNaN(r3) && Math.abs((r3 - 24)) < 1e-5) { //由于计算结果可能出现浮点数，这里的比较必须使用浮点数比较方式
        result.push('[(' + a + opt1 + b + ')' + opt2 + c + ']' + opt3 + d + '');
      }

      //第二种 {[A(B,C)]D}
      r1 = that.operate(opt1, b, c);
      r2 = that.operate(opt2, a, r1);
      r3 = that.operate(opt3, r2, d);
      if (!isNaN(r3) && Math.abs((r3 - 24)) < 1e-5) {
        result.push('[' + a + opt2 + '(' + b + opt1 + c + ')]' + opt3 + d + '');
      }

      //第三种 {A[(B,C)D]}
      r1 = that.operate(opt1, b, c);
      r2 = that.operate(opt2, r1, d);
      r3 = that.operate(opt3, a, r2);
      if (!isNaN(r3) && Math.abs((r3 - 24)) < 1e-5) {
        result.push(a + opt3 + '[(' + b + opt1 + c + ')' + opt2 + d + ']');
      }

      //第四种 {A[B(C,D)]}
      r1 = that.operate(opt1, c, d);
      r2 = that.operate(opt2, b, r1);
      r3 = that.operate(opt3, a, r2);
      if (!isNaN(r3) && Math.abs((r3 - 24)) < 1e-5) {
        result.push(a + opt3 + '[' + b + opt2 + '(' + c + opt1 + d + ')]');
      }

      //第五种 [(A,B),(C,D)]
      r1 = that.operate(opt1, a, b);
      r2 = that.operate(opt2, c, d);
      r3 = that.operate(opt3, r1, r2);
      if (!isNaN(r3) && Math.abs((r3 - 24)) < 1e-5) {
        result.push('(' + a + opt1 + b + ')' + opt3 + '(' + c + opt2 + d + ')');
      }

    } catch (e) {
      console.info('==e', e)
    }
    return result;
  },
  getResult: function (a1, a2, a3, a4) {
    var result = [],
      repeat = '';
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 4; k++) {
          var tmp = that.compute(a1, a2, a3, a4, opt[i], opt[j], opt[k]);
          for (var t = 0; t < tmp.length; t++) {
            //简单去重
            if (repeat.indexOf(tmp[t]) > -1) {
              continue;
            }
            result.push(tmp[t]);
            repeat += tmp[t] + ',';
          }
        }
      }
    }
    return result;
  },
  //================全排列算法
  swap: function (arr, i, j) {
    if (i != j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  },
  repeat: function (arr, k, l) {
    for (var i = k; i < l; i++) {
      if (arr[i] == arr[l])
        return false;
    }
    return true;
  },
  perm: function (arr) {
    var result = [];
    (function fn(n) {
      //为第n个位置选择元素     
      for (var i = n; i < arr.length; i++) {
        if (that.repeat(arr, n, i)) {
          that.swap(arr, i, n);
          if (n + 1 < arr.length - 1)
            //判断数组中剩余的待全排列的元素是否大于1个   
            fn(n + 1); //从第n+1个下标进行全排列            
          else {
            //显示一组结果      
            result.push(arr.slice());
          }
          that.swap(arr, i, n);
        }
      }
    })(0);
    return result;
  },
})
