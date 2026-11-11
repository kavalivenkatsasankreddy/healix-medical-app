# Healix demo

Healix is a responsive, browser-only prototype for a neighbourhood pharmacy marketplace. It is intentionally built without a framework or external runtime dependencies so it can be opened locally and demonstrated quickly.

## Presentation video

Watch the narrated, English-subtitled walkthrough: [MP4 video](healix-website-walkthrough.mp4) · [subtitle file](healix-website-walkthrough.srt). The video covers customer, pharmacy vendor, supplier, and admin journeys and explains the demo limitations.

## Run locally

From this directory, run:

```powershell
python -m http.server 8000
```

Open <http://localhost:8000>. (Any static file server also works.) There is no build step or backend.

## Demo journeys

- **Customer:** search the sample catalogue, compare illustrative INR prices from demo pharmacies, see possible lower-cost catalogue alternatives, add non-prescription items to a basket, choose a mock payment method, and place a demo order with an invoice preview and tracking stages.
- **Search and product images:** type a medicine name, brand, ingredient, or category to see live matching suggestions and illustrated product packs. The catalogue is a small sample, not a market-wide medicines database; there is no real-time pharmacy inventory feed.
- **Registration and role portals:** create a customer, pharmacy vendor, supplier/distributor, or admin demo profile. Customer details include username, email, Indian mobile number, optional delivery address, and an optional profile photo. Vendor and supplier registrations need sample business/licence details and appear as pending in the admin approvals table. Vendor users can manage stock, process demo orders, review prescription submission statuses, and send supplier requests; suppliers can update requests and create listings.
- **Pharmacy inventory entry:** a vendor can add a medicine photo (JPG, PNG, or WebP; up to 5 MB, resized and compressed in the browser), choose its category and sale type, set an INR listing price, and record received units, batch/lot number, and expiry month. Adding an existing medicine name creates another batch and updates the listing price. The inventory table shows batch-level quantities and expiry; expired stock is excluded. Prescription-type entries stay unavailable for demo checkout.
- **Care tools:** record a prescription file name and review status, create dose reminders and check them off, and use the local support chat simulation.

## Safety and prototype limits

This is **not a real pharmacy service**. Catalogue entries, pharmacies, credentials, prices, orders and business records are illustrative—not a complete market-wide Indian medicine database or verified real-world listings. Prescription medicines are not purchasable; file contents are neither uploaded nor retained, and no OCR or pharmacist verification is performed. The partner review buttons only change local demo statuses and do not authorize dispensing.

All state, account details, product photos, inventory, and optional profile photos are stored in this browser's `localStorage`; they are not shared with other users or devices. Passwords are neither stored nor verified: sign-in is a UI demonstration only, not authentication or access control. Do not enter real credentials, personal health information, or other sensitive data. Checkout, GST, delivery, invoice and payment methods are mock calculations; no payment is collected. Reminders do not send notifications. Chat has no live support agent.

The inventory demo tracks batches and expiry and allocates from the earliest unexpired batch (FEFO); expired batches are excluded from available stock. This client-side simulation is not an inventory or dispensing system. Real operation would require a secure backend and database, verified pharmacy licences, pharmacist review, privacy/security controls, compliant payment processing, and fulfilment integrations.
