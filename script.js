// 全局变量
let map;
let currentWeather = 'sunny';
let currentTheme = 'light';
let currentRoute = 'day1';
let currentLocation = null;
let swiper = null;
let attractionsData = [];
let foodData = [];
let itineraryData = [];

// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
    // 初始化数据
    initData();
    
    // 初始化地图
    initMap();
    
    // 初始化天气
    initWeather();
    
    // 初始化主题切换
    initTheme();
    
    // 初始化导航
    initNavigation();
    
    // 初始化事件监听器
    initEventListeners();
    
    // 初始化Swiper
    initSwiper();
    
    // 渲染页面内容
    renderAttractions();
    renderFood();
    renderItinerary();
    
    // 开始实时更新
    startRealTimeUpdates();
});

// 初始化数据
function initData() {
    // 景点数据
    attractionsData = [
           {
        id: 1,
        name: "金町湾沙滩",
        description: "7公里月牙白沙滩，沙质细腻如面粉，海水清澈见底，被誉为广东版'小三亚'。适合踩水散步、看日出日落，沙滩上还有海上摩托、帆船等水上项目。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11783095040287354031&bdtype=0&commodity=&copyright=&cs=2780296150%2C3238121060&di=7609719975837696001&fr=click-pic&fromurl=https%253A%252F%252Fquanmin.baidu.com%252Fsv%253Fsource%253Dshare-h5%2526pd%253Dqm_share_search%2526vid%253D4436350164127362392&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fpic.rmb.bdstatic.com%252Fbjh%252Fdown%252FhO0sY8WK0iu0kDgOIxUwMg2d14cfa423dae4c7b9cb5e734fc3bb8d.jpg%253Ffor%253Dbg&os=2483536016%2C2128163499&pd=image_content&pi=0&pn=0&rn=1&simid=3942896313%2C471521849&tn=baiduimagedetail&width=0&word=%E9%87%91%E7%94%BA%E6%B9%BE%E6%B2%99%E6%BB%A9&z=",
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11783095040287354031&bdtype=0&commodity=&copyright=&cs=514181248%2C2567505609&di=7609719975837696001&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_5403848481826221216&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=4239234815%2C1974882880&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fgips0.baidu.com%252Fit%252Fu%253D514181248%252C2567505609%2526fm%253D3074%2526app%253D3074%2526f%253DJPEG&os=4239234815%2C1974882880&pd=image_content&pi=0&pn=2&rn=1&simid=514181248%2C2567505609&tn=baiduimagedetail&width=0&word=%E9%87%91%E7%94%BA%E6%B9%BE%E6%B2%99%E6%BB%A9&z=",
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11783095040287354031&bdtype=0&commodity=&copyright=&cs=1009727308%2C2407453405&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fwww.sohu.com%252Fa%252F795133573_100116740&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fq0.itc.cn%252Fq_70%252Fimages03%252F20240722%252F49beeca7cc054d2cad4fdf7fb31c8949.jpeg&os=1289611769%2C175509984&pd=image_content&pi=0&pn=8&rn=1&simid=1009727308%2C2407453405&tn=baiduimagedetail&width=0&word=%E9%87%91%E7%94%BA%E6%B9%BE%E6%B2%99%E6%BB%A9&z="
        ],
        rating: 4.8,
        timeRequired: 3,
        bestTime: "清晨5:30-6:30看日出，傍晚17:00-18:30看日落",
        tips: "做好防晒，带好墨镜、帽子、防晒霜、拖鞋、雨伞等；沙滩免费开放，停车方便"
    },
    {
        id: 2,
        name: "风帆礼堂",
        description: "纯白三角建筑坐落在海边，被称为广东版'阿那亚'，ins风拉满。前方水池和芦苇丛是拍摄倒影与人像的绝佳位置，日落时分拍照效果最佳。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11072345391968542403&bdtype=0&commodity=&copyright=&cs=142770245%2C775827503&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F326719710%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=2550700303%2C3828469291&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252FNXEqdaMuEmG6F31N2Wn5mL1RBf7XansLcBuR6rRc8IxNOjhI_EJzeBbPPYSwXW1h.jpg&os=2550700303%2C3828469291&pd=image_content&pi=0&pn=0&rn=1&simid=142770245%2C775827503&tn=baiduimagedetail&width=0&word=%E9%A3%8E%E5%B8%86%E7%A4%BC%E5%A0%82&z=",
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11072345391968542403&bdtype=0&commodity=&copyright=&cs=35934014%2C2659339164&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fwww.douyin.com%252Fnote%252F7515093418134392121&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=2129868672%2C1719738177&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fp3-pc-sign.douyinpic.com%252Ftos-cn-i-0813c000-ce%252FogfeaAA6hCTpaz8VJVLIANGRDKA2AhAQI6e94f~tplv-dy-aweme-images%253Aq75.webp&os=2129868672%2C1719738177&pd=image_content&pi=0&pn=3&rn=1&simid=35934014%2C2659339164&tn=baiduimagedetail&width=0&word=%E9%A3%8E%E5%B8%86%E7%A4%BC%E5%A0%82&z=",
        ],
        rating: 4.9,
        timeRequired: 1.5,
        bestTime: "上午10点前或下午4点后光线柔和，傍晚日落时分",
        tips: "礼堂外部免费拍照，内部需消费进入；建议穿浅色长裙拍照更出片"
    },
    {
        id: 3,
        name: "海边礁石",
        description: "黑色礁石群与海浪拍岸形成强烈对比，小众出片圣地，氛围感十足。退潮时可在礁石间寻找小螃蟹、海螺等海洋生物。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11709103830281677743&bdtype=0&commodity=&copyright=&cs=3771205053%2C2965985976&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F311954445%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=1616473455%2C3125096989&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252F__x1-pRE0Sb1fOrMyswsaPTSeJDqB4EFaZHz94Vcx5qpA0NbR3o9Zg6sbnk1iUqR.jpg&os=1616473455%2C3125096989&pd=image_content&pi=0&pn=0&rn=1&simid=3771205053%2C2965985976&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E6%B5%B7%E8%BE%B9%E7%A4%81%E7%9F%B3&z=",
        ],
        rating: 4.7,
        timeRequired: 2,
        bestTime: "退潮时段，下午3-5点光线最佳",
        tips: "礁石湿滑，务必穿防滑鞋；注意潮汐时间，涨潮前及时离开"
    },
    {
        id: 4,
        name: "鲸湾小镇",
        description: "海滨文艺小镇，蓝白色地中海风格建筑群，集网红餐厅、文创店、游乐设施于一体。有彩色摩天轮、旋转木马、小火车等娱乐项目。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=12143264808557010465&bdtype=0&commodity=&copyright=&cs=13174008%2C1913891018&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_4422497576239954143&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=0%2C0&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fse-feed-bucket.bj.bcebos.com%252Fproduce-record62709044_3%252Ffirst_1756660962&os=3643635540%2C567928440&pd=image_content&pi=0&pn=1&rn=1&simid=13174008%2C1913891018&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E9%B2%B8%E6%B9%BE%E5%B0%8F%E9%95%87&z=",
        ],
        rating: 4.6,
        timeRequired: 2.5,
        bestTime: "全天，傍晚灯光亮起更浪漫",
        tips: "游乐项目单独收费，可选择性体验；小镇内有多家海景咖啡馆"
    },
    {
        id: 5,
        name: "二马路美食街",
        description: "汕尾本地人的美食天堂，汇集了菜茶、薄饼、牛肉丸、生腌海鲜等地道小吃。晚上10点后夜市最热闹，是体验汕尾市井烟火气的绝佳去处。",
        weather: "rainy",
        category: "indoor",
        location: { lat: 22.7700, lng: 115.3650 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=8644950792052674641&bdtype=0&commodity=&copyright=&cs=3016559611%2C3337551667&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F229446145%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=1701266045%2C1905193327&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252FZDR4xDK9-knh-HiCE6CbM66DzhAdfOK4pQeiNW6GT5YjaU3rMQvCwWVaxj1PYUSK.jpg&os=1701266045%2C1905193327&pd=image_content&pi=0&pn=5&rn=1&simid=3016559611%2C3337551667&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E4%BA%8C%E9%A9%AC%E8%B7%AF%E7%BE%8E%E9%A3%9F%E8%A1%97&z=",

        ],
        rating: 4.7,
        timeRequired: 1.5,
        bestTime: "傍晚6点至凌晨2点",
        tips: "推荐菜粿、小米、牛肉饼、咸茶、生腌海鲜；人均30-50元可吃得很满足"
    },
    {
        id: 6,
        name: "红海湾",
        description: "汕尾标志性海湾，以'双色海'奇观闻名——东侧波涛汹涌，西侧风平浪静。曾是亚运会帆船赛场，沙滩干净细腻，海水澄澈如玻璃。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "http://www.baidu.com/baidu.php?url=0s0000aPch_Smgbn9XkL5Pk27yRNjnWbaz894XRiLeSjFEPA0BPhyEtKJJqVL10pXdYCLnXn7qUY0nwrHOEoTkq7NtiQDU1VaRTIXCkTRivkWjs_74N_tCpkQDU3oKWD-AIiUpUhW7rr9FIso1tWTJ3SUqgGIO23SI4MnCJlMn6jYFi3BE55NT0u6T-VBcr3TVUH8NZ24p4OgbhC1AsuByo04_qv.7R_NR2Ar5Od663DkI8jzWTBa9o86Hxk8vurMW8lUJYL_se8r45H_tX1klyyyUPSEEZPakX1Bswkq5NYrrZ-knNtISSEGl3lQngQBmoePOu8tXrHFEllGMmnxQBmo3vIMZu_tTMW3qXdrW6IPTk9SZx9SZksOj43xgF9qxU9tO9sSEVsSLW9SZ4mx5Iduxqjtx2MCCumLwnmxZds4nMZG_IjW9s4nhZWeT5Wl3ThwhA7va29Bs4nhZWeTrHF34PvOIkvTTrHF9zxj9zurdrW6IPIBs4nhZWeTrHFgbvTU5AEWYdePLW9zunrH3TrHFjn-h6OlD3_rHF93SLjbzNtTheugb_LyTISZFbs459s4nhJuvjZBs4nhZWeTrHFgk_err1u345Zks4nhZFtrZFbkYym_yZFbstxU9zu2S1xvUEZWbzUtrHF9zxj9zu5u6HPCs4nhZWeTrHF9SZx9SZksOj43xgF9qxU9tO9sSEVsSLW9SZ4mx5I9zun5Wt_rH3TrHFW9WHGs4nhZWeT5Wl3ThHih4SjH9zun5Zv3ThiqM76s4nhZFtrZFbWk32jrojbzmX5Vs4nbTTTIa9fCmThHjbSZjbznEEkmThHjkq8ZFbuuuuEEEEs4nhZFtrZFbhHfH7fXl2r9n1fHJYmThHjkq8ZFbhhhhWWWWs4nhZkSyZkSiknQjPakkzUSPp6.U1Yk0ZDqzTxr_oo_8J5n_6KY5TMZ1o2leQJW1XR0pyYqn1mL0ZNG5fKspyfqP0KWpyfqrjf0mhbqn10k0AuY5H00TA6qn0KET1Ys0AFL5H00UMfqn0K1XWY0ThIYmyTqn0K8IM0qna3snj0snj0sn0K-ThTqn0KYTh7buHYs0AFbpyfqrRDzwDR3P1c4PYfkfYNjPYu7rH7DwjmLnYnsPYn3nDf0uAPWujY0IA7zuvNY5Hm1g1KxnHRz0A71gv-bm1dsTzd8p6KWIyfqnW0snjbknHbLnsKEm1Yk0ATqILP8TsKETjDqnW030ZKsPjYkn0KzIjY4PjD0TgKGujYY0Z7WpyfqrHc0mycqn7ts0ZKs5H00Ugws5H00uAwETjYs0ZFJ5H00IZN15HDvPW6YnjTsPjm3rj04PWTLP1fd0A7W5HD0TA3qn0Ksmgwxuhk9u1Ys0Z7MIvfqn0K-TLfqn0K-IA-b5iYk0A71TAPW5H00IgKGUhPW5H00uhPdIjYs0A7buhk9u1Yk0ZIhThqV5fKBIjYs0A-W5H00ThNkIjYkP1TdnWm4njR4Pj030ZPGujY4mWw9PWRvm1u9P1fLnH0v0AqY5HD0ULFsIjYzc10WnWmWnBn1rjRzPW6srHc3c1mdnj0WPWRsna3sc1nWnBnsczYWna3sn1bdPHDWni3snj0snj0Wninsc108nj0snj0sc10Wnansc10Wn0KzIA7GujY0pvbqn0KVIjYzPjDs0AdW5H00UyPxuMFEUHYs0Aw9UMNBuNqsUA78pyw15H00mywkXHLFktlz88zlCtzz0A7bTgfqn0KGTvP_5H00TydY5H00mywxTvqdThP-5H0WcsKWThnqn16dPs&us=newvui&ai=0_2000911973_1_0&word=",
        ],
        rating: 4.8,
        timeRequired: 3,
        bestTime: "清晨看日出，下午4点后看'双色海'对比",
        tips: "门票16元/人；游泳前查看沙滩旗子，绿旗允许游泳；注意防晒"
    },
    {
        id: 7,
        name: "海上古堡",
        description: "电影《四海》同款取景地，原为1970年代废弃的潮汐发电站试验塔。红褐色废墟建筑矗立海边，海浪猛烈拍打礁石，形成独特的'废墟美学'景观。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11815781210112387073&bdtype=0&commodity=&copyright=&cs=36918406%2C886143701&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F332283625%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=1794962918%2C3704965742&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252Fb1lP5v8cJRQs7Leks2bEvoOyw3KZjh56UXehpMrRuCHuTEUwe6AXdZIGa6qWVvsc.jpg&os=1794962918%2C3704965742&pd=image_content&pi=0&pn=0&rn=1&simid=36918406%2C886143701&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E6%B5%B7%E4%B8%8A%E5%8F%A4%E5%A0%A1&z=",

        ],
        rating: 4.9,
        timeRequired: 2,
        bestTime: "上午10点前或下午3-5点，傍晚看日落",
        tips: "免费参观；礁石区湿滑，穿防滑鞋；古堡咖啡低消28元可进入拍照"
    },
    {
        id: 8,
        name: "石群岛",
        description: "新晋网红观海点，由形态各异的礁石群组成，设有观景台和栈道。站在观景台上可360度无死角欣赏海景，是看日出日落的绝佳位置。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11529686579489889823&bdtype=0&commodity=&copyright=&cs=3771205053%2C2965985976&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F311954445%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=1616473455%2C3125096989&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252F__x1-pRE0Sb1fOrMyswsaPTSeJDqB4EFaZHz94Vcx5qpA0NbR3o9Zg6sbnk1iUqR.jpg&os=1616473455%2C3125096989&pd=image_content&pi=0&pn=0&rn=1&simid=3771205053%2C2965985976&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E6%B5%B7%E7%9F%B3%E7%BE%A4%E5%B2%9B&z=",
        ],
        rating: 4.6,
        timeRequired: 1.5,
        bestTime: "上午8-10点或下午4-6点光线柔和",
        tips: "免费参观；礁石区拍照注意安全；附近有石群岛咖啡馆可休息"
    },
    {
        id: 9,
        name: "海上公路",
        description: "全长约5公里的笔直海上公路，连接红海湾与风车岛。公路两侧海水颜色截然不同，形成独特的'双色海'景观，被誉为'汕尾最美海景公路'。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11130565924376430882&bdtype=0&commodity=&copyright=&cs=3624917847%2C3350087085&di=7594134398513971201&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_6020120123630916090&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=3542840523%2C284907683&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Faigc-image.bj.bcebos.com%252Fmiaobi%252F5mao%252Fb%2525275rW35LiK5YWs6LevXzE3MjQ3MTAzNzcuNzAyMzMz%252527%252F0.png&os=3542840523%2C284907683&pd=image_content&pi=0&pn=0&rn=1&simid=4279346895%2C801509249&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E6%B5%B7%E4%B8%8A%E5%85%AC%E8%B7%AF&z=",
        ],
        rating: 4.7,
        timeRequired: 1,
        bestTime: "全天，傍晚日落时分最美",
        tips: "免费通行；可在安全区域停车拍照；注意来往车辆"
    },
    {
        id: 10,
        name: "风车岛",
        description: "岛上耸立着数十座高达15层楼的白色风力发电机，与蔚蓝大海构成动漫般场景。有浅水湾、浮日湾等沙滩，适合骑行、赶海、看日落。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8200, lng: 115.4200 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=8893533801222224465&bdtype=0&commodity=&copyright=&cs=2031497418%2C2874753323&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fmbd.baidu.com%252Fnewspage%252Fdata%252Fdtlandingsuper%253Fnid%253Ddt_4478789002304525036&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=208955704%2C820481049&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fmiaobi-lite.bj.bcebos.com%252Fmiaobi%252F5mao%252Fb%252527LV8xNzMzMDk3MjkxLjMwNTU4Ng%25253D%25253D%252527%252F0.png%253Fauthorization%253Dbce-auth-v1%25252FALTAKmda7zOvhZVbRzBLewvCMU%25252F2024-12-01T23%25253A54%25253A52Z%25252F-1%25252F%25252F26cf0869115856a67e6ced9baabc7c0cb8ad9940df17dde785d1eaa77b85e239&os=208955704%2C820481049&pd=image_content&pi=0&pn=0&rn=1&simid=2031497418%2C2874753323&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E9%A3%8E%E8%BD%A6%E5%B2%9B&z=",
        ],
        rating: 4.6,
        timeRequired: 2,
        bestTime: "全天，下午3-5点光线最佳",
        tips: "自驾最佳，可随时停车拍照；岛上商业设施较少，建议自备零食饮料"
    },
    {
        id: 11,
        name: "浮日湾",
        description: "断崖海景与白色栈道相结合，可270度欣赏海景。退潮时露出镜面沙滩，可拍摄天空之镜效果。日落时分，夕阳将海面染成金色，浪漫至极。",
        weather: "sunny",
        category: "outdoor",
        location: { lat: 22.8105, lng: 115.4032 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=11460823560625808893&bdtype=0&commodity=&copyright=&cs=1812036797%2C4175471554&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F299754691%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=1479096976%2C1231697068&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252FthnsOiLnL1XX6pHUdUCNov5kE452j4EZoG32y7D4hLk92faX8g0k5ubYfWaN-I9A.jpg&os=1479096976%2C1231697068&pd=image_content&pi=0&pn=1&rn=1&simid=1812036797%2C4175471554&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E6%B5%AE%E6%97%A5%E6%B9%BE&z=",
        ],
        rating: 4.7,
        timeRequired: 2,
        bestTime: "退潮时段，傍晚日落时分",
        tips: "免费参观；礁石区湿滑注意安全；附近有浮日湾咖啡馆可休息观景"
    },
    {
        id: 12,
        name: "汕尾市博物馆",
        description: "了解汕尾历史文化、民俗风情的室内场馆。设有'海陆丰韵'历史文化展和'守艺创新'传统工艺美术展，是雨天绝佳避雨+文化打卡地。",
        weather: "rainy",
        category: "indoor",
        location: { lat: 22.7850, lng: 115.3750 },
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=10195648550032941895&bdtype=0&commodity=&copyright=&cs=683507498%2C4206518378&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F315634147%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=189608973%2C322123025&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252FPh4uiSZ_AJQGKJDJXc3DVsxMYJcXwgM_enEHJhyNYISv-GHOx_pUinGa_Fy-bwpn.jpg&os=189608973%2C322123025&pd=image_content&pi=0&pn=8&rn=1&simid=683507498%2C4206518378&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E5%8D%9A%E7%89%A9%E9%A6%86&z=",

        ],
        rating: 4.3,
        timeRequired: 1.5,
        bestTime: "周二至周日9:30-17:30",
        tips: "免费参观，周一闭馆；个人无需预约，团队需提前3-4天电话预约"
    }
];

    foodData = [
    // 肠粉类
    {
        id: 1,
        name: "昇旺肠粉",
        description: "汕尾本地人推荐的肠粉店，肠粉皮薄滑嫩，配料丰富，酱汁鲜美。",
        category: "street",
        rating: 4.8,
        stars: 5,
        price: "¥8-15",
        images: [
            "https://qcloud.dpfile.com/pc/9Bhpytwd1CPsgTX81aU3NSGYA6_VtN9BIewWtEsIS_G-wihYSSuJ4pL6rUCMV-Z2Y0q73sB2DyQcgmKUxZFQtw.jpg",
        ],
        tags: ["肠粉", "早餐", "本地推荐"],
        location: "新城路",
        bestTime: "早餐时段",
        tips: "本地人常去的肠粉店，建议搭配店内自制辣椒酱"
    },
    {
        id: 2,
        name: "宝木肠粉",
        description: "二马路知名肠粉店，肠粉口感Q弹，内馅丰富多样。",
        category: "street",
        rating: 4.7,
        stars: 5,
        price: "¥8-12",
        images: [
            "https://pics0.baidu.com/feed/aa18972bd40735fac4b4fd33fd7dd8a30e2408b4.jpeg?token=743315e84c63af6b099ad0ad519f68b3"
        ],
        tags: ["肠粉", "二马路", "老字号"],
        location: "二马路",
        bestTime: "早餐、夜宵",
        tips: "24小时营业，夜宵好选择"
    },
    {
        id: 3,
        name: "苏记肠粉",
        description: "渔村大路的老字号肠粉，传统手法制作，味道正宗。",
        category: "street",
        rating: 4.6,
        stars: 4,
        price: "¥7-12",
        images: [
            "https://qcloud.dpfile.com/pc/qRbpAJwdsGclgbGDRycQdQLHabjuI9IyloLCpKueZZRabRck_eWRFO7xrEMzPShBY0q73sB2DyQcgmKUxZFQtw.jpg"
        ],
        tags: ["肠粉", "传统", "老店"],
        location: "渔村大路",
        bestTime: "早餐",
        tips: "传统工艺制作，肠粉口感特别"
    },

    // 薄饼类
    {
        id: 4,
        name: "林舜杰薄饼",
        description: "新城路薄饼老店，薄饼外酥内软，馅料多样可选择。",
        category: "street",
        rating: 4.7,
        stars: 5,
        price: "¥15-25",
        images: [
            "https://pics1.baidu.com/feed/d8f9d72a6059252d44d93a1d44cf3c2a5ab5b946.jpeg@f_auto?token=f73a7da699cbe8556d573c4422c10db7"
        ],
        tags: ["薄饼", "特色小吃", "老字号"],
        location: "新城路",
        bestTime: "全天",
        tips: "有甜咸两种口味，可现场观看制作过程"
    },
    {
        id: 5,
        name: "汕中路口薄饼",
        description: "二马路热门薄饼店，现点现做，香脆可口。",
        category: "street",
        rating: 4.6,
        stars: 5,
        price: "¥12-20",
        images: [
            "https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&cl=2&cm=1&sc=0&sa=vs_ala_img_datu&lm=-1&ie=utf8&pn=0&rn=1&di=7620110360720179201&ln=0&word=%E6%B1%95%E5%B0%BE%E6%B1%95%E4%B8%AD%E8%B7%AF%E5%8F%A3%E8%96%84%E9%A5%BC&os=3086646510,681624425&cs=1723650547,4055565532&objurl=http%3A%2F%2Fgips2.baidu.com%2Fit%2Fu%3D1723650547%2C4055565532%26fm%3D3074%26app%3D3074%26f%3DJPEG%3Fw%3D1080%26h%3D1409%26type%3Dnormal%26func%3D&bdtype=0&simid=1723650547,4055565532&pi=0&adpicid=0&timingneed=&spn=0&is=3086646510,681624425&lid=edc47cde0045171c"
        ],
        tags: ["薄饼", "现做", "网红店"],
        location: "二马路",
        bestTime: "下午、晚上",
        tips: "高峰期需排队，建议错峰购买"
    },

    // 粿类
    {
        id: 6,
        name: "源记菜粿",
        description: "二马路老牌菜粿店，皮薄馅多，口感软糯，有多种口味选择。",
        category: "street",
        rating: 4.8,
        stars: 5,
        price: "¥10-20",
        images: [
            "https://pics0.baidu.com/feed/838ba61ea8d3fd1f723ebcc94fb9f30f94ca5f11.jpeg?token=1f50b0954ac155069b36906198e01b6f"
        ],
        tags: ["菜粿", "传统小吃", "老字号"],
        location: "二马路",
        bestTime: "早餐、下午茶",
        tips: "汕尾特色小吃，必尝！推荐菜粿、小米、牛肉饼"
    },
    {
        id: 7,
        name: "德明菜粿",
        description: "二马路知名菜粿店，口味传统正宗，深受本地人喜爱。",
        category: "street",
        rating: 4.7,
        stars: 5,
        price: "¥8-15",
        images: [
            "https://qcloud.dpfile.com/pc/XPu-araCAsB_m-Y-_fQtTjCuafqTkAc4A55VDs63AK5HOqNDvnzVvo2isJ4mO3YoY0q73sB2DyQcgmKUxZFQtw.jpg"
        ],
        tags: ["菜粿", "地道", "小吃"],
        location: "二马路",
        bestTime: "全天",
        tips: "搭配店里自制的蒜蓉辣椒酱更美味"
    },

    // 早茶
    {
        id: 8,
        name: "海珍迎囍皇宫",
        description: "明珠广场的大型酒楼，粤式早茶正宗，环境优雅，点心丰富多样。",
        category: "dimsum",
        rating: 4.5,
        stars: 4,
        price: "¥50-100/人",
        images: [
            "https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&cl=2&cm=1&sc=0&sa=vs_ala_img_datu&lm=-1&ie=utf8&pn=4&rn=1&di=7620110360720179201&ln=0&word=%E6%B1%95%E5%B0%BE%E6%B5%B7%E7%8F%8D%E8%BF%8E%E5%9B%8D%E7%9A%87%E5%AE%AB&os=1144680051,3694866870&cs=1071126532,3437413952&objurl=http%3A%2F%2Fp3-pc-sign.douyinpic.com%2Ftos-cn-i-0813%2Focf2VANnkCrXVMneDAA63AEaAAtXb14gH9IaDu%7Etplv-dy-aweme-images%3Aq75.webp%3Fbiz_tag%3Daweme_images%26from%3D3213915784%26s%3DPackSourceEnum_SEO%26sc%3Dimage%26se%3Dfalse%26x-expires%3D1719133200%26x-signature%3DxYGxoQR4joULpbBBRkXgGrlwm7o%253D&bdtype=0&simid=1071126532,3437413952&pi=0&adpicid=0&timingneed=&spn=0&is=0,0&lid=9552c102003d3777"
        ],
        tags: ["早茶", "酒楼", "点心"],
        location: "明珠广场",
        bestTime: "早茶时段7:00-11:00",
        tips: "适合家庭聚餐，节假日建议提前预订"
    },

    // 正餐类
    {
        id: 9,
        name: "阿佳牛腩火锅",
        description: "牛肉新鲜现切，锅底选择多样，牛肉丸劲道。",
        category: "hotpot",
        rating: 4.7,
        stars: 5,
        price: "¥80-150/人",
        images: [
            "https://dimg04.c-ctrip.com/images/1me3v12000klfnemy232D.jpg_.webp?proc=source/tripcommunity&_fr=wc"
        ],
        tags: ["牛肉火锅", "新鲜", "潮汕风味"],
        location: "近二马路",
        bestTime: "晚餐",
        tips: "牛肉现切，新鲜度有保障"
    },
    {
        id: 10,
        name: "阿溪牛腩火锅",
        description: "牛肉鲜美，汤底浓郁。",
        category: "hotpot",
        rating: 4.6,
        stars: 4,
        price: "¥70-120/人",
        images: [
            "https://dimg04.c-ctrip.com/images/1me6b12000fo42fiu461D.jpg_.webp?proc=source/tripcommunity&_fr=wc"
        ],
        tags: [ "火锅", "特色"],
        location: "品清大道附近",
        bestTime: "晚餐",
        tips: "火锅，值得一试"
    },

    // 汤粉粥类
    {
        id: 11,
        name: "东渔市海鲜粥",
        description: "二马路海鲜粥店，新鲜海鲜现煮，粥底绵密鲜美。",
        category: "noodles",
        rating: 4.6,
        stars: 5,
        price: "¥20-50",
        images: [
            "https://dimg04.c-ctrip.com/images/1me5s12000o6kt6b4DE65.jpg_.webp?proc=source/tripcommunity&_fr=wc"
        ],
        tags: ["海鲜粥", "夜宵", "二马路"],
        location: "二马路",
        bestTime: "夜宵时段",
        tips: "夜宵好选择，海鲜新鲜"
    },
    {
        id: 12,
        name: "鲍鱼海鲜粿条汤",
        description: "盐町头特色粿条汤，配料丰富，汤头鲜美。",
        category: "noodles",
        rating: 4.5,
        stars: 4,
        price: "¥25-40",
        images: [
            "https://pics0.baidu.com/feed/622762d0f703918f175c8b6ec353449858eec407.jpeg?token=680701ceb8d678441fbb4002c3c5cb4f"
        ],
        tags: ["粿条汤", "海鲜", "地道"],
        location: "盐町头",
        bestTime: "午餐、晚餐",
        tips: "汤头鲜美，海鲜料足"
    },

    // 甜品饮品
    {
        id: 13,
        name: "杯杯鲜",
        description: "汕尾必喝果汁店，平价好喝，水果现榨，无添加糖，推荐西瓜汁、芒果百香果、菠萝橙汁。",
        category: "dessert",
        rating: 4.9,
        stars: 5,
        price: "¥8-15",
        images: [
            "https://qcloud.dpfile.com/pc/3q6mqUy9f3EQ7lHoENJd7M1QBXcRB0kHx5F4TB5bArDT4M1BstNqvwVwOrVUH04BY0q73sB2DyQcgmKUxZFQtw.jpg"
        ],
        tags: ["果汁", "饮品", "必喝"],
        location: "三马路（分店众多，推荐二马路211号）",
        bestTime: "全天",
        tips: "分店众多，推荐二马路211号老字号店，一天可喝四杯不重样"
    },
    {
        id: 14,
        name: "翁林甜品",
        description: "城内路老字号甜品店，传统广式糖水，味道正宗。",
        category: "dessert",
        rating: 4.6,
        stars: 5,
        price: "¥10-25",
        images: [
            "https://qcloud.dpfile.com/pc/7GLolITtYJstMRVZ3p9fQknnnIKHhRx_H4UXJtfMjxEH77Qt6anS2dN5bRtiRfXZY0q73sB2DyQcgmKUxZFQtw.jpg"
        ],
        tags: ["甜品", "糖水", "老字号"],
        location: "城内路",
        bestTime: "下午、晚上",
        tips: "传统广式糖水，解暑佳品"
    },
    {
        id: 15,
        name: "老吕豆花",
        description: "文明北路传统豆花店，豆花细腻，可选甜咸口味。",
        category: "dessert",
        rating: 4.5,
        stars: 4,
        price: "¥5-10",
        images: [
            "https://pics0.baidu.com/feed/9825bc315c6034a85743c90b17d93a5b0b2376f4.jpeg?token=6d070640aa346e363632d82c2b99cb04"
        ],
        tags: ["豆花", "甜品", "传统"],
        location: "文明北路",
        bestTime: "下午",
        tips: "豆花口感细腻，传统做法"
    },

    // 网红推荐店铺
    {
        id: 16,
        name: "二马路姐姐蚵仔煎",
        description: "位于阿姐生腌店内，蚵仔煎外酥内嫩，蚵仔新鲜饱满，吃一次就爱上。",
        category: "street",
        rating: 4.8,
        stars: 5,
        price: "¥25",
        images: [
            "https://pics0.baidu.com/feed/9213b07eca806538edd01cb00f39c34bac34824b.jpeg?token=8c97a04d5c6c8666dca7f97f77dc018b"
        ],
        tags: ["蚵仔煎", "网红", "二马路"],
        location: "二马路阿姐生腌店内",
        bestTime: "晚餐、夜宵",
        tips: "位于阿姐生腌店内，一份25元，味道惊艳"
    },
    {
        id: 17,
        name: "府城汕尾腐乳鸡翅",
        description: "二马路分店众多，腐乳香味浓郁，外皮酥脆，内里多汁。",
        category: "street",
        rating: 4.7,
        stars: 5,
        price: "¥9.8/只（团购更划算）",
        images: [
            "https://dimg04.c-ctrip.com/images/1me0e12000jzy586l6A48.jpg_.webp?proc=source/tripcommunity&_fr=wc"
        ],
        tags: ["腐乳鸡翅", "小吃", "二马路"],
        location: "二马路（多家分店）",
        bestTime: "全天",
        tips: "现场买9.8元一只，团购两只或三只更划算，三只最划算"
    },
    {
        id: 18,
        name: "汕中海鲜捞面",
        description: "刀削面和捞面均为25元一份，海鲜料足，个人更喜欢刀削面的口感。",
        category: "noodles",
        rating: 4.6,
        stars: 5,
        price: "¥25",
        images: [
            "https://pics7.baidu.com/feed/adaf2edda3cc7cd9c617e35a9c92862fb90e919b.jpeg@f_auto?token=8b180e5f8df45370413ab05525635257"
        ],
        tags: ["海鲜面", "捞面", "刀削面"],
        location: "二马路",
        bestTime: "午餐、晚餐",
        tips: "推荐刀削面，口感更佳，海鲜料足"
    },
    {
        id: 19,
        name: "二马路阿嬷的味道",
        description: "芋泥香酥鸭22元一份，甜咸口味，芋泥绵绵，内有鸭肉。芋泥饼味道不错，有咸蛋黄口味可选。",
        category: "restaurant",
        rating: 4.0,
        stars: 3,
        price: "¥18-22",
        images: [
            "https://pics0.baidu.com/feed/d52a2834349b033b3db35681bb5494ddd439bddf.jpeg?token=e73b222d453be0fd58cd749df7532339"
        ],
        tags: ["创意菜", "芋泥", "网红店"],
        location: "二马路",
        bestTime: "全天",
        tips: "芋泥香酥鸭味道一般，芋泥饼不错，团购更便宜（18元四个）"
    },
    {
        id: 20,
        name: "红海湾阿察湿辣牛肉",
        description: "最爱香菜牛肉，香菜在嘴里直接爆汁，超好吃。上菜很快，烤得很快，半小时就能吃完。",
        category: "bbq",
        rating: 4.8,
        stars: 5,
        price: "¥70-80/人",
        images: [
            "https://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&cl=2&cm=1&sc=0&sa=vs_ala_img_datu&lm=-1&ie=utf8&pn=6&rn=1&di=7620110360720179201&ln=0&word=%E7%BA%A2%E6%B5%B7%E6%B9%BE%E9%98%BF%E5%AF%9F%E6%B9%BF%E8%BE%A3%E7%89%9B%E8%82%89&os=1160919142,1391050407&cs=1959120904,1259142090&objurl=http%3A%2F%2Fp0.meituan.net%2Fbiztone%2F392f5bc1267524d56bb7dd97fde438532170461.jpg%2540watermark%253D0&bdtype=0&simid=1959120904,1259142090&pi=0&adpicid=0&timingneed=&spn=0&is=1160919142,1391050407&lid=b480eb13009e6fd1"
        ],
        tags: ["烧烤", "湿辣牛肉", "红海湾"],
        location: "红海湾",
        bestTime: "晚餐、夜宵",
        tips: "推荐香菜牛肉，现场点餐比团购更灵活，荤类多素类少"
    },
    {
        id: 21,
        name: "红海湾海边路蚝仔烙",
        description: "海边路夫妻店，紫菜蚝烙意外的好吃，蚝仔新鲜。",
        category: "seafood",
        rating: 4.7,
        stars: 5,
        price: "¥20-30",
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=10979875643733127192&bdtype=0&commodity=&copyright=&cs=558666242%2C4276758041&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F302194442%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=3616060798%2C3678178594&isImgSet=&latest=&lid=a64566fb0084591a&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252Fr4Xl4k2pkMlxFD63m0JVNqdLPpla40QF_4EFqH8Vqgw0uBaAdUJKEuvovhEncoO8.jpg&os=3616060798%2C3678178594&pd=image_content&pi=0&pn=1&rn=1&simid=558666242%2C4276758041&tn=baiduimagedetail&width=0&word=%E7%BA%A2%E6%B5%B7%E6%B9%BE%E6%B5%B7%E8%BE%B9%E8%B7%AF%E8%9A%9D%E4%BB%94%E7%83%99&z="
        ],
        tags: ["蚝仔烙", "海鲜", "海边小吃"],
        location: "红海湾海边路",
        bestTime: "全天",
        tips: "店名不详，是夫妻和女儿开的小店，紫菜蚝烙很有特色"
    },
    {
        id: 22,
        name: "锋记潮汕美食",
        description: "芥兰牛肉盖饭更多汁下饭，但味道没有酸菜牛肉盖饭好。汤好喝，牛丸劲道。",
        category: "restaurant",
        rating: 4.5,
        stars: 4,
        price: "¥28.9（团购价）",
        images: [
            "https://qcloud.dpfile.com/pc/cpnAz5d9VhgTz894TUZow6hTkNpM-8CGllHidQntGMVmEW2sFeaPPrN-mLIZjIucY0q73sB2DyQcgmKUxZFQtw.jpg"
        ],
        tags: ["潮汕美食", "盖饭", "快餐"],
        location: "二马路附近",
        bestTime: "午餐、晚餐",
        tips: "团购划算，28.9元一个盖饭+牛肉丸汤小份"
    },
    {
        id: 23,
        name: "东顺牛腩火锅",
        description: "肉眼可见的新鲜！",
        category: "hotpot",
        rating: 4.8,
        stars: 5,
        price: "¥60-100/人",
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=8570248498770399831&bdtype=0&commodity=&copyright=&cs=3338824998%2C1456012756&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F322300503%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=1591457846%2C943630545&isImgSet=&latest=&lid=720d4f562d6d37d0&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252FyjUI-IKrXlwNIdvbc6Dpy7e3oObK_ESckf7oFmaI6fr3cN6frEosv_Cqs6GI8sKO.jpg&os=1591457846%2C943630545&pd=image_content&pi=0&pn=1&rn=1&simid=3338824998%2C1456012756&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E4%B8%9C%E9%A1%BA%E7%89%9B%E8%85%A9%E7%81%AB%E9%94%85&z="
        ],
        tags: ["牛肉火锅", "新鲜", "团购"],
        location: "品清大道附近",
        bestTime: "晚餐",
        tips: "强烈推荐提前购买团购套餐，性价比极高"
    },
    {
        id: 24,
        name: "荣泰市场大门口张记卷粉",
        description: "10元四条，12元五条，口味很多：香菇肉沫、豆角肉沫、酸菜肉沫、韭菜肉沫、玉米胡萝卜。个人最喜欢香菇肉沫，很香！",
        category: "street",
        rating: 4.7,
        stars: 5,
        price: "¥10-12",
        images: [
            "https://image.baidu.com/search/detail?adpicid=0&b_applid=8678437109526904490&bdtype=0&commodity=&copyright=&cs=1754945701%2C4000573224&di=7620110360720179201&fr=click-pic&fromurl=http%253A%252F%252Fm.dianping.com%252Fugcdetail%252F287465897%253FsceneType%253D0%2526bizType%253D29%2526msource%253Dbaiduappugc&gsm=1e&hd=&height=0&hot=&ic=&ie=utf-8&imgformat=&imgratio=&imgspn=0&is=825226198%2C1043477559&isImgSet=&latest=&lid=&lm=&objurl=https%253A%252F%252Fqcloud.dpfile.com%252Fpc%252FoVTFFghsFmfPhNmIok59F3zlYMGuo0u9x9MNDuAYwR3ilxcLF3tBS7MeP88pCKDF.jpg&os=825226198%2C1043477559&pd=image_content&pi=0&pn=0&rn=1&simid=1754945701%2C4000573224&tn=baiduimagedetail&width=0&word=%E6%B1%95%E5%B0%BE%E8%8D%A3%E6%B3%B0%E5%B8%82%E5%9C%BA%E5%A4%A7%E9%97%A8%E5%8F%A3%E5%BC%A0%E8%AE%B0%E5%8D%B7%E7%B2%89&z="
        ],
        tags: ["卷粉", "早餐", "市场小吃"],
        location: "二马路荣泰市场大门口",
        bestTime: "早餐、午餐",
        tips: "口味多样，推荐香菇肉沫口味"
    },
    {
        id: 25,
        name: "汕尾丽姐粿条汤",
        description: "通港路中段老字号粿条汤，汤头鲜美，配料丰富。",
        category: "noodles",
        rating: 4.5,
        stars: 4,
        price: "¥15-25",
        images: [
            "https://pics0.baidu.com/feed/f703738da9773912b5a24cffb49b3c17377ae23e.jpeg?token=8807dea0191f9ca08cf0e17fa256eff8"
        ],
        tags: ["粿条汤", "老字号", "汤粉"],
        location: "通港路中段",
        bestTime: "早餐、午餐",
        tips: "汤头鲜美，配料可自选"
    },
    {
        id: 26,
        name: "品福牛肉火锅",
        description: "牛肉是肉眼可见的新鲜！",
        category: "hotpot",
        rating: 4.8,
        stars: 5,
        price: "¥60-100/人",
        images: [
            "https://qcloud.dpfile.com/pc/8MEogb17yNs1ztsNSdv3RUbN5qemBlM6eb2DIQcPA_MVJxl9_3y-lsdYPSYPVgdvY0q73sB2DyQcgmKUxZFQtw.jpg"
        ],
        tags: ["牛肉火锅", "新鲜"],
        location: "文明北路",
        bestTime: "晚餐",
        tips: "十几年老店，特别新鲜"
    },
    {
        id: 27,
        name: "阿荣牛腩火锅",
        description: "牛肉巨嫩巨入味！",
        category: "hotpot",
        rating: 4.8,
        stars: 5,
        price: "¥60-100/人",
        images: [
            "https://pics0.baidu.com/feed/e4dde71190ef76c6aeb4996d4feaa4ebae51671b.jpeg?token=a8c5bbeae29df7399040d8030f68fa70"
        ],
        tags: ["牛肉火锅", "新鲜"],
        location: "红海西路",
        bestTime: "晚餐",
        tips: "性价比超高"
    },
    {
        id: 28,
        name: "丰富大排档",
        description: "很出名的大排档，但人很多",
        category: "restaurant",
        rating: 4.8,
        stars: 5,
        price: "¥60-100/人",
        images: [
            "https://dimg04.c-ctrip.com/images/1me5x12000kfpcezk90A5.jpg_.webp?proc=source/tripcommunity&_fr=wc"
        ],
        tags: ["大排档", "新鲜"],
        location: "连锁店",
        bestTime: "晚餐",
        tips: "性价比超高"
    },
    {
        id: 29,
        name: "汕海渔港",
        description: "味道好，应该不错，推荐椒盐九肚鱼，炒米粉，炒花蟹，海鲜粥等",
        category: "restaurant",
        rating: 4.8,
        stars: 5,
        price: "¥60-100/人",
        images: [
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        tags: ["大排档", "新鲜"],
        location: "二马路",
        bestTime: "晚餐",
        tips: "性价比超高"
    },
    {
        id: 30,
        name: "新名园",
        description: "明码标价，适合聚会",
        category: "restaurant",
        rating: 4.8,
        stars: 5,
        price: "¥60-100/人",
        images: [
            "https://pics0.baidu.com/feed/b8389b504fc2d562dd551e66bc4d48ff77c66c4d.jpeg?token=374b809d8254b3974edd39be64d3543f"
        ],
        tags: ["大排档", "新鲜"],
        location: "红海西路",
        bestTime: "晚餐",
        tips: "性价比超高"
    },
    {
        id: 31,
        name: "景记甜品",
        description: "文明北路传统豆花店，豆花细腻，可选甜咸口味。",
        category: "dessert",
        rating: 4.5,
        stars: 4,
        price: "¥5-10",
        images: [
            "https://pics0.baidu.com/feed/35a85edf8db1cb1363039d95a63e304193584b43.jpeg?token=0b5356c0fa9b3aaa5d7d1fcbd6c7aa0d"
        ],
        tags: ["豆花", "甜品", "传统"],
        location: "二马路",
        bestTime: "下午",
        tips: "豆花口感细腻，传统做法"
    },
    {
        id: 32,
        name: "吉祥大排档",
        description: "很出名的大排档，但人很多",
        category: "restaurant",
        rating: 4.8,
        stars: 5,
        price: "¥60-100/人",
        images: [
            "https://qcloud.dpfile.com/pc/gemeW_RZPLV07D9QaujgYhMPEdSzqQ_gn0WCm6ttewN3_H6z7WaA1RstgkKIzPnBY0q73sB2DyQcgmKUxZFQtw.jpg"
        ],
        tags: ["大排档", "新鲜"],
        location: "二马路",
        bestTime: "晚餐",
        tips: "性价比超高"
    },
];

