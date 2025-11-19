# Non-Functional Requirements

## 1. Performance

* App should load in < 2 seconds on high-speed networks.
* Submitting a request should take < 500ms server response time.

## 2. Reliability

* Critical actions (submit/approve/deactivate) should be retried on network failure.
* API should return meaningful error responses.

## 3. Security

* All communication uses HTTPS.
* Passwords hashed using industry standard algorithms.
* JWT tokens must expire and refresh securely.
* Role-based access enforced at backend.

## 4. Usability

* Must be keyboard navigable.
* All forms include label + placeholder.
* Error messages clearly displayed.

## 5. Accessibility (A11Y)

* Minimum AA contrast ratios.
* Screen reader-friendly labels.
* No UI relying solely on color.

## 6. Scalability

* Support at least:

  * 500 active users
  * 10,000 leave records

## 7. Maintainability

* Code follows React best practices.
* ESLint + Prettier rules enforced.
* Components structured by feature.

## 8. Availability

* Systems should aim for 99% uptime (within MVP).

## 9. Logging

* Failed auth attempts logged.
* Leave approval/rejection written into an audit log.

## 10. Backup/Restore (Future)

* Database should include nightly backups.
