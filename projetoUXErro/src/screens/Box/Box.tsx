import {
  BarChart3Icon,
  BellIcon,
  ChevronDownIcon,
  HomeIcon,
  LineChartIcon,
  PieChartIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const Box = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    {
      icon: <HomeIcon className="h-5 w-5" />,
      label: "Dashboard",
      active: true,
    },
    { icon: <BarChart3Icon className="h-5 w-5" />, label: "Analytics" },
    { icon: <UsersIcon className="h-5 w-5" />, label: "Customers" },
    { icon: <SettingsIcon className="h-5 w-5" />, label: "Settings" },
  ];

  // Metrics data for the chart
  const metrics = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 40 },
    { month: "Mar", value: 35 },
    { month: "Apr", value: 50 },
    { month: "May", value: 45 },
    { month: "Jun", value: 60 },
  ];

  // Time period options
  const timePeriods = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-8 rounded-md bg-blue-500 flex items-center justify-center">
            <LineChartIcon className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold">Analytics</h1>
        </div>

        <nav>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start ${item.active ? "bg-slate-800" : ""}`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="SearchIcon..."
                className="bg-slate-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <Button variant="ghost" size="icon">
              <BellIcon className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
              <ChevronDownIcon className="h-4 w-4 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Summary cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            {
              title: "Total Users",
              value: "12,345",
              icon: <UsersIcon className="h-5 w-5" />,
              change: "+12%",
            },
            {
              title: "Sessions",
              value: "8,765",
              icon: <BarChart3Icon className="h-5 w-5" />,
              change: "+5%",
            },
            {
              title: "Conversion",
              value: "3.2%",
              icon: <PieChartIcon className="h-5 w-5" />,
              change: "-2%",
            },
            {
              title: "Revenue",
              value: "$24,567",
              icon: <LineChartIcon className="h-5 w-5" />,
              change: "+18%",
            },
          ].map((item, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-slate-400">{item.title}</p>
                    <p className="text-2xl font-bold mt-1">{item.value}</p>
                    <p
                      className={`text-xs mt-1 ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                    >
                      {item.change} from last month
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-md bg-slate-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Metrics chart */}
        <Card className="bg-slate-800 border-slate-700 mb-6">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Metrics</CardTitle>
            <Tabs defaultValue="monthly">
              <TabsList className="bg-slate-700">
                {timePeriods.map((period, index) => (
                  <TabsTrigger key={index} value={period.toLowerCase()}>
                    {period}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-[300px] w-full">
              {/* Chart visualization */}
              <div className="relative h-full w-full">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400 py-2">
                  <span>60</span>
                  <span>45</span>
                  <span>30</span>
                  <span>15</span>
                  <span>0</span>
                </div>

                {/* Chart area */}
                <div className="absolute left-8 right-0 top-0 h-full">
                  {/* Horizontal grid lines */}
                  <div className="h-full flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="border-t border-slate-700 w-full h-0"
                      ></div>
                    ))}
                  </div>

                  {/* Chart bars */}
                  <div className="absolute inset-0 flex items-end justify-around pt-4 pb-6">
                    {metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2"
                      >
                        <div
                          className="w-12 bg-blue-500 rounded-t-sm"
                          style={{ height: `${metric.value * 4}px` }}
                        ></div>
                        <span className="text-xs text-slate-400">
                          {metric.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "John Doe",
                  action: "logged in",
                  time: "2 minutes ago",
                },
                {
                  user: "Jane Smith",
                  action: "updated profile",
                  time: "1 hour ago",
                },
                {
                  user: "Bob Johnson",
                  action: "made a purchase",
                  time: "3 hours ago",
                },
                {
                  user: "Alice Williams",
                  action: "created an account",
                  time: "5 hours ago",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 pb-3 border-b border-slate-700"
                >
                  <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-xs">
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-xs text-slate-400">{activity.time}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
