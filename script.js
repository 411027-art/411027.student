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

const routeSelector = document.getElementById("routeSelector");
const routeNameEl = document.getElementById("routeName");
const routeDescEl = document.getElementById("routeDesc");
const stationLayer = document.getElementById("stationLayer");
const photoLayer = document.getElementById("photoLayer");
const featureLayer = document.getElementById("featureLayer");
const lineContainer = document.getElementById("lineContainer");
const editorPanel = document.getElementById("editorPanel");
const editorTitle = document.getElementById("editorTitle");
const pointTitle = document.getElementById("pointTitle");
const pointPhotoUrl = document.getElementById("pointPhotoUrl");
const pointPhotoFile = document.getElementById("pointPhotoFile");
const pointNote = document.getElementById("pointNote");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton");
const previewContent = document.getElementById("previewContent");

let selectedRoute = null;
let selectedPoint = null;
let freePoints = {};
let imagePreviewUrl = "";
let nextPhotoId = 1;

function createRouteButtons() {
  routes.forEach(route => {
    const button = document.createElement("button");
    button.textContent = route.name;
    button.className = "route-button";
    button.dataset.routeId = route.id;
    button.addEventListener("click", () => selectRoute(route.id));
    routeSelector.appendChild(button);
  });
}

function selectRoute(routeId) {
  selectedRoute = routes.find(route => route.id === routeId);
  document.querySelectorAll(".route-button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.routeId === routeId);
  });
  routeNameEl.textContent = selectedRoute.name;
  routeDescEl.textContent = selectedRoute.desc;
  selectedPoint = null;
  pointTitle.value = "";
  pointPhotoUrl.value = "";
  pointNote.value = "";
  imagePreviewUrl = "";
  previewContent.innerHTML = "請選擇車站或在路線上新增攝影點。";
  renderRoute();
}

function renderRoute() {
  stationLayer.innerHTML = "";
  featureLayer.innerHTML = "";
  photoLayer.innerHTML = "";

  selectedRoute.stations.forEach((station, index) => {
    const position = (index / (selectedRoute.stations.length - 1)) * 100;
    const stationItem = document.createElement("div");
    stationItem.className = "station-item";
    stationItem.style.top = `calc(${position}% - 10px)`;

    const dot = document.createElement("div");
    dot.className = "station-dot";
    dot.addEventListener("click", event => {
      event.stopPropagation();
      selectStationPoint(index, station, position);
    });

    const label = document.createElement("div");
    label.className = "station-label";
    label.textContent = station;

    stationItem.appendChild(dot);
    stationItem.appendChild(label);
    stationLayer.appendChild(stationItem);
  });

  selectedRoute.features.forEach(feature => {
    const featureItem = document.createElement("div");
    featureItem.className = "feature-item";
    featureItem.style.top = `calc(${feature.position}% - 16px)`;

    const marker = document.createElement("div");
    marker.className = "feature-marker";
    const icon = document.createElement("span");
    icon.className = `feature-icon ${feature.type}`;
    const text = document.createElement("span");
    text.className = "feature-label";
    text.textContent = `${feature.name} (${feature.type === "bridge" ? "橋樑" : "隧道"})`;

    marker.appendChild(icon);
    marker.appendChild(text);
    featureItem.appendChild(marker);
    featureLayer.appendChild(featureItem);
  });
}

function selectStationPoint(index, station, position) {
  selectedPoint = {
    id: `station-${index}`,
    type: "station",
    title: station,
    photo: "",
    note: "",
    position,
    routeId: selectedRoute.id
  };
  openEditor();
}

function openEditor() {
  if (!selectedPoint) {
    return;
  }
  editorTitle.textContent = `編輯：${selectedPoint.title}`;
  pointTitle.value = selectedPoint.title || "";
  pointPhotoUrl.value = selectedPoint.photo || "";
  pointNote.value = selectedPoint.note || "";
  imagePreviewUrl = selectedPoint.photo || "";
  updatePreview();
}

