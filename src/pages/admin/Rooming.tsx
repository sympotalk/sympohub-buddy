import { Plus, Search, Building2, Bed } from "lucide-react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const hotels = [
  {
    id: 1,
    name: "서울 그랜드 호텔",
    rooms: 120,
    assigned: 95,
    available: 25,
  },
  {
    id: 2,
    name: "롯데호텔",
    rooms: 80,
    assigned: 80,
    available: 0,
  },
  {
    id: 3,
    name: "JW 메리어트",
    rooms: 100,
    assigned: 72,
    available: 28,
  },
];

const roomAssignments = [
  {
    id: 1,
    participant: "김철수",
    hotel: "서울 그랜드 호텔",
    roomNumber: "1205",
    roomType: "디럭스 더블",
    checkIn: "2025-03-15",
    checkOut: "2025-03-16",
    status: "확정",
  },
  {
    id: 2,
    participant: "이영희",
    hotel: "롯데호텔",
    roomNumber: "2301",
    roomType: "스위트",
    checkIn: "2025-03-15",
    checkOut: "2025-03-17",
    status: "확정",
  },
  {
    id: 3,
    participant: "박지민",
    hotel: "JW 메리어트",
    roomNumber: "1804",
    roomType: "스탠다드",
    checkIn: "2025-03-15",
    checkOut: "2025-03-16",
    status: "미확정",
  },
];

export default function Rooming() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">숙박 및 룸핑 관리</h1>
            <p className="mt-2 text-muted-foreground">
              호텔 객실 배정과 숙박 정보를 관리하세요
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="lg" className="gap-2">
              <Building2 className="h-5 w-5" />
              호텔 자동등록
            </Button>
            <Button size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              객실 배정
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="shadow-card shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  {hotel.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">전체 객실</span>
                    <span className="font-semibold">{hotel.rooms}실</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">배정 완료</span>
                    <span className="font-semibold text-primary">{hotel.assigned}실</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">잔여 객실</span>
                    <span className="font-semibold text-success">{hotel.available}실</span>
                  </div>
                  <div className="pt-2">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${(hotel.assigned / hotel.rooms) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bed className="h-5 w-5 text-primary" />
              객실 배정표
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="참가자 또는 호텔명으로 검색..." className="pl-10" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>참가자</TableHead>
                  <TableHead>호텔명</TableHead>
                  <TableHead>객실번호</TableHead>
                  <TableHead>객실타입</TableHead>
                  <TableHead>체크인</TableHead>
                  <TableHead>체크아웃</TableHead>
                  <TableHead>상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roomAssignments.map((assignment) => (
                  <TableRow key={assignment.id}>
                    <TableCell className="font-medium">{assignment.id}</TableCell>
                    <TableCell className="font-semibold">{assignment.participant}</TableCell>
                    <TableCell>{assignment.hotel}</TableCell>
                    <TableCell>{assignment.roomNumber}</TableCell>
                    <TableCell>{assignment.roomType}</TableCell>
                    <TableCell>{assignment.checkIn}</TableCell>
                    <TableCell>{assignment.checkOut}</TableCell>
                    <TableCell>
                      <Badge
                        variant={assignment.status === "확정" ? "default" : "secondary"}
                        className={
                          assignment.status === "확정"
                            ? "bg-success/10 text-success"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {assignment.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
