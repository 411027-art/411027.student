const routes = [
  {
    id: "western-north",
    name: "西部幹線 北段",
    desc: "西部幹線北段",
    stations: ["台北", "板橋", "桃園", "新竹"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "western-mountain",
    name: "西部幹線 山線",
    desc: "西部幹線山線",
    stations: ["竹南", "造橋", "後龍鎮", "豐富", "苗栗", "南勢", "銅鑼", "三義", "泰安", "后里", "豐原", "栗林", "潭子", "頭家厝", "松竹", "地面", "太原", "精武", "臺中", "老松町", "五權", "大慶", "烏日", "新烏日", "學田", "遊園地前", "成功", "彰化"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "western-coast",
    name: "西部幹線 海線",
    desc: "西部幹線海線",
    stations: ["竹南", "談文", "大山", "後龍", "龍港", "通霄鎮", "白沙屯", "新埔", "通霄", "苑裡", "臺中市", "日南", "大甲", "台中港", "清水", "沙鹿", "龍井", "大肚", "追分", "彰化"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "western-south",
    name: "西部幹線 南段",
    desc: "西部幹線南段",
    stations: ["台南", "高雄", "左營"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "south-loop",
    name: "南迴線",
    desc: "南迴線",
    stations: ["枋寮", "加祿", "內獅", "枋山", "枋野", "大武", "瀧溪", "多良", "金崙", "香蘭", "太麻里", "三和", "知本", "康樂", "臺東"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "east-yilan",
    name: "東部幹線 宜蘭線",
    desc: "宜蘭線",
    stations: ["八堵", "暖暖", "四腳亭", "瑞芳", "猴硐", "三貂嶺", "牡丹", "雙溪", "貢寮", "福隆", "石城", "大里", "大溪", "龜山", "外澳", "頭城", "頂埔", "礁溪", "四城", "宜蘭", "二結", "中里", "羅東", "冬山", "新馬", "蘇澳新站", "蘇澳"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "east-north-loop",
    name: "東部幹線 北迴線",
    desc: "北迴線",
    stations: ["蘇澳新站", "永春", "永樂", "東澳", "南澳", "武塔", "漢本", "和平", "和仁", "崇德", "新城", "景美", "北埔", "花蓮"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "east-taitung",
    name: "東部幹線 臺東線",
    desc: "臺東線",
    stations: ["花蓮", "田浦", "吉安", "干城", "志學", "平和", "壽豐", "豐田", "溪口", "林榮新光", "南平", "鳳林", "萬榮", "光復", "大興", "大富", "富源", "瑞北", "瑞穗", "三民", "大禹", "泰昌", "玉里", "樂合", "安通", "東里", "萬寧", "東竹", "富北", "富里", "富南", "三台", "池上", "海端", "德高", "關山", "月美", "瑞和", "瑞源", "鹿野", "中興", "嘉豐", "初鹿", "東成", "檳榔", "山里", "臺東", "馬蘭"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "pingxi",
    name: "平溪線",
    desc: "平溪線",
    stations: ["三貂嶺", "大華", "十分", "望古", "嶺腳", "平溪", "菁桐"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  }
];
