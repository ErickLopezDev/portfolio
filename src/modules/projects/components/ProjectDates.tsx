import React from "react";
import { Calendar } from "lucide-react";

interface ProjectDatesProps {
  inicio: string;
  fin: string;
}

export const ProjectDates: React.FC<ProjectDatesProps> = ({ inicio, fin }) => (
  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
    <Calendar className="h-4 w-4" />
    <span>
      {inicio} – {fin}
    </span>
  </div>
);