// 美食分类标签
foodCategories = [
    { id: "street", name: "街头小吃", icon: "fas fa-utensils", count: 8 },
    { id: "dessert", name: "甜品饮品", icon: "fas fa-ice-cream", count: 4 },
    { id: "noodles", name: "汤粉粥类", icon: "fas fa-bowl-food", count: 4 },
    { id: "hotpot", name: "火锅", icon: "fas fa-hotdog", count: 3 },
    { id: "dimsum", name: "早茶", icon: "fas fa-mug-hot", count: 1 },
    { id: "bbq", name: "烧烤", icon: "fas fa-fire", count: 1 },
    { id: "seafood", name: "海鲜", icon: "fas fa-fish", count: 2 },
    { id: "restaurant", name: "正餐", icon: "fas fa-utensil-spoon", count: 3 }
];


    itineraryData = {
    // Day 0: 4月4日 抵达日
    day0: [
        {
            time: "21:30",
            title: "广州新塘站出发",
            description: "乘坐高铁G6345次前往汕尾站，全程约1小时",
            type: "transport",
            duration: 1,
            tips: "建议提前30分钟到达车站，携带身份证，提前购票"
        },
        {
            time: "22:30",
            title: "抵达汕尾站",
            description: "出站后打车前往金町湾住宿地，车程约30分钟",
            type: "checkin",
            duration: 0.5,
            tips: "可提前在打车软件预约接站，避免排队等待"
        },
        {
            time: "23:00",
            title: "入住金町湾民宿/酒店",
            description: "办理入住，安顿行李，休息准备明日行程",
            type: "rest",
            duration: 1,
            tips: "建议选择金町湾海景房，方便第二天游玩"
        }
    ],
    
    // Day 1: 4月5日 金町湾片区
    day1: [
        {
            time: "08:00",
            title: "早餐时间",
            description: "在民宿附近用早餐，品尝本地肠粉或海鲜粥",
            type: "food",
            duration: 1,
            foodRecommendation: "肠粉、海鲜粥、菜粿",
            tips: "推荐附近肠粉店：宝木肠粉、苏记肠粉"
        },
        {
            time: "09:00",
            title: "金町湾沙滩",
            description: "7公里月牙白沙滩漫步，踩水玩沙，欣赏海景",
            type: "attraction",
            duration: 1.5,
            location: "金町湾沙滩",
            tips: "做好防晒，穿拖鞋方便玩水，可带沙滩垫休息"
        },
        {
            time: "10:30",
            title: "风帆礼堂拍照",
            description: "参观纯白色风帆礼堂，ins风建筑拍照打卡",
            type: "attraction",
            duration: 1,
            location: "风帆礼堂",
            tips: "最佳拍照时间上午光线好，礼堂前水池可拍倒影"
        },
        {
            time: "11:30",
            title: "海边礁石探索",
            description: "黑礁石区拍照，寻找小螃蟹、贝壳，看海浪拍岸",
            type: "attraction",
            duration: 1,
            location: "金町湾礁石区",
            tips: "礁石湿滑，注意安全，退潮时更有趣"
        },
        {
            time: "12:30",
            title: "午餐 - 海鲜大餐",
            description: "在金町湾附近享用新鲜海鲜午餐",
            type: "food",
            duration: 1.5,
            foodRecommendation: "清蒸海鱼、椒盐皮皮虾、蒜蓉粉丝蒸扇贝",
            tips: "推荐金町湾海鲜餐厅，人均80-120元"
        },
        {
            time: "14:00",
            title: "鲸湾小镇游览",
            description: "文艺小镇散步，打卡网红装置，摩天轮拍照",
            type: "attraction",
            duration: 1.5,
            location: "鲸湾小镇",
            tips: "小镇内有咖啡馆可休息，摩天轮可付费体验"
        },
        {
            time: "15:30",
            title: "海岸钢琴打卡",
            description: "海边白色钢琴拍照，文艺氛围十足",
            type: "attraction",
            duration: 0.5,
            location: "金町湾海岸钢琴",
            tips: "穿浅色长裙拍照效果更佳"
        },
        {
            time: "16:00",
            title: "自由活动/海滩休闲",
            description: "可选择沙滩躺椅休息、玩水或拍照",
            type: "free",
            duration: 2,
            tips: "可租用沙滩椅，享受海边休闲时光"
        },
        {
            time: "18:00",
            title: "二马路美食街晚餐",
            description: "打车前往二马路，品尝汕尾特色小吃",
            type: "food",
            duration: 2,
            location: "二马路美食街",
            foodRecommendation: "杯杯鲜果汁、腐乳鸡翅、菜粿、生腌海鲜、海鲜粥",
            tips: "二马路晚上6点后最热闹，建议从街头吃到街尾"
        },
        {
            time: "20:00",
            title: "夜游二马路/购物",
            description: "继续探索美食，购买特产，感受夜市氛围",
            type: "shopping",
            duration: 1,
            tips: "可购买汕尾特产：虾丸、鱼丸、咸茶料等"
        },
        {
            time: "21:00",
            title: "返回住宿",
            description: "打车返回金町湾住宿，休息",
            type: "transport",
            duration: 0.5,
            tips: "建议提前约车，二马路晚上车多"
        }
    ],
    
    // Day 2: 4月6日 红海湾片区
    day2: [
        {
            time: "08:00",
            title: "早餐 & 退房",
            description: "简单早餐后办理退房，行李寄存或携带",
            type: "food",
            duration: 1,
            tips: "提前收拾好行李，轻装出行"
        },
        {
            time: "09:00",
            title: "前往红海湾",
            description: "打车或预约顺风车前往红海湾景区，车程约45分钟",
            type: "transport",
            duration: 0.75,
            tips: "建议提前预约顺风车，费用约60-80元"
        },
        {
            time: "09:45",
            title: "红海湾沙滩",
            description: "参观'双色海'奇观，沙滩拍照，海边散步",
            type: "attraction",
            duration: 1.5,
            location: "红海湾旅游区",
            tips: "门票16元/人，可游泳但需注意安全标识"
        },
        {
            time: "11:15",
            title: "海上古堡",
            description: "参观电影《四海》取景地，废墟建筑拍照",
            type: "attraction",
            duration: 1.5,
            location: "海上古堡（红海湾遮浪南海观世音景区内）",
            tips: "古堡咖啡馆低消28元可进入拍照，礁石区注意安全"
        },
        {
            time: "12:45",
            title: "午餐 - 红海湾海鲜",
            description: "在红海湾附近享用海鲜午餐",
            type: "food",
            duration: 1.5,
            location: "红海湾海边餐厅",
            foodRecommendation: "蚝仔烙、椒盐鱿鱼、清蒸石斑鱼",
            tips: "推荐海边路夫妻店，紫菜蚝烙很有特色"
        },
        {
            time: "14:15",
            title: "石群岛观海",
            description: "登上石群岛观景台，360度欣赏海景",
            type: "attraction",
            duration: 1,
            location: "石群岛",
            tips: "观景台视野开阔，适合拍照，附近有咖啡馆可休息"
        },
        {
            time: "15:15",
            title: "海上公路自驾/拍照",
            description: "经过5公里海上公路，欣赏'双色海'景观",
            type: "transport",
            duration: 0.5,
            location: "红海湾-风车岛海上公路",
            tips: "可在安全区域停车拍照，注意来往车辆"
        },
        {
            time: "15:45",
            title: "风车岛游览",
            description: "参观白色风车群，沙滩漫步，骑行拍照",
            type: "attraction",
            duration: 1.5,
            location: "风车岛",
            tips: "自驾最佳，可环岛游览，沙滩人少安静"
        },
        {
            time: "17:15",
            title: "浮日湾看日落",
            description: "前往浮日湾，在断崖海景看日落",
            type: "attraction",
            duration: 1.5,
            location: "浮日湾",
            tips: "日落时间约18:30，提前占好观景位置，带好外套"
        },
        {
            time: "18:45",
            title: "晚餐 - 湿辣牛肉",
            description: "在红海湾享用特色湿辣牛肉烧烤",
            type: "food",
            duration: 1.5,
            foodRecommendation: "香菜牛肉、湿辣牛肉、烤生蚝",
            tips: "推荐阿察湿辣牛肉，香菜牛肉必点"
        },
        {
            time: "20:15",
            title: "前往汕尾站",
            description: "打车前往汕尾站，准备返程",
            type: "transport",
            duration: 1,
            tips: "从红海湾到汕尾站至少预留1.5小时，建议提前约车"
        },
        {
            time: "21:15",
            title: "抵达汕尾站",
            description: "办理进站手续，候车",
            type: "checkin",
            duration: 0.5,
            tips: "提前到达车站，预留充足时间"
        },
        {
            time: "22:00",
            title: "返程高铁",
            description: "乘坐高铁返回广州",
            type: "transport",
            duration: 1,
            tips: "建议购买22:00左右车次，到达广州约23:00"
        }
    ]
};
}

