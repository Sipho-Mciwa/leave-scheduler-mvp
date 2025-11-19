# Component Architecture – Leave Scheduler

This document explains the React component structure for the Leave Scheduler app, including component grouping, responsibilities, and communication patterns.

---

# 1. High-Level Architecture

```
App
 ├── Auth Layout / Private Routes
 ├── Dashboards
 │     ├── Employee Dashboard
 │     ├── Manager Dashboard
 │     └── Admin Dashboard
 ├── Pages
 ├── Components (shared + domain-specific)
 ├── Context (global state)
 └── Services (API calls)
```

The structure emphasizes:

* Reusable UI components
* Clean separation of logic and presentation
* Role-based routing
* Context for app-wide state

---

# 2. Component Categories

## A. Layout Components

* `AppLayout`
* `AuthLayout`
* `DashboardLayout`

**Responsibilities:**

* Provide navigation layout
* Handle role-based rendering
* Provide shared UI structure

---

## B. Page Components

Examples:

* `LoginPage`
* `RegisterPage`
* `DashboardEmployeePage`
* `DashboardManagerPage`
* `DashboardAdminPage`
* `LeaveRequestFormPage`
* `LeaveCalendarPage`
* `LeaveHistoryPage`

**Responsibilities:**

* Represent whole screens
* Fetch required page-level data
* Compose UI from reusable components

---

## C. UI / Reusable Components

Examples:

* `Button`
* `Modal`
* `Card`
* `Input`
* `Select`
* `DatePicker`
* `Badge`
* `Spinner`
* `Alert`

**Responsibilities:**

* Generic UI building blocks
* NO business logic
* Fully reusable

---

## D. Feature Components

### Employee Components

* `LeaveRequestForm`
* `LeaveBalanceCard`
* `LeaveHistoryTable`

### Manager Components

* `ApprovalQueueList`
* `ApprovalDecisionModal`

### Admin Components

* `LeaveBalanceEditor`
* `PolicyEditor`

**Responsibilities:**

* Contain business logic for a specific feature
* Fetch/update data via Services

---

## E. Context Providers

* `AuthContext`
* `UserContext`
* `LeaveContext`

**Responsibilities:**

* Hold global app state
* Provide methods like:

  * `login()`
  * `submitLeave()`
  * `approveLeave()`

State is consumed in components using Hooks:

```
const { user } = useAuth();
```

---

## F. Custom Hooks

Examples:

* `useAuth()`
* `useLeave()`
* `useUserRoles()`

**Responsibilities:**

* Encapsulate reusable logic
* Keep components clean

---

## G. Services (API Layer)

Examples:

* `authService.js`
* `leaveService.js`
* `policyService.js`

Responsibilities:

* Make API calls via Axios / fetch
* No UI logic
* Return structured data

Example:

```
leaveService.applyLeave(data)
```

---

# 3. Recommended Communication Pattern

## Components → Context → Services → Backend

Example leave submission:

```
LeaveRequestForm
   → submitLeave()
       → leaveContext
           → leaveService.applyLeave()
               → backend
```

This avoids:

* Prop drilling
* Logic inside UI components

---

# 4. Example Component Tree

```
<BrowserRouter>
  <AuthProvider>
  <UserProvider>
  <LeaveProvider>

    <AppLayout>
      <Routes>

        /login
        └── <LoginPage />

        /employee/dashboard
        └── <EmployeeDashboardPage />
              ├── LeaveBalanceCard
              ├── PendingRequests
              └── SubmitLeaveButton

        /manager/dashboard
        └── <ManagerDashboardPage />
              └── ApprovalQueueList

        /admin
        └── <AdminDashboardPage />
              └── PolicyEditor

      </Routes>
    </AppLayout>

  </LeaveProvider>
  </UserProvider>
  </AuthProvider>
</BrowserRouter>
```

---

# 5. Future Architectural Upgrades

* State machine logic with XState
* Redux or Recoil if context becomes too heavy
* Module separation using a monorepo
* Server Components (if moving to Next.js)

---

# 6. Rules for Clean Components

1. Pages should not contain heavy logic
2. Hooks contain data logic
3. Services interact with backend
4. UI components must stay dumb and generic
5. Avoid nested prop chains (use context)

---

# 7. Summary

This architecture ensures:

* Scalable components
* Clear separation of concerns
* Easy feature expansion
* Clean maintainable codebase

Suitable for:

* MVP
* Future enterprise upgrades
