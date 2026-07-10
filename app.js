
const models = [
  {
    name: "X50",
    variant: "Flagship",
    price: 89800,
    tagline: "Intelligent compact SUV with turbocharged performance.",
    stock: "4 units available",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    colors: ["#c8102e", "#f4f4f4", "#1d2939", "#6b7280"],
    features: ["ADAS Level 2", "1.5L Turbo", "10.25-inch Display"]
  },
  {
    name: "S70",
    variant: "Premium X",
    price: 73800,
    tagline: "A refined C-segment sedan for the modern family.",
    stock: "6 units available",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    colors: ["#1f4fa3", "#f5f5f5", "#202020", "#a32626"],
    features: ["Forward Collision Warning", "N95 Cabin Filter", "Adaptive Cruise Control"]
  },
  {
    name: "Persona",
    variant: "Premium",
    price: 55800,
    tagline: "A practical sedan with generous space and value.",
    stock: "5 units available",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    colors: ["#2e3a59", "#f7f7f7", "#6b6b6b", "#7a1d1d"],
    features: ["510L Boot Space", "Hill Hold Assist", "Remote Engine Start"]
  },
  {
    name: "Saga",
    variant: "Premium S",
    price: 44800,
    tagline: "Malaysia's iconic sedan, dependable and efficient.",
    stock: "9 units available",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    colors: ["#8a1c1c", "#f7f7f7", "#4b5563", "#1e3a5f"],
    features: ["Eco Drive Mode", "Electronic Stability Control", "Rear Parking Sensors"]
  }
];

let selectedModel = 0;

const modelList = document.getElementById("modelList");
const modelTitle = document.getElementById("modelTitle");
const vehicleName = document.getElementById("vehicleName");
const variantBadge = document.getElementById("variantBadge");
const vehicleTagline = document.getElementById("vehicleTagline");
const vehiclePrice = document.getElementById("vehiclePrice");
const vehicleImage = document.getElementById("vehicleImage");
const colorOptions = document.getElementById("colorOptions");
const featureRow = document.getElementById("featureRow");
const priceInput = document.getElementById("priceInput");
const stockStatus = document.getElementById("stockStatus");

const depositRange = document.getElementById("depositRange");
const depositValue = document.getElementById("depositValue");
const interestSelect = document.getElementById("interestSelect");
const tenureSelect = document.getElementById("tenureSelect");
const monthlyPayment = document.getElementById("monthlyPayment");

const tradeValue = document.getElementById("tradeValue");
const settlementValue = document.getElementById("settlementValue");
const tradeBalance = document.getElementById("tradeBalance");
const toast = document.getElementById("toast");

function currency(value) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0
  }).format(value);
}

function renderModelList() {
  modelList.innerHTML = "";
  models.forEach((model, index) => {
    const button = document.createElement("button");
    button.className = `model-button ${index === selectedModel ? "active" : ""}`;
    button.innerHTML = `<span>${model.name}</span><small>${currency(model.price)}</small>`;
    button.addEventListener("click", () => {
      selectedModel = index;
      render();
    });
    modelList.appendChild(button);
  });
}

function renderSelectedModel() {
  const model = models[selectedModel];
  modelTitle.textContent = `Proton ${model.name}`;
  vehicleName.textContent = `Proton ${model.name}`;
  variantBadge.textContent = model.variant;
  vehicleTagline.textContent = model.tagline;
  vehiclePrice.textContent = currency(model.price);
  vehicleImage.src = model.image;
  vehicleImage.alt = `Proton ${model.name}`;
  priceInput.value = model.price;
  stockStatus.textContent = model.stock;

  colorOptions.innerHTML = "";
  model.colors.forEach((color, index) => {
    const button = document.createElement("button");
    button.className = `color-dot ${index === 0 ? "active" : ""}`;
    button.style.background = color;
    button.title = "Choose colour";
    button.addEventListener("click", () => {
      document.querySelectorAll(".color-dot").forEach(dot => dot.classList.remove("active"));
      button.classList.add("active");
      showToast("Vehicle colour updated");
    });
    colorOptions.appendChild(button);
  });

  featureRow.innerHTML = model.features
    .map(feature => `<div class="feature-item">${feature}</div>`)
    .join("");

  calculateLoan();
}

function calculateLoan() {
  const price = Number(priceInput.value) || 0;
  const depositPercent = Number(depositRange.value);
  const annualRate = Number(interestSelect.value) / 100;
  const years = Number(tenureSelect.value);

  depositValue.textContent = `${depositPercent}%`;

  const principal = price * (1 - depositPercent / 100);
  const totalInterest = principal * annualRate * years;
  const monthly = (principal + totalInterest) / (years * 12);

  monthlyPayment.textContent = currency(Math.round(monthly));
}

function calculateTradeIn() {
  const balance = (Number(tradeValue.value) || 0) - (Number(settlementValue.value) || 0);
  tradeBalance.textContent = currency(balance);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function render() {
  renderModelList();
  renderSelectedModel();
}

[priceInput, depositRange, interestSelect, tenureSelect].forEach(element => {
  element.addEventListener("input", calculateLoan);
});

[tradeValue, settlementValue].forEach(element => {
  element.addEventListener("input", calculateTradeIn);
});

document.getElementById("bookBtn").addEventListener("click", () => showToast("Test-drive booking form opened"));
document.getElementById("compareBtn").addEventListener("click", () => showToast("Comparison feature selected"));
document.getElementById("chatBtn").addEventListener("click", () => showToast("Connecting you to a sales advisor"));

render();
calculateTradeIn();
