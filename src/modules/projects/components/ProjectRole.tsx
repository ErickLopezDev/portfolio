import React from "react";
import { User } from "lucide-react";

interface ProjectRoleProps {
  rol: string;
}

export const ProjectRole: React.FC<ProjectRoleProps> = ({ rol }) => (
  <div>
    <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-1">
      <User className="h-4 w-4" /> Role
    </h4>
    <p className="text-sm text-gray-600 dark:text-gray-400">{rol}</p>
  </div>
);
