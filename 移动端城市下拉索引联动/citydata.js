//城市数据
var cityData = [{
	"name": "A",
	"cities": [{
		"name": "阿拉善盟",
		"tags": "ALASHANMENG 阿拉善盟",
		"cityid": "152900"
	}, {
		"name": "鞍山市",
		"tags": "ANSHANSHI 鞍山市",
		"cityid": "210300"
	}, {
		"name": "安庆市",
		"tags": "ANQINGSHI 安庆市",
		"cityid": "340800"
	}, {
		"name": "安阳市",
		"tags": "ANYANGSHI 安阳市",
		"cityid": "410500"
	}, {
		"name": "阿坝藏族羌族自治州",
		"tags": "ABAZANGZUQIANGZUZIZHIZHOU 阿坝藏族羌族自治州",
		"cityid": "513200"
	}, {
		"name": "安顺市",
		"tags": "ANSHUNSHI 安顺市",
		"cityid": "520400"
	}, {
		"name": "阿里地区",
		"tags": "ALIDIQU 阿里地区",
		"cityid": "542500"
	}, {
		"name": "安康市",
		"tags": "ANKANGSHI 安康市",
		"cityid": "610900"
	}, {
		"name": "阿克苏地区",
		"tags": "AKESUDIQU 阿克苏地区",
		"cityid": "652900"
	}, {
		"name": "阿勒泰地区",
		"tags": "ALETAIDIQU 阿勒泰地区",
		"cityid": "654300"
	}, {
		"name": "澳门特别行政区",
		"tags": "AOMENTEBIEXINGZHENGQU 澳门特别行政区",
		"cityid": "820000"
	}]
}, {
	"name": "B",
	"cities": [{
		"name": "北京市",
		"tags": "BEIJINGSHI 北京市",
		"cityid": "110000"
	}, {
		"name": "保定市",
		"tags": "BAODINGSHI 保定市",
		"cityid": "130600"
	}, {
		"name": "包头市",
		"tags": "BAOTOUSHI 包头市",
		"cityid": "150200"
	}, {
		"name": "巴彦淖尔市",
		"tags": "BAYANNAOERSHI 巴彦淖尔市",
		"cityid": "150800"
	}, {
		"name": "本溪市",
		"tags": "BENXISHI 本溪市",
		"cityid": "210500"
	}, {
		"name": "白山市",
		"tags": "BAISHANSHI 白山市",
		"cityid": "220600"
	}, {
		"name": "白城市",
		"tags": "BAICHENGSHI 白城市",
		"cityid": "220800"
	}, {
		"name": "蚌埠市",
		"tags": "BENGBUSHI 蚌埠市",
		"cityid": "340300"
	}, {
		"name": "亳州市",
		"tags": "BOZHOUSHI 亳州市",
		"cityid": "341600"
	}, {
		"name": "滨州市",
		"tags": "BINZHOUSHI 滨州市",
		"cityid": "371600"
	}, {
		"name": "北海市",
		"tags": "BEIHAISHI 北海市",
		"cityid": "450500"
	}, {
		"name": "百色市",
		"tags": "BAISESHI 百色市",
		"cityid": "451000"
	}, {
		"name": "巴中市",
		"tags": "BAZHONGSHI 巴中市",
		"cityid": "511900"
	}, {
		"name": "毕节市",
		"tags": "BIJIESHI 毕节市",
		"cityid": "520500"
	}, {
		"name": "保山市",
		"tags": "BAOSHANSHI 保山市",
		"cityid": "530500"
	}, {
		"name": "宝鸡市",
		"tags": "BAOJISHI 宝鸡市",
		"cityid": "610300"
	}, {
		"name": "白银市",
		"tags": "BAIYINSHI 白银市",
		"cityid": "620400"
	}, {
		"name": "博尔塔拉蒙古自治州",
		"tags": "BOERTALAMENGGUZIZHIZHOU 博尔塔拉蒙古自治州",
		"cityid": "652700"
	}, {
		"name": "巴音郭楞蒙古自治州",
		"tags": "BAYINGUOLENGMENGGUZIZHIZHOU 巴音郭楞蒙古自治州",
		"cityid": "652800"
	}]
}, {
	"name": "C",
	"cities": [{
		"name": "承德市",
		"tags": "CHENGDESHI 承德市",
		"cityid": "130800"
	}, {
		"name": "沧州市",
		"tags": "CANGZHOUSHI 沧州市",
		"cityid": "130900"
	}, {
		"name": "长治市",
		"tags": "CHANGZHISHI 长治市",
		"cityid": "140400"
	}, {
		"name": "赤峰市",
		"tags": "CHIFENGSHI 赤峰市",
		"cityid": "150400"
	}, {
		"name": "朝阳市",
		"tags": "CHAOYANGSHI 朝阳市",
		"cityid": "211300"
	}, {
		"name": "长春市",
		"tags": "CHANGCHUNSHI 长春市",
		"cityid": "220100"
	}, {
		"name": "常州市",
		"tags": "CHANGZHOUSHI 常州市",
		"cityid": "320400"
	}, {
		"name": "滁州市",
		"tags": "CHUZHOUSHI 滁州市",
		"cityid": "341100"
	}, {
		"name": "池州市",
		"tags": "CHIZHOUSHI 池州市",
		"cityid": "341700"
	}, {
		"name": "长沙市",
		"tags": "CHANGSHASHI 长沙市",
		"cityid": "430100"
	}, {
		"name": "常德市",
		"tags": "CHANGDESHI 常德市",
		"cityid": "430700"
	}, {
		"name": "郴州市",
		"tags": "CHENZHOUSHI 郴州市",
		"cityid": "431000"
	}, {
		"name": "潮州市",
		"tags": "CHAOZHOUSHI 潮州市",
		"cityid": "445100"
	}, {
		"name": "崇左市",
		"tags": "CHONGZUOSHI 崇左市",
		"cityid": "451400"
	}, {
		"name": "重庆市",
		"tags": "CHONGQINGSHI 重庆市",
		"cityid": "500000"
	}, {
		"name": "成都市",
		"tags": "CHENGDUSHI 成都市",
		"cityid": "510100"
	}, {
		"name": "楚雄彝族自治州",
		"tags": "CHUXIONGYIZUZIZHIZHOU 楚雄彝族自治州",
		"cityid": "532300"
	}, {
		"name": "昌都市",
		"tags": "CHANGDUSHI 昌都市",
		"cityid": "540300"
	}, {
		"name": "昌吉回族自治州",
		"tags": "CHANGJIHUIZUZIZHIZHOU 昌吉回族自治州",
		"cityid": "652300"
	}]
}, {
	"name": "D",
	"cities": [{
		"name": "大同市",
		"tags": "DATONGSHI 大同市",
		"cityid": "140200"
	}, {
		"name": "大连市",
		"tags": "DALIANSHI 大连市",
		"cityid": "210200"
	}, {
		"name": "丹东市",
		"tags": "DANDONGSHI 丹东市",
		"cityid": "210600"
	}, {
		"name": "大庆市",
		"tags": "DAQINGSHI 大庆市",
		"cityid": "230600"
	}, {
		"name": "大兴安岭地区",
		"tags": "DAXINGANLINGDIQU 大兴安岭地区",
		"cityid": "232700"
	}, {
		"name": "东营市",
		"tags": "DONGYINGSHI 东营市",
		"cityid": "370500"
	}, {
		"name": "德州市",
		"tags": "DEZHOUSHI 德州市",
		"cityid": "371400"
	}, {
		"name": "东莞市",
		"tags": "DONGGUANSHI 东莞市",
		"cityid": "441900"
	}, {
		"name": "儋州市",
		"tags": "DANZHOUSHI 儋州市",
		"cityid": "460400"
	}, {
		"name": "德阳市",
		"tags": "DEYANGSHI 德阳市",
		"cityid": "510600"
	}, {
		"name": "达州市",
		"tags": "DAZHOUSHI 达州市",
		"cityid": "511700"
	}, {
		"name": "大理白族自治州",
		"tags": "DALIBAIZUZIZHIZHOU 大理白族自治州",
		"cityid": "532900"
	}, {
		"name": "德宏傣族景颇族自治州",
		"tags": "DEHONGDAIZUJINGPOZUZIZHIZHOU 德宏傣族景颇族自治州",
		"cityid": "533100"
	}, {
		"name": "迪庆藏族自治州",
		"tags": "DIQINGZANGZUZIZHIZHOU 迪庆藏族自治州",
		"cityid": "533400"
	}, {
		"name": "定西市",
		"tags": "DINGXISHI 定西市",
		"cityid": "621100"
	}]
}, {
	"name": "E",
	"cities": [{
		"name": "鄂尔多斯市",
		"tags": "EERDUOSISHI 鄂尔多斯市",
		"cityid": "150600"
	}, {
		"name": "鄂州市",
		"tags": "EZHOUSHI 鄂州市",
		"cityid": "420700"
	}, {
		"name": "恩施土家族苗族自治州",
		"tags": "ENSHITUJIAZUMIAOZUZIZHIZHOU 恩施土家族苗族自治州",
		"cityid": "422800"
	}]
}, {
	"name": "F",
	"cities": [{
		"name": "抚顺市",
		"tags": "FUSHUNSHI 抚顺市",
		"cityid": "210400"
	}, {
		"name": "阜新市",
		"tags": "FUXINSHI 阜新市",
		"cityid": "210900"
	}, {
		"name": "阜阳市",
		"tags": "FUYANGSHI 阜阳市",
		"cityid": "341200"
	}, {
		"name": "福州市",
		"tags": "FUZHOUSHI 福州市",
		"cityid": "350100"
	}, {
		"name": "抚州市",
		"tags": "FUZHOUSHI 抚州市",
		"cityid": "361000"
	}, {
		"name": "佛山市",
		"tags": "FOSHANSHI 佛山市",
		"cityid": "440600"
	}, {
		"name": "防城港市",
		"tags": "FANGCHENGGANGSHI 防城港市",
		"cityid": "450600"
	}]
}, {
	"name": "G",
	"cities": [{
		"name": "赣州市",
		"tags": "GANZHOUSHI 赣州市",
		"cityid": "360700"
	}, {
		"name": "广州市",
		"tags": "GUANGZHOUSHI 广州市",
		"cityid": "440100"
	}, {
		"name": "桂林市",
		"tags": "GUILINSHI 桂林市",
		"cityid": "450300"
	}, {
		"name": "贵港市",
		"tags": "GUIGANGSHI 贵港市",
		"cityid": "450800"
	}, {
		"name": "广元市",
		"tags": "GUANGYUANSHI 广元市",
		"cityid": "510800"
	}, {
		"name": "广安市",
		"tags": "GUANGANSHI 广安市",
		"cityid": "511600"
	}, {
		"name": "甘孜藏族自治州",
		"tags": "GANZIZANGZUZIZHIZHOU 甘孜藏族自治州",
		"cityid": "513300"
	}, {
		"name": "贵阳市",
		"tags": "GUIYANGSHI 贵阳市",
		"cityid": "520100"
	}, {
		"name": "甘南藏族自治州",
		"tags": "GANNANZANGZUZIZHIZHOU 甘南藏族自治州",
		"cityid": "623000"
	}, {
		"name": "果洛藏族自治州",
		"tags": "GUOLUOZANGZUZIZHIZHOU 果洛藏族自治州",
		"cityid": "632600"
	}, {
		"name": "固原市",
		"tags": "GUYUANSHI 固原市",
		"cityid": "640400"
	}]
}, {
	"name": "H",
	"cities": [{
		"name": "邯郸市",
		"tags": "HANDANSHI 邯郸市",
		"cityid": "130400"
	}, {
		"name": "衡水市",
		"tags": "HENGSHUISHI 衡水市",
		"cityid": "131100"
	}, {
		"name": "呼和浩特市",
		"tags": "HUHEHAOTESHI 呼和浩特市",
		"cityid": "150100"
	}, {
		"name": "呼伦贝尔市",
		"tags": "HULUNBEIERSHI 呼伦贝尔市",
		"cityid": "150700"
	}, {
		"name": "葫芦岛市",
		"tags": "HULUDAOSHI 葫芦岛市",
		"cityid": "211400"
	}, {
		"name": "哈尔滨市",
		"tags": "HAERBINSHI 哈尔滨市",
		"cityid": "230100"
	}, {
		"name": "鹤岗市",
		"tags": "HEGANGSHI 鹤岗市",
		"cityid": "230400"
	}, {
		"name": "黑河市",
		"tags": "HEIHESHI 黑河市",
		"cityid": "231100"
	}, {
		"name": "淮安市",
		"tags": "HUAIANSHI 淮安市",
		"cityid": "320800"
	}, {
		"name": "杭州市",
		"tags": "HANGZHOUSHI 杭州市",
		"cityid": "330100"
	}, {
		"name": "湖州市",
		"tags": "HUZHOUSHI 湖州市",
		"cityid": "330500"
	}, {
		"name": "合肥市",
		"tags": "HEFEISHI 合肥市",
		"cityid": "340100"
	}, {
		"name": "淮南市",
		"tags": "HUAINANSHI 淮南市",
		"cityid": "340400"
	}, {
		"name": "淮北市",
		"tags": "HUAIBEISHI 淮北市",
		"cityid": "340600"
	}, {
		"name": "黄山市",
		"tags": "HUANGSHANSHI 黄山市",
		"cityid": "341000"
	}, {
		"name": "菏泽市",
		"tags": "HEZESHI 菏泽市",
		"cityid": "371700"
	}, {
		"name": "鹤壁市",
		"tags": "HEBISHI 鹤壁市",
		"cityid": "410600"
	}, {
		"name": "黄石市",
		"tags": "HUANGSHISHI 黄石市",
		"cityid": "420200"
	}, {
		"name": "黄冈市",
		"tags": "HUANGGANGSHI 黄冈市",
		"cityid": "421100"
	}, {
		"name": "衡阳市",
		"tags": "HENGYANGSHI 衡阳市",
		"cityid": "430400"
	}, {
		"name": "怀化市",
		"tags": "HUAIHUASHI 怀化市",
		"cityid": "431200"
	}, {
		"name": "惠州市",
		"tags": "HUIZHOUSHI 惠州市",
		"cityid": "441300"
	}, {
		"name": "河源市",
		"tags": "HEYUANSHI 河源市",
		"cityid": "441600"
	}, {
		"name": "贺州市",
		"tags": "HEZHOUSHI 贺州市",
		"cityid": "451100"
	}, {
		"name": "河池市",
		"tags": "HECHISHI 河池市",
		"cityid": "451200"
	}, {
		"name": "海口市",
		"tags": "HAIKOUSHI 海口市",
		"cityid": "460100"
	}, {
		"name": "红河哈尼族彝族自治州",
		"tags": "HONGHEHANIZUYIZUZIZHIZHOU 红河哈尼族彝族自治州",
		"cityid": "532500"
	}, {
		"name": "汉中市",
		"tags": "HANZHONGSHI 汉中市",
		"cityid": "610700"
	}, {
		"name": "海东市",
		"tags": "HAIDONGSHI 海东市",
		"cityid": "630200"
	}, {
		"name": "海北藏族自治州",
		"tags": "HAIBEIZANGZUZIZHIZHOU 海北藏族自治州",
		"cityid": "632200"
	}, {
		"name": "黄南藏族自治州",
		"tags": "HUANGNANZANGZUZIZHIZHOU 黄南藏族自治州",
		"cityid": "632300"
	}, {
		"name": "海南藏族自治州",
		"tags": "HAINANZANGZUZIZHIZHOU 海南藏族自治州",
		"cityid": "632500"
	}, {
		"name": "海西蒙古族藏族自治州",
		"tags": "HAIXIMENGGUZUZANGZUZIZHIZHOU 海西蒙古族藏族自治州",
		"cityid": "632800"
	}, {
		"name": "哈密市",
		"tags": "HAMISHI 哈密市",
		"cityid": "650500"
	}, {
		"name": "和田地区",
		"tags": "HETIANDIQU 和田地区",
		"cityid": "653200"
	}]
}, {
	"name": "J",
	"cities": [{
		"name": "晋城市",
		"tags": "JINCHENGSHI 晋城市",
		"cityid": "140500"
	}, {
		"name": "晋中市",
		"tags": "JINZHONGSHI 晋中市",
		"cityid": "140700"
	}, {
		"name": "锦州市",
		"tags": "JINZHOUSHI 锦州市",
		"cityid": "210700"
	}, {
		"name": "吉林市",
		"tags": "JILINSHI 吉林市",
		"cityid": "220200"
	}, {
		"name": "鸡西市",
		"tags": "JIXISHI 鸡西市",
		"cityid": "230300"
	}, {
		"name": "佳木斯市",
		"tags": "JIAMUSISHI 佳木斯市",
		"cityid": "230800"
	}, {
		"name": "嘉兴市",
		"tags": "JIAXINGSHI 嘉兴市",
		"cityid": "330400"
	}, {
		"name": "金华市",
		"tags": "JINHUASHI 金华市",
		"cityid": "330700"
	}, {
		"name": "景德镇市",
		"tags": "JINGDEZHENSHI 景德镇市",
		"cityid": "360200"
	}, {
		"name": "九江市",
		"tags": "JIUJIANGSHI 九江市",
		"cityid": "360400"
	}, {
		"name": "吉安市",
		"tags": "JIANSHI 吉安市",
		"cityid": "360800"
	}, {
		"name": "济南市",
		"tags": "JINANSHI 济南市",
		"cityid": "370100"
	}, {
		"name": "济宁市",
		"tags": "JININGSHI 济宁市",
		"cityid": "370800"
	}, {
		"name": "焦作市",
		"tags": "JIAOZUOZUOZUOSHI 焦作市",
		"cityid": "410800"
	}, {
		"name": "荆门市",
		"tags": "JINGMENSHI 荆门市",
		"cityid": "420800"
	}, {
		"name": "荆州市",
		"tags": "JINGZHOUSHI 荆州市",
		"cityid": "421000"
	}, {
		"name": "江门市",
		"tags": "JIANGMENSHI 江门市",
		"cityid": "440700"
	}, {
		"name": "揭阳市",
		"tags": "JIEYANGSHI 揭阳市",
		"cityid": "445200"
	}, {
		"name": "嘉峪关市",
		"tags": "JIAYUGUANSHI 嘉峪关市",
		"cityid": "620200"
	}, {
		"name": "金昌市",
		"tags": "JINCHANGSHI 金昌市",
		"cityid": "620300"
	}, {
		"name": "酒泉市",
		"tags": "JIUQUANSHI 酒泉市",
		"cityid": "620900"
	}]
}, {
	"name": "K",
	"cities": [{
		"name": "开封市",
		"tags": "KAIFENGSHI 开封市",
		"cityid": "410200"
	}, {
		"name": "昆明市",
		"tags": "KUNMINGSHI 昆明市",
		"cityid": "530100"
	}, {
		"name": "克拉玛依市",
		"tags": "KELAMAYISHI 克拉玛依市",
		"cityid": "650200"
	}, {
		"name": "克孜勒苏柯尔克孜自治州",
		"tags": "KEZILESUKEERKEZIZIZHIZHOU 克孜勒苏柯尔克孜自治州",
		"cityid": "653000"
	}, {
		"name": "喀什地区",
		"tags": "KASHIDIQU 喀什地区",
		"cityid": "653100"
	}]
}, {
	"name": "L",
	"cities": [{
		"name": "廊坊市",
		"tags": "LANGFANGSHI 廊坊市",
		"cityid": "131000"
	}, {
		"name": "临汾市",
		"tags": "LINFENSHI 临汾市",
		"cityid": "141000"
	}, {
		"name": "吕梁市",
		"tags": "LVLIANGSHI 吕梁市",
		"cityid": "141100"
	}, {
		"name": "辽阳市",
		"tags": "LIAOYANGSHI 辽阳市",
		"cityid": "211000"
	}, {
		"name": "辽源市",
		"tags": "LIAOYUANSHI 辽源市",
		"cityid": "220400"
	}, {
		"name": "连云港市",
		"tags": "LIANYUNGANGSHI 连云港市",
		"cityid": "320700"
	}, {
		"name": "丽水市",
		"tags": "LISHUISHI 丽水市",
		"cityid": "331100"
	}, {
		"name": "六安市",
		"tags": "LIUANSHI 六安市",
		"cityid": "341500"
	}, {
		"name": "龙岩市",
		"tags": "LONGYANSHI 龙岩市",
		"cityid": "350800"
	}, {
		"name": "临沂市",
		"tags": "LINYISHI 临沂市",
		"cityid": "371300"
	}, {
		"name": "聊城市",
		"tags": "LIAOCHENGSHI 聊城市",
		"cityid": "371500"
	}, {
		"name": "洛阳市",
		"tags": "LUOYANGSHI 洛阳市",
		"cityid": "410300"
	}, {
		"name": "漯河市",
		"tags": "LUOHESHI 漯河市",
		"cityid": "411100"
	}, {
		"name": "娄底市",
		"tags": "LOUDISHI 娄底市",
		"cityid": "431300"
	}, {
		"name": "柳州市",
		"tags": "LIUZHOUSHI 柳州市",
		"cityid": "450200"
	}, {
		"name": "来宾市",
		"tags": "LAIBINSHI 来宾市",
		"cityid": "451300"
	}, {
		"name": "泸州市",
		"tags": "LUZHOUSHI 泸州市",
		"cityid": "510500"
	}, {
		"name": "乐山市",
		"tags": "LESHANSHI 乐山市",
		"cityid": "511100"
	}, {
		"name": "凉山彝族自治州",
		"tags": "LIANGSHANYIZUZIZHIZHOU 凉山彝族自治州",
		"cityid": "513400"
	}, {
		"name": "六盘水市",
		"tags": "LIUPANSHUISHI 六盘水市",
		"cityid": "520200"
	}, {
		"name": "丽江市",
		"tags": "LIJIANGSHI 丽江市",
		"cityid": "530700"
	}, {
		"name": "临沧市",
		"tags": "LINCANGSHI 临沧市",
		"cityid": "530900"
	}, {
		"name": "拉萨市",
		"tags": "LASASHI 拉萨市",
		"cityid": "540100"
	}, {
		"name": "林芝市",
		"tags": "LINZHISHI 林芝市",
		"cityid": "540400"
	}, {
		"name": "兰州市",
		"tags": "LANZHOUSHI 兰州市",
		"cityid": "620100"
	}, {
		"name": "陇南市",
		"tags": "LONGNANSHI 陇南市",
		"cityid": "621200"
	}, {
		"name": "临夏回族自治州",
		"tags": "LINXIAHUIZUZIZHIZHOU 临夏回族自治州",
		"cityid": "622900"
	}]
}, {
	"name": "M",
	"cities": [{
		"name": "牡丹江市",
		"tags": "MUDANJIANGSHI 牡丹江市",
		"cityid": "231000"
	}, {
		"name": "马鞍山市",
		"tags": "MAANSHANSHI 马鞍山市",
		"cityid": "340500"
	}, {
		"name": "茂名市",
		"tags": "MAOMINGSHI 茂名市",
		"cityid": "440900"
	}, {
		"name": "梅州市",
		"tags": "MEIZHOUSHI 梅州市",
		"cityid": "441400"
	}, {
		"name": "绵阳市",
		"tags": "MIANYANGSHI 绵阳市",
		"cityid": "510700"
	}, {
		"name": "眉山市",
		"tags": "MEISHANSHI 眉山市",
		"cityid": "511400"
	}]
}, {
	"name": "N",
	"cities": [{
		"name": "南京市",
		"tags": "NANJINGSHI 南京市",
		"cityid": "320100"
	}, {
		"name": "南通市",
		"tags": "NANTONGSHI 南通市",
		"cityid": "320600"
	}, {
		"name": "宁波市",
		"tags": "NINGBOSHI 宁波市",
		"cityid": "330200"
	}, {
		"name": "南平市",
		"tags": "NANPINGSHI 南平市",
		"cityid": "350700"
	}, {
		"name": "宁德市",
		"tags": "NINGDESHI 宁德市",
		"cityid": "350900"
	}, {
		"name": "南昌市",
		"tags": "NANCHANGSHI 南昌市",
		"cityid": "360100"
	}, {
		"name": "南阳市",
		"tags": "NANYANGSHI 南阳市",
		"cityid": "411300"
	}, {
		"name": "南宁市",
		"tags": "NANNINGSHI 南宁市",
		"cityid": "450100"
	}, {
		"name": "内江市",
		"tags": "NEIJIANGSHI 内江市",
		"cityid": "511000"
	}, {
		"name": "南充市",
		"tags": "NANCHONGSHI 南充市",
		"cityid": "511300"
	}, {
		"name": "怒江傈僳族自治州",
		"tags": "NUJIANGLISUZUZIZHIZHOU 怒江傈僳族自治州",
		"cityid": "533300"
	}, {
		"name": "那曲市",
		"tags": "NAQUSHI 那曲市",
		"cityid": "540600"
	}]
}, {
	"name": "P",
	"cities": [{
		"name": "盘锦市",
		"tags": "PANJINSHI 盘锦市",
		"cityid": "211100"
	}, {
		"name": "莆田市",
		"tags": "PUTIANSHI 莆田市",
		"cityid": "350300"
	}, {
		"name": "萍乡市",
		"tags": "PINGXIANGSHI 萍乡市",
		"cityid": "360300"
	}, {
		"name": "平顶山市",
		"tags": "PINGDINGSHANSHI 平顶山市",
		"cityid": "410400"
	}, {
		"name": "濮阳市",
		"tags": "PUYANGSHI 濮阳市",
		"cityid": "410900"
	}, {
		"name": "攀枝花市",
		"tags": "PANZHIHUASHI 攀枝花市",
		"cityid": "510400"
	}, {
		"name": "普洱市",
		"tags": "PUERSHI 普洱市",
		"cityid": "530800"
	}, {
		"name": "平凉市",
		"tags": "PINGLIANGSHI 平凉市",
		"cityid": "620800"
	}]
}, {
	"name": "Q",
	"cities": [{
		"name": "秦皇岛市",
		"tags": "QINHUANGDAOSHI 秦皇岛市",
		"cityid": "130300"
	}, {
		"name": "齐齐哈尔市",
		"tags": "QIQIHAERSHI 齐齐哈尔市",
		"cityid": "230200"
	}, {
		"name": "七台河市",
		"tags": "QITAIHESHI 七台河市",
		"cityid": "230900"
	}, {
		"name": "衢州市",
		"tags": "QUZHOUSHI 衢州市",
		"cityid": "330800"
	}, {
		"name": "泉州市",
		"tags": "QUANZHOUSHI 泉州市",
		"cityid": "350500"
	}, {
		"name": "青岛市",
		"tags": "QINGDAOSHI 青岛市",
		"cityid": "370200"
	}, {
		"name": "清远市",
		"tags": "QINGYUANSHI 清远市",
		"cityid": "441800"
	}, {
		"name": "钦州市",
		"tags": "QINZHOUSHI 钦州市",
		"cityid": "450700"
	}, {
		"name": "黔西南布依族苗族自治州",
		"tags": "QIANXINANBUYIZUMIAOZUZIZHIZHOU 黔西南布依族苗族自治州",
		"cityid": "522300"
	}, {
		"name": "黔东南苗族侗族自治州",
		"tags": "QIANDONGNANMIAOZUDONGZUZIZHIZHOU 黔东南苗族侗族自治州",
		"cityid": "522600"
	}, {
		"name": "黔南布依族苗族自治州",
		"tags": "QIANNANBUYIZUMIAOZUZIZHIZHOU 黔南布依族苗族自治州",
		"cityid": "522700"
	}, {
		"name": "曲靖市",
		"tags": "QUJINGSHI 曲靖市",
		"cityid": "530300"
	}, {
		"name": "庆阳市",
		"tags": "QINGYANGSHI 庆阳市",
		"cityid": "621000"
	}]
}, {
	"name": "R",
	"cities": [{
		"name": "日照市",
		"tags": "RIZHAOSHI 日照市",
		"cityid": "371100"
	}, {
		"name": "日喀则市",
		"tags": "RIKAZESHI 日喀则市",
		"cityid": "540200"
	}]
}, {
	"name": "S",
	"cities": [{
		"name": "石家庄市",
		"tags": "SHIJIAZHUANGSHI 石家庄市",
		"cityid": "130100"
	}, {
		"name": "朔州市",
		"tags": "SHUOZHOUSHI 朔州市",
		"cityid": "140600"
	}, {
		"name": "沈阳市",
		"tags": "SHENYANGSHI 沈阳市",
		"cityid": "210100"
	}, {
		"name": "四平市",
		"tags": "SIPINGSHI 四平市",
		"cityid": "220300"
	}, {
		"name": "松原市",
		"tags": "SONGYUANSHI 松原市",
		"cityid": "220700"
	}, {
		"name": "双鸭山市",
		"tags": "SHUANGYASHANSHI 双鸭山市",
		"cityid": "230500"
	}, {
		"name": "绥化市",
		"tags": "SUIHUASHI 绥化市",
		"cityid": "231200"
	}, {
		"name": "上海市",
		"tags": "SHANGHAISHI 上海市",
		"cityid": "310000"
	}, {
		"name": "苏州市",
		"tags": "SUZHOUSHI 苏州市",
		"cityid": "320500"
	}, {
		"name": "宿迁市",
		"tags": "SUQIANSHI 宿迁市",
		"cityid": "321300"
	}, {
		"name": "绍兴市",
		"tags": "SHAOXINGSHI 绍兴市",
		"cityid": "330600"
	}, {
		"name": "宿州市",
		"tags": "SUZHOUSHI 宿州市",
		"cityid": "341300"
	}, {
		"name": "三明市",
		"tags": "SANMINGSHI 三明市",
		"cityid": "350400"
	}, {
		"name": "上饶市",
		"tags": "SHANGRAOSHI 上饶市",
		"cityid": "361100"
	}, {
		"name": "三门峡市",
		"tags": "SANMENXIASHI 三门峡市",
		"cityid": "411200"
	}, {
		"name": "商丘市",
		"tags": "SHANGQIUSHI 商丘市",
		"cityid": "411400"
	}, {
		"name": "十堰市",
		"tags": "SHIYANSHI 十堰市",
		"cityid": "420300"
	}, {
		"name": "随州市",
		"tags": "SUIZHOUSHI 随州市",
		"cityid": "421300"
	}, {
		"name": "邵阳市",
		"tags": "SHAOYANGSHI 邵阳市",
		"cityid": "430500"
	}, {
		"name": "韶关市",
		"tags": "SHAOGUANSHI 韶关市",
		"cityid": "440200"
	}, {
		"name": "深圳市",
		"tags": "SHENZHENSHI 深圳市",
		"cityid": "440300"
	}, {
		"name": "汕头市",
		"tags": "SHANTOUSHI 汕头市",
		"cityid": "440500"
	}, {
		"name": "汕尾市",
		"tags": "SHANWEISHI 汕尾市",
		"cityid": "441500"
	}, {
		"name": "三亚市",
		"tags": "SANYASHI 三亚市",
		"cityid": "460200"
	}, {
		"name": "三沙市",
		"tags": "SANSHASHI 三沙市",
		"cityid": "460300"
	}, {
		"name": "遂宁市",
		"tags": "SUININGSHI 遂宁市",
		"cityid": "510900"
	}, {
		"name": "山南市",
		"tags": "SHANNANSHI 山南市",
		"cityid": "540500"
	}, {
		"name": "商洛市",
		"tags": "SHANGLUOSHI 商洛市",
		"cityid": "611000"
	}, {
		"name": "石嘴山市",
		"tags": "SHIZUISHANSHI 石嘴山市",
		"cityid": "640200"
	}]
}, {
	"name": "T",
	"cities": [{
		"name": "天津市",
		"tags": "TIANJINSHI 天津市",
		"cityid": "120000"
	}, {
		"name": "唐山市",
		"tags": "TANGSHANSHI 唐山市",
		"cityid": "130200"
	}, {
		"name": "太原市",
		"tags": "TAIYUANSHI 太原市",
		"cityid": "140100"
	}, {
		"name": "通辽市",
		"tags": "TONGLIAOSHI 通辽市",
		"cityid": "150500"
	}, {
		"name": "铁岭市",
		"tags": "TIELINGSHI 铁岭市",
		"cityid": "211200"
	}, {
		"name": "通化市",
		"tags": "TONGHUASHI 通化市",
		"cityid": "220500"
	}, {
		"name": "泰州市",
		"tags": "TAIZHOUSHI 泰州市",
		"cityid": "321200"
	}, {
		"name": "台州市",
		"tags": "TAIZHOUSHI 台州市",
		"cityid": "331000"
	}, {
		"name": "铜陵市",
		"tags": "TONGLINGSHI 铜陵市",
		"cityid": "340700"
	}, {
		"name": "泰安市",
		"tags": "TAIANSHI 泰安市",
		"cityid": "370900"
	}, {
		"name": "铜仁市",
		"tags": "TONGRENSHI 铜仁市",
		"cityid": "520600"
	}, {
		"name": "铜川市",
		"tags": "TONGCHUANSHI 铜川市",
		"cityid": "610200"
	}, {
		"name": "天水市",
		"tags": "TIANSHUISHI 天水市",
		"cityid": "620500"
	}, {
		"name": "吐鲁番市",
		"tags": "TULUFANSHI 吐鲁番市",
		"cityid": "650400"
	}, {
		"name": "塔城地区",
		"tags": "TACHENGDIQU 塔城地区",
		"cityid": "654200"
	}, {
		"name": "台湾省",
		"tags": "TAIWANSHENG 台湾省",
		"cityid": "710000"
	}]
}, {
	"name": "W",
	"cities": [{
		"name": "乌海市",
		"tags": "WUHAISHI 乌海市",
		"cityid": "150300"
	}, {
		"name": "乌兰察布市",
		"tags": "WULANCHABUSHI 乌兰察布市",
		"cityid": "150900"
	}, {
		"name": "无锡市",
		"tags": "WUXISHI 无锡市",
		"cityid": "320200"
	}, {
		"name": "温州市",
		"tags": "WENZHOUSHI 温州市",
		"cityid": "330300"
	}, {
		"name": "芜湖市",
		"tags": "WUHUSHI 芜湖市",
		"cityid": "340200"
	}, {
		"name": "潍坊市",
		"tags": "WEIFANGSHI 潍坊市",
		"cityid": "370700"
	}, {
		"name": "威海市",
		"tags": "WEIHAISHI 威海市",
		"cityid": "371000"
	}, {
		"name": "武汉市",
		"tags": "WUHANSHI 武汉市",
		"cityid": "420100"
	}, {
		"name": "梧州市",
		"tags": "WUZHOUSHI 梧州市",
		"cityid": "450400"
	}, {
		"name": "文山壮族苗族自治州",
		"tags": "WENSHANZHUANGZUMIAOZUZIZHIZHOU 文山壮族苗族自治州",
		"cityid": "532600"
	}, {
		"name": "渭南市",
		"tags": "WEINANSHI 渭南市",
		"cityid": "610500"
	}, {
		"name": "武威市",
		"tags": "WUWEISHI 武威市",
		"cityid": "620600"
	}, {
		"name": "吴忠市",
		"tags": "WUZHONGSHI 吴忠市",
		"cityid": "640300"
	}, {
		"name": "乌鲁木齐市",
		"tags": "WULUMUQISHI 乌鲁木齐市",
		"cityid": "650100"
	}]
}, {
	"name": "X",
	"cities": [{
		"name": "邢台市",
		"tags": "XINGTAISHI 邢台市",
		"cityid": "130500"
	}, {
		"name": "忻州市",
		"tags": "XINZHOUSHI 忻州市",
		"cityid": "140900"
	}, {
		"name": "兴安盟",
		"tags": "XINGANMENG 兴安盟",
		"cityid": "152200"
	}, {
		"name": "锡林郭勒盟",
		"tags": "XILINGUOLEMENG 锡林郭勒盟",
		"cityid": "152500"
	}, {
		"name": "徐州市",
		"tags": "XUZHOUSHI 徐州市",
		"cityid": "320300"
	}, {
		"name": "宣城市",
		"tags": "XUANCHENGSHI 宣城市",
		"cityid": "341800"
	}, {
		"name": "厦门市",
		"tags": "XIAMENSHI 厦门市",
		"cityid": "350200"
	}, {
		"name": "新余市",
		"tags": "XINYUSHI 新余市",
		"cityid": "360500"
	}, {
		"name": "新乡市",
		"tags": "XINXIANGSHI 新乡市",
		"cityid": "410700"
	}, {
		"name": "许昌市",
		"tags": "XUCHANGSHI 许昌市",
		"cityid": "411000"
	}, {
		"name": "信阳市",
		"tags": "XINYANGSHI 信阳市",
		"cityid": "411500"
	}, {
		"name": "襄阳市",
		"tags": "XIANGYANGSHI 襄阳市",
		"cityid": "420600"
	}, {
		"name": "孝感市",
		"tags": "XIAOGANSHI 孝感市",
		"cityid": "420900"
	}, {
		"name": "咸宁市",
		"tags": "XIANNINGSHI 咸宁市",
		"cityid": "421200"
	}, {
		"name": "湘潭市",
		"tags": "XIANGTANSHI 湘潭市",
		"cityid": "430300"
	}, {
		"name": "湘西土家族苗族自治州",
		"tags": "XIANGXITUJIAZUMIAOZUZIZHIZHOU 湘西土家族苗族自治州",
		"cityid": "433100"
	}, {
		"name": "西双版纳傣族自治州",
		"tags": "XISHUANGBANNADAIZUZIZHIZHOU 西双版纳傣族自治州",
		"cityid": "532800"
	}, {
		"name": "西安市",
		"tags": "XIANSHI 西安市",
		"cityid": "610100"
	}, {
		"name": "咸阳市",
		"tags": "XIANYANGSHI 咸阳市",
		"cityid": "610400"
	}, {
		"name": "西宁市",
		"tags": "XININGSHI 西宁市",
		"cityid": "630100"
	}, {
		"name": "香港特别行政区",
		"tags": "XIANGGANGTEBIEXINGZHENGQU 香港特别行政区",
		"cityid": "810000"
	}]
}, {
	"name": "Y",
	"cities": [{
		"name": "阳泉市",
		"tags": "YANGQUANSHI 阳泉市",
		"cityid": "140300"
	}, {
		"name": "运城市",
		"tags": "YUNCHENGSHI 运城市",
		"cityid": "140800"
	}, {
		"name": "营口市",
		"tags": "YINGKOUSHI 营口市",
		"cityid": "210800"
	}, {
		"name": "延边朝鲜族自治州",
		"tags": "YANBIANCHAOXIANZIZHIZHOU 延边朝鲜族自治州",
		"cityid": "222400"
	}, {
		"name": "伊春市",
		"tags": "YICHUNSHI 伊春市",
		"cityid": "230700"
	}, {
		"name": "盐城市",
		"tags": "YANCHENGSHI 盐城市",
		"cityid": "320900"
	}, {
		"name": "扬州市",
		"tags": "YANGZHOUSHI 扬州市",
		"cityid": "321000"
	}, {
		"name": "鹰潭市",
		"tags": "YINGTANSHI 鹰潭市",
		"cityid": "360600"
	}, {
		"name": "宜春市",
		"tags": "YICHUNSHI 宜春市",
		"cityid": "360900"
	}, {
		"name": "烟台市",
		"tags": "YANTAISHI 烟台市",
		"cityid": "370600"
	}, {
		"name": "宜昌市",
		"tags": "YICHANGSHI 宜昌市",
		"cityid": "420500"
	}, {
		"name": "岳阳市",
		"tags": "YUEYANGSHI 岳阳市",
		"cityid": "430600"
	}, {
		"name": "益阳市",
		"tags": "YIYANGSHI 益阳市",
		"cityid": "430900"
	}, {
		"name": "永州市",
		"tags": "YONGZHOUSHI 永州市",
		"cityid": "431100"
	}, {
		"name": "阳江市",
		"tags": "YANGJIANGSHI 阳江市",
		"cityid": "441700"
	}, {
		"name": "云浮市",
		"tags": "YUNFUSHI 云浮市",
		"cityid": "445300"
	}, {
		"name": "玉林市",
		"tags": "YULINSHI 玉林市",
		"cityid": "450900"
	}, {
		"name": "宜宾市",
		"tags": "YIBINSHI 宜宾市",
		"cityid": "511500"
	}, {
		"name": "雅安市",
		"tags": "YAANSHI 雅安市",
		"cityid": "511800"
	}, {
		"name": "玉溪市",
		"tags": "YUXIQISHI 玉溪市",
		"cityid": "530400"
	}, {
		"name": "延安市",
		"tags": "YANANSHI 延安市",
		"cityid": "610600"
	}, {
		"name": "榆林市",
		"tags": "YULINSHI 榆林市",
		"cityid": "610800"
	}, {
		"name": "玉树藏族自治州",
		"tags": "YUSHUZANGZUZIZHIZHOU 玉树藏族自治州",
		"cityid": "632700"
	}, {
		"name": "银川市",
		"tags": "YINCHUANSHI 银川市",
		"cityid": "640100"
	}, {
		"name": "伊犁哈萨克自治州",
		"tags": "YILIHASAKEZIZHIZHOU 伊犁哈萨克自治州",
		"cityid": "654000"
	}]
}, {
	"name": "Z",
	"cities": [{
		"name": "张家口市",
		"tags": "ZHANGJIAKOUSHI 张家口市",
		"cityid": "130700"
	}, {
		"name": "镇江市",
		"tags": "ZHENJIANGSHI 镇江市",
		"cityid": "321100"
	}, {
		"name": "舟山市",
		"tags": "ZHOUSHANSHI 舟山市",
		"cityid": "330900"
	}, {
		"name": "漳州市",
		"tags": "ZHANGZHOUSHI 漳州市",
		"cityid": "350600"
	}, {
		"name": "淄博市",
		"tags": "ZIBOSHI 淄博市",
		"cityid": "370300"
	}, {
		"name": "枣庄市",
		"tags": "ZAOZHUANGSHI 枣庄市",
		"cityid": "370400"
	}, {
		"name": "郑州市",
		"tags": "ZHENGZHOUSHI 郑州市",
		"cityid": "410100"
	}, {
		"name": "周口市",
		"tags": "ZHOUKOUSHI 周口市",
		"cityid": "411600"
	}, {
		"name": "驻马店市",
		"tags": "ZHUMADIANSHI 驻马店市",
		"cityid": "411700"
	}, {
		"name": "株洲市",
		"tags": "ZHUZHOUSHI 株洲市",
		"cityid": "430200"
	}, {
		"name": "张家界市",
		"tags": "ZHANGJIAJIESHI 张家界市",
		"cityid": "430800"
	}, {
		"name": "珠海市",
		"tags": "ZHUHAISHI 珠海市",
		"cityid": "440400"
	}, {
		"name": "湛江市",
		"tags": "ZHANJIANGSHI 湛江市",
		"cityid": "440800"
	}, {
		"name": "肇庆市",
		"tags": "ZHAOQINGSHI 肇庆市",
		"cityid": "441200"
	}, {
		"name": "中山市",
		"tags": "ZHONGSHANSHI 中山市",
		"cityid": "442000"
	}, {
		"name": "自贡市",
		"tags": "ZIGONGSHI 自贡市",
		"cityid": "510300"
	}, {
		"name": "资阳市",
		"tags": "ZIYANGSHI 资阳市",
		"cityid": "512000"
	}, {
		"name": "遵义市",
		"tags": "ZUNYISHI 遵义市",
		"cityid": "520300"
	}, {
		"name": "昭通市",
		"tags": "ZHAOTONGSHI 昭通市",
		"cityid": "530600"
	}, {
		"name": "张掖市",
		"tags": "ZHANGYESHI 张掖市",
		"cityid": "620700"
	}, {
		"name": "中卫市",
		"tags": "ZHONGWEISHI 中卫市",
		"cityid": "640500"
	}]
}]
