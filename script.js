const routes = [
  {
    id: "western-north",
    name: "西部幹線 北段",
    desc: "西部幹線北段，臺北、桃園到新竹，車站多且交通熱鬧。",
    stations: ["台北", "板橋", "桃園", "新竹"],
    features: [
      { type: "bridge", name: "新竹州橋", position: 44 },
      { type: "tunnel", name: "三貂嶺隧道", position: 72 }
    ]
  },
  {
    id: "western-mountain",
    name: "西部幹線 山線",
    desc: "西部幹線山線，經苗栗、台中，穿越丘陵地帶與古老車站。",
    stations: ["苗栗", "豐原", "台中", "彰化"],
    features: [
      { type: "bridge", name: "大安溪橋", position: 35 },
      { type: "tunnel", name: "大甲隧道", position: 60 }
    ]
  },
  {
    id: "western-coast",
    name: "西部幹線 海線",
    desc: "西部幹線海線，沿著海線行駛，經雲林、嘉義與西濱平原。",
    stations: ["彰化", "雲林", "嘉義", "台南"],
    features: [
      { type: "bridge", name: "濁水溪橋", position: 42 },
      { type: "tunnel", name: "北港隧道", position: 68 }
    ]
  },
  {
    id: "western-south",
    name: "西部幹線 南段",
    desc: "西部幹線南段，從台南延伸到高雄左營，是南部最重要的幹線路段。",
    stations: ["台南", "高雄", "左營"],
    features: [
      { type: "bridge", name: "曾文溪橋", position: 37 },
      { type: "tunnel", name: "鳳山隧道", position: 70 }
    ]
  },
  {
    id: "south-loop",
    name: "南迴線",
    desc: "貫穿南台灣海岸線，從高雄到台東，風景壯闊。",
    stations: ["左營", "屏東", "潮州", "台東"],
    features: [
      { type: "bridge", name: "枋寮橋", position: 45 },
      { type: "tunnel", name: "大武隧道", position: 82 }
    ]
  },
  {
    id: "east-yilan",
    name: "東部幹線 宜蘭線",
    desc: "東部幹線宜蘭線，從台北往宜蘭，沿著山海與河川展開。",
    stations: ["台北", "宜蘭", "羅東"],
    features: [
      { type: "bridge", name: "蘇澳橋", position: 35 },
      { type: "tunnel", name: "蘇澳隧道", position: 60 }
    ]
  },
  {
    id: "east-north-loop",
    name: "東部幹線 北迴線",
    desc: "東部幹線北迴線，從宜蘭通往花蓮，穿越北部山區。",
    stations: ["宜蘭", "蘇澳", "花蓮"],
    features: [
      { type: "bridge", name: "崇德橋", position: 55 },
      { type: "tunnel", name: "和平隧道", position: 75 }
    ]
  },
  {
    id: "east-taitung",
    name: "東部幹線 臺東線",
    desc: "東部幹線臺東線，從花蓮延伸至台東，海岸與山景兼具。",
    stations: ["花蓮", "志學", "玉里", "台東"],
    features: [
      { type: "bridge", name: "八景橋", position: 28 },
      { type: "tunnel", name: "加路蘭隧道", position: 63 }
    ]
  },
  {
    id: "pingxi",
    name: "平溪線",
    desc: "北部支線，經平溪、十分、菁桐等經典鐵道攝影點。",
    stations: ["瑞芳", "侯硐", "三貂嶺", "十分", "平溪", "菁桐"],
    features: [
      { type: "bridge", name: "猴硐橋", position: 35 },
      { type: "tunnel", name: "十分隧道", position: 52 }
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
