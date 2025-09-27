import React from "react";
import { CertificateCard } from "./CertificateCard";
import { certs } from "../../data/certs";

const Certs: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {certs.map((certificado) => (
        <CertificateCard key={certificado.id} certificado={certificado} />
      ))}
    </div>
  </div>
);

export default Certs;
