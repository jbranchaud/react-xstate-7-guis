import { createMachine, assign } from "xstate";

const countingMachineDefinition = {
  initial: "counting",
  context: { count: 0 },
  states: {
    counting: {
      on: {
        INCREMENT: {
          actions: "incrementCount",
        },
      },
    },
  },
};

const actions = {
  incrementCount: assign({
    count: (context) => context.count + 1,
  }),
};

export const countingMachine = createMachine(countingMachineDefinition, {
  actions,
});
