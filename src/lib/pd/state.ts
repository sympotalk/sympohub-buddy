/**
 * Precision Design System - State Management
 * 표준화된 상태 enum과 유틸리티
 */

export enum UIState {
  IDLE = "IDLE",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  DISABLED = "DISABLED",
}

export type StateTransition = {
  from: UIState;
  to: UIState;
  timestamp: number;
};

/**
 * 상태 전이를 추적하고 로그를 남기는 헬퍼
 */
export const createStateTracker = (initialState: UIState = UIState.IDLE) => {
  let currentState = initialState;
  const transitions: StateTransition[] = [];

  return {
    getCurrentState: () => currentState,
    transition: (newState: UIState) => {
      const transition: StateTransition = {
        from: currentState,
        to: newState,
        timestamp: Date.now(),
      };
      transitions.push(transition);
      currentState = newState;
      return transition;
    },
    getHistory: () => [...transitions],
    reset: () => {
      currentState = initialState;
      transitions.length = 0;
    },
  };
};

/**
 * 상태별 클래스명 매핑
 */
export const stateClassNames: Record<UIState, string> = {
  [UIState.IDLE]: "",
  [UIState.LOADING]: "opacity-60 pointer-events-none",
  [UIState.SUCCESS]: "border-green-500 bg-green-50 dark:bg-green-950",
  [UIState.ERROR]: "border-destructive bg-destructive/10",
  [UIState.DISABLED]: "opacity-50 pointer-events-none cursor-not-allowed",
};

/**
 * 로딩 타임아웃 상수 (1200ms)
 */
export const LOADING_TIMEOUT = 1200;

/**
 * 성공 하이라이트 지속시간 (1200ms)
 */
export const SUCCESS_HIGHLIGHT_DURATION = 1200;
