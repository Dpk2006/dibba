# 🍱 Tiffin Service — Exhaustive Options List


---

## 🔧 1 — Payment / Billing Models
- Prepaid monthly (full amount at subscription start)
- Prepaid weekly (client pays week-by-week)
- Pay-as-you-go (charge per delivery)
- Card/UPI mandate / auto-debit (recurring authorization)
- Escrow/Platform wallet hold (platform holds funds)
- Split-payment (platform + provider share on charge)
- Partial upfront (e.g., 50% upfront, 50% at month-end)
- Security deposit + periodic settlement
- Post-pay with credit check (risky, for vetted clients)
- Trial period (free or discounted n days)
- Coupon / discount / promo code (one-time or recurring)
- Refundable deposit model (held to cover disputes)
- Insurance-backed guarantee (third-party covers refunds)

---

## 🔐 2 — Escrow / Payout Strategies
- Full-hold escrow until month-end
- Milestone release (weekly payouts after confirmation)
- Per-delivery micro-release (release funds per confirmed delivery)
- Rolling window payouts (e.g., every 7 days for previous 7 days)
- Threshold-based payout (release only when amount > X)
- Immediate payout with reserve hold
- Managed payouts via gateway marketplaces (Stripe, Razorpay, Cashfree)
- Manual admin-triggered payouts (for high-risk providers)
- Auto-retry failed payouts
- Bank transfer (NEFT/IMPS), UPI, wallet top-up, or card transfer options

---

## ✅ 3 — Delivery Confirmation Methods
- Client app **Confirm Delivery** button
- Client app **Dispute** button
- Provider marks **Delivered** in provider app
- Delivery **OTP** exchanged at delivery
- Delivery **QR code scan**
- Provider photo with timestamp & geotag
- Client photo upload as proof
- Driver geolocation ping at delivery
- Bluetooth/NFC tap
- IoT sensor confirmation
- SMS confirmation by client
- Voice call confirmation (IVR)
- Third-party courier confirmation
- Auto-accept after N hours if client doesn’t dispute
- Biometric signature (rare)
- PIN shared between client & provider

---

## 🧾 4 — Dispute & Refund Options
- Client-initiated dispute (with evidence)
- Provider-initiated dispute
- Auto-escalation to admin
- Workflow: evidence → hold funds → admin decision → release/refund
- Refund to original method
- Refund to platform wallet
- Partial refund for partial misses
- Compensation credit (discount future orders)
- Penalty fee deducted from provider
- Mediation window (24–72h)
- Chargeback handling
- Fraud detection & reverse transactions
- Blacklist repeat offenders
- Arbitration for high-value disputes

---

## 🧾 5 — Refund Policies & Methods
- Instant wallet credit
- Refund to bank/card
- Pro-rata refund (per missed delivery)
- Refund + penalty from provider
- Refund cap (limit per month)
- Refund hold until resolution
- Auto-refund on missed delivery
- Manual admin refund
- Refund via coupon/discount

---

## ⚙️ 6 — Payout Schedules & Rules
- Daily payout
- Weekly payout (recommended)
- Bi-weekly payout
- Monthly payout
- Payout delay buffer (e.g., 7 days)
- Minimum payout threshold
- Maximum payout/day
- Staggered payouts for new providers
- Deduct commission & taxes before payout
- Adjustments after reconciliation
- Auto-retry payout failures

---

## 🧾 7 — Pricing Models
- Flat monthly price
- Per-delivery derived from monthly
- Tiered plans (1 meal/2 meals/deluxe)
- Family plans
- Dynamic pricing by area/days
- Add-ons (salad, dessert, extra portion)
- Seasonal prices
- Coupons & referral discounts
- Volume discounts (longer duration)

---

## 🧩 8 — Subscription Management
- Start/end date
- Pause (vacation mode)
- Skip specific dates
- Reschedule delivery times
- Change plan mid-cycle (pro-rata adjust)
- Cancel with notice period
- Auto-renew on/off
- Grace period for failed payment
- Re-activation after suspension
- Transfer subscription

---

