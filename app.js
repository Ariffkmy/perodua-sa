
const models = [
  {
    id: "proton-all-new-x50",
    name: "All-New X50",
    bodyType: "SUV",
    price: 89800,
    priceLabel: "Starting Price",
    tagline: "Intelligent compact SUV with 181 PS of turbocharged performance.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    colors: ["#c8102e", "#f4f4f4", "#1d2939", "#6b7280"],
    powertrain: {
      engine: "i-GT 1.5TD turbocharged petrol engine",
      power_ps: 181,
      torque_nm: 290,
      transmission: "7-speed Dual Clutch Transmission (DCT)",
      drive_modes: ["Adaptive", "Normal", "Eco", "Sport"]
    },
    warranty: {
      years: 5,
      mileage: "Unlimited",
      data_package: "2GB/month for 5 years",
      free_labour_service: "6 times"
    },
    sections: {
      Exterior: [
        "Dual-tone exterior",
        "Full LED headlamps with daytime running lamps",
        "Front welcome lamps",
        "18-inch alloy wheels",
        "Sporty spoiler",
        "Full LED rear tail-light bar",
        "Quad exhaust tailpipes",
        "Power tailgate"
      ],
      Interior: [
        "Dual-tone interior",
        "Premium soft-touch interior",
        "72-colour rhythmic ambient lighting",
        "Floating floor console",
        "Panoramic sunroof",
        "6-way driver power seat",
        "Semi-transparent sun visors",
        "10L under-console storage",
        "Rear air vents",
        "Auto rain-sensing front wipers"
      ],
      Infotainment: [
        "14.6-inch infotainment head unit",
        "Voice command in Bahasa Melayu and English",
        "Wireless Apple CarPlay and Android Auto",
        "Online navigation",
        "Online weather forecast",
        "Online music streaming",
        "PROTON Link 2.0 mobile app",
        "Wireless charger",
        "4 USB ports"
      ],
      Safety: [
        "Autonomous Emergency Braking",
        "Forward Collision Warning",
        "Adaptive Cruise Control with Stop & Go",
        "Intelligent Cruise Control",
        "Lane Keep Assist",
        "Lane Departure Warning",
        "Lane Departure Prevention",
        "Lane Centering Control",
        "Traffic Sign Information",
        "Intelligent High Beam Control",
        "Lane Change Assist",
        "Rear Collision Warning",
        "Rear Cross Traffic Alert",
        "Door Opening Warning",
        "Auto Park Assist",
        "360-degree HD camera",
        "180-degree transparent view",
        "Tyre Pressure Monitoring System",
        "6 SRS airbags"
      ]
    }
  },
  {
    id: "proton-x70",
    name: "X70",
    bodyType: "SUV",
    price: 99800,
    priceLabel: "Introductory Price",
    tagline: "Premium SUV with ventilated seats and full ADAS suite.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    colors: ["#1f4fa3", "#f5f5f5", "#202020", "#a32626"],
    powertrain: {
      engine: "i-GT 1.5TD turbocharged petrol engine",
      power_ps: 181,
      torque_nm: 290,
      transmission: "7-speed Dual Clutch Transmission with manual mode",
      drive_modes: ["Normal", "Eco", "Sport"]
    },
    warranty: {
      years: 5,
      mileage: "Unlimited",
      data_package: "2GB/month for 5 years",
      free_labour_service: "6 times"
    },
    sections: {
      Exterior: [
        "LED headlamps with daytime running lamps",
        "19-inch dual-tone alloy wheels",
        "Auto rain-sensing front wipers",
        "Front welcome lamps",
        "Power tailgate with nearby auto-open"
      ],
      Interior: [
        "7-inch meter combination",
        "72-colour rhythmic ambient lighting",
        "6-way driver power seat with 2-way lumbar support",
        "4-way front passenger power seat with Boss switch",
        "Front ventilated seats",
        "Auto dual-zone air-conditioning",
        "Air purifier system"
      ],
      Infotainment: [
        "12.3-inch infotainment head unit",
        "Voice command",
        "PROTON Link 2.0 mobile app",
        "Wireless Apple CarPlay and Android Auto",
        "Online navigation",
        "Online music streaming",
        "Online weather forecast",
        "5 USB ports"
      ],
      Safety: [
        "Autonomous Emergency Braking",
        "Forward Collision Warning",
        "Adaptive Cruise Control with Stop & Go",
        "Intelligent Cruise Control",
        "Lane Keep Assist",
        "Lane Departure Warning",
        "Lane Departure Prevention",
        "Lane Centering Control",
        "Traffic Sign Information",
        "Intelligent High Beam Control",
        "Lane Change Assist",
        "Rear Cross Traffic Alert"
      ],
      "Sport Edition": [
        "X70 Sport Edition from RM 112,800 (package RM 2,500)",
        "Quartz Black body colour",
        "Black 19-inch alloy wheels",
        "Sport Edition front skirt",
        "Sport Edition side skirt",
        "Sport Edition rear skirt",
        "Sport Edition emblem",
        "Red-stitched steering wheel",
        "Red-stitched armrest",
        "Red seat stitching with embroidered Sport Edition logo",
        "Boot tray"
      ]
    }
  },
  {
    id: "proton-x90",
    name: "X90",
    bodyType: "7-seater SUV",
    price: 99800,
    priceLabel: "Introductory Price",
    tagline: "Three-row family SUV with seating for up to 7 adults.",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    colors: ["#2e3a59", "#f7f7f7", "#6b6b6b", "#7a1d1d"],
    powertrain: {
      engine: "i-GT 1.5TD turbocharged petrol engine",
      power_ps: 181,
      torque_nm: 290,
      transmission: "7-speed Dual Clutch Transmission with manual mode",
      drive_modes: ["Eco", "Comfort", "Sport"]
    },
    warranty: {
      years: 5,
      mileage: "Unlimited",
      free_labour_service: "5 years"
    },
    sections: {
      Capacity: [
        "Seating for up to 7 adults",
        "257L trunk space",
        "1,011L with third row folded",
        "2,050L with second and third rows folded",
        "36 storage compartments",
        "75kg roof rail capacity"
      ],
      Exterior: [
        "Utility roof rails",
        "LED headlamps with daytime running lamps",
        "Follow Me Home lights",
        "Front welcome lamps",
        "Auto rain-sensing front wipers"
      ],
      Interior: [
        "Spacious three-row seating",
        "Captain seats on selected variants",
        "60:40 split-fold second-row bench on selected variants",
        "Nappa leather seats",
        "6-way driver power seat with 2-way lumbar support",
        "4-way front passenger power seat with Boss switch",
        "First- and second-row ventilated seats",
        "Second- and third-row air vents",
        "Auto dual-zone air-conditioning with air purifier",
        "Independent rear air-conditioning",
        "Ergonomic headrests",
        "Remote engine start"
      ],
      Infotainment: [
        "12.3-inch infotainment head unit",
        "10.3-inch meter combination",
        "Wireless Apple CarPlay and Android Auto",
        "7 USB ports"
      ],
      Safety: [
        "360-degree HD camera",
        "180-degree transparent view",
        "Tyre Pressure Monitoring System",
        "6 SRS airbags",
        "Walk Away Auto Lock",
        "6 parking sensors"
      ]
    }
  },
  {
    id: "proton-s70",
    name: "S70",
    bodyType: "Sedan",
    price: 68800,
    priceLabel: "Introductory Price",
    tagline: "A refined C-segment sedan with a full ADAS suite.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    colors: ["#8a1c1c", "#f7f7f7", "#4b5563", "#1e3a5f"],
    powertrain: {
      engine: "i-GT 1.5TD turbocharged petrol engine",
      power_ps: 181,
      torque_nm: 290,
      transmission: "7-speed Dual Clutch Transmission",
      drive_modes: ["Sport", "Eco", "Comfort"]
    },
    warranty: {
      years: 5,
      mileage: "Unlimited",
      data_package: "2GB/month for 5 years",
      free_labour_service: "6 times"
    },
    sections: {
      Exterior: [
        "LED headlamps with daytime running lamps",
        "17-inch dual-tone alloy wheels",
        "LED rear tail-light bar",
        "Sporty aerokits",
        "Sunroof"
      ],
      Interior: [
        "10.3-inch meter combination",
        "6-way driver power seat",
        "Full-black interior",
        "Electric parking brake with auto brake hold",
        "Remote engine start"
      ],
      Infotainment: [
        "12.3-inch infotainment head unit",
        "Voice command",
        "PROTON Link 2.0 mobile app",
        "Wireless Apple CarPlay and Android Auto",
        "Online navigation",
        "Online music streaming",
        "Online weather forecast",
        "5 USB ports",
        "Wireless charger"
      ],
      Safety: [
        "Autonomous Emergency Braking",
        "Forward Collision Warning",
        "Adaptive Cruise Control with Stop & Go",
        "Intelligent Cruise Control",
        "Lane Keep Assist",
        "Lane Departure Warning",
        "Lane Departure Prevention",
        "Lane Centering Control",
        "Traffic Sign Information",
        "Intelligent High Beam Control",
        "Lane Change Assist",
        "Rear Cross Traffic Alert",
        "Rear Collision Warning",
        "Door Opening Warning",
        "Tyre Pressure Monitoring System",
        "360-degree HD camera with 3D display",
        "6 SRS airbags"
      ]
    }
  },
  {
    id: "proton-all-new-saga",
    name: "All-New Saga",
    bodyType: "Sedan",
    price: 38990,
    priceLabel: "Starting Price",
    tagline: "Malaysia's iconic sedan with heritage-inspired design.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    colors: ["#c8102e", "#f7f7f7", "#4b5563", "#1e3a5f"],
    powertrain: {
      engine: "i-GT 1.5 naturally aspirated petrol engine",
      power_ps: 120,
      torque_nm: 150
    },
    warranty: {
      years: 5,
      mileage: "150,000 km",
      free_labour_service: "3 times"
    },
    sections: {
      Exterior: [
        "Full LED projector headlamps with daytime running lamps",
        "Sulaman Songket grille design",
        "Dual-tone 15-inch alloy wheels",
        "Shark-fin antenna",
        "Full LED rear combination lamps",
        "Full LED rear tail-light bar",
        "Auto headlamps",
        "Follow Me Home lights",
        "Headlamp levelling"
      ],
      Interior: [
        "Class-leading cabin cooling, claimed as low as 15.2°C",
        "16-inch integrated dual-screen layout",
        "7-inch digital meter",
        "9-inch infotainment display",
        "Intelligent entry with push-start button",
        "Electric auto-folding door mirrors",
        "Sporty flat-bottom steering wheel",
        "Dual-tone leatherette seats",
        "Congkak-inspired air vents",
        "Pantai-inspired wave design",
        "Rear adjustable headrests",
        "3 USB ports",
        "Reminder before leaving vehicle"
      ],
      Infotainment: [
        "Wireless Apple CarPlay and Android Auto",
        "Reverse camera"
      ],
      Safety: [
        "Autonomous Emergency Braking",
        "Forward Collision Warning",
        "Front Departure Alert",
        "Intelligent High Beam Control",
        "Lane Departure Warning",
        "Lane Change Assist",
        "Rear Collision Warning",
        "Rear Cross Traffic Alert",
        "Door Opening Warning",
        "6 SRS airbags",
        "PROTON Reinforced Safety Structure up to 1,500 MPa",
        "Front and rear parking sensors"
      ]
    }
  },
  {
    id: "proton-persona",
    name: "Persona",
    bodyType: "Sedan",
    price: 47800,
    priceLabel: "Starting Price",
    tagline: "A practical sedan with a generous 510L boot.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    colors: ["#1f4fa3", "#f7f7f7", "#202020", "#a32626"],
    powertrain: null,
    warranty: {
      years: 5,
      mileage: "150,000 km",
      data_package: "1GB/month for 5 years",
      free_labour_service: "3 times"
    },
    sections: {
      Capacity: [
        "510L boot space",
        "60:40 split-fold rear seat"
      ],
      Exterior: [
        "LED headlamps",
        "LED daytime running lamps",
        "16-inch dual-tone alloy wheels",
        "Electric auto-folding door mirrors"
      ],
      Interior: [
        "Leatherette seats",
        "3.5-inch TFT multi-information display",
        "Air-conditioning with digital display",
        "Intelligent entry with push-start button",
        "Remote trunk release",
        "N95 cabin filter",
        "ECO mode",
        "Front armrest with console box"
      ],
      Infotainment: [
        "8-inch floating infotainment head unit",
        "Online navigation",
        "Online music streaming",
        "Online weather forecast",
        "Smartphone connectivity",
        "Bluetooth",
        "4G and Wi-Fi connectivity",
        "Voice command",
        "6 USB ports"
      ],
      Safety: [
        "6 SRS airbags",
        "Reinforced body structure with hot-press-formed steel",
        "Electronic Stability Control",
        "Traction Control System",
        "Hill Hold Assist"
      ]
    }
  },
  {
    id: "proton-iriz",
    name: "Iriz",
    bodyType: "Hatchback",
    price: 42800,
    priceLabel: "Starting Price",
    tagline: "A nimble hatchback with PROTON Ride & Handling.",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    colors: ["#c8102e", "#f7f7f7", "#4b5563", "#6b7280"],
    powertrain: null,
    warranty: {
      years: 5,
      mileage: "150,000 km",
      data_package: "1GB/month for 5 years",
      free_labour_service: "3 times"
    },
    sections: {
      Exterior: [
        "LED headlamps",
        "LED daytime running lamps",
        "16-inch dual-tone alloy wheels",
        "All-round body mouldings"
      ],
      Interior: [
        "Semi-leather seats",
        "Air-conditioning with digital display",
        "Front armrest with console box",
        "Sport pedals",
        "PROTON Ride & Handling"
      ],
      Infotainment: [
        "8-inch floating infotainment head unit",
        "Online navigation",
        "Online music streaming",
        "Online weather forecast",
        "Smartphone connectivity",
        "Bluetooth",
        "4G and Wi-Fi connectivity",
        "Voice command",
        "6 USB ports"
      ],
      Safety: [
        "6 SRS airbags",
        "Reinforced body structure with hot-press-formed steel",
        "Electronic Stability Control",
        "Traction Control System",
        "Hill Hold Assist"
      ]
    }
  }
];

