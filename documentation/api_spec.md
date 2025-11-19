# API Specification – Leave Scheduler

## Overview

This document defines the core backend API endpoints for the Leave Scheduler MVP.
All authenticated routes require a valid JWT token (if using Node) or Firebase session token.

---

# 1. Authentication

## POST /auth/register

Registers a new user.

### Request Body

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "employee"
}
```

### Responses

* **201 Created** – User registered successfully
* **409 Conflict** – Email already exists

---

## POST /auth/login

Authenticates user and returns token.

### Request Body

```
{
  "email": "john@example.com",
  "password": "123456"
}
```

### Responses

* **200 OK** – Returns auth token
* **401 Unauthorized** – Invalid credentials

---

# 2. Users

## GET /users/:id

Returns basic user profile details.

### Response Example

```
{
  "id": "abc123",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "employee",
  "leaveBalances": {
    "annual": 12,
    "sick": 5
  }
}
```

---

# 3. Leave Requests

## GET /leave-requests

Returns leave requests for current user.

### Query Parameters (optional)

* `status=pending`
* `type=annual`
* `department=Engineering`

### Responses

* **200 OK** – Array of requests

---

## POST /leave-requests

Creates a new leave request.

### Request Body

```
{
  "startDate": "2025-08-01",
  "endDate": "2025-08-02",
  "type": "annual",
  "reason": "Holiday trip"
}
```

### Responses

* **201 Created** – Returns created request
* **400 Bad Request** – Validation error
* **403 Forbidden** – Not enough remaining leave days

---

## PATCH /leave-requests/:id/approve

Marks a request as approved (Manager only).

### Request Body (optional)

```
{
  "comment": "Approved. Enjoy your leave."
}
```

### Responses

* **200 OK**
* **403 Forbidden** – Not a manager

---

## PATCH /leave-requests/:id/reject

Marks a request as rejected (Manager only).

### Request Body (optional)

```
{
  "comment": "We have a deadline next week."
}
```

### Responses

* **200 OK**
* **403 Forbidden**

---

# 4. Calendar

## GET /calendar

Returns approved leave in a date range.

### Query Parameters

* `from=2025-08-01`
* `to=2025-08-31`

### Response Example

```
[
  {
    "employeeId": "abc123",
    "startDate": "2025-08-01",
    "endDate": "2025-08-02"
  }
]
```

---

# 5. Admin Controls

## PATCH /admin/users/:id/leave-balance

Adjust leave balances.

### Request Body

```
{
  "annual": 15,
  "sick": 3
}
```

### Responses

* **200 OK**
* **403 Forbidden** – Not admin

---

## Notes

* All responses follow JSON format.
* Errors returned as:

```
{
  "error": "Description here"
}
```
