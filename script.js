const routes = [
  {
    id: "hualien-yuli",
    name: "花蓮到玉里",
    desc: "花蓮到玉里",
    stations: ["花蓮", "吉安", "志學", "平和", "壽豐", "豐田", "林榮新光", "南平", "鳳林", "萬榮", "光復", "大富", "富源", "瑞穗", "三民", "玉里"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "yuli-taitung",
    name: "玉里到台東",
    desc: "玉里到台東",
    stations: ["玉里", "東里", "東竹", "富里", "池上", "海端", "關山", "瑞和", "瑞源", "鹿野", "山里", "台東"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "taitung-fangliao",
    name: "台東到枋寮",
    desc: "台東到枋寮",
    stations: ["台東", "康樂", "知本", "太麻里", "金崙", "瀧溪", "大武", "枋山", "內獅", "加祿", "枋寮"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "fangliao-chaozhou",
    name: "枋寮到潮州",
    desc: "枋寮到潮州",
    stations: ["枋寮", "東海", "佳冬", "林邊", "鎮安", "南州", "崁頂", "潮州"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "chaozhou-zuoying",
    name: "潮州到新左營",
    desc: "潮州到新左營",
    stations: ["潮州", "竹田", "西勢", "麟洛", "歸來", "屏東", "六塊厝", "九曲堂", "後庄", "鳳山", "正義", "科工館", "民族", "高雄", "三塊厝", "鼓山", "美術館", "內惟", "左營", "新左營"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "zuoying-tainan",
    name: "新左營到台南",
    desc: "新左營到台南",
    stations: ["新左營", "楠梓", "橋頭", "岡山", "路竹", "大湖", "中洲", "仁德", "保安", "台南"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "tainan-chiayi",
    name: "台南到嘉義",
    desc: "台南到嘉義",
    stations: ["台南", "大橋", "永康", "新市", "南科", "善化", "拔林", "隆田", "林鳳營", "柳營", "新營", "後壁", "南靖", "水上", "嘉義"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "chiayi-changhua",
    name: "嘉義到彰化",
    desc: "嘉義到彰化",
    stations: ["嘉義", "嘉北", "民雄", "大林", "石龜", "斗南", "斗六", "石榴", "林內", "二水", "田中", "社頭", "永靖", "員林", "大村", "花壇", "彰化"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "changhua-zhunan-coast",
    name: "彰化經海線到竹南",
    desc: "彰化經海線到竹南",
    stations: ["彰化", "追分", "大肚", "龍井", "沙鹿", "清水", "台中港", "大甲", "日南", "苑裡", "通霄", "新埔", "白沙屯", "龍港", "後龍", "大山", "談文", "竹南"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "changhua-zhunan-mountain",
    name: "彰化經山線到竹南",
    desc: "彰化經山線到竹南",
    stations: ["彰化", "成功", "新烏日", "烏日", "大慶", "五權", "台中", "精武", "太原", "松竹", "頭家厝", "潭子", "栗林", "豐原", "后里", "泰安", "三義", "銅鑼", "南勢", "苗栗", "豐富", "造橋", "竹南"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "zhunan-taoyuan",
    name: "竹南到桃園",
    desc: "竹南到桃園",
    stations: ["竹南", "崎頂", "香山", "三姓橋", "新竹", "北新竹", "竹北", "新豐", "湖口", "北湖", "新富", "富岡", "楊梅", "埔心", "中壢", "內壢", "桃園"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "taoyuan-keelung",
    name: "桃園到基隆",
    desc: "桃園到基隆",
    stations: ["桃園", "鶯歌", "山佳", "南樹林", "樹林", "浮洲", "板橋", "萬華", "台北", "松山", "南港", "汐科", "汐止", "五堵", "百福", "七堵", "八堵", "三坑", "基隆"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "baodu-fulong",
    name: "八堵到福隆",
    desc: "八堵到福隆",
    stations: ["八堵", "暖暖", "四腳亭", "瑞芳", "猴硐", "三貂嶺", "牡丹", "雙溪", "貢寮", "福隆"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "fulong-suao",
    name: "福隆到蘇澳",
    desc: "福隆到蘇澳",
    stations: ["福隆", "石城", "大里", "大溪", "新馬", "蘇澳新", "蘇澳"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "suaoxin-hualien",
    name: "蘇澳新到花蓮",
    desc: "蘇澳新到花蓮",
    stations: ["蘇澳新", "永樂", "東澳", "南澳", "武塔", "漢本", "和平", "和仁", "崇德", "新城（太魯閣）", "景美", "北埔", "花蓮"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "ruifang-badouzi",
    name: "瑞芳到八斗子",
    desc: "深澳線",
    stations: ["瑞芳", "海科館", "八斗子"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "sanzhaoling-jingzong",
    name: "三貂嶺到菁桐",
    desc: "平溪線",
    stations: ["三貂嶺", "大華", "十分", "望古", "嶺腳", "平溪", "菁桐"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "xinzhu-neiwan",
    name: "新竹到內灣",
    desc: "內灣線",
    stations: ["新竹", "北新竹", "千甲", "新莊", "竹中", "上員", "榮華", "竹東", "橫山", "九讚頭", "合興", "富貴", "內灣"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "zhuzhong-liujia",
    name: "竹中到六家",
    desc: "六家線",
    stations: ["竹中", "六家"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "jizhou-shaolun",
    name: "中洲到沙崙",
    desc: "沙崙線",
    stations: ["中洲", "長榮大學", "沙崙"],
    features: [
      { type: "bridge", name: "示例橋", position: 40 },
      { type: "tunnel", name: "示例隧道", position: 60 }
    ]
  },
  {
    id: "beibuo-hualiengang",
    name: "北埔到花蓮港",
    desc: "花蓮臨港線",
    stations: ["北埔", "花蓮港"],
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
const lineTrack = document.getElementById("lineTrack");
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
let lineOffset = 0;
let currentLineHeight = 0;

function updateLineOffset() {
  lineTrack.style.transform = `translateY(${lineOffset}px)`;
}

let isDraggingLine = false;
let dragMoved = false;
let dragPointerId = null;
let dragStartY = 0;
let dragStartOffset = 0;

function startLineDrag(clientY, pointerId) {
  isDraggingLine = true;
  dragMoved = false;
  dragPointerId = pointerId;
  dragStartY = clientY;
  dragStartOffset = lineOffset;
  lineContainer.style.cursor = "grabbing";
}

function dragLine(clientY) {
  if (!isDraggingLine) return;
  const deltaY = clientY - dragStartY;
  if (Math.abs(deltaY) > 4) {
    dragMoved = true;
  }
  const limit = currentLineHeight > lineContainer.clientHeight ? currentLineHeight - lineContainer.clientHeight : 120;
  lineOffset = Math.max(-limit, Math.min(limit, dragStartOffset + deltaY));
  updateLineOffset();
}

function endLineDrag() {
  isDraggingLine = false;
  if (dragPointerId !== null) {
    try {
      lineContainer.releasePointerCapture(dragPointerId);
    } catch (error) {
      // ignore if pointer capture was not active
    }
    dragPointerId = null;
  }
  lineContainer.style.cursor = "default";
}
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

  const stationSpacing = 40;
  const spacingMultiplier = 13;
  const verticalPadding = 32;
  const totalStations = selectedRoute.stations.length;
  currentLineHeight = stationSpacing * spacingMultiplier * (totalStations - 1) + verticalPadding * 2;
  lineTrack.style.height = `${currentLineHeight}px`;
  lineContainer.scrollTop = 0;

  selectedRoute.stations.forEach((station, index) => {
    const top = verticalPadding + index * stationSpacing * spacingMultiplier;
    const stationItem = document.createElement("div");
    stationItem.className = "station-item";
    stationItem.style.top = `calc(${top}px - 10px)`;

    const dot = document.createElement("div");
    dot.className = "station-dot";
    dot.addEventListener("click", event => {
      event.stopPropagation();
      selectStationPoint(index, station, top);
    });

    const label = document.createElement("div");
    label.className = "station-label";
    label.textContent = station;

    stationItem.appendChild(dot);
    stationItem.appendChild(label);
    stationLayer.appendChild(stationItem);
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
    photoItem.style.top = `calc(${point.position}px - 11px)`;

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
  if (!selectedRoute || dragMoved) {
    dragMoved = false;
    return;
  }
  const rect = lineContainer.getBoundingClientRect();
  const clickY = event.clientY - rect.top + lineContainer.scrollTop - lineOffset;
  const minY = 32;
  const maxY = currentLineHeight - 32;
  const position = Math.min(maxY, Math.max(minY, clickY));
  addPhotoPointAt(position);
}

function onLinePointerDown(event) {
  if (event.target.closest(".station-dot") || event.target.closest(".photo-dot") || event.target.closest(".feature-item")) {
    return;
  }
  event.preventDefault();
  lineContainer.setPointerCapture(event.pointerId);
  startLineDrag(event.clientY, event.pointerId);
}

function onLinePointerMove(event) {
  if (!isDraggingLine) return;
  event.preventDefault();
  dragLine(event.clientY);
}

function onLinePointerUp() {
  endLineDrag();
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
lineContainer.addEventListener("pointerdown", onLinePointerDown);
lineContainer.addEventListener("pointermove", onLinePointerMove);
window.addEventListener("pointerup", onLinePointerUp);
window.addEventListener("pointercancel", onLinePointerUp);

createRouteButtons();
selectRoute(routes[0].id);
