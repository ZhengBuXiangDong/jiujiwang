/*
Navicat MySQL Data Transfer

Source Server         : textDB
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : t_jiuji

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2019-07-13 20:56:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(255) DEFAULT NULL,
  `name` varchar(1000) DEFAULT NULL,
  `all_name` varchar(1000) DEFAULT NULL,
  `price` float(10,0) NOT NULL,
  `low_price` varchar(1000) DEFAULT NULL,
  `type` varchar(1000) DEFAULT NULL,
  `detail` varchar(1000) DEFAULT NULL,
  `inventory` int(10) DEFAULT NULL,
  `sales_ranking` varchar(1000) DEFAULT NULL,
  `promotion_inf` varchar(1000) DEFAULT NULL,
  `configuration` varchar(1000) DEFAULT NULL,
  `color` varchar(1000) DEFAULT NULL,
  `capacity` varchar(1000) DEFAULT NULL,
  `edition` varchar(1000) DEFAULT NULL,
  `set_meal` varchar(1000) DEFAULT NULL,
  `titlePic` varchar(1000) DEFAULT NULL,
  `smallPic` varchar(1000) DEFAULT NULL,
  `bigPic` varchar(1000) DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  `bar_code` varchar(10) DEFAULT NULL,
  `evaluation` int(10) DEFAULT NULL,
  `consultation` int(10) DEFAULT NULL,
  `rate_of_acclaim` double(10,0) DEFAULT NULL,
  PRIMARY KEY (`price`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', 'nova 4e', '华为 nova 4e 全网通版 幻夜黑 6GB+128GB ', '1799', '二手良品：1350.00,久久租：日租 ¥5起', '更多好物', '【火热销售】专享免息分期！海思麒麟710，6.15英寸珍珠全面屏', '10', '手机单品当日销量第4名', '该机型专享免息分期，不与以旧换新券、赠品及其它优惠叠加', '充电器x1，数据线x1，保护壳x1，耳机x1（内置3340mAh电池）', 'color1:幻夜黑，color2:珍珠白，color3:雀羽蓝', '4GB+128GB，6GB+128GB', 'nova 4 全网通标配版,nova 4 全网通高配版,nova 4 4G+全网通标配版,nova 4e 全网通版,nova 4e 4G+全网通版', '官方标配，推荐套餐', 'moregood-li1', 'nova4e-smallPic1，nova4e-smallPic2，nova4e-smallPic3，nova4e-smallPic4', 'nova4e-bigPic1，nova4e-bigPic2，nova4e-smallbig3，nova4e-bigPic4', '75045', '292134', '1076', '2', '100');
INSERT INTO `goodlist` VALUES ('6', 'iPad 2018款', 'Apple iPad 2018款 wifi版 金色 32GB ', '2260', '久久租：日租 ¥8.79起', '更多好物', '【火热销售】9.7英寸 A10芯片！', '10', '平板电脑单品当日销量第1名', '', '充电器x1，数据线x1', 'color1:金色，color2:银色，color3:深空灰色', '32GB,128GB', '2018款wifi版，2018款4G版', '官方标配，推荐套餐', 'moregood-li6', 'ipad2018-smallPic1，ipad2018-smallPic2，ipad2018-smallPic3', 'ipad2018-bigPic1，ipad2018-bigPic2，ipad2018-smallbig3', '63345', '720276', '6890', '74', '56');
INSERT INTO `goodlist` VALUES ('4', 'AirPods 2代', '苹果 新款 AirPods 2代 蓝牙无线耳机 配有线充电盒版 ', '1230', '', '更多好物', '【火热销售】支持嘿 Siri，全新的 Apple H1 耳机芯片', '10', '手机耳机单品当日销量第1名', '该商品特价促销，不可使用优惠码', 'AirPods配有线充电盒x1，充电线x1', '', '', 'AirPods 二代 (蓝牙)，AirPods 无线充电盒，AirPods 一代 (蓝牙)，AirPods 保护盒', '官方标配，推荐套餐', 'moregood-li4', 'AirPods-smallPic1，AirPods-smallPic2，AirPods-smallPic3，AirPods-smallPic4', 'AirPods-bigPic1，AirPods-bigPic2，AirPods-smallbig3，AirPods-bigPic4', '75219', '098442', '1038', '3', '1');
INSERT INTO `goodlist` VALUES ('7', '华为 AM116 半入耳式 线控耳机', '华为 AM116 半入耳式 金属版 线控耳机 白色 ', '69', '', '更多好物', '金属外观,安全耐用,操作方便', '10', '手机耳机单品当日销量第3名', '', '手机耳机x1', 'color1:白色，color2:黑色，color3:金色', '', '华为 荣耀AM13 引擎2代，华为 AM116 金属版', '官方标配，推荐套餐', 'moregood-li7', 'am116-smallPic1，am116-smallPic2，am116-smallPic3，am116-smallPic4，am116-smallPic5', 'am116-bigPic1，am116-bigPic2，am116-smallbig3，am116-bigPic4，am116-bigPic5', '51951', '143498', '1787', '3', '1');
INSERT INTO `goodlist` VALUES ('12', '小米9', '小米9 全网通版 幻彩蓝 8GB+128GB ', '2999', '一手优品：2799.00，二手良品：2199.00，久久租：日租 ¥7.5起', '更多好物', '【火热销售】官网直降！高通骁龙855！20W无线闪充！', '10', '', '该商品特价促销，不可使用优惠码', '充电器x1，数据线x1，耳机转接线x1，保护壳x1（内置3300mAh电池）', 'color1:深空灰，color2:透明，color3:幻彩蓝，color4:幻彩紫', '6GB+128GB,8GB+128GB,8GB+256GB', '小米9 全网通版，小米9 4G+全网通版，小米9 SE 全网通版，小米9 透明尊享版', '官方标配，推荐套餐', 'moregood-li12', 'xiaomi9-smallPic1，xiaomi9-smallPic2，xiaomi9-smallPic3，xiaomi9-smallPic4', 'xiaomi9-bigPic2，xiaomi9-smallbig3，xiaomi9-bigPic4', '74082', '623830', '1699', '12', '1');
INSERT INTO `goodlist` VALUES ('8', '畅享9 Plus', '华为畅享9 Plus 全网通版 幻夜黑 4GB+128GB ', '1499', '一手优品：1099.00，二手良品：1150.00', '更多好物', '【四摄全面屏】6.5英寸超清全面屏，1600万高清拍摄，4000mA超长续航', '10', '手机单品当日销量第8名', '买即赠:该机型专享', '充电器x1，数据线x1，TPU保护壳x1（内置4000mAh电池）', 'color1:宝石蓝,color2:幻夜黑,color3:樱语粉,color4:极光紫', '4GB+64GB，4GB+128GB，6GB+128GB', '畅享9 Plus 全网通版，畅享9 Plus 4G+全网通版，畅享9  全网通高配版，畅享9  4G+全网通高配版，畅享9  全网通顶配版，畅享9  全网通标配版，畅享MAX 全网通版', '官方标配，推荐套餐', 'moregood-li8', 'changxiang9plus-smallPic1，changxiang9plus-smallPic2，changxiang9plus-smallPic3，changxiang9plus-smallPic4，changxiang9plus-smallPic5', 'changxiang9plus-bigPic2，changxiang9plus-bigPic3，changxiang9plus-smallbig4，changxiang9plus-bigPic5', '71190', '263790', '3553', '36', '1');
INSERT INTO `goodlist` VALUES ('9', 'Mate 20 Pro', '华为 Mate 20 Pro 全网通版 亮黑色 6GB+128GB ', '4899', '一手优品：3850.00，二手良品：3599.00，久久租：日租 ¥8.5起', '更多好物', '【现货热销】专享免息分期！海思麒麟980！40W超级快充！', '10', '', '免息分期:该机型专享免息分期，不与换新补贴及其它优惠叠加，详询到店参与，手表套餐:华为GT手表套餐不与换新补贴、免息分期及其它优惠叠加，买即赠:该机型专享', '充电器x1，数据线x1，耳机x1，耳机转接线x1，TPU保护壳x1（内置4200mAh电池）', 'color1:亮黑色,color2:宝石蓝,color3:樱语金,color4:极光色,color5:翡冷翠,color6:馥蕾红,color7:璨星蓝', '6GB+128GB,8GB+128GB（UD）,8GB+256GB（UD）', 'Mate 20 全网通版,Mate 20 Pro 全网通版,Mate 20 X 全网通版,Mate 20 RS 保时捷版,Mate 20 移动全网通版,Mate 20 Pro 移动全网通版', '官方标配，推荐套餐，华为GT手表套餐', 'moregood-li9', 'mate20Pro-smallPic1，mate20Pro-smallPic2，mate20Pro-smallPic3，mate20Pro-smallPic4，mate20Pro-smallPic5', 'mate20Pro-bigPic2，mate20Pro-smallbig3，mate20Pro-bigPic4,mate20Pro-bigPic5', '71255', '260225', '2834', '135', '1');
INSERT INTO `goodlist` VALUES ('11', '小米九号平衡车', '小米九号平衡车 白色 ', '1999', '一手优品：1600.00', '更多好物', '三分钟上手,感应式LED灯组,15重安全保障', '10', '平衡车单品当日销量第1名', '', '小米平衡车x 1，车辆充电线 x1，说明书 x 1', 'color1:白色，color2:黑色', '', '九号平衡车，九号平衡车Plus，九号平衡车适配器，平衡车改装套件', '', 'moregood-li11', 'xiaomicar-smallPic1，xiaomicar-smallPic2，xiaomicar-smallPic3，xiaomicar-smallPic4', 'xiaomicar-bigPic1，xiaomicar-bigPic2，xiaomicar-smallbig3，xiaomicar-bigPic4', '37641', '580010', '410', '13', '1');
INSERT INTO `goodlist` VALUES ('2', '三星 S10', '三星 Galaxy S10 全网通版 碳晶黑 8GB+128GB ', '5999', '一手优品：4399.00，二手良品：3599.00，久久租：日租 ¥9起', '更多好物', '【火热销售】超声波屏幕指纹，高通骁855', '10', '', '暖心回馈:购意外保免费赠送延长保,5G计划:购机可参与三星5G先锋计划', '充电器x1，数据线x1，耳机x1，USB链接器x1，保护壳x1（内置3400mAh电池）', 'color1:碳金黑,color2:皓玉白,color3:琉璃绿,color4:烟波蓝', '8GB+128GB，8GB+512GB', '三星 S10 全网通版，三星 S10+ 全网通版,三星 S10e 全网通版,三星 S10e 4G+全网通版,三星 S10 4G+全网通版,三星 S10+ 4G+全网通版', '官方标配，推荐套餐', 'moregood-li2', 'GalaxyS10-smallPic1，GalaxyS10-smallPic2，GalaxyS10-smallPic3，GalaxyS10-smallPic4', 'GalaxyS10-bigPic2，GalaxyS10-bigPic3,GalaxyS10-bigPic4', '73699', '827291', '492', '1', '1');
INSERT INTO `goodlist` VALUES ('5', '飞利浦电动牙刷HX6730', '飞利浦 HX6730 声波电动牙刷 ', '399', '', '更多好物', '流动洁力 智能化设置 三档模式', '10', '', '', '牙刷柄x1，牙刷头x1，充电器x1，说明书x1', '', '', '飞利浦 HX6730 电动牙刷,飞利浦电动牙刷刷头', '', 'moregood-li5', 'HX6730-smallPic1，HX6730-smallPic2，HX6730-smallPic3', 'HX6730-bigPic1，HX6730-bigPic2，HX6730-smallbig3', '52576', '404195', '79', '0', '1');
INSERT INTO `goodlist` VALUES ('10', 'MacBook Air 2018款', '苹果 MacBook Air 2018款 13.3英寸 深空灰 (E82) i5主频1.6GHz 8G 128G固态 集显', '8288', '久久租：日租 ¥15.59起', '更多好物', '【支持九机上门服务】全新Air！新增触控ID！', '10', '笔记本单品当日销量第15名', '购意外保免费赠送延长保', '充电器x1，数据线x1，耳机x1（内置2942mAh电池）', 'color1:白色,color2:黑色,color3:黄色,color4:蓝色', '64GB,128GB,256GB', 'iPhone XS,iPhone XS Max,iPhone XR,iPhone X', '官方标配，推荐套餐,原装快充套餐，无线充电套餐', 'moregood-li10', 'iPhoneXR-smallPic1，iPhoneXR-smallPic2，iPhoneXR-smallPic3，iPhoneXR-smallPic10，iPhoneXR-smallPic5', 'iPhoneXR-bigPic2，iPhoneXR-smallbig3，iPhoneXR-bigPic4，iPhoneXR-bigPic5', '68436', '777300', '11019', '129', '1');
INSERT INTO `goodlist` VALUES ('3', 'iPhone XR', 'Apple iPhone XR 全网通版 黑色 64GB ', '4960', '一手优品：4299.00，二手良品：4099.00，久久租：日租 ¥9.9起', '更多好物', '【火热销售】官网最高直降1200！', '10', '手机单品当日销量第2名', '购意外保免费赠送延长保', '充电器x1，数据线x1，耳机x1（内置2942mAh电池）', 'color1:白色,color2:黑色,color3:黄色,color4:蓝色', '64GB,128GB,256GB', 'iPhone XS,iPhone XS Max,iPhone XR,iPhone X', '官方标配，推荐套餐,原装快充套餐，无线充电套餐', 'moregood-li3', 'iPhoneXR-smallPic1，iPhoneXR-smallPic2，iPhoneXR-smallPic3，iPhoneXR-smallPic10，iPhoneXR-smallPic5', 'iPhoneXR-bigPic2，iPhoneXR-smallbig3，iPhoneXR-bigPic4，iPhoneXR-bigPic5', '68436', '777300', '11019', '129', '1');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(255) NOT NULL,
  `name` varchar(1000) DEFAULT NULL,
  `position_name` varchar(255) DEFAULT NULL,
  `all_name` varchar(1000) DEFAULT NULL,
  `price` float(10,2) NOT NULL,
  `low_price` varchar(1000) DEFAULT NULL,
  `type` varchar(1000) DEFAULT NULL,
  `detail` varchar(1000) DEFAULT NULL,
  `inventory` int(10) DEFAULT NULL,
  `sales_ranking` varchar(1000) DEFAULT NULL,
  `promotion_inf` varchar(1000) DEFAULT NULL,
  `configuration` varchar(1000) DEFAULT NULL,
  `color` varchar(1000) DEFAULT NULL,
  `capacity` varchar(1000) DEFAULT NULL,
  `edition` varchar(1000) DEFAULT NULL,
  `set_meal` varchar(1000) DEFAULT NULL,
  `titlePic` varchar(1000) DEFAULT NULL,
  `smallPic` varchar(1000) DEFAULT NULL,
  `bigPic` varchar(1000) DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  `bar_code` varchar(10) DEFAULT NULL,
  `evaluation` int(10) DEFAULT NULL,
  `consultation` int(10) DEFAULT NULL,
  `rate_of_acclaim` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', 'nova 4e', '华为 nova 4e 全网通版', '华为 nova 4e 全网通版 幻夜黑 6GB+128GB ', '1799.00', '二手良品：1350.00,久久租：日租 ¥5起', '更多好物', '【火热销售】专享免息分期！海思麒麟710，6.15英寸珍珠全面屏', '10', '手机单品当日销量第4名', '该机型专享免息分期，不与以旧换新券、赠品及其它优惠叠加', '充电器x1，数据线x1，保护壳x1，耳机x1（内置3340mAh电池）', 'color1:幻夜黑，color2:珍珠白，color3:雀羽蓝', '4GB+128GB，6GB+128GB', 'nova 4 全网通标配版,nova 4 全网通高配版,nova 4 4G+全网通标配版,nova 4e 全网通版,nova 4e 4G+全网通版', '官方标配，推荐套餐', 'moregood-li1', 'nova4e-smallPic1，nova4e-smallPic2，nova4e-smallPic3，nova4e-smallPic4', 'moregood-li1.jpg，nova4e-bigPic2.jpg，nova4e-bigPic3.jpg，nova4e-bigPic4.jpg', '75045', '292134', '1076', '2', '99.67');
INSERT INTO `product` VALUES ('6', 'iPad 2018款', 'Apple iPad 2018款 wifi版', 'Apple iPad 2018款 wifi版 金色 32GB ', '2260.00', '久久租：日租 ¥8.79起', '更多好物', '【火热销售】9.7英寸 A10芯片！', '10', '平板电脑单品当日销量第1名', '', '充电器x1，数据线x1', 'color1:金色，color2:银色，color3:深空灰色', '32GB,128GB', '2018款wifi版，2018款4G版', '官方标配，推荐套餐', 'moregood-li6', 'ipad2018-smallPic1，ipad2018-smallPic2，ipad2018-smallPic3', 'ipad2018-bigPic1.jpg，ipad2018-bigPic2.jpg，ipad2018-bigPic3.jpg', '63345', '720276', '6890', '74', '95.32');
INSERT INTO `product` VALUES ('4', 'AirPods 2代', '苹果 新款 AirPods 2代 蓝牙无线耳机', '苹果 新款 AirPods 2代 蓝牙无线耳机 配有线充电盒版 ', '1230.00', '', '更多好物', '【火热销售】支持嘿 Siri，全新的 Apple H1 耳机芯片', '0', '手机耳机单品当日销量第1名', '该商品特价促销，不可使用优惠码', 'AirPods配有线充电盒x1，充电线x1', 'color1:白色,color2:黑色,color3:黄色,color4:蓝色', '', 'AirPods 二代 (蓝牙)，AirPods 无线充电盒，AirPods 一代 (蓝牙)，AirPods 保护盒', '官方标配，推荐套餐', 'moregood-li4', 'AirPods-smallPic1，AirPods-smallPic2，AirPods-smallPic3，AirPods-smallPic4', 'AirPods-bigPic1.jpg，AirPods-bigPic2.jpg，AirPods-bigPic3.jpg，AirPods-bigPic4.jpg', '75219', '098442', '1038', '3', '96.03');
INSERT INTO `product` VALUES ('7', '华为 AM116 半入耳式 线控耳机', '华为 AM116 半入耳式 金属版', '华为 AM116 半入耳式 金属版 线控耳机 白色 ', '69.00', '', '更多好物', '金属外观,安全耐用,操作方便', '10', '手机耳机单品当日销量第3名', '', '手机耳机x1', 'color1:白色，color2:黑色，color3:金色', '', '华为 荣耀AM13 引擎2代，华为 AM116 金属版', '官方标配，推荐套餐', 'moregood-li7', 'am116-smallPic1，am116-smallPic2，am116-smallPic3，am116-smallPic4，am116-smallPic5', 'am116-bigPic1.jpg，am116-bigPic2.jpg，am116-bigPic3.jpg，am116-bigPic4.jpg，am116-bigPic5.jpg', '51951', '143498', '1787', '3', '93.56');
INSERT INTO `product` VALUES ('12', '小米9', '小米9 全网通版', '小米9 全网通版 幻彩蓝 8GB+128GB ', '2999.00', '一手优品：2799.00，二手良品：2199.00，久久租：日租 ¥7.5起', '更多好物', '【火热销售】官网直降！高通骁龙855！20W无线闪充！', '10', '', '该商品特价促销，不可使用优惠码', '充电器x1，数据线x1，耳机转接线x1，保护壳x1（内置3300mAh电池）', 'color1:深空灰，color2:透明，color3:幻彩蓝，color4:幻彩紫', '6GB+128GB,8GB+128GB,8GB+256GB', '小米9 全网通版，小米9 4G+全网通版，小米9 SE 全网通版，小米9 透明尊享版', '官方标配，推荐套餐', 'moregood-li12', 'xiaomi9-smallPic1，xiaomi9-smallPic2，xiaomi9-smallPic3，xiaomi9-smallPic4', 'moregood-li12.jpg，xiaomi9-bigPic2.jpg，xiaomi9-bigPic3.jpg，xiaomi9-bigPic4.jpg', '74082', '623830', '1699', '12', '96.07');
INSERT INTO `product` VALUES ('8', '畅享9 Plus', '华为畅享9 Plus 全网通版', '华为畅享9 Plus 全网通版 幻夜黑 4GB+128GB ', '1499.00', '一手优品：1099.00，二手良品：1150.00', '更多好物', '【四摄全面屏】6.5英寸超清全面屏，1600万高清拍摄，4000mA超长续航', '10', '手机单品当日销量第8名', '买即赠:该机型专享', '充电器x1，数据线x1，TPU保护壳x1（内置4000mAh电池）', 'color1:宝石蓝,color2:幻夜黑,color3:樱语粉,color4:极光紫', '4GB+64GB，4GB+128GB，6GB+128GB', '畅享9 Plus 全网通版，畅享9 Plus 4G+全网通版，畅享9  全网通高配版，畅享9  4G+全网通高配版，畅享9  全网通顶配版，畅享9  全网通标配版，畅享MAX 全网通版', '官方标配，推荐套餐', 'moregood-li8', 'changxiang9plus-smallPic1，changxiang9plus-smallPic2，changxiang9plus-smallPic3，changxiang9plus-smallPic4，changxiang9plus-smallPic5', 'moregood-li8.jpg，changxiang9plus-bigPic2.jpg，changxiang9plus-bigPic3.jpg，changxiang9plus-bigPic4.jpg，changxiang9plus-bigPic5.jpg', '71190', '263790', '3553', '36', '99.25');
INSERT INTO `product` VALUES ('9', 'Mate 20 Pro', '华为 Mate 20 Pro 全网通版', '华为 Mate 20 Pro 全网通版 亮黑色 6GB+128GB ', '4899.00', '一手优品：3850.00，二手良品：3599.00，久久租：日租 ¥8.5起', '更多好物', '【现货热销】专享免息分期！海思麒麟980！40W超级快充！', '10', '', '免息分期:该机型专享免息分期，不与换新补贴及其它优惠叠加，详询到店参与，手表套餐:华为GT手表套餐不与换新补贴、免息分期及其它优惠叠加，买即赠:该机型专享', '充电器x1，数据线x1，耳机x1，耳机转接线x1，TPU保护壳x1（内置4200mAh电池）', 'color1:亮黑色,color2:宝石蓝,color3:樱语金,color4:极光色,color5:翡冷翠,color6:馥蕾红,color7:璨星蓝', '6GB+128GB,8GB+128GB（UD）,8GB+256GB（UD）', 'Mate 20 全网通版,Mate 20 Pro 全网通版,Mate 20 X 全网通版,Mate 20 RS 保时捷版,Mate 20 移动全网通版,Mate 20 Pro 移动全网通版', '官方标配，推荐套餐，华为GT手表套餐', 'moregood-li9', 'mate20Pro-smallPic1，mate20Pro-smallPic2，mate20Pro-smallPic3，mate20Pro-smallPic4，mate20Pro-smallPic5', 'moregood-li9.jpg，mate20Pro-bigPic2.jpg，mate20Pro-bigPic3.jpg，mate20Pro-bigPic4.jpg，mate20Pro-bigPic5.jpg', '71255', '260225', '2834', '135', '96.35');
INSERT INTO `product` VALUES ('11', '小米九号平衡车', '小米九号平衡车', '小米九号平衡车 白色 ', '1999.00', '一手优品：1600.00', '更多好物', '三分钟上手,感应式LED灯组,15重安全保障', '10', '平衡车单品当日销量第1名', '', '小米平衡车x 1，车辆充电线 x1，说明书 x 1', 'color1:白色，color2:黑色', '', '九号平衡车，九号平衡车Plus，九号平衡车适配器，平衡车改装套件', '', 'moregood-li11', 'xiaomicar-smallPic1，xiaomicar-smallPic2，xiaomicar-smallPic3，xiaomicar-smallPic4', 'xiaomicar-bigPic1.jpg，xiaomicar-bigPic2.jpg，xiaomicar-bigPic3.jpg，xiaomicar-bigPic4.jpg', '37641', '580010', '410', '13', '95.55');
INSERT INTO `product` VALUES ('2', '三星 S10', '三星 Galaxy S10 全网通版', '三星 Galaxy S10 全网通版 碳晶黑 8GB+128GB ', '5999.00', '一手优品：4399.00，二手良品：3599.00，久久租：日租 ¥9起', '更多好物', '【火热销售】超声波屏幕指纹，高通骁855', '0', '', '暖心回馈:购意外保免费赠送延长保,5G计划:购机可参与三星5G先锋计划', '充电器x1，数据线x1，耳机x1，USB链接器x1，保护壳x1（内置3400mAh电池）', 'color1:碳金黑,color2:皓玉白,color3:琉璃绿,color4:烟波蓝', '8GB+128GB，8GB+512GB', '三星 S10 全网通版，三星 S10+ 全网通版,三星 S10e 全网通版,三星 S10e 4G+全网通版,三星 S10 4G+全网通版,三星 S10+ 4G+全网通版', '官方标配，推荐套餐', 'moregood-li2', 'GalaxyS10-smallPic1，GalaxyS10-smallPic2，GalaxyS10-smallPic3，GalaxyS10-smallPic4', 'moregood-li2.jpg，GalaxyS10-bigPic2.jpg，GalaxyS10-bigPic3.jpg，GalaxyS10-bigPic4.jpg', '73699', '827291', '492', '1', '94.62');
INSERT INTO `product` VALUES ('5', '飞利浦电动牙刷HX6730', '飞利浦 HX6730 声波电动牙刷', '飞利浦 HX6730 声波电动牙刷 ', '399.00', '', '更多好物', '流动洁力 智能化设置 三档模式', '10', '', '', '牙刷柄x1，牙刷头x1，充电器x1，说明书x1', 'color1:白色,color2:黑色,color3:黄色,color4:蓝色', '', '飞利浦 HX6730 电动牙刷,飞利浦电动牙刷刷头', '', 'moregood-li5', 'HX6730-smallPic1，HX6730-smallPic2，HX6730-smallPic3', 'HX6730-bigPic1.jpg，HX6730-bigPic2.jpg，HX6730-bigPic3.jpg', '52576', '404195', '79', '0', '93.35');
INSERT INTO `product` VALUES ('10', 'MacBook Air 2018款', '苹果 MacBook Air 2018款', '苹果 MacBook Air 2018款 13.3英寸 深空灰 (E82) i5主频1.6GHz 8G 128G固态 集显', '8288.00', '久久租：日租 ¥15.59起', '更多好物', '【支持九机上门服务】全新Air！新增触控ID！', '10', '笔记本单品当日销量第15名', '购意外保免费赠送延长保', '充电器x1，数据线x1，耳机x1（内置2942mAh电池）', 'color1:白色,color2:黑色,color3:黄色,color4:蓝色', '64GB,128GB,256GB', 'iPhone XS,iPhone XS Max,iPhone XR,iPhone X', '官方标配，推荐套餐,原装快充套餐，无线充电套餐', 'moregood-li10', 'iPhoneXR-smallPic1，iPhoneXR-smallPic2，iPhoneXR-smallPic3，iPhoneXR-smallPic10，iPhoneXR-smallPic5', 'macbookAir2018-bigPic1.jpg，macbookAir2018-bigPic2.jpg，macbookAir2018-bigPic3.jpg，macbookAir2018-bigPic4.jpg', '68436', '777300', '11019', '129', '98.01');
INSERT INTO `product` VALUES ('3', 'iPhone XR', 'Apple iPhone XR 全网通版', 'Apple iPhone XR 全网通版 黑色 64GB ', '4960.00', '一手优品：4299.00，二手良品：4099.00，久久租：日租 ¥9.9起', '更多好物', '【火热销售】官网最高直降1200！', '10', '手机单品当日销量第2名', '购意外保免费赠送延长保', '充电器x1，数据线x1，耳机x1（内置2942mAh电池）', 'color1:白色,color2:黑色,color3:黄色,color4:蓝色', '64GB,128GB,256GB', 'iPhone XS,iPhone XS Max,iPhone XR,iPhone X', '官方标配，推荐套餐,原装快充套餐，无线充电套餐', 'moregood-li3', 'iPhoneXR-smallPic1，iPhoneXR-smallPic2，iPhoneXR-smallPic3，iPhoneXR-smallPic10，iPhoneXR-smallPic5', 'iPhoneXR-bigPic1.jpg，iPhoneXR-bigPic2.jpg，iPhoneXR-bigPic3.jpg，iPhoneXR-bigPic4.jpg，iPhoneXR-bigPic5.jpg', '68436', '777300', '11019', '129', '97.06');

-- ----------------------------
-- Table structure for t_cart
-- ----------------------------
DROP TABLE IF EXISTS `t_cart`;
CREATE TABLE `t_cart` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `uid` int(5) NOT NULL,
  `gid` int(5) NOT NULL,
  `nums` int(5) NOT NULL,
  `add_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_cart
-- ----------------------------
INSERT INTO `t_cart` VALUES ('1', '1', '1', '2', '2019-07-13 17:19:47');
INSERT INTO `t_cart` VALUES ('2', '1', '2', '3', '2019-07-13 09:28:47');
INSERT INTO `t_cart` VALUES ('3', '1', '9', '2', '2019-07-10 09:17:17');
INSERT INTO `t_cart` VALUES ('6', '2', '3', '1', '2019-07-13 19:18:45');
INSERT INTO `t_cart` VALUES ('4', '2', '1', '1', '2019-07-13 19:04:18');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'admin', 'admin1', '15779791853', null);
INSERT INTO `t_user` VALUES ('2', 'hello', '123456', '15779791857', '');
INSERT INTO `t_user` VALUES ('5', 'maxmax', '123456', '15779791850', '');
SET FOREIGN_KEY_CHECKS=1;
