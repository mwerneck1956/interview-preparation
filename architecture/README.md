# Architecture / SOLID Principles

Software design principles for writing clean, maintainable code.

## How to Run

```bash
# From the root directory
npm run architecture <file-path>

# Examples
npm run architecture architecture/SRP/srp.ts
npm run architecture architecture/OCP/ocp.ts
```

## Contents

### SRP - Single Responsibility Principle

> A class should have only one reason to change.

| File | Description |
|------|-------------|
| `SRP/bad-example.ts` | `UserService` doing validation, persistence, AND email sending |
| `SRP/srp.ts` | Separated into `UserValidator`, `UserRepository`, `EmailService` |

**Bad Example:**
```typescript
class UserService {
  createUser(email) {
    // Validates, saves, AND sends email - too many responsibilities!
  }
}
```

**Good Example:**
```typescript
class UserValidator { validate() }
class UserRepository { save() }
class EmailService { sendWelcomeEmail() }
class UserService { /* orchestrates the above */ }
```

### OCP - Open/Closed Principle

> Software entities should be open for extension, but closed for modification.

| File | Description |
|------|-------------|
| `OCP/bad-example.ts` | `DiscountCalculator` with `if/else` for each discount type |
| `OCP/ocp.ts` | `Discount` interface with `PixDiscount`, `ElectronicsDiscount` implementations |

**Bad Example:**
```typescript
class DiscountCalculator {
  calculate(type) {
    if (type === 'PIX') return amount * 0.95;
    if (type === 'ELECTRONIC') return amount * 0.90;
    // Need to modify this class for every new discount type!
  }
}
```

**Good Example:**
```typescript
interface Discount {
  calculateAmount(baseAmount: number): number;
}

class PixDiscount implements Discount { /* 5% off */ }
class ElectronicsDiscount implements Discount { /* 10% off */ }
// Add new discounts without modifying existing code!
```

## SOLID Principles Overview

| Principle | Description | Status |
|-----------|-------------|--------|
| **S** - Single Responsibility | One class, one reason to change | Implemented |
| **O** - Open/Closed | Open for extension, closed for modification | Implemented |
| **L** - Liskov Substitution | Subtypes must be substitutable for base types | TODO |
| **I** - Interface Segregation | Many specific interfaces > one general interface | TODO |
| **D** - Dependency Inversion | Depend on abstractions, not concretions | TODO |
