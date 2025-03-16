# Decision Tree Processing Backend

## Developer Exercise

### Objective
Implement a decision tree processing backend in TypeScript. This decision tree will enable customers to define and execute business logic tailored to their needs.

### Requirements

#### 1. Serialization Support
- The decision tree must support serialization to JSON and deserialization from JSON.
- You are free to design the schema as you see fit best.

#### 2. Supported Actions
- **Send SMS**: Accepts a phone number as a parameter.
- **Send Email**: Accepts sender and receiver email addresses.
- **Condition**:
  - Accepts a JavaScript expression as input and evaluates it.
  - Supports specifying `trueAction` and `falseAction` branches.
- **Loop**:
  - Accepts a subtree and an integer `x` representing the number of iterations.
  - Executes the subtree `x` times.

#### 3. Extensibility
- The decision tree must be designed to allow easy addition of new action types.

#### 4. Backend Service
- Implement a backend service that:
  - Receives a JSON representation of a decision tree.
  - Deserializes the JSON into a decision tree object.
  - Executes the decision tree.
- **Note**: The actual implementations of the SMS and Email actions are not required. Instead, log the parameters when these actions are invoked.

### Deliverable
Submit a TypeScript implementation that meets the above requirements.
- The focus should be on **code design, readability, testability**, and openness to extensions and changes.
- No need to focus too much on specific implementation details.

---

## Example Decision Trees

### 1. Christmas Greeting
```js
if (date === "1.1.2025") {
  sendSMS("Happy Christmas!");
} else {
  // Do nothing
}
```

### 2. Send Email and SMS
```js
sendEmail("from@example.com", "to@example.com");
sendSMS("+1234567890");
sendEmail("from@example.com", "to@example.com");
```

### 3. Send 10 Optional Emails
```js
for (let i = 0; i < 10; i++) {
  if (someCondition) {
    sendSMS("+1234567890");
  }
}
```


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```