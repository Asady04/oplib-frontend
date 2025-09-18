// =======================================================================
// FILE: /user/room-reservation/page.tsx (Updated & Simplified)
// =======================================================================
// INSTRUCTIONS: Replace the content of your /user/room-reservation/page.tsx file with this code.
// NOTE: For this to work correctly, you MUST DELETE the layout.tsx file from this
// same /user/room-reservation/ directory.

"use client";
import React from "react";
import ReservationPage from "@/components/components_user/room-reservation";

export default function UserRoomReservationPage() {
  return (
    // The main application layout now handles the sidebar and header.
    // This page component only needs to render the specific content for the room reservation page.
    <ReservationPage />
  );
}
