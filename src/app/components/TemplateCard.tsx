"use client";

import React from "react";

interface TemplateCardProps {
  imageSrc: string;
  footer: string;
}

export default function TemplateCard({ imageSrc, footer }: TemplateCardProps) {
  return (
    <div className="template-card">
      <div className="card-header">
        <img src={imageSrc} alt={footer} className="card-image" />
      </div>

      <div className="card-footer">
        {footer}
      </div>
    </div>
  );
}
