"use client"

import { useQuery } from "@tanstack/react-query"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function VolunteerAnalytics() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["volunteerStats"],
    queryFn: async () => {
      const response = await fetch("/api/admin/volunteers/stats")
      if (!response.ok) throw new Error("Failed to fetch volunteer stats")
      return response.json()
    }
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Application Status</CardTitle>
          <CardDescription>Current volunteer applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Pending</span>
                <span className="text-muted-foreground">{stats?.pending || 0}</span>
              </div>
              <Progress value={stats?.pendingPercentage || 0} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Approved</span>
                <span className="text-muted-foreground">{stats?.approved || 0}</span>
              </div>
              <Progress value={stats?.approvedPercentage || 0} className="bg-green-100" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Contacted</span>
                <span className="text-muted-foreground">{stats?.contacted || 0}</span>
              </div>
              <Progress value={stats?.contactedPercentage || 0} className="bg-yellow-100" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popular Positions</CardTitle>
          <CardDescription>Most requested volunteer roles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats?.popularPositions?.map((position: any) => (
              <div key={position.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>{position.name}</span>
                  <span className="text-muted-foreground">{position.count}</span>
                </div>
                <Progress value={position.percentage} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Application Trends</CardTitle>
          <CardDescription>Last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Total Applications</span>
              <span className="text-2xl font-bold">{stats?.totalApplications || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Weekly Average</span>
              <span className="text-xl">{stats?.weeklyAverage || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Response Rate</span>
              <span className="text-xl">{stats?.responseRate || "0%"}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
