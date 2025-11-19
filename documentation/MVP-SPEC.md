# Leave Scheduler – MVP Specification

## 1. Elevator Pitch

A simple web-based leave scheduling application that allows employees to submit leave requests, managers to approve or reject them, and HR/admin to manage balances and policies. The goal is to make leave management organized, fast, transparent, and trackable.

## 2. Primary User Roles

* **Employee** – submits leave and views status/history.
* **Manager** – reviews, approves, or rejects requests.
* **HR/Admin** – configures policies, adjusts balances, and monitors usage.

## 3. MVP Core Features

1. **User Authentication**

   * Login and registration with protected routes.
2. **Submit Leave Request**

   * Choose leave type, date range, reason, and attach notes/files.
3. **Leave Balances**

   * Track remaining days by leave type.
   * Prevent applying for more than available.
4. **My Leave History**

   * Shows pending, approved, and rejected requests.
5. **Manager Approval**

   * Manager can approve/reject with optional comments.
6. **Team Leave Calendar**

   * Shows who is on leave on selected dates.
7. **Basic Notifications**

   * Users receive feedback on status updates.

## 4. Out-of-Scope for MVP (Future Upgrades)

* Automated email or push notifications.
* Public holiday import.
* Multi-level approval chains.
* Analytics dashboards.
* Mobile app.

## 5. Success Metrics

* Employee can file a leave request in under 60 seconds.
* Manager can handle approval/rejection in under 30 seconds.
* Calendar correctly displays approved requests.
* Core flows work without errors on desktop and mobile.
