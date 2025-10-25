import { useState } from "react";
import { AccountLayout } from "@/components/account/AccountLayout";
import { SettingsCard } from "@/components/agency/SettingsCard";
import { PasswordModal } from "@/components/agency/PasswordModal";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    theme: "light" as "light" | "dark",
  });
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleNotificationChange = (type: "email" | "sms", value: boolean) => {
    setSettings({
      ...settings,
      [`${type}Notifications`]: value,
    });
    toast.success("설정이 업데이트되었습니다.");
  };

  const handleThemeChange = (theme: "light" | "dark") => {
    setSettings({
      ...settings,
      theme,
    });
    toast.success("테마가 변경되었습니다.");
  };

  const handlePasswordChange = () => {
    setIsPasswordModalOpen(true);
  };

  const handleViewLogs = () => {
    toast.info("시스템 로그 기능은 준비 중입니다");
  };

  const handleDeleteAccount = () => {
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteAccount = () => {
    toast.error("계정 삭제 기능은 현재 비활성화되어 있습니다");
    setIsDeleteDialogOpen(false);
  };

  return (
    <AccountLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">계정 설정</h1>
          <p className="mt-2 text-muted-foreground">
            알림, 테마 및 보안 설정을 관리합니다
          </p>
        </div>

        <SettingsCard
          settings={settings}
          onNotificationChange={handleNotificationChange}
          onThemeChange={handleThemeChange}
          onPasswordChange={handlePasswordChange}
          onViewLogs={handleViewLogs}
          onDeleteAccount={handleDeleteAccount}
        />

        <PasswordModal
          open={isPasswordModalOpen}
          onOpenChange={setIsPasswordModalOpen}
        />

        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>정말 계정을 삭제하시겠습니까?</AlertDialogTitle>
              <AlertDialogDescription>
                이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로 삭제됩니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction
                onClick={confirmDeleteAccount}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                삭제
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AccountLayout>
  );
}
