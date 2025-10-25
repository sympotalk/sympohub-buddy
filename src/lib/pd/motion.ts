/**
 * Precision Design System - Motion Utilities
 * 표준화된 애니메이션 프리셋
 */

import { Variants } from "framer-motion";

/**
 * 슬라이드 인 (왼쪽에서)
 */
export const slideInLeft: Variants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

export const slideInLeftConfig = {
  duration: 0.35,
  ease: [0.4, 0, 0.2, 1] as const,
};

/**
 * 슬라이드 인 (오른쪽에서)
 */
export const slideInRight: Variants = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
};

export const slideInRightConfig = {
  duration: 0.35,
  ease: [0.4, 0, 0.2, 1] as const,
};

/**
 * 페이드 인
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInConfig = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1] as const,
};

/**
 * 스케일 인 (모달/팝업용)
 */
export const scaleIn: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
};

export const scaleInConfig = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1] as const,
};

/**
 * Shake 애니메이션 (에러/경고용)
 */
export const shake: Variants = {
  initial: { x: 0 },
  animate: {
    x: [-10, 10, -10, 10, 0],
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
};

/**
 * 성공 하이라이트 애니메이션
 */
export const successHighlight: Variants = {
  initial: { backgroundColor: "transparent" },
  animate: {
    backgroundColor: ["transparent", "hsl(var(--success) / 0.1)", "transparent"],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

/**
 * 컨텐츠 전환 (페이지/탭)
 */
export const contentTransition: Variants = {
  initial: { opacity: 0, x: 15 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -15 },
};

export const contentTransitionConfig = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
};
