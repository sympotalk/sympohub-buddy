/**
 * Precision Design System - 표준 메시지 프리셋
 */

export const PD_MESSAGES = {
  // 성공 메시지
  success: {
    saved: "저장되었습니다.",
    applied: "변경이 적용되었습니다.",
    signupComplete: "가입이 완료되었습니다.",
    updated: "업데이트되었습니다.",
    deleted: "삭제되었습니다.",
    sent: "전송되었습니다.",
  },

  // 경고 메시지
  warning: {
    temporaryError: "일시적 오류가 발생했습니다. 다시 시도해주세요.",
    unsavedChanges: "저장하지 않은 변경사항이 있습니다.",
    slowConnection: "네트워크 연결이 느립니다.",
  },

  // 오류 메시지
  error: {
    networkError: "네트워크 오류가 발생했습니다.",
    validationError: "입력 정보를 확인해주세요.",
    authError: "인증에 실패했습니다.",
    serverError: "서버 오류가 발생했습니다.",
    notFound: "요청한 정보를 찾을 수 없습니다.",
    permissionDenied: "권한이 없습니다.",
  },

  // 로딩 메시지
  loading: {
    default: "로딩 중...",
    saving: "저장 중...",
    loading: "불러오는 중...",
    processing: "처리 중...",
  },

  // 확인 메시지
  confirm: {
    delete: "정말 삭제하시겠습니까?",
    discard: "변경사항을 취소하시겠습니까?",
    logout: "로그아웃하시겠습니까?",
  },
} as const;