// 初始化地图
function initMap() {
    // 创建地图实例
    map = L.map('interactiveMap').setView([22.786, 115.375], 12);
    
    // 添加地图图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // 添加景点标记
    addAttractionMarkers();
    
    // 添加路线
    addRouteLines();
    
    // 尝试获取用户位置
    getCurrentLocation();
    
    // 添加地图控件
    L.control.scale().addTo(map);
}

// 添加景点标记
function addAttractionMarkers() {
    attractionsData.forEach(attraction => {
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-icon" style="background: ${attraction.weather === 'sunny' ? '#e74c3c' : '#3498db'}">
                    <i class="fas fa-map-marker-alt"></i>
                   </div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });
        
        const marker = L.marker([attraction.location.lat, attraction.location.lng], { icon }).addTo(map);
        
        marker.bindPopup(`
            <div class="map-popup">
                <h3>${attraction.name}</h3>
                <p>${attraction.description}</p>
                <div class="popup-actions">
                    <button onclick="showAttractionImages(${attraction.id})">查看图片</button>
                    <button onclick="addToItinerary(${attraction.id})">加入行程</button>
                </div>
            </div>
        `);
    });
}

// 添加路线
function addRouteLines() {
    const day1Points = attractionsData
        .filter(a => a.weather === 'sunny')
        .map(a => [a.location.lat, a.location.lng]);
    
    const day2Points = attractionsData
        .filter(a => a.weather === 'rainy')
        .map(a => [a.location.lat, a.location.lng]);
    
    if (day1Points.length > 1) {
        L.polyline(day1Points, {
            color: '#e74c3c',
            weight: 4,
            opacity: 0.7,
            dashArray: '10, 10'
        }).addTo(map);
    }
    
    if (day2Points.length > 1) {
        L.polyline(day2Points, {
            color: '#3498db',
            weight: 4,
            opacity: 0.7
        }).addTo(map);
    }
}