## 🗂️ 9 — Provider Controls
- KYC verification
- Bank verification
- Delivery personnel verification
- Set delivery radius
- Set daily capacity
- Accept/reject new orders
- Upload menu & images
- Set holidays/unavailable days
- Pause temporarily
- Rating & review visibility
- Provider analytics dashboard
- Dispute evidence upload
- Penalty ledger for strikes

---

## 👤 10 — Client Controls
- Pre-authorized payment
- Pause/cancel subscription
- Skip days
- Report missed delivery
- Access invoices/history
- Re-order plan
- Rate & review provider
- View delivery proof
- Wallet for refunds
- Block provider
- In-app chat/call provider
- Visible TOS/consumer policy

---

## 🔁 11 — Admin / Platform Options
- Manual adjust escrow/payouts
- Dispute resolution panel
- Suspend/blacklist accounts
- Configure commission & fees
- Export reconciliation/accounting
- Audit logs
- Fraud detection dashboard
- SLA settings
- Provider performance scoring
- Notifications & templates
- Admin-triggered refunds/payouts
- Metrics dashboard
- Scheduled reconciliation
- Admin roles & access levels

---

## 🗄️ 12 — Database Schema (Key Tables)
### `users`
- id, name, email, phone, role, status, created_at, updated_at, address, timezone, language

### `providers`
- provider_id, user_id, business_name, kyc_status, bank_account_id, delivery_radius, pincodes, capacity, active_status, rating, strike_count

### `tiffins`
- tiffin_id, provider_id, plan_name, meals_per_day, monthly_price, per_delivery_price, dishes[], images[], available_days, start_time, end_time, tax_rate

### `subscriptions`
- subscription_id, client_id, provider_id, plan_id, start_date, end_date, billing_cycle, amount, status, auto_renew, pause_dates[]

### `deliveries`
- delivery_id, subscription_id, date, meal_slot, status, proof, confirmation, dispute_id, delivered_at, geo_lat, geo_lng

### `escrow_transactions`
- escrow_id, subscription_id, client_id, provider_id, amount, status, reason, created_at

### `payouts`
- payout_id, provider_id, amount, period_start, period_end, status, processed_at, fees_deducted

### `disputes`
- dispute_id, delivery_id, raised_by, reason, evidence[], status, resolution, resolved_at

### `wallets`
- wallet_id, user_id, balance, transactions[]

### `transactions`
- transaction_id, type, source_id, dest_id, amount, status, gateway_response

---

## 🔗 13 — API Endpoints
- `POST /auth/google`
- `POST /subscribe`
- `GET /subscriptions/:userId`
- `PATCH /subscription/:id/pause`
- `POST /delivery/mark-delivered`
- `POST /delivery/confirm`
- `POST /delivery/dispute`
- `GET /disputes`
- `POST /payouts/process`
- `GET /payouts/:providerId`
- `POST /refund`
- `GET /providers/nearby?lat=&lng=&radius=`
- `POST /provider/add-tiffin`
- `GET /tiffin/:id`
- `POST /wallet/topup`
- `GET /reports/daily-reconciliation`
- `POST /admin/adjust-escrow`
- `GET /metrics/kpis`
- `POST /webhook/payment`
- `POST /webhook/payout`
- `GET /audit/logs`

---

## 🔔 14 — Notifications
- Push notifications
- Email (invoices, disputes)
- SMS (OTP, alerts)
- In-app chat
- WhatsApp integration
- IVR/Call OTP
- Webhooks
- Admin alerts
- Provider daily/weekly reports

---

## 🧪 15 — KPI Metrics
- Active subscriptions
- Deliveries scheduled/delivered/missed
- Weekly payout volume
- Avg. confirmation time
- Disputes per 1000 deliveries
- Refund rate %
- Provider satisfaction score
- Client churn rate
- Avg. order value
- Escrow balance
- Dispute resolution time
- Fraud detection rate

---

## 🛡️ 16 — Security
- PCI-compliant gateways
- TLS HTTPS
- Tokenization for cards
- 2FA for admin/provider
- Rate limiting
- Data retention rules
- TOS & privacy compliance
- Escrow regulatory compliance
- KYC/AML for providers
- Audit logs for payouts

