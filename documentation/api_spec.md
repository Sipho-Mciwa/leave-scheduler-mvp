# API Specification – Leave Scheduler

This document defines the backend API endpoints the Leave Scheduler app will communicate with. It covers authentication, user management, leave operations, policies, and reporting.

---

# 1. Authentication

## POST /auth/register

**Description:** Create a new user account
**Request Body:**

```
{
  "name": "John Doe",
  "email": "john@company.com",
  "password": "secret123",
  "role": "employee"
}
```

**Response:**

```
{
  "message": "Account created successfully"
}
```

---

## POST /auth/login

**Description:** Logs in a user
**Request Body:**

```
{
  "email": "john@company.com",
  "password": "secret123"
}
```

**Response:**

```
{
  "token": "jwt_access_token",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@company.com",
    "role": "employee"
  }
}
```

---

## GET /auth/me

**Auth Required:** Yes
**Description:** Returns current logged-in user
**Response:**

```
{
  "id": 1,
  "name": "John Doe",
  "email": "john@company.com",
  "role": "employee"
}
```

---

# 2. User Management

## GET /users

**Role:** Admin
**Description:** Returns all users

## GET /users/:id

**Description:** Returns a single user profile

## PUT /users/:id

**Description:** Update user details
Example body:

```
{
  "name": "New Name",
  "role": "manager"
}
```

## DELETE /users/:id

**Description:** Delete a user account

---

# 3. Leave Requests

## POST /leave

**Description:** Submit a leave request
**Request Body:**

```
{
  "type": "Annual",
  "startDate": "2025-03-05",
  "endDate": "2025-03-07",
  "reason": "Family trip"
}
```

**Response:**

```
{
  "message": "Leave request submitted"
}
```

---

## GET /leave

**Description:** Returns leave requests for:

* The logged-in user (if employee)
* Their team (if manager)
* Entire company (if admin)

---

## GET /leave/:id

**Description:** Return a single leave request

---

## PUT /leave/:id

**Description:** Update a leave request
(Allowed before approval)

---

## DELETE /leave/:id

**Description:** Cancel a leave request

---

# 4. Leave Approval

## POST /leave/:id/approve

**Role:** Manager or Admin
**Request Body:**

```
{
  "comment": "Approved. Enjoy your leave."
}
```

**Response:**

```
{
  "message": "Leave approved"
}
```

---

## POST /leave/:id/reject

**Role:** Manager or Admin
**Request Body:**

```
{
  "comment": "We have deadlines this week"
}
```

**Response:**

```
{
  "message": "Leave rejected"
}
```

---

# 5. Leave Balances

## GET /leave-balance

**Description:** Returns leave balances for current user

Response example:

```
{
  "annual": 12,
  "sick": 6,
  "unpaid": "Unlimited"
}
```

---

## PUT /leave-balance/:id

**Role:** Admin
**Description:** Adjust leave balances manually

```
{
  "annual": 15
}
```

---

# 6. Policies

## GET /policies

**Description:** Return all leave policies

## PUT /policies

**Role:** Admin
**Description:** Update leave rules

Example:

```
{
  "annual": {
    "maxDays": 20,
    "accrualRate": 1.5
  }
}
```

---

# 7. Reports

## GET /reports/company

**Role:** Admin
**Description:** Company-wide leave stats

## GET /reports/department/:deptId

**Role:** Manager/Admin
**Description:** Return stats for a single department

Example response:

```
{
  "month": "March",
  "requests": 32,
  "approved": 26,
  "rejected": 6
}
```

---

# 8. Common Error Responses

```
{
  "error": "Unauthorized"
}
```

```
{
  "error": "Access denied"
}
```

```
{
  "error": "Validation failed",
  "details": [...]
}
```

---

# 9. Authentication Model

All protected endpoints require:

```
Authorization: Bearer <token>
```

Token returned from:

* POST /auth/login

---

# 10. API Status Codes

* `200` – Success
* `201` – Created
* `400` – Invalid request
* `401` – Not authenticated
* `403` – No permission
* `404` – Not found
* `500` – Server error

---

# Final Notes

Backend can be implemented with:

* Node.js + Express
* Django REST Framework
* Laravel API
* Go Fiber
* Spring Boot
* etc.

This spec is designed so the frontend can start development even while the backend is in progress.