let selectedModel = 0;
let selectedSection = null;

const modelList = document.getElementById("modelList");
const modelTitle = document.getElementById("modelTitle");
const vehicleName = document.getElementById("vehicleName");
const variantBadge = document.getElementById("variantBadge");
const vehicleTagline = document.getElementById("vehicleTagline");
const priceLabel = document.getElementById("priceLabel");
const vehiclePrice = document.getElementById("vehiclePrice");
const vehicleImage = document.getElementById("vehicleImage");
const colorOptions = document.getElementById("colorOptions");
const specStrip = document.getElementById("specStrip");
const detailTabs = document.getElementById("detailTabs");
const detailList = document.getElementById("detailList");
const priceInput = document.getElementById("priceInput");
const warrantyStatus = document.getElementById("warrantyStatus");
const warrantyDetail = document.getElementById("warrantyDetail");

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
      selectedSection = null;
      render();
    });
    modelList.appendChild(button);
  });
}

function renderSpecStrip(model) {
  specStrip.innerHTML = "";
  const specs = [];

  if (model.powertrain) {
    specs.push({ value: `${model.powertrain.power_ps} PS`, label: "Power" });
    specs.push({ value: `${model.powertrain.torque_nm} Nm`, label: "Torque" });
    specs.push({ value: model.powertrain.transmission.includes("7-speed") ? "7-speed DCT" : "Auto", label: "Transmission" });
    if (model.powertrain.drive_modes) {
      specs.push({ value: `${model.powertrain.drive_modes.length} modes`, label: "Drive Modes" });
    }
  }
  specs.push({ value: `${model.warranty.years} years`, label: `Warranty · ${model.warranty.mileage}` });

  specs.slice(0, 4).forEach(spec => {
    const tile = document.createElement("div");
    tile.className = "spec-tile";
    tile.innerHTML = `<strong>${spec.value}</strong><span>${spec.label}</span>`;
    specStrip.appendChild(tile);
  });

  const engineLine = document.getElementById("engineLine");
  engineLine.textContent = model.powertrain ? model.powertrain.engine : "";
  engineLine.style.display = model.powertrain ? "block" : "none";
}

