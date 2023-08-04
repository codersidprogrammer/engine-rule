// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

enum Operator {
  EQUAL = '===',
  GTE = '>=',
  LTE = '<=',
  NOT_EQUAL = '!==',
  GT = '>',
  LT = '<',
}

enum EventType {
  SUBMIT,
  SAVE,
  REJECT,
  APPROVED,
  REVISE,
}

enum ActionType {
  NEXT,
  URL_CALL,
  PREVIOUS,
  END,
}

const rules = {
  condition: {
    fact: 'age',
    operator: Operator.EQUAL,
    value: 18,
  },
  on: [
    {
      event: EventType.APPROVED,
      action: {
        type: ActionType.NEXT,
        message: 'Approved',
        call: () => null,
      },
    },
    {
      event: EventType.REJECT,
      action: {
        type: ActionType.END,
        message: 'Rejected',
        call: () => null,
      },
    },
  ],
};

console.log(rules);
