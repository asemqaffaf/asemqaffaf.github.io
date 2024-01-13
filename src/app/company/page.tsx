"use client";

import React from "react";

import Company from "@/app/components/pages/company";

export default function page() {
  return (
    <div className="h-screen w-screen">
      <Company currentPage={1} />
    </div>
  );
}
