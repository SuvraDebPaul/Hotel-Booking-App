import { Badge } from "@/components/reui/badge";
import { Card } from "@/components/ui/card";
import CurrentDate from "@/lib/utils";
import { IoIosTrendingUp } from "react-icons/io";
import { GoVerified } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import StatisticsCard from "@/components/dashboard/StatisticsCard";
import React from "react";

const DashboardPage = () => {
  const totalRooms = 120;
  const statuses = [
    { label: "Occupied", value: 50, color: "bg-secondary" },
    { label: "Available", value: 40, color: "bg-primary" },
    { label: "Reserved", value: 20, color: "bg-gray-400" },
    { label: "Not Ready", value: 10, color: "bg-muted" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <Card className="col-span-3 flex flex-row justify-between items-center gap-2 px-4">
        {/* Statics Cards */}
        <div className="">
          <h2 className="text-2xl font-bold">Hi, UserName</h2>
          <p className="text-sm text-gray-400">{CurrentDate()}</p>
          <Card className="mt-4 bg-secondary text-muted px-4 py-8 flex flex-row justify-between items-center">
            <div className="space-y-2">
              <p className="text-sm">Total Earnings</p>
              <p className="text-3xl font-bold">$58,230.00</p>
            </div>
            <div className="space-y-2">
              <Badge>
                <IoIosTrendingUp />
                +15.6%
              </Badge>
              <p className="text-xs">from Last Week</p>
            </div>
          </Card>
        </div>
        <StatisticsCard
          title="New Reservations"
          count={128}
          staticsNumber={+15.6}
          staticTitle="from last week"
          icon={GoVerified}
        />
        <StatisticsCard
          title="Guest Check-In"
          count={94}
          staticsNumber={+8.7}
          staticTitle="week-over-week"
          icon={CiLogin}
        />
        <StatisticsCard
          title="Guest Check Out"
          count={76}
          staticsNumber={-3.2}
          staticTitle="from previous week"
          icon={CiLogout}
        />
      </Card>
      <Card>
        {/* Room Avaiablity */}
        <div className="px-4">
          <h2 className="text-lg font-semibold">Room Availability</h2>
          <div className="space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-gray-500">Total Rooms</h2>
              <p className="text-xl font-bold">{totalRooms}</p>
            </div>

            {/* Progress Bar */}

            <div className="flex gap-1 h-20 w-full overflow-hidden rounded">
              {statuses.map((status, idx) => {
                const sliceCount = Math.round((status.value / totalRooms) * 25);
                return (
                  <React.Fragment key={idx}>
                    {Array.from({ length: sliceCount }).map((_, sliceIdx) => (
                      <div
                        key={sliceIdx}
                        className={`flex-1 ${status.color} rounded-full`}
                      />
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-sm">
              {statuses.map((status, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${status.color}`} />
                  <span>
                    {status.label}: <strong>{status.value}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
