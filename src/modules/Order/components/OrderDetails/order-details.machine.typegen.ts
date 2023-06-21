
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.fetching-order-details": { type: "done.invoke.fetching-order-details"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.fetching-order-details": { type: "error.platform.fetching-order-details"; data: unknown };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "fetchOrderDetails": "done.invoke.fetching-order-details";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "assignOrderDetails": "done.invoke.fetching-order-details";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "fetchOrderDetails": "FETCH_ORDER_DETAILS";
        };
        matchesStates: "error" | "fetching" | "idle" | "initialized";
        tags: never;
      }
  