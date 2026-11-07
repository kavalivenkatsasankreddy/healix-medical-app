(() => {
  "use strict";
  const KEY = "healix-demo-v1";
  const categories = [
    { name: "Everyday wellness", icon: "✳", tone: "mint" },
    { name: "Vitamins & nutrition", icon: "✿", tone: "peach" },
    { name: "Personal care", icon: "◌", tone: "blue" },
    { name: "First aid", icon: "＋", tone: "pink" },
    { name: "Seasonal care", icon: "☼", tone: "cream" },
  ];
  const initialProducts = [
    { id: "vit-c", name: "Vitamin C 500 mg", brand: "WellSpring", category: "Vitamins & nutrition", activeIngredient: "ascorbic acid 500 mg", price: 128, generic: false, rx: false, stock: 42, batch: "WS-2205", expiry: "2027-08", look: "bottle", color: "mint", pharmacies: [{ name: "Green Cross Pharmacy", price: 128, distance: "0.8 km" }, { name: "Care Corner Chemist", price: 134, distance: "1.2 km" }, { name: "Neighbourhood Health", price: 145, distance: "2.1 km" }] },
    { id: "vit-c-generic", name: "Ascorbic acid 500 mg", brand: "Healix Essentials (demo generic)", category: "Vitamins & nutrition", activeIngredient: "ascorbic acid 500 mg", price: 86, generic: true, rx: false, stock: 30, batch: "HE-6302", expiry: "2027-11", look: "bottle", color: "mint", pharmacies: [{ name: "Green Cross Pharmacy", price: 86, distance: "0.8 km" }, { name: "Care Corner Chemist", price: 91, distance: "1.2 km" }] },
    { id: "paracetamol", name: "Paracetamol 500 mg", brand: "Everyday Care", category: "Everyday wellness", activeIngredient: "paracetamol 500 mg", price: 24, generic: false, rx: false, stock: 8, batch: "EC-1482", expiry: "2026-12", look: "capsules", color: "peach", pharmacies: [{ name: "Green Cross Pharmacy", price: 24, distance: "0.8 km" }, { name: "Care Corner Chemist", price: 27, distance: "1.2 km" }, { name: "Neighbourhood Health", price: 30, distance: "2.1 km" }] },
    { id: "para-generic", name: "Paracetamol 500 mg (generic)", brand: "Healix Essentials (demo generic)", category: "Everyday wellness", activeIngredient: "paracetamol 500 mg", price: 15, generic: true, rx: false, stock: 35, batch: "HE-2031", expiry: "2027-09", look: "capsules", color: "peach", pharmacies: [{ name: "Green Cross Pharmacy", price: 15, distance: "0.8 km" }, { name: "Care Corner Chemist", price: 18, distance: "1.2 km" }] },
    { id: "antacid", name: "Antacid chewable tablets", brand: "CalmDay", category: "Everyday wellness", price: 86, generic: true, rx: false, stock: 4, batch: "CD-0144", expiry: "2027-02", look: "bottle", color: "blue", pharmacies: [{ name: "Green Cross Pharmacy", price: 86, distance: "0.8 km" }, { name: "Care Corner Chemist", price: 90, distance: "1.2 km" }] },
    { id: "moisturiser", name: "Daily moisturising lotion", brand: "KindSkin", category: "Personal care", price: 219, generic: false, rx: false, stock: 23, batch: "KS-8652", expiry: "2028-04", look: "tube", color: "peach", pharmacies: [{ name: "Green Cross Pharmacy", price: 219, distance: "0.8 km" }, { name: "Care Corner Chemist", price: 228, distance: "1.2 km" }] },
    { id: "bandage", name: "Sterile adhesive bandages", brand: "FirstKind", category: "First aid", price: 65, generic: false, rx: false, stock: 37, batch: "FK-9281", expiry: "2029-01", look: "box", color: "cream", pharmacies: [{ name: "Green Cross Pharmacy", price: 65, distance: "0.8 km" }, { name: "Neighbourhood Health", price: 69, distance: "2.1 km" }] },
    { id: "saline", name: "Saline nasal spray", brand: "Breathe Easy", category: "Seasonal care", price: 112, generic: true, rx: false, stock: 17, batch: "BE-8841", expiry: "2027-04", look: "tube", color: "blue", pharmacies: [{ name: "Care Corner Chemist", price: 112, distance: "1.2 km" }, { name: "Green Cross Pharmacy", price: 118, distance: "0.8 km" }] },
    { id: "omega", name: "Omega-3 capsules", brand: "WellSpring", category: "Vitamins & nutrition", price: 345, generic: true, rx: false, stock: 12, batch: "WS-3981", expiry: "2027-10", look: "capsules", color: "peach", pharmacies: [{ name: "Green Cross Pharmacy", price: 345, distance: "0.8 km" }, { name: "Care Corner Chemist", price: 359, distance: "1.2 km" }] },
    { id: "allergy", name: "Cetirizine 10 mg", brand: "Everyday Care", category: "Seasonal care", price: 38, generic: true, rx: true, stock: 16, batch: "EC-4764", expiry: "2027-06", look: "capsules", color: "mint", pharmacies: [{ name: "Green Cross Pharmacy", price: 38, distance: "0.8 km" }, { name: "Care Corner Chemist", price: 42, distance: "1.2 km" }] },
  ];
  const defaultOrders = [{ id: "HX-2048", customer: "Aarav Mehta", pharmacy: "Green Cross Pharmacy", items: "Vitamin C × 1", total: 128, status: "Out for delivery" }];
  const defaultPartners = [
    { name: "Green Cross Pharmacy", role: "Pharmacy vendor", email: "hello@greencross.demo", business: "Demo pharmacy · sample", status: "Approved" },
    { name: "Care Corner Chemist", role: "Pharmacy vendor", email: "care@corner.demo", business: "Demo pharmacy · sample", status: "Approved" },
    { name: "Neighbourhood Health", role: "Pharmacy vendor", email: "team@neighbour.demo", business: "Demo pharmacy · sample", status: "Pending review" },
    { name: "Horizon Health Supply", role: "Supplier", email: "hello@horizon.demo", business: "Demo distributor · sample", status: "Approved" },
  ];
  const defaults = {
    products: initialProducts, cart: [], orders: defaultOrders, prescriptions: [], reminders: [],
    messages: [{ text: "Hello! I’m the demo care assistant. Ask about order status or medicine availability.", mine: false, time: "Now" }],
    partners: defaultPartners, supplies: [{ id: "SR-104", pharmacy: "Green Cross Pharmacy", items: "Vitamin C 500 mg × 20", date: "Today", status: "Requested" }, { id: "SR-105", pharmacy: "Care Corner Chemist", items: "Paracetamol 500 mg × 50", date: "Yesterday", status: "In transit" }],
    listings: [{ name: "Everyday wellness range", detail: "Horizon Health Supply · 24 listings" }, { name: "First-aid essentials", detail: "Horizon Health Supply · 12 listings" }],
    user: null, accounts: [], location: "", selectedPharmacy: "Green Cross Pharmacy"
  };
  let state;
  try { state = { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || "{}") }; }
  catch { state = { ...defaults }; }
  if (!Array.isArray(state.products) || state.products.length === 0) state.products = initialProducts;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const inr = n => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { toast("Browser storage is full; changes may not persist."); } };
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const monthNow = () => new Date().toISOString().slice(0, 7);
  const batchesFor = product => product.batches || (product.batches = [{ batch: product.batch || "Demo batch", expiry: product.expiry || "2027-10", stock: Number(product.stock) || 0 }]);
  const availableStock = product => batchesFor(product).reduce((total, batch) => total + (batch.expiry >= monthNow() ? Number(batch.stock) || 0 : 0), 0);
  function allocateFefo(product, quantity) {
    const batches = batchesFor(product).filter(batch => batch.expiry >= monthNow()).sort((a, b) => a.expiry.localeCompare(b.expiry));
    if (batches.reduce((total, batch) => total + batch.stock, 0) < quantity) return false;
    let remaining = quantity;
    for (const batch of batches) {
      const taken = Math.min(batch.stock, remaining);
      batch.stock -= taken;
      remaining -= taken;
      if (!remaining) break;
    }
    product.stock = availableStock(product);
    return true;
  }
  const toast = text => { const el = $("#toast"); el.textContent = text; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 2800); };
  const openModal = html => { $("#modalContent").innerHTML = html; $("#modal").showModal(); };
  const closeModal = () => $("#modal").close();
  const demoNotice = "This is a local functional demo, not a medical service. Product and price data are samples.";
  const navTo = page => {
    if (!$("#page-" + page)) page = "home";
    if ($("#modal").open) closeModal();
    $$(".page").forEach(el => el.classList.toggle("active", el.id === "page-" + page));
    $$(".nav").forEach(el => el.classList.toggle("active", el.dataset.page === page));
    $("#sidebar").classList.remove("open");
    if (page === "catalog") renderCatalog();
    if (page === "cart") renderCart();
    if (page === "orders") renderOrders();
    if (page === "prescriptions") renderPrescriptions();
    if (page === "reminders") renderReminders();
    if (page === "support") renderMessages();
    if (["vendor", "supplier", "admin"].includes(page)) renderDashboard(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const currentUser = () => state.user;
  function updateHeader() {
    const user = currentUser();
    $("#userName").textContent = user ? user.name : "Guest";
    $("#userRole").textContent = user ? ({ vendor: "Pharmacy vendor", supplier: "Supplier", admin: "Admin", customer: "Customer" }[user.role] || "Customer") : "Customer";
    $("#avatar").textContent = user ? user.name.charAt(0).toUpperCase() : "G";
    $("#loginButton").textContent = user ? "My account ↗" : "Log in ↗";
    $("#cartCount").textContent = state.cart.reduce((n, item) => n + item.quantity, 0);
    $("#locationText").textContent = state.location || "Choose your location⌄";
    const roleButtons = {
      customer: ["orders", "prescriptions", "reminders", "support"],
      vendor: ["vendor"], supplier: ["supplier"], admin: ["admin"]
    };
    const visible = new Set(["home", "catalog", "cart", ...((roleButtons[user?.role] || roleButtons.customer))]);
    $$(".nav").forEach(el => el.classList.toggle("hidden", !visible.has(el.dataset.page)));
  }
  function productCard(product) {
    const pharmacies = product.pharmacies || [];
    const cheapest = pharmacies.length ? [...pharmacies].sort((a, b) => a.price - b.price)[0] : null;
    return `<article class="product-card"><div class="product-art"><span class="product-tag">${product.rx ? "Pharmacist review" : product.category}</span><div class="medicine-visual ${escapeHtml(product.look || "bottle")} ${escapeHtml(product.color || "mint")}">${product.look === "box" ? "H+" : product.look === "capsules" ? "" : "H+"}</div></div><h3>${escapeHtml(product.name)}</h3><p class="maker">${escapeHtml(product.brand || "Healix demo")} · ${escapeHtml(product.category)}</p><div class="price-row"><span class="price">${inr(product.price)} <small>from</small></span><button data-compare="${escapeHtml(product.id)}">Compare</button></div><p class="maker">${cheapest ? `Lowest at ${escapeHtml(cheapest.name)}` : "Local pharmacy"}</p><button class="add-button" data-add="${escapeHtml(product.id)}" ${product.rx ? 'title="Prescription medicines unavailable in this demo"' : ""}>${product.rx ? "Review required" : "Add to basket +"}</button></article>`;
  }
  function renderProducts(container, products) {
    container.innerHTML = products.length ? products.map(productCard).join("") : `<div class="empty-state"><div>⌕</div><strong>No medicines match that search.</strong><p>Try a different name or category.</p></div>`;
  }
  function renderHome() {
    $("#categories").innerHTML = categories.map((cat, i) => `<button class="category-card" data-category="${escapeHtml(cat.name)}"><span class="category-icon">${cat.icon}</span><span>${escapeHtml(cat.name)}</span></button>`).join("");
    renderProducts($("#featured"), state.products.slice(0, 4));
    $("#pharmacies").innerHTML = state.products[0].pharmacies.map((p, i) => `<article class="pharmacy-card"><span class="pharmacy-mark">${["G", "C", "N"][i]}</span><div><strong>${escapeHtml(p.name)}</strong><p>Partner pharmacy · ${p.distance} away</p><span>Sample prices from ${inr(p.price)}</span></div></article>`).join("");
    $("#today").textContent = new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  }
  function renderCatalog() {
    const cats = ["All categories", ...new Set(state.products.map(p => p.category))];
    if ($("#categoryFilter").options.length !== cats.length) $("#categoryFilter").innerHTML = cats.map(c => `<option>${escapeHtml(c)}</option>`).join("");
    const query = ($("#catalogSearch").value || "").trim().toLowerCase();
    const category = $("#categoryFilter").value;
    let products = state.products.filter(p => [p.name, p.brand, p.category].join(" ").toLowerCase().includes(query) && (category === "All categories" || p.category === category));
    const sort = $("#sortFilter").value;
    if (sort === "low") products.sort((a, b) => a.price - b.price);
    if (sort === "high") products.sort((a, b) => b.price - a.price);
    $("#resultCount").textContent = `${products.length} sample ${products.length === 1 ? "item" : "items"}`;
    renderProducts($("#catalogProducts"), products);
  }
  function renderCart() {
    $("#cartItems").innerHTML = state.cart.length ? state.cart.map(item => {
      const p = state.products.find(product => product.id === item.id);
      if (!p) return "";
      return `<div class="cart-row"><div class="product-art"><div class="medicine-visual ${escapeHtml(p.look || "bottle")} ${escapeHtml(p.color || "mint")}">H+</div></div><div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.brand)} · ${inr(p.price)} each</p></div><div class="quantity"><button data-qty="${p.id}" data-change="-1">−</button><b>${item.quantity}</b><button data-qty="${p.id}" data-change="1">+</button></div><button class="remove" data-remove="${p.id}">Remove</button></div>`;
    }).join("") : `<div class="empty-state"><div>＋</div><strong>Your basket is taking a breather.</strong><p>Explore the sample catalogue and add non-prescription essentials.</p><button class="dark-button" data-page="catalog">Browse medicines →</button></div>`;
    const subtotal = state.cart.reduce((sum, item) => sum + (state.products.find(p => p.id === item.id)?.price || 0) * item.quantity, 0);
    const tax = Math.round(subtotal * 0.05);
    const delivery = subtotal && subtotal < 300 ? 25 : 0;
    $("#checkout").innerHTML = `<h2>Order summary</h2><p class="muted">${state.cart.length ? `Delivery from ${escapeHtml(state.selectedPharmacy)}` : "Your items will appear here"}</p><div class="summary-line"><span>Subtotal</span><b>${inr(subtotal)}</b></div><div class="summary-line"><span>Demo GST (5%)</span><b>${inr(tax)}</b></div><div class="summary-line"><span>Demo delivery ${subtotal >= 300 ? "(free over ₹300)" : ""}</span><b>${inr(delivery)}</b></div><div class="summary-line total"><span>Total</span><b>${inr(subtotal + tax + delivery)}</b></div><label class="form">Delivery address<input id="address" placeholder="Enter a demo delivery address"></label><label class="form">Demo payment method<select id="paymentMethod"><option>UPI (mock)</option><option>Card (mock)</option><option>Net banking (mock)</option><option>Pay on delivery (demo)</option></select></label><p class="muted">Demo checkout only. No payment is collected.</p><button id="checkoutButton" class="dark-button full" ${state.cart.length ? "" : "disabled"}>Place demo order →</button>`;
  }
  function renderOrders() {
    const orders = (state.user?.role === "admin" || state.user?.role === "vendor") ? state.orders : state.orders.filter(o => !o.customer || o.customer === (state.user?.name || "Demo customer"));
    $("#orderList").innerHTML = orders.length ? orders.map(o => {
      const stages = ["Order placed", "Being prepared", "Out for delivery", "Delivered"];
      const current = Math.max(0, stages.findIndex(s => s.toLowerCase() === o.status.toLowerCase()));
      return `<article class="order-card"><div class="order-card-head"><div><h3>${escapeHtml(o.id)} <span class="status ${o.status === "Prescription review" ? "pending" : ""}">${escapeHtml(o.status)}</span></h3><p>${escapeHtml(o.items)} · ${escapeHtml(o.pharmacy || "Local pharmacy")} · ${inr(o.total)}</p></div><span class="muted">Demo order</span></div><div class="progress">${stages.map((s, i) => `<div class="progress-step ${i <= current ? "done" : ""}">${s}</div>`).join("")}</div></article>`;
    }).join("") : `<div class="card empty-state"><strong>No orders just yet.</strong><p>Place a demo order for a non-prescription sample item to see its tracking stages here.</p><button class="dark-button" data-page="catalog">Explore medicines →</button></div>`;
  }
  function renderPrescriptions() {
    $("#rxList").innerHTML = state.prescriptions.length ? state.prescriptions.map(rx => `<div class="reminder-item"><span class="reminder-time">FILE</span><div><strong>${escapeHtml(rx.name)}</strong><small>Added ${escapeHtml(rx.date)} · review action is a demo only</small></div><span class="status ${rx.status === "Awaiting pharmacist review" ? "pending" : ""}">${escapeHtml(rx.status)}</span></div>`).join("") : `<div class="empty-state compact"><strong>No prescription files added.</strong><p>Uploads in this demo are not sent to a pharmacist.</p></div>`;
  }
  function renderReminders() {
    $("#reminders").innerHTML = state.reminders.length ? state.reminders.map((r, i) => `<div class="reminder-item ${r.done ? "done" : ""}"><span class="reminder-time">${escapeHtml(r.time)}</span><div><strong>${escapeHtml(r.name)}</strong><small>${escapeHtml(r.period)}${r.notes ? ` · ${escapeHtml(r.notes)}` : ""}</small></div><button class="check" data-reminder="${i}">${r.done ? "Completed ✓" : "Mark done"}</button></div>`).join("") : `<div class="empty-state compact"><strong>No reminders yet.</strong><p>Add a routine to start your daily plan.</p></div>`;
  }
  function renderMessages() {
    $("#messages").innerHTML = state.messages.map(m => `<div class="bubble ${m.mine ? "mine" : ""}">${escapeHtml(m.text)}<small>${escapeHtml(m.time)}</small></div>`).join("");
    $("#messages").scrollTop = $("#messages").scrollHeight;
  }
  function tableRow(cells) { return `<tr>${cells.map(c => `<td>${c}</td>`).join("")}</tr>`; }
  function renderDashboard(page) {
    if (page === "vendor") {
      const low = state.products.filter(p => availableStock(p) <= 10 || batchesFor(p).some(b => b.expiry >= monthNow() && b.expiry <= new Date(Date.now() + 60 * 86400000).toISOString().slice(0, 7) && b.stock > 0));
      $("#vendorStats").innerHTML = [["Live listings", state.products.length, "+ sample catalogue"], ["Open orders", state.orders.filter(o => o.status !== "Delivered").length, "Demo workflow"], ["Low stock", low.length, "Review soon"], ["Sales this month", inr(28450), "Illustrative"]];
      $("#inventory").innerHTML = state.products.map(p => { const batches = batchesFor(p); const next = [...batches].sort((a, b) => a.expiry.localeCompare(b.expiry))[0]; const stock = availableStock(p); const near = next && next.expiry >= monthNow() && next.expiry <= new Date(Date.now() + 60 * 86400000).toISOString().slice(0, 7); return tableRow([`<strong>${escapeHtml(p.name)}</strong>`, `${escapeHtml(next?.batch || "Demo batch")} · ${escapeHtml(next?.expiry || "—")}`, `${stock} units`, inr(p.price), stock <= 10 ? `<span class="status pending">Low stock</span>` : near ? `<span class="status pending">Near expiry</span>` : `<span class="status">In stock</span>`]); }).join("");
      $("#stockAlerts").innerHTML = low.map(p => { const near = batchesFor(p).some(b => b.expiry >= monthNow() && b.expiry <= new Date(Date.now() + 60 * 86400000).toISOString().slice(0, 7) && b.stock > 0); return `<div class="alert-row"><strong><i class="alert-dot"></i>${escapeHtml(p.name)}</strong><small>${availableStock(p)} available · ${near ? "batch nearing expiry; FEFO allocation enabled" : "reorder to avoid a stockout"}</small></div>`; }).join("") || `<p class="muted">All sample products have healthy stock.</p>`;
      $("#vendorOrders").innerHTML = state.orders.map((o, i) => tableRow([`<strong>${escapeHtml(o.id)}</strong>`, escapeHtml(o.customer || "Demo customer"), escapeHtml(o.items), inr(o.total), `<span class="status">${escapeHtml(o.status)}</span>`, `<button class="table-action" data-order-status="${i}">Advance status</button>`])).join("");
      $("#vendorPrescriptions").innerHTML = state.prescriptions.length ? state.prescriptions.map((rx, i) => tableRow([`<strong>${escapeHtml(rx.name)}</strong>`, escapeHtml(rx.submittedBy || "Demo customer"), escapeHtml(rx.date), `<span class="status ${rx.status === "Awaiting pharmacist review" ? "pending" : rx.status === "Rejected (demo)" ? "rejected" : ""}">${escapeHtml(rx.status)}</span>`, rx.status === "Awaiting pharmacist review" ? `<button class="table-action" data-rx-review="approve:${i}">Approve demo</button> <button class="table-action" data-rx-review="reject:${i}">Reject</button>` : "—"])).join("") : `<tr><td colspan="5">No demo submissions are waiting for review.</td></tr>`;
    }
    if (page === "supplier") {
      $("#supplierStats").innerHTML = [["Requests", state.supplies.length, "From partner pharmacies"], ["Awaiting action", state.supplies.filter(s => s.status === "Requested").length, "Review requests"], ["Demo listings", state.listings.length, "Sample catalogue"], ["Partner pharmacies", state.partners.filter(p => p.role.includes("vendor") && p.status === "Approved").length, "Approved accounts"]];
      $("#supplyRequests").innerHTML = state.supplies.map((s, i) => tableRow([`<strong>${escapeHtml(s.id)}</strong>`, escapeHtml(s.pharmacy), escapeHtml(s.items), escapeHtml(s.date), `<span class="status ${s.status === "Requested" ? "pending" : ""}">${escapeHtml(s.status)}</span>`, `<button class="table-action" data-supply-status="${i}">Update</button>`])).join("");
      $("#listings").innerHTML = state.listings.map(l => `<div class="listing-row"><strong>${escapeHtml(l.name)}</strong><small>${escapeHtml(l.detail)}</small></div>`).join("");
    }
    if (page === "admin") {
      $("#adminStats").innerHTML = [["Partner accounts", state.partners.length, "Vendor & supplier"], ["Pending approvals", state.partners.filter(p => p.status === "Pending review").length, "Needs review"], ["Demo orders", state.orders.length, "All sample orders"], ["Catalogue items", state.products.length, "Sample data only"]];
      $("#partners").innerHTML = state.partners.map((p, i) => tableRow([`<strong>${escapeHtml(p.name)}</strong>`, escapeHtml(p.role), escapeHtml(p.email), escapeHtml(p.business || "—"), `<span class="status ${p.status === "Pending review" ? "pending" : ""}">${escapeHtml(p.status)}</span>`, p.status === "Pending review" ? `<button class="table-action" data-approve="${i}">Approve</button>` : "—"])).join("");
      $("#adminOrders").innerHTML = state.orders.map(o => tableRow([`<strong>${escapeHtml(o.id)}</strong>`, escapeHtml(o.customer || "Demo customer"), escapeHtml(o.pharmacy || "Local pharmacy"), inr(o.total), `<span class="status">${escapeHtml(o.status)}</span>`])).join("");
    }
  }
  function showCompare(id) {
    const p = state.products.find(item => item.id === id);
    if (!p) return;
    const prices = [...(p.pharmacies || [])].sort((a, b) => a.price - b.price);
    const generic = p.activeIngredient ? state.products.find(item => item.generic && item.activeIngredient === p.activeIngredient && item.id !== p.id && item.price < p.price) : null;
    openModal(`<p class="eyebrow">LOCAL PHARMACY COMPARISON</p><h2>${escapeHtml(p.name)}</h2><p>Sample listing prices only. Check availability with a registered pharmacy.</p><div class="compare-list">${prices.length ? prices.map((ph, i) => `<div class="compare-row"><span><strong>${escapeHtml(ph.name)}</strong><small>${escapeHtml(ph.distance)} · demo listing</small></span><b>${inr(ph.price)} ${i === 0 ? '<small class="best">LOWEST SAMPLE PRICE</small>' : ""}</b><button class="table-action" data-select-pharmacy="${escapeHtml(ph.name)}">Select</button></div>`).join("") : `<p>No pharmacy listings are available for this demo item.</p>`}</div>${generic ? `<div class="generic-note"><strong>Same listed ingredient & strength (demo match)</strong><p>${escapeHtml(generic.name)} — ${inr(generic.price)}. This synthetic catalogue match is not a recommendation; a pharmacist must verify suitability before any substitution.</p></div>` : ""}`);
  }
  function addToCart(id) {
    const p = state.products.find(item => item.id === id);
    if (!p) return;
    if (p.rx) { toast("Prescription item unavailable: pharmacist verification is required."); return; }
    if (availableStock(p) <= 0) { toast("This sample item is out of stock or expired."); return; }
    const entry = state.cart.find(item => item.id === id);
    if (entry) {
      if (entry.quantity >= availableStock(p)) { toast("Quantity exceeds available sample stock."); return; }
      entry.quantity += 1;
    } else state.cart.push({ id, quantity: 1 });
    persist(); updateHeader(); toast(`${p.name} added to your basket.`);
  }
  function placeOrder() {
    if (!state.cart.length) return;
    const address = $("#address").value.trim();
    if (address.length < 5) { toast("Please add a demo delivery address (at least 5 characters)."); $("#address").focus(); return; }
    for (const item of state.cart) {
      const product = state.products.find(p => p.id === item.id);
      if (!product || product.rx || item.quantity > availableStock(product)) { toast("One or more items need pharmacy review or are no longer available."); return; }
    }
    const subtotal = state.cart.reduce((n, item) => n + state.products.find(p => p.id === item.id).price * item.quantity, 0);
    const tax = Math.round(subtotal * 0.05);
    const delivery = subtotal < 300 ? 25 : 0;
    state.cart.forEach(item => allocateFefo(state.products.find(p => p.id === item.id), item.quantity));
    const id = "HX-" + Math.floor(2000 + Math.random() * 8000);
    state.orders.unshift({ id, customer: state.user?.name || "Demo customer", pharmacy: state.selectedPharmacy, items: state.cart.map(i => `${state.products.find(p => p.id === i.id).name} × ${i.quantity}`).join(", "), subtotal, tax, delivery, total: subtotal + tax + delivery, payment: $("#paymentMethod").value, status: "Order placed" });
    state.cart = []; persist(); updateHeader(); renderCart();
    openModal(`<div class="success-icon">✓</div><p class="eyebrow">DEMO INVOICE · ${escapeHtml(id)}</p><h2>Demo order placed.</h2><div class="summary-line"><span>Items subtotal</span><b>${inr(subtotal)}</b></div><div class="summary-line"><span>GST (5%, demo)</span><b>${inr(tax)}</b></div><div class="summary-line"><span>Delivery</span><b>${inr(delivery)}</b></div><div class="summary-line total"><span>Total · ${escapeHtml($("#paymentMethod").value)}</span><b>${inr(subtotal + tax + delivery)}</b></div><p>This is a sample invoice only; no payment was collected and no medicines will be dispensed.</p><div class="modal-actions"><button class="dark-button" id="viewNewOrder">Track order →</button><button class="outline-button" id="doneOrder">Done</button></div>`);
    $("#viewNewOrder").onclick = () => { closeModal(); navTo("orders"); };
    $("#doneOrder").onclick = closeModal;
  }
  let authMode = "login";
  function setAuthMode(mode) {
    authMode = mode;
    $$(".tab").forEach(tab => tab.classList.toggle("active", tab.dataset.mode === mode));
    $("#registerFields").classList.toggle("hidden", mode !== "register");
    $("#authHeading").textContent = mode === "register" ? "Let's get started." : "Welcome back.";
    $("#authSub").textContent = mode === "register" ? "Create a demo account to explore your Healix space." : "Sign in to pick up where you left off.";
    $("#authSubmit").textContent = mode === "register" ? "Create account →" : "Log in →";
    $("#authForm").elements.name.required = mode === "register";
    $("#authError").textContent = "";
    refreshBusinessFields();
  }
  function refreshBusinessFields() {
    const role = $("#authForm").elements.role?.value;
    $("#businessFields").classList.toggle("hidden", !["vendor", "supplier"].includes(role));
  }
  function handleAuth(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { $("#authError").textContent = "Enter a valid email address."; return; }
    if (password.length < 6) { $("#authError").textContent = "Use at least 6 characters for this demo."; return; }
    if (authMode === "register") {
      const name = String(data.get("name") || "").trim();
      const role = String(data.get("role") || "customer");
      if (!name) { $("#authError").textContent = "Enter your name."; return; }
      const business = String(data.get("business") || "").trim();
      const licence = String(data.get("licence") || "").trim();
      if (["vendor", "supplier"].includes(role) && (!business || !licence)) { $("#authError").textContent = "Add demo business and licence details for partner review."; return; }
      state.user = { name, email, role };
      state.accounts = state.accounts.filter(account => account.email !== email);
      state.accounts.push({ name, email, role });
      if (["vendor", "supplier"].includes(role)) state.partners.push({ name, role: role === "vendor" ? "Pharmacy vendor" : "Supplier", email, business: `${business} · ${licence}`, status: "Pending review" });
      persist(); updateHeader(); toast(role === "vendor" || role === "supplier" ? "Demo account created; partner approval is pending." : "Demo account created.");
      navTo(role === "vendor" ? "vendor" : role === "supplier" ? "supplier" : role === "admin" ? "admin" : "home");
    } else {
      const profile = state.accounts.find(account => account.email === email) || state.partners.find(p => p.email.toLowerCase() === email);
      if (!state.user && !profile) { $("#authError").textContent = "No demo profile found. Create an account first."; return; }
      if (state.user && state.user.email !== email && !profile) { $("#authError").textContent = "No demo account found for that email. Create an account to continue."; return; }
      const profileRole = profile.role || "customer";
      const role = state.user?.email === email ? state.user.role : profileRole.toLowerCase().includes("vendor") ? "vendor" : profileRole.toLowerCase().includes("supplier") ? "supplier" : profileRole.toLowerCase() === "admin" ? "admin" : "customer";
      state.user = { name: state.user?.email === email ? state.user.name : profile.name, email, role };
      persist(); updateHeader(); toast("Demo sign-in complete. Passwords are not verified or stored.");
      navTo(role === "vendor" ? "vendor" : role === "supplier" ? "supplier" : role === "admin" ? "admin" : "home");
    }
    form.reset(); setAuthMode("login");
  }
  function askCreateMedicine() {
    openModal(`<p class="eyebrow">INVENTORY</p><h2>Add sample medicine</h2><form id="newProductForm" class="form"><label>Medicine name<input name="name" required maxlength="70"></label><label>Category<select name="category">${categories.map(c => `<option>${escapeHtml(c.name)}</option>`).join("")}</select></label><div class="form-row"><label>Stock units<input name="stock" type="number" min="0" max="100000" required></label><label>Unit price (₹)<input name="price" type="number" min="1" max="100000" required></label></div><label>Batch number<input name="batch" maxlength="30" required></label><label>Expiry (YYYY-MM)<input name="expiry" type="month" required></label><button class="dark-button">Add to demo inventory →</button></form>`);
    $("#newProductForm").onsubmit = e => {
      e.preventDefault(); const f = new FormData(e.currentTarget);
      const expiry = String(f.get("expiry"));
      if (expiry < new Date().toISOString().slice(0, 7)) { toast("Expired stock cannot be added to saleable inventory."); return; }
      const name = String(f.get("name")).trim();
      const batch = { batch: String(f.get("batch")).trim(), expiry, stock: Number(f.get("stock")) };
      const existing = state.products.find(product => product.name.toLowerCase() === name.toLowerCase());
      if (existing) {
        batchesFor(existing).push(batch);
        existing.stock = availableStock(existing);
      } else {
        state.products.push({ id: "custom-" + Date.now(), name, brand: "Partner listing", category: String(f.get("category")), stock: Number(f.get("stock")), batch: batch.batch, expiry, batches: [batch], price: Number(f.get("price")), rx: false, look: "bottle", color: "mint", pharmacies: [] });
      }
      persist(); closeModal(); renderDashboard("vendor"); renderCatalog(); toast("Added to demo inventory.");
    };
  }
  function startSupplyRequest() {
    openModal(`<p class="eyebrow">SUPPLIER REQUEST</p><h2>Request a replenishment</h2><form id="supplyForm" class="form"><label>Medicine / item<input name="item" required maxlength="80"></label><label>Quantity requested<input name="quantity" type="number" min="1" max="10000" required></label><button class="dark-button">Send demo request →</button></form>`);
    $("#supplyForm").onsubmit = e => { e.preventDefault(); const f = new FormData(e.currentTarget); state.supplies.unshift({ id: "SR-" + (100 + Math.floor(Math.random() * 899)), pharmacy: state.user?.name || "Demo Pharmacy", items: `${String(f.get("item")).trim()} × ${Number(f.get("quantity"))}`, date: "Today", status: "Requested" }); persist(); closeModal(); renderDashboard("supplier"); toast("Demo request sent to supplier portal."); };
  }
  function registerEvents() {
    document.addEventListener("click", event => {
      const page = event.target.closest("[data-page]")?.dataset.page;
      if (page) { event.preventDefault(); navTo(page); return; }
      const add = event.target.closest("[data-add]")?.dataset.add; if (add) { addToCart(add); return; }
      const compare = event.target.closest("[data-compare]")?.dataset.compare; if (compare) { showCompare(compare); return; }
      const cat = event.target.closest("[data-category]")?.dataset.category; if (cat) { navTo("catalog"); $("#categoryFilter").value = cat; renderCatalog(); return; }
      const remove = event.target.closest("[data-remove]")?.dataset.remove;
      if (remove) { state.cart = state.cart.filter(i => i.id !== remove); persist(); updateHeader(); renderCart(); return; }
      const quantity = event.target.closest("[data-qty]");
      if (quantity) {
        const item = state.cart.find(i => i.id === quantity.dataset.qty); const product = state.products.find(p => p.id === quantity.dataset.qty);
        const next = item.quantity + Number(quantity.dataset.change);
        if (next <= 0) state.cart = state.cart.filter(i => i.id !== item.id);
        else if (next <= availableStock(product)) item.quantity = next;
        else toast("Quantity exceeds available demo stock.");
        persist(); updateHeader(); renderCart(); return;
      }
      const reminder = event.target.closest("[data-reminder]")?.dataset.reminder;
      if (reminder !== undefined) { state.reminders[Number(reminder)].done = !state.reminders[Number(reminder)].done; persist(); renderReminders(); return; }
      const pharmacy = event.target.closest("[data-select-pharmacy]")?.dataset.selectPharmacy;
      if (pharmacy) { state.selectedPharmacy = pharmacy; persist(); closeModal(); toast(`Selected ${pharmacy} for this demo.`); return; }
      const approve = event.target.closest("[data-approve]")?.dataset.approve;
      if (approve !== undefined) { state.partners[Number(approve)].status = "Approved"; persist(); renderDashboard("admin"); toast("Demo partner approved."); return; }
      const orderStatus = event.target.closest("[data-order-status]")?.dataset.orderStatus;
      if (orderStatus !== undefined) { const i = Number(orderStatus); const flow = ["Order placed", "Being prepared", "Out for delivery", "Delivered"]; const idx = flow.indexOf(state.orders[i].status); state.orders[i].status = flow[Math.min(idx + 1, flow.length - 1)]; persist(); renderDashboard("vendor"); toast("Demo order status updated."); return; }
      const supplyStatus = event.target.closest("[data-supply-status]")?.dataset.supplyStatus;
      if (supplyStatus !== undefined) { const item = state.supplies[Number(supplyStatus)]; item.status = item.status === "Requested" ? "In transit" : item.status === "In transit" ? "Delivered" : "Requested"; persist(); renderDashboard("supplier"); toast("Supply request updated."); return; }
      const rxReview = event.target.closest("[data-rx-review]")?.dataset.rxReview;
      if (rxReview) {
        const [decision, index] = rxReview.split(":");
        const rx = state.prescriptions[Number(index)];
        if (rx && rx.status === "Awaiting pharmacist review") {
          rx.status = decision === "approve" ? "Approved for demo only" : "Rejected (demo)";
          persist(); renderDashboard("vendor"); toast("Prescription review status updated for this demo only.");
        }
        return;
      }
    });
    $("#homeSearch").onsubmit = e => { e.preventDefault(); navTo("catalog"); $("#catalogSearch").value = $("#searchInput").value; renderCatalog(); };
    $("#catalogSearch").oninput = renderCatalog; $("#categoryFilter").onchange = renderCatalog; $("#sortFilter").onchange = renderCatalog;
    $("#menuToggle").onclick = () => $("#sidebar").classList.toggle("open");
    $("#modalClose").onclick = closeModal;
    $("#modal").addEventListener("click", e => { if (e.target === $("#modal")) closeModal(); });
    $("#loginButton").onclick = () => { if (state.user) openModal(`<h2>${escapeHtml(state.user.name)}</h2><p>${escapeHtml(state.user.email)}<br>${escapeHtml(state.user.role)} · demo account</p><div class="modal-actions"><button class="dark-button" id="accountLogout">Log out</button><button class="outline-button" id="accountClose">Close</button></div>`); else navTo("auth"); if (state.user) { $("#accountLogout").onclick = () => { state.user = null; persist(); updateHeader(); closeModal(); navTo("home"); toast("Signed out."); }; $("#accountClose").onclick = closeModal; } };
    $("#logout").onclick = () => { if (!state.user) { navTo("auth"); return; } state.user = null; persist(); updateHeader(); toast("Signed out."); navTo("home"); };
    $("#locationButton").onclick = () => openModal(`<p class="eyebrow">YOUR NEIGHBOURHOOD</p><h2>Where should we look?</h2><p>Choose an approximate demo location. No GPS is accessed.</p><form id="locationForm" class="form"><label>City or PIN code<input name="location" required maxlength="60" placeholder="e.g. Bengaluru · 560001" value="${escapeHtml(state.location)}"></label><button class="dark-button">Save location</button></form>`);
    $("#locationButton").addEventListener("click", () => { $("#locationForm").onsubmit = e => { e.preventDefault(); state.location = new FormData(e.currentTarget).get("location").trim(); persist(); updateHeader(); closeModal(); toast("Demo location saved."); }; });
    $("#authForm").onsubmit = handleAuth; $$(".tab").forEach(t => t.onclick = () => setAuthMode(t.dataset.mode));
    $("#authForm").elements.role.onchange = refreshBusinessFields;
    $("#reminderForm").onsubmit = e => { e.preventDefault(); const f = new FormData(e.currentTarget); state.reminders.push({ name: String(f.get("name")).trim(), period: f.get("period"), time: f.get("time"), notes: String(f.get("notes") || "").trim(), done: false }); persist(); e.currentTarget.reset(); renderReminders(); toast("Reminder added to your local demo plan."); };
    $("#rxFile").onchange = e => { const file = e.target.files[0]; if (!file) return; if (file.size > 8 * 1024 * 1024) { toast("Choose a file smaller than 8 MB."); e.target.value = ""; return; } if (!file.type.startsWith("image/") && file.type !== "application/pdf") { toast("Choose an image or PDF file."); e.target.value = ""; return; } state.prescriptions.unshift({ id: "RX-" + Date.now(), name: file.name, submittedBy: state.user?.name || "Demo customer", date: new Date().toLocaleDateString("en-IN"), status: "Awaiting pharmacist review" }); persist(); renderPrescriptions(); toast("File name saved locally; no upload or OCR was performed."); e.target.value = ""; };
    $("#messageForm").onsubmit = e => { e.preventDefault(); const text = String(new FormData(e.currentTarget).get("message")).trim(); if (!text) return; state.messages.push({ text, mine: true, time: "Now" }); persist(); renderMessages(); e.currentTarget.reset(); setTimeout(() => { state.messages.push({ text: "Thanks for your message. This demo doesn't connect to a real care team. Please contact your local pharmacist for medicine advice.", mine: false, time: "Just now" }); persist(); renderMessages(); }, 650); };
    $("#addMedicine").onclick = askCreateMedicine; $("#addSupply").onclick = () => {
      if (state.user?.role === "vendor") { startSupplyRequest(); return; }
      openModal(`<p class="eyebrow">SUPPLIER INVENTORY</p><h2>Add partner listing</h2><form id="listingForm" class="form"><label>Listing title<input name="name" required maxlength="80"></label><label>Listing details<input name="detail" required maxlength="100" placeholder="Supplier · number of catalogue items"></label><button class="dark-button">Add demo listing</button></form>`);
      $("#listingForm").onsubmit = e => { e.preventDefault(); const f = new FormData(e.currentTarget); state.listings.push({ name: String(f.get("name")).trim(), detail: String(f.get("detail")).trim() }); persist(); closeModal(); renderDashboard("supplier"); toast("Demo listing added."); };
    };
    $("#checkout").addEventListener("click", e => { if (e.target.id === "checkoutButton") placeOrder(); });
    $("#vendorStats").addEventListener("click", () => {});
  }
  document.addEventListener("click", e => {
    if (e.target.id === "requestStock") startSupplyRequest();
  });
  renderHome(); updateHeader(); registerEvents();
})();