// 获取当前位置
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                currentLocation = { lat: latitude, lng: longitude };
                
                // 添加当前位置标记
                const icon = L.divIcon({
                    className: 'current-location-marker',
                    html: '<i class="fas fa-location-dot"></i>',
                    iconSize: [30, 30],
                    iconAnchor: [15, 30]
                });
                
                L.marker([latitude, longitude], { icon })
                    .addTo(map)
                    .bindPopup('您的位置')
                    .openPopup();
                
                // 更新界面显示
                updateLocationInfo();
            },
            error => {
                console.log('获取位置失败:', error);
                // 使用默认位置
                currentLocation = { lat: 22.786, lng: 115.375 };
            }
        );
    }
}

// 初始化天气
function initWeather() {
    // 获取实时天气数据
    fetchWeatherData();
    
    // 天气切换按钮事件
    document.querySelectorAll('.weather-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const weather = this.dataset.weather;
            
            // 更新按钮状态
            document.querySelectorAll('.weather-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 更新天气模式
            setWeatherMode(weather);
            
            // 保存到本地存储
            localStorage.setItem('weatherPreference', weather);
        });
    });
    
    // 加载保存的天气偏好
    const savedWeather = localStorage.getItem('weatherPreference') || 'sunny';
    document.querySelector(`[data-weather="${savedWeather}"]`).click();
}

