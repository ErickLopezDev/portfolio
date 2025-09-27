import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectFooterProps {
  link: string;
  onClose: () => void;
}

export const ProjectFooter: React.FC<ProjectFooterProps> = ({
  link,
  onClose,
}) => (
  <div className="flex gap-3 justify-end px-6 py-4 border-t dark:border-neutral-700">
    <a
      href={link}
      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
      target="_blank"
      rel="noreferrer"
    >
      Live demo <ExternalLink className="h-4 w-4" />
    </a>
    <button
      onClick={onClose}
      className="px-4 py-2 border rounded-lg dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
    >
      Close
    </button>
  </div>
);