---

## 🏛️ 17 — Legal / Policy
- TOS with SLA
- Refund & cancellation policy
- Provider agreements
- Privacy Policy
- Dispute resolution policy
- Escrow licensing compliance
- Tax (GST/VAT) handling
- Suspension/termination clauses

---

## 🔍 18 — Fraud Detection
- Detect unusual delivery patterns
- Track repeat disputes
- Provider missed delivery spikes
- Geo mismatch checks
- Photo tampering checks
- Velocity checks on payouts
- Blacklist/probation
- Manual review for high-value disputes

---

## 🧾 19 — Fees & Commission
- Flat fee per order
- % commission per payout
- Tiered commission
- Monthly subscription fee for providers
- Listing fee
- Transaction fee
- Processing fee split
- Penalty fees
- Insurance pool contribution

---

## 🔁 20 — Subscription Changes
- Downgrade mid-cycle → pro-rata refund
- Upgrade mid-cycle → pro-rata charge
- Reschedule missed days
- Carry-forward unused days
- Cancellation with notice
- Suspension for non-payment
- Emergency refunds (admin)

---

## 🧰 21 — Integrations
- Payment: Razorpay, Cashfree, PayU, Stripe
- Messaging: Twilio, FCM
- Maps: Google Maps, Mapbox
- Storage: S3
- Analytics: Google Analytics, Mixpanel
- Crash reporting: Sentry
- OCR/Image verification
- Logistics APIs
- SMS providers

---

## 📦 22 — Client UX
- Onboarding tutorial
- Clear billing breakdown
- Delivery timeline card
- One-tap confirm/dispute
- Wallet dashboard
- Pause/skip calendar
- Chat/call provider
- Proof gallery
- Billing schedule view
- Pending confirmation alerts

---

## 📦 23 — Provider UX
- Daily delivery list
- Quick mark-delivered with proof
- Capacity calendar
- Earnings & payout dashboard
- Strike/penalty tracker
- New subscription alerts
- Menu/image management
- Dispute response UI
- KYC & bank wizard

---

## 🧾 24 — Testing Scenarios
- Normal flow → payout works
- Missed delivery → refund works
- Provider stops mid-month → refunds triggered
- Client false dispute → provider wins
- Payment failure on auto-renew
- Partial meal missed
- Geolocation mismatch
- Payout failure → retry
- Chargeback test
- High dispute volume stress test
- February (28/29 days) test
- Timezone mismatch test
- Corrupted photo evidence

---

## 🧾 25 — Reporting
- Daily reconciliation
- Monthly provider statements
- Client invoices (GST)
- Platform commission report
- Tax/TDS reports
- Auditable logs
- End-of-day finance files

---

## 🧾 26 — Operational Policies
- Support SLA
- Manual dispute team
- Provider onboarding checks
- Finance team for payouts
- Fraud risk team
- Communication templates
- Escalation matrix

---

## ⚙️ 27 — Configurable Settings
- Confirmation window (e.g., 24h)
- Payout cadence
- Commission %
- Min payout threshold
- Refund rules
- Payout retry limit
- Dispute TTL
- Strike thresholds
- Grace period for renewals

---

## 🧩 28 — Misc Options
- Referral & affiliate payouts
- Loyalty/reward points
- Gift subscriptions
- Multi-language
- White-label for providers
- API for enterprise clients
- Analytics export
- Provider training content
- SLA-backed premium providers

---

## ✅ 29 — MVP Core Features
1. Prepaid monthly with escrow hold
2. Daily delivery confirmation or auto-accept
3. Weekly provider payouts
4. Dispute flow + admin panel
5. Provider KYC + bank verification
6. Wallet for refunds
7. Clear TOS + penalty rules

---

## 📌 30 — Example Ruleset
- Full-month prepayment held in escrow
- Provider must upload proof (photo+geo)
- Client has 24h to dispute, else auto-accept
- Weekly payout of confirmed deliveries
- 3 missed deliveries/month → provider suspension
- False disputes by clients → suspension + KYC recheck

---
