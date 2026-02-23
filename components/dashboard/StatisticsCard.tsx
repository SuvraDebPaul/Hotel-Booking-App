import React from "react";
import { Card } from "../ui/card";

import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { Badge } from "../reui/badge";

type StatisticsCardProps = {
  title: string;
  count: number;
  staticsNumber: number;
  staticTitle: string;
  icon: React.ElementType;
};

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  count,
  staticsNumber,
  staticTitle,
  icon: Icon,
}) => {
  return (
    <Card className="p-6 bg-sidebar-background">
      <div className="space-y-2">
        <Icon size={50} className="text-muted p-3 bg-secondary rounded-full" />
        <p className="text-gray-400">{title}</p>
        <p className="text-3xl font-bold">{count}</p>
        <div className="flex items-center gap-2">
          <Badge variant={staticsNumber > 0 ? "default" : "destructive"}>
            {staticsNumber > 0 ? <IoIosTrendingUp /> : <IoIosTrendingDown />}
            <span className="text-[10px]">{staticsNumber}%</span>
          </Badge>
          <p className="text-[9px] text-gray-400">{staticTitle}</p>
        </div>
      </div>
    </Card>
  );
};

export default StatisticsCard;