function updatePreview() {
  if (!selectedPoint) {
    previewContent.innerHTML = "尚未選取攝影點。";
    return;
  }
  previewContent.innerHTML = "";
  if (imagePreviewUrl) {
    const imageWrap = document.createElement("div");
    imageWrap.className = "photo-preview";
    const image = document.createElement("img");
    image.src = imagePreviewUrl;
    image.alt = selectedPoint.title;
    imageWrap.appendChild(image);
    previewContent.appendChild(imageWrap);
  }

  const meta = document.createElement("div");
  meta.className = "preview-meta";
  const title = document.createElement("p");
  title.innerHTML = `<strong>標題：</strong>${selectedPoint.title || "未設定"}`;
  const note = document.createElement("p");
  note.innerHTML = `<strong>說明：</strong>${selectedPoint.note || "尚未填寫"}`;
  const location = document.createElement("p");
  location.innerHTML = `<strong>位置：</strong>${selectedPoint.type === "station" ? "車站" : "自由攝影點"}`;
  meta.appendChild(title);
  meta.appendChild(note);
  meta.appendChild(location);
  previewContent.appendChild(meta);
}

function saveSelectedPoint() {
  if (!selectedPoint) return;
  selectedPoint.title = pointTitle.value.trim() || selectedPoint.title;
  selectedPoint.photo = pointPhotoUrl.value.trim() || imagePreviewUrl || selectedPoint.photo;
  selectedPoint.note = pointNote.value.trim();

  if (selectedPoint.type === "photo") {
    freePoints[selectedPoint.id] = { ...selectedPoint };
    renderPhotoPoints();
  }
  editorTitle.textContent = `編輯：${selectedPoint.title}`;
  updatePreview();
}

function removeSelectedPoint() {
  if (!selectedPoint) return;
  if (selectedPoint.type === "photo" && freePoints[selectedPoint.id]) {
    delete freePoints[selectedPoint.id];
    renderPhotoPoints();
  }
  selectedPoint = null;
  editorTitle.textContent = "尚未選擇攝影點";
  pointTitle.value = "";
  pointPhotoUrl.value = "";
  pointNote.value = "";
  previewContent.innerHTML = "請選擇車站或在路線上新增攝影點。";
}

function renderPhotoPoints() {
  photoLayer.innerHTML = "";
  Object.values(freePoints).forEach(point => {
    if (point.routeId !== selectedRoute.id) return;
    const photoItem = document.createElement("div");
    photoItem.className = "photo-item";
    photoItem.style.top = `calc(${point.position}% - 11px)`;

    const dot = document.createElement("div");
    dot.className = "photo-dot";
    dot.title = point.title || "攝影點";
    dot.addEventListener("click", event => {
      event.stopPropagation();
      selectedPoint = { ...point };
      openEditor();
    });

    photoItem.appendChild(dot);
    photoLayer.appendChild(photoItem);
  });
}

function addPhotoPointAt(position) {
  const id = `photo-${selectedRoute.id}-${nextPhotoId++}`;
  const title = `攝影點 ${nextPhotoId - 1}`;
  const newPoint = {
    id,
    type: "photo",
    title,
    photo: "",
    note: "",
    position,
    routeId: selectedRoute.id
  };
  freePoints[id] = newPoint;
  selectedPoint = { ...newPoint };
  renderPhotoPoints();
  openEditor();
}

function onLineClick(event) {
  if (!selectedRoute) return;
  const rect = lineContainer.getBoundingClientRect();
  const clickY = event.clientY - rect.top;
  const position = Math.min(98, Math.max(2, ((clickY - 40) / (rect.height - 80)) * 100));
  addPhotoPointAt(position);
}

pointPhotoFile.addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    imagePreviewUrl = e.target.result;
    pointPhotoUrl.value = "";
    updatePreview();
  };
  reader.readAsDataURL(file);
});

saveButton.addEventListener("click", saveSelectedPoint);
removeButton.addEventListener("click", removeSelectedPoint);

lineContainer.addEventListener("click", onLineClick);

createRouteButtons();
selectRoute(routes[0].id);
