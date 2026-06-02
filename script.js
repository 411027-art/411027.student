const routes = [
  {
    id: "western",
    name: "西部幹線",
    desc: "從基隆／樹林到高雄，經過台北、台中、台南等主要車站。",
    stations: ["基隆", "台北", "樹林", "板橋", "桃園", "新竹", "台中", "彰化", "雲林", "嘉義", "台南", "左營"],
    features: [
      { type: "bridge", name: "大安溪橋", position: 42 },
      { type: "tunnel", name: "大甲隧道", position: 58 }
    ]
  },
  {
    id: "east",
    name: "東部幹線",
    desc: "從台北經宜蘭、花蓮到台東，沿著東海岸穿過山海景色。",
    stations: ["宜蘭", "羅東", "花蓮", "志學", "玉里", "台東"],
    features: [
      { type: "tunnel", name: "蘇澳隧道", position: 18 },
      { type: "bridge", name: "八景橋", position: 70 }
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
