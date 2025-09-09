import React from "react";
import { Eye } from "lucide-react"; // 👀 ícono
import { type ICertificate } from "../types/portfolio";

export const CertificateCard: React.FC<{ certificado: ICertificate }> = ({ certificado }) => (
  <div className="max-w-70 relative bg-white dark:bg-neutral-900 rounded-2xl shadow-md overflow-hidden">
    <div className="overflow-hidden relative">
      <img
        src={certificado.imagen}
        alt={certificado.titulo}
        className={`object-center w-full h-full transition-all ${
          certificado.obtenido ? "" : "grayscale opacity-70"
        }`}
      />

      {!certificado.obtenido && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
          <Eye className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium">Muy pronto</span>
        </div>
      )}
    </div>

    <div className="p-4">
      <h3 className="text-lg font-semibold">{certificado.titulo}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{certificado.institucion}</p>
      <p className="text-xs text-gray-400">{certificado.fecha}</p>
    </div>
  </div>
);
