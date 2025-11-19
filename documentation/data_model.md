# Data Model – Leave Scheduler

## 1. Users

### Fields

* `id` (string/UUID)
* `name` (string)
* `email` (string – unique)
* `passwordHash` (string)
* `role` (enum: employee | manager | admin)
* `department` (string)
* `hireDate` (date)
* `leaveBalances` (object, example):

  ```
  {
    annual: 12,
    sick: 5,
    unpaid: 0
  }
  ```
* `createdAt`
* `updatedAt`

---

## 2. LeaveRequest

### Fields

* `id` (string/UUID)
* `employeeId` (FK to Users)
* `startDate` (date)
* `endDate` (date)
* `days` (number – auto calculated)
* `type` (enum: annual, sick, unpaid, study, other)
* `status` (enum: pending, approved, rejected)
* `reason` (string)
* `attachmentUrl` (string, optional)
* `approverId` (FK to Users)
* `createdAt`
* `updatedAt`

---

## 3. LeavePolicy (Optional MVP)

### Fields

* `id`
* `type` (string)
* `maxDays` (number)
* `accrualPerMonth` (number)
* `maxCarryOver` (number)

---

## 4. AuditLog (Optional MVP)

### Fields

* `id`
* `userId` (FK)
* `action` (string)
* `targetId` (FK)
* `timestamp`
* `meta` (JSON)

---

## Entity Relationships

* **User → LeaveRequest**

  * One User may have many LeaveRequests.
* **Manager → LeaveRequest**

  * Manager appears as `approverId` only for requests they handle.
* **Admin → Policies**

  * Admin can modify policies system-wide.

This structure supports:

* Basic CRUD
* User roles
* Leave balance logic
* Approvals