// 获取天气数据
async function fetchWeatherData() {
    try {
        // 这里可以使用真实天气API
        // 为了演示，我们使用模拟数据
        const mockWeather = {
            temp: 24,
            condition: '多云',
            humidity: 78,
            wind: 2,
            location: '汕尾市',
            icon: 'cloud-sun'
        };
        
        updateWeatherDisplay(mockWeather);
        
        // 每30分钟更新一次天气
        setTimeout(fetchWeatherData, 30 * 60 * 1000);
    } catch (error) {
        console.error('获取天气数据失败:', error);
    }
}

// 更新天气显示
function updateWeatherDisplay(weather) {
    document.getElementById('currentTemp').textContent = `${weather.temp}°C`;
    document.getElementById('currentLocation').textContent = weather.location;
    document.getElementById('currentWeatherIcon').className = `fas fa-${weather.icon}`;
    
    // 更新页脚天气
    document.getElementById('footerTemp').textContent = `${weather.temp}°C`;
    document.getElementById('footerWeather').textContent = weather.condition;
    document.getElementById('footerWeatherIcon').className = `fas fa-${weather.icon}`;
    
    // 更新最后更新时间
    document.getElementById('lastUpdate').textContent = '刚刚';
}

// 设置天气模式
function setWeatherMode(mode) {
    currentWeather = mode;
    
    // 更新界面
    updateWeatherBasedContent();
    
    // 更新地图显示
    updateMapForWeather();
    
    // 更新天气建议
    updateWeatherAdvice();
}

