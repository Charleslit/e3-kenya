"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formatDate } from "@/lib/utils"

export default function VolunteersPage() {
  const [statusFilter, setStatusFilter] = useState("all")

  const { data: applications, isLoading } = useQuery({
    queryKey: ["volunteerApplications", statusFilter],
    queryFn: async () => {
      const response = await fetch(`/api/admin/volunteers${statusFilter !== "all" ? `?status=${statusFilter}` : ""}`)
      if (!response.ok) throw new Error("Failed to fetch applications")
      return response.json()
    }
  })

  const handleStatusChange = async (applicationId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/volunteers/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      })
      if (!response.ok) throw new Error("Failed to update status")
      // Refetch applications
      applications.refetch()
    } catch (error) {
      console.error("Error updating application status:", error)
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Volunteer Applications</h1>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Applications</SelectItem>
            <SelectItem value="PENDING">Pending</SelectItem>
            <SelectItem value="APPROVED">Approved</SelectItem>
            <SelectItem value="REJECTED">Rejected</SelectItem>
            <SelectItem value="CONTACTED">Contacted</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Applied</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications?.map((app: any) => (
            <TableRow key={app.id}>
              <TableCell>{`${app.firstName} ${app.lastName}`}</TableCell>
              <TableCell>{app.email}</TableCell>
              <TableCell>{app.position}</TableCell>
              <TableCell>
                <Badge variant={
                  app.status === "APPROVED" ? "success" :
                  app.status === "REJECTED" ? "destructive" :
                  app.status === "CONTACTED" ? "warning" :
                  "default"
                }>
                  {app.status}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(app.createdAt)}</TableCell>
              <TableCell>
                <Select
                  value={app.status}
                  onValueChange={(value) => handleStatusChange(app.id, value)}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="APPROVED">Approve</SelectItem>
                    <SelectItem value="REJECTED">Reject</SelectItem>
                    <SelectItem value="CONTACTED">Contacted</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
