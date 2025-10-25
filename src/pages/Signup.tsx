import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Building2, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Mock Data
const mockInviteData: Record<string, any> = {
  "AG-2025-XK7M": {
    agencyName: "테스트 에이전시",
    masterName: "SympoHub 본사",
    expiresAt: "2025-12-31",
    status: "active",
  },
  "AG-2025-P9QR": {
    agencyName: "신규 파트너사",
    masterName: "SympoHub 본사",
    expiresAt: "2025-12-31",
    status: "used",
  },
};

export default function Signup() {
  const { inviteId } = useParams<{ inviteId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inviteValid, setInviteValid] = useState(false);
  const [inviteData, setInviteData] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  useEffect(() => {
    // Mock invite validation
    const validateInvite = async () => {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (inviteId && mockInviteData[inviteId]) {
        const data = mockInviteData[inviteId];
        if (data.status === "active") {
          setInviteData(data);
          setInviteValid(true);
        } else {
          toast.error("이미 사용된 초대 코드입니다");
        }
      } else {
        toast.error("유효하지 않은 초대 코드입니다");
      }
      
      setIsLoading(false);
    };

    validateInvite();
  }, [inviteId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      toast.error("모든 필수 항목을 입력해주세요");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("비밀번호가 일치하지 않습니다");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("비밀번호는 8자 이상이어야 합니다");
      return;
    }

    setIsSubmitting(true);

    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("회원가입이 완료되었습니다", {
      description: "관리자 승인 후 로그인하실 수 있습니다",
    });

    // Navigate to login or dashboard
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">초대 코드를 확인하고 있습니다...</p>
        </div>
      </div>
    );
  }

  if (!inviteValid) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle>유효하지 않은 초대 코드</CardTitle>
            <CardDescription>
              초대 코드가 만료되었거나 이미 사용되었습니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full" 
              onClick={() => navigate("/admin/dashboard")}
            >
              대시보드로 이동
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Building2 className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">SympoHub 에이전시 가입</CardTitle>
          <CardDescription>
            {inviteData.masterName}에서 초대한 {inviteData.agencyName} 계정을 생성합니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium">초대 코드 확인 완료</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  초대 코드: <span className="font-mono">{inviteId}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  만료일: {inviteData.expiresAt}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  이름 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  연락처 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="010-1234-5678"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                이메일 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@company.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                비밀번호 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="8자 이상 입력"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                비밀번호 확인 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="비밀번호 재입력"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground">
                회원가입 시 SympoHub의 서비스 약관 및 개인정보 처리방침에 동의하는 것으로 간주됩니다
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => navigate("/admin/dashboard")}
                disabled={isSubmitting}
              >
                취소
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    처리 중...
                  </>
                ) : (
                  "가입 완료"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