// 更新基于天气的内容
function updateWeatherBasedContent() {
    const filter = currentWeather === 'sunny' ? 'sunny' : 
                  currentWeather === 'rainy' ? 'rainy' : 'all';
    
    // 更新景点筛选
    document.querySelector(`[data-filter="${filter}"]`).click();
    
    // 更新行程建议
    updateItineraryForWeather();
}

// 更新地图显示
function updateMapForWeather() {
    // 这里可以添加基于天气的地图显示逻辑
    // 例如：高亮显示适合当前天气的景点
}

// 更新天气建议
function updateWeatherAdvice() {
    const advice = currentWeather === 'sunny' ? 
        '今日天气晴朗，建议做好防晒措施，享受户外活动。' :
        '今日有雨，建议携带雨具，选择室内景点游览。';
    
    document.getElementById('weatherAdvice').textContent = advice;
}

// 初始化主题
// 初始化主题
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // 设置初始主题
    setTheme(savedTheme);
    
    // 主题切换事件
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
    
    // 更新主题按钮图标
    updateThemeIcon();
}

// 设置主题
function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // 更新主题按钮图标
    updateThemeIcon();
}

// 更新主题按钮图标
function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
        themeToggle.title = '切换到浅色主题';
    } else {
        icon.className = 'fas fa-moon';
        themeToggle.title = '切换到深色主题';
    }
}

// 初始化导航
function initNavigation() {
    // 导航菜单点击事件
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 更新活动链接
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 滚动到对应部分
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 滚动时更新导航
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.querySelector('.main-nav').offsetHeight;
            
            if (scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 初始化事件监听器
function initEventListeners() {
    // 打印按钮
    document.getElementById('printBtn').addEventListener('click', printPage);
    
    // 分享按钮
    document.getElementById('shareBtn').addEventListener('click', sharePage);
    
    // 定位按钮
    document.getElementById('locateMe').addEventListener('click', centerOnLocation);
    
    // 重置视图按钮
    document.getElementById('resetView').addEventListener('click', resetMapView);
    
    // 路线选择器
    document.querySelectorAll('.route-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.route-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentRoute = this.dataset.route;
            updateRouteDisplay();
        });
    });
    
    // 景点筛选
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterAttractions(this.dataset.filter);
        });
    });
    
    // 美食分类
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterFood(this.dataset.category);
        });
    });
    
    // 行程标签
    document.querySelectorAll('.day-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const day = this.dataset.day;
            
            // 更新标签状态
            document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应内容
            document.querySelectorAll('.day-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${day}-content`).classList.add('active');
            
            // 如果是自定义行程，初始化选择器
            if (day === 'custom') {
                initCustomPlanner();
            }
        });
    });
    
    // 生成行程按钮
    document.getElementById('generateItinerary').addEventListener('click', generateSmartItinerary);
    
    // 下载PDF按钮
    document.getElementById('downloadPDF').addEventListener('click', downloadPDF);
    
    // 分享行程按钮
    document.getElementById('shareItinerary').addEventListener('click', shareItinerary);
    
    // 预订按钮
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.dataset.type;
            showBookingModal(type);
        });
    });
    
    // 联系按钮
    document.getElementById('contactBtn').addEventListener('click', showContactModal);
    
    // 反馈按钮
    document.getElementById('feedbackBtn').addEventListener('click', showFeedbackModal);
    
    // 关闭模态框
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // ESC关闭模态框
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display === 'flex') {
                    modal.style.display = 'none';
                }
            });
        }
        
        // 快捷键：1=晴天，2=雨天，3=自动天气
        if (e.key === '1') {
            document.querySelector('[data-weather="sunny"]').click();
        } else if (e.key === '2') {
            document.querySelector('[data-weather="rainy"]').click();
        } else if (e.key === '3') {
            document.querySelector('[data-weather="auto"]').click();
        }
        
        // 快捷键：M=地图居中
        if (e.key === 'm' || e.key === 'M') {
            resetMapView();
        }
        
        // 快捷键：P=打印
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            printPage();
        }
    });
}