function renderDetailSections(model) {
  const sectionNames = Object.keys(model.sections);
  if (!selectedSection || !sectionNames.includes(selectedSection)) {
    selectedSection = sectionNames[0];
  }

  detailTabs.innerHTML = "";
  sectionNames.forEach(name => {
    const tab = document.createElement("button");
    tab.className = `detail-tab ${name === selectedSection ? "active" : ""}`;
    tab.innerHTML = `${name} <small>${model.sections[name].length}</small>`;
    tab.addEventListener("click", () => {
      selectedSection = name;
      renderDetailSections(model);
    });
    detailTabs.appendChild(tab);
  });

  detailList.innerHTML = model.sections[selectedSection]
    .map(item => `<div class="detail-item">${item}</div>`)
    .join("");
}

function renderWarranty(model) {
  const w = model.warranty;
  warrantyStatus.textContent = `${w.years}-year / ${w.mileage} warranty`;
  const extras = [];
  if (w.free_labour_service) extras.push(`Free labour service: ${w.free_labour_service}`);
  if (w.data_package) extras.push(`Data: ${w.data_package}`);
  warrantyDetail.textContent = extras.join(" · ");
}

function renderSelectedModel() {
  const model = models[selectedModel];
  modelTitle.textContent = `PROTON ${model.name}`;
  vehicleName.textContent = `PROTON ${model.name}`;
  variantBadge.textContent = model.bodyType;
  vehicleTagline.textContent = model.tagline;
  priceLabel.textContent = model.priceLabel;
  vehiclePrice.textContent = currency(model.price);
  vehicleImage.src = model.image;
  vehicleImage.alt = `PROTON ${model.name}`;
  priceInput.value = model.price;

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

  renderSpecStrip(model);
  renderDetailSections(model);
  renderWarranty(model);
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
