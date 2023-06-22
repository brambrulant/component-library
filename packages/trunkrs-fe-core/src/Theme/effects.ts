export interface Elevation {
  1: {
    shadow1: string;
    shadow2: string;
    shadow3: string;
  };
  2: {
    shadow1: string;
    shadow2: string;
    shadow3: string;
    shadow4: string;
    shadow5: string;
  };
}

export const elevations: Elevation = {
  1: {
    shadow1: "0px 1px 2px 0px rgba(34, 12, 74, 0.12)",
    shadow2: "0px 1px 1px 0px rgba(34, 12, 74, 0.17)",
    shadow3: "0px 2px 4px 0px rgba(34, 12, 74, 0.08)",
  },
  2: {
    shadow1: "0px 2px 1px 0px rgba(34, 12, 74, 0.12)",
    shadow2: "0px 1px 1px 0px rgba(34, 12, 74, 0.12)",
    shadow3: "0px 4px 6px 0px rgba(34, 12, 74, 0.08)",
    shadow4: "0px 8px 12px 0px rgba(34, 12, 74, 0.06)",
    shadow5: "0px 16px 24px 0px rgba(34, 12, 74, 0.04)",
  },
};

export type Transitions = {
  default: string;
  fast: string;
  slow: string;
};

export const transitions: Transitions = {
  default: "0.2s ease-in-out",
  fast: "0.1s ease-in-out",
  slow: "0.3s ease-in-out",
};