// 初始化Swiper
function initSwiper() {
    swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        keyboard: {
            enabled: true,
        },
    });
}

// 渲染景点
function renderAttractions() {
    const container = document.querySelector('.attractions-container');
    container.innerHTML = '';
    
    attractionsData.forEach(attraction => {
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.dataset.weather = attraction.weather;
        card.dataset.category = attraction.category;
        
        card.innerHTML = `
            <div class="attraction-image">
                <img src="${attraction.images[0]}" alt="${attraction.name}" loading="lazy">
                <span class="attraction-badge">${attraction.weather === 'sunny' ? '晴天推荐' : '雨天推荐'}</span>
            </div>
            <div class="attraction-content">
                <div class="attraction-header">
                    <h3 class="attraction-name">${attraction.name}</h3>
                    <div class="attraction-rating">
                        <i class="fas fa-star"></i>
                        <span>${attraction.rating}</span>
                    </div>
                </div>
                <p class="attraction-description">${attraction.description}</p>
                <div class="attraction-features">
                    <span><i class="fas fa-clock"></i> ${attraction.timeRequired}小时</span>
                    <span><i class="fas fa-sun"></i> ${attraction.bestTime}</span>
                </div>
                <div class="attraction-actions">
                    <button class="action-btn" onclick="showAttractionDetail(${attraction.id})">
                        <i class="fas fa-info-circle"></i> 详情
                    </button>
                    <button class="action-btn" onclick="showAttractionImages(${attraction.id})">
                        <i class="fas fa-images"></i> 图片
                    </button>
                    <button class="action-btn" onclick="addToItinerary(${attraction.id})">
                        <i class="fas fa-plus"></i> 行程
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// 筛选景点
function filterAttractions(filter) {
    const cards = document.querySelectorAll('.attraction-card');
    
    cards.forEach(card => {
        const weather = card.dataset.weather;
        const category = card.dataset.category;
        
        let shouldShow = false;
        
        switch(filter) {
            case 'all':
                shouldShow = true;
                break;
            case 'sunny':
                shouldShow = weather === 'sunny';
                break;
            case 'rainy':
                shouldShow = weather === 'rainy';
                break;
            case 'indoor':
                shouldShow = category === 'indoor';
                break;
        }
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// 渲染美食
function renderFood() {
    const container = document.querySelector('.food-container');
    container.innerHTML = '';
    
    foodData.forEach(food => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.dataset.category = food.category;
        
        card.innerHTML = `
            <div class="food-image">
                <img src="${food.images[0]}" alt="${food.name}" loading="lazy">
            </div>
            <div class="food-content">
                <h3 class="food-name">${food.name}</h3>
                <div class="food-price">${food.price}</div>
                <p class="food-desc">${food.description}</p>
                <div class="food-tags">
                    ${food.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="food-actions">
                    <button class="action-btn" onclick="showFoodDetail(${food.id})">
                        <i class="fas fa-info-circle"></i> 详情
                    </button>
                    <button class="action-btn" onclick="showOnMap('food', ${food.id})">
                        <i class="fas fa-map-marker-alt"></i> 位置
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// 筛选美食
function filterFood(category) {
    const cards = document.querySelectorAll('.food-card');
    
    cards.forEach(card => {
        const foodCategory = card.dataset.category;
        
        if (category === 'all' || foodCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 渲染行程
function renderItinerary() {
    // Day 1
    const day1Timeline = document.querySelector('#day1-content .timeline');
    day1Timeline.innerHTML = '';
    
    itineraryData.day1.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index, 1);
        day1Timeline.appendChild(timelineItem);
    });
    
    // Day 2
    const day2Timeline = document.querySelector('#day2-content .timeline');
    day2Timeline.innerHTML = '';
    
    itineraryData.day2.forEach((item, index) => {
        const timelineItem = createTimelineItem(item, index, 2);
        day2Timeline.appendChild(timelineItem);
    });
    
    // 更新行程统计
    updateItineraryStats();
}

// 创建时间线项目
function createTimelineItem(item, index, day) {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    
    // 获取对应的景点图片
    let images = [];
    if (item.type === 'attraction') {
        const attraction = attractionsData.find(a => a.name.includes(item.title.split(' ')[0]));
        if (attraction) {
            images = attraction.images.slice(0, 3);
        }
    }
    
    div.innerHTML = `
        <div class="timeline-time">${item.time} (${item.duration}小时)</div>
        <h4 class="timeline-title">
            <i class="fas fa-${getActivityIcon(item.type)}"></i>
            ${item.title}
        </h4>
        <p class="timeline-desc">${item.description}</p>
        ${images.length > 0 ? `
            <div class="timeline-images">
                ${images.map((img, i) => `
                    <div class="timeline-img" onclick="showImageGallery(${day}, ${index}, ${i})">
                        <img src="${img}" alt="图片${i+1}">
                    </div>
                `).join('')}
            </div>
        ` : ''}
        <div class="timeline-actions">
            <button class="action-btn" onclick="navigateToLocation('${item.title}')">
                <i class="fas fa-directions"></i> 导航
            </button>
            <button class="action-btn" onclick="editTimelineItem(${day}, ${index})">
                <i class="fas fa-edit"></i> 编辑
            </button>
            <button class="action-btn" onclick="removeFromItinerary(${day}, ${index})">
                <i class="fas fa-trash"></i> 删除
            </button>
        </div>
    `;
    
    return div;
}

// 获取活动图标
function getActivityIcon(type) {
    const icons = {
        transport: 'train',
        checkin: 'hotel',
        attraction: 'camera',
        food: 'utensils',
        free: 'walking'
    };
    return icons[type] || 'map-marker-alt';
}

// 更新行程统计
function updateItineraryStats() {
    const day1Count = itineraryData.day1.length;
    const day2Count = itineraryData.day2.length;
    const totalCount = day1Count + day2Count;
    
    const day1Time = itineraryData.day1.reduce((sum, item) => sum + item.duration, 0);
    const day2Time = itineraryData.day2.reduce((sum, item) => sum + item.duration, 0);
    const totalTime = day1Time + day2Time;
    
    // 这里可以添加距离计算
    const totalDistance = 45; // 模拟数据
    
    document.getElementById('totalAttractions').textContent = totalCount;
    document.getElementById('totalTime').textContent = totalTime;
    document.getElementById('totalDistance').textContent = totalDistance;
}

// 初始化自定义行程规划器
function initCustomPlanner() {
    const selector = document.querySelector('.attraction-selector');
    selector.innerHTML = `
        <div class="custom-planner-header">
            <h4>选择您想去的景点：</h4>
            <div class="search-box">
                <input type="text" id="attractionSearch" placeholder="搜索景点...">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="selected-attractions" id="selectedAttractions">
            <p>暂无选择</p>
        </div>
        <div class="attraction-list">
            ${attractionsData.map(attraction => `
                <div class="attraction-option" data-id="${attraction.id}">
                    <input type="checkbox" id="attraction-${attraction.id}">
                    <label for="attraction-${attraction.id}">
                        <strong>${attraction.name}</strong>
                        <span>${attraction.weather === 'sunny' ? '晴天' : '雨天'}</span>
                        <span>${attraction.timeRequired}小时</span>
                    </label>
                </div>
            `).join('')}
        </div>
    `;
    
    // 添加搜索功能
    const searchInput = document.getElementById('attractionSearch');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const options = document.querySelectorAll('.attraction-option');
        
        options.forEach(option => {
            const name = option.querySelector('strong').textContent.toLowerCase();
            option.style.display = name.includes(searchTerm) ? 'flex' : 'none';
        });
    });
    
    // 添加选择监听
    document.querySelectorAll('.attraction-option input').forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedAttractions);
    });
}

// 更新已选景点
function updateSelectedAttractions() {
    const selectedContainer = document.getElementById('selectedAttractions');
    const selectedAttractions = [];
    
    document.querySelectorAll('.attraction-option input:checked').forEach(checkbox => {
        const attractionId = parseInt(checkbox.id.split('-')[1]);
        const attraction = attractionsData.find(a => a.id === attractionId);
        if (attraction) {
            selectedAttractions.push(attraction);
        }
    });
    
    if (selectedAttractions.length === 0) {
        selectedContainer.innerHTML = '<p>暂无选择</p>';
    } else {
        selectedContainer.innerHTML = `
            <div class="selected-list">
                ${selectedAttractions.map(attraction => `
                    <div class="selected-item">
                        <span>${attraction.name}</span>
                        <span>${attraction.timeRequired}小时</span>
                        <button onclick="removeSelectedAttraction(${attraction.id})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// 生成智能行程
function generateSmartItinerary() {
    const selectedAttractions = [];
    
    document.querySelectorAll('.attraction-option input:checked').forEach(checkbox => {
        const attractionId = parseInt(checkbox.id.split('-')[1]);
        const attraction = attractionsData.find(a => a.id === attractionId);
        if (attraction) {
            selectedAttractions.push(attraction);
        }
    });
    
    if (selectedAttractions.length === 0) {
        alert('请先选择至少一个景点！');
        return;
    }
    
    // 根据天气优化行程
    const weatherOptimalAttractions = selectedAttractions.filter(attraction => 
        attraction.weather === currentWeather || currentWeather === 'auto'
    );
    
    if (weatherOptimalAttractions.length === 0) {
        alert('没有找到适合当前天气的景点，请选择其他景点。');
        return;
    }
    
    // 生成行程
    const customItinerary = generateOptimizedItinerary(weatherOptimalAttractions);
    
    // 显示预览
    showItineraryPreview(customItinerary);
}

// 生成优化行程
function generateOptimizedItinerary(attractions) {
    // 这里可以添加更复杂的行程优化算法
    // 现在只做一个简单的按时间排序
    attractions.sort((a, b) => b.timeRequired - a.timeRequired);
    
    const itinerary = [];
    let currentTime = 9; // 从早上9点开始
    
    attractions.forEach((attraction, index) => {
        const hour = Math.floor(currentTime);
        const minute = Math.round((currentTime % 1) * 60);
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        itinerary.push({
            time: time,
            title: attraction.name,
            description: attraction.description,
            type: 'attraction',
            duration: attraction.timeRequired
        });
        
        currentTime += attraction.timeRequired;
        
        // 添加休息/用餐时间
        if (index < attractions.length - 1) {
            currentTime += 0.5; // 半小时休息
        }
    });
    
    return itinerary;
}

// 显示行程预览
function showItineraryPreview(itinerary) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'itineraryPreviewModal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
            <h3>智能行程预览</h3>
            <div class="preview-timeline">
                ${itinerary.map((item, index) => `
                    <div class="preview-item">
                        <div class="preview-time">${item.time}</div>
                        <div class="preview-content">
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                            <span>${item.duration}小时</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="preview-actions">
                <button onclick="saveCustomItinerary()" class="save-btn">保存行程</button>
                <button onclick="document.getElementById('itineraryPreviewModal').remove()" class="cancel-btn">取消</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// 保存自定义行程
function saveCustomItinerary() {
    // 这里可以添加保存逻辑
    alert('行程已保存到自定义行程中！');
    document.getElementById('itineraryPreviewModal').remove();
}

// 打印页面
function printPage() {
    window.print();
}

// 分享页面
async function sharePage() {
    const shareData = {
        title: '汕尾旅游指南',
        text: '发现这个超实用的汕尾旅游指南，包含地图、行程规划和实时天气！',
        url: window.location.href
    };
    
    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            // 复制链接到剪贴板
            await navigator.clipboard.writeText(window.location.href);
            alert('链接已复制到剪贴板！');
        }
    } catch (err) {
        console.error('分享失败:', err);
    }
}

// 定位到当前位置
function centerOnLocation() {
    if (currentLocation) {
        map.setView([currentLocation.lat, currentLocation.lng], 15);
    } else {
        alert('无法获取当前位置，请确保已授权位置访问权限。');
    }
}

// 重置地图视图
function resetMapView() {
    map.setView([22.786, 115.375], 12);
}

// 更新路线显示
function updateRouteDisplay() {
    // 这里可以添加根据当前路线高亮显示对应标记的逻辑
    console.log('当前路线:', currentRoute);
}

// 更新位置信息
function updateLocationInfo() {
    if (currentLocation) {
        // 这里可以添加反向地理编码获取位置名称
        console.log('当前位置:', currentLocation);
    }
}

// 显示景点详情
function showAttractionDetail(id) {
    const attraction = attractionsData.find(a => a.id === id);
    if (!attraction) return;
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // 设置轮播图
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = attraction.images.map(img => `
        <div class="swiper-slide">
            <img src="${img}" alt="${attraction.name}">
        </div>
    `).join('');
    
    // 更新Swiper
    if (swiper) {
        swiper.update();
    }
    
    // 设置文本内容
    modalTitle.textContent = attraction.name;
    modalDescription.textContent = attraction.description;
    
    // 显示模态框
    modal.style.display = 'flex';
}

// 显示景点图片
function showAttractionImages(id) {
    const attraction = attractionsData.find(a => a.id === id);
    if (!attraction) return;
    
    showAttractionDetail(id); // 重用详情模态框
}

// 添加到行程
function addToItinerary(id) {
    const attraction = attractionsData.find(a => a.id === id);
    if (!attraction) return;
    
    // 找到当前活跃的行程标签
    const activeTab = document.querySelector('.day-tab.active');
    const day = activeTab.dataset.day;
    
    if (day === 'custom') {
        // 添加到自定义行程选择器
        const checkbox = document.getElementById(`attraction-${id}`);
        if (checkbox) {
            checkbox.checked = true;
            updateSelectedAttractions();
        }
    } else {
        // 添加到预设行程
        const time = calculateBestTime(day, attraction.timeRequired);
        
        const newItem = {
            time: time,
            title: attraction.name,
            description: attraction.description,
            type: 'attraction',
            duration: attraction.timeRequired
        };
        
        if (day === '1') {
            itineraryData.day1.push(newItem);
        } else if (day === '2') {
            itineraryData.day2.push(newItem);
        }
        
        renderItinerary();
        alert(`已将${attraction.name}添加到Day ${day}行程中！`);
    }
}

// 计算最佳时间
function calculateBestTime(day, duration) {
    const itinerary = day === '1' ? itineraryData.day1 : itineraryData.day2;
    
    if (itinerary.length === 0) {
        return '09:00';
    }
    
    const lastItem = itinerary[itinerary.length - 1];
    const [lastHour, lastMinute] = lastItem.time.split(':').map(Number);
    const lastDuration = lastItem.duration;
    
    let newHour = lastHour + Math.floor(lastDuration);
    let newMinute = lastMinute + Math.round((lastDuration % 1) * 60);
    
    if (newMinute >= 60) {
        newHour += 1;
        newMinute -= 60;
    }
    
    return `${newHour.toString().padStart(2, '0')}:${newMinute.toString().padStart(2, '0')}`;
}

// 下载PDF
function downloadPDF() {
    // 这里可以使用jsPDF库生成PDF
    alert('PDF下载功能需要集成jsPDF库');
    // 示例代码：
    // const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();
    // doc.text('汕尾旅游行程', 20, 20);
    // doc.save('shanwei-itinerary.pdf');
}

// 分享行程
function shareItinerary() {
    const itineraryText = generateItineraryText();
    
    const shareData = {
        title: '我的汕尾旅游行程',
        text: itineraryText,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData).catch(console.error);
    } else {
        navigator.clipboard.writeText(itineraryText)
            .then(() => alert('行程已复制到剪贴板！'))
            .catch(console.error);
    }
}

// 生成行程文本
function generateItineraryText() {
    let text = '汕尾2日游行程规划\n\n';
    
    text += 'Day 1:\n';
    itineraryData.day1.forEach(item => {
        text += `${item.time} ${item.title} (${item.duration}小时)\n`;
    });
    
    text += '\nDay 2:\n';
    itineraryData.day2.forEach(item => {
        text += `${item.time} ${item.title} (${item.duration}小时)\n`;
    });
    
    text += `\n天气: ${currentWeather === 'sunny' ? '晴天' : '雨天'}`;
    text += `\n生成时间: ${new Date().toLocaleString()}`;
    
    return text;
}

// 开始实时更新
function startRealTimeUpdates() {
    // 每5分钟更新一次天气
    setInterval(fetchWeatherData, 5 * 60 * 1000);
    
    // 每10分钟更新一次路况
    setInterval(updateTrafficInfo, 10 * 60 * 1000);
    
    // 实时更新位置
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            position => {
                currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                updateLocationInfo();
            },
            error => console.log('位置更新失败:', error),
            { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }
        );
    }
}

// 更新路况信息
function updateTrafficInfo() {
    // 模拟路况更新
    const trafficConditions = ['畅通', '缓慢', '拥堵'];
    const randomCondition = trafficConditions[Math.floor(Math.random() * trafficConditions.length)];
    
    const trafficStatus = document.getElementById('trafficStatus');
    const travelTime = document.getElementById('travelTime');
    
    trafficStatus.innerHTML = `
        <i class="fas fa-${randomCondition === '畅通' ? 'check-circle' : 'exclamation-triangle'}"></i>
        <span>当前路况${randomCondition}</span>
    `;
    
    // 更新预计出行时间
    const times = { '畅通': '1.5小时', '缓慢': '2小时', '拥堵': '2.5小时' };
    travelTime.textContent = times[randomCondition];
}

// 显示图片库
function showImageGallery(day, itemIndex, imgIndex) {
    const items = day === 1 ? itineraryData.day1 : itineraryData.day2;
    const item = items[itemIndex];
    
    if (!item) return;
    
    // 查找对应的景点图片
    const attraction = attractionsData.find(a => a.name.includes(item.title.split(' ')[0]));
    if (attraction && attraction.images.length > 0) {
        showAttractionDetail(attraction.id);
        
        // 如果有指定图片索引，跳转到该图片
        if (swiper && imgIndex !== undefined) {
            swiper.slideTo(imgIndex);
        }
    }
}

// 导航到位置
function navigateToLocation(placeName) {
    // 这里可以集成百度地图或高德地图的导航
    alert(`正在为您导航到${placeName}...\n\n实际导航需要安装地图APP。`);
}

// 编辑行程项
function editTimelineItem(day, index) {
    const items = day === 1 ? itineraryData.day1 : itineraryData.day2;
    const item = items[index];
    
    if (!item) return;
    
    const newTime = prompt('请输入新的时间 (格式: HH:MM):', item.time);
    if (newTime && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(newTime)) {
        item.time = newTime;
        renderItinerary();
        alert('时间已更新！');
    } else if (newTime !== null) {
        alert('时间格式不正确，请输入正确的24小时制时间 (如: 09:30)');
    }
}

// 从行程中删除
function removeFromItinerary(day, index) {
    if (confirm('确定要删除这个行程项吗？')) {
        if (day === 1) {
            itineraryData.day1.splice(index, 1);
        } else {
            itineraryData.day2.splice(index, 1);
        }
        renderItinerary();
    }
}

// 显示预订模态框
function showBookingModal(type) {
    const services = {
        train: '火车票预订',
        taxi: '网约车预订',
        island: '船票预订'
    };
    
    alert(`即将跳转到${services[type]}页面...\n\n实际功能需要集成第三方预订API。`);
}

// 显示联系模态框
function showContactModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
            <h3>联系我们</h3>
            <div class="contact-info">
                <p><i class="fas fa-envelope"></i> 邮箱: contact@shanweitravel.com</p>
                <p><i class="fas fa-phone"></i> 电话: 0755-12345678</p>
                <p><i class="fas fa-map-marker-alt"></i> 地址: 广东省汕尾市城区</p>
                <p><i class="fas fa-clock"></i> 工作时间: 周一至周五 9:00-18:00</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// 显示反馈模态框
function showFeedbackModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
            <h3>意见反馈</h3>
            <form id="feedbackForm">
                <div class="form-group">
                    <label for="feedbackName">姓名</label>
                    <input type="text" id="feedbackName" placeholder="请输入您的姓名">
                </div>
                <div class="form-group">
                    <label for="feedbackEmail">邮箱</label>
                    <input type="email" id="feedbackEmail" placeholder="请输入您的邮箱">
                </div>
                <div class="form-group">
                    <label for="feedbackMessage">反馈内容</label>
                    <textarea id="feedbackMessage" rows="5" placeholder="请输入您的宝贵意见..."></textarea>
                </div>
                <button type="submit" class="submit-btn">提交反馈</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // 添加表单提交事件
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('feedbackName').value;
        const email = document.getElementById('feedbackEmail').value;
        const message = document.getElementById('feedbackMessage').value;
        
        if (!name || !email || !message) {
            alert('请填写所有必填项！');
            return;
        }
        
        // 这里可以添加实际提交逻辑
        alert('感谢您的反馈！我们会尽快处理。');
        modal.remove();
    });
}

// 滚动到指定部分
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.main-nav').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// 初始化页面加载动画
window.addEventListener('load', function() {
    // 添加加载完成动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.section, .card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
