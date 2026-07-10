
const models = [
  {
    name: "Ativa",
    variant: "AV",
    price: 72600,
    tagline: "Compact SUV built for city driving.",
    stock: "3 units available",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    colors: ["#d73027", "#f4f4f4", "#1d2939", "#6b7280"],
    features: ["Advanced Safety Assist", "Turbo Performance", "9-inch Display"]
  },
  {
    name: "Myvi",
    variant: "AV",
    price: 59900,
    tagline: "Malaysia's favourite hatchback.",
    stock: "6 units available",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    colors: ["#1f4fa3", "#f5f5f5", "#202020", "#a32626"],
    features: ["Smart Entry", "Fuel Efficient", "Lane Departure Warning"]
  },
  {
    name: "Alza",
    variant: "AV",
    price: 75500,
    tagline: "A comfortable 7-seater for the family.",
    stock: "2 units available",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    colors: ["#2e3a59", "#f7f7f7", "#6b6b6b", "#7a1d1d"],
    features: ["7 Seats", "Rear Air Conditioning", "Adaptive Cruise Control"]
  },
  {
    name: "Bezza",
    variant: "AV",
    price: 49980,
    tagline: "A practical sedan with excellent fuel economy.",
    stock: "8 units available",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    colors: ["#8a1c1c", "#f7f7f7", "#4b5563", "#1e3a5f"],
    features: ["Large Boot Space", "Eco Idle", "Vehicle Stability Control"]
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
  modelTitle.textContent = `Perodua ${model.name}`;
  vehicleName.textContent = `Perodua ${model.name}`;
  variantBadge.textContent = model.variant;
  vehicleTagline.textContent = model.tagline;
  vehiclePrice.textContent = currency(model.price);
  vehicleImage.src = model.image;
  vehicleImage.alt = `Perodua ${model.name}`;
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
