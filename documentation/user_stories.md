# User Stories and Acceptance Criteria

---

## 1. User Authentication

### Story

As a **User**, I want to log in and register so that I can securely access the application.

### Acceptance Criteria

* Successful login redirects to the correct dashboard.
* Invalid credentials return an error message.
* Session persists until logout.

---

## 2. Submit Leave Request

### Story

As an **Employee**, I want to submit a leave request so that I can book time off.

### Acceptance Criteria

* Form validates required fields (type, dates, reason).
* Prevent submission if leave exceeds available balance.
* On success, request appears in My Leave History as "Pending".

---

## 3. View My Requests

### Story

As an **Employee**, I want to see the status of my leave requests so that I can track progress.

### Acceptance Criteria

* List displays status (Pending, Approved, Rejected).
* Clicking a request shows full details.

---

## 4. Manager Review Requests

### Story

As a **Manager**, I want to review pending leave so that I can approve or reject requests.

### Acceptance Criteria

* Managers see only requests from users they manage.
* Can approve or reject with optional comment.
* Status updates instantly for employee.

---

## 5. Leave Balances Tracking

### Story

As an **Employee**, I want to see my leave balance so that I know how many days I have remaining.

### Acceptance Criteria

* Balance is shown by leave type.
* Balance decreases when leave is approved.

---

## 6. Calendar View

### Story

As a **Manager**, I want to view a team calendar so that I can see who is off on any day.

### Acceptance Criteria

* Calendar shows approved leaves only.
* Can filter by team or individual employee.

---

## 7. HR Adjust Balances

### Story

As an **HR/Admin**, I want to adjust employee leave balances so that errors or policy changes can be corrected.

### Acceptance Criteria

* Admin can edit balances from a simple UI.
* Changes apply immediately and are recorded.

---

## 8. Logout

### Story

As a **User**, I want to log out so that nobody can access my account from my device.

### Acceptance Criteria

* Logout clears session/auth tokens.
* User is returned to login page.
