// =======================================================================
// FILE: /components/components_user/room-reservation.tsx
// FIXES: Rebuilt the schedule table to be fully responsive.
// =======================================================================
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "@heroui/react";
import ModalBooking from "./modalBooking";
import React from "react";

const rooms = [
  { id: "1", name: "Ruang Diskusi 1", capacity: "5-6", price: "10000/h" },
  { id: "2", name: "Ruang Diskusi 2", capacity: "5-6", price: "10000/h" },
  { id: "3", name: "Ruang Diskusi 3", capacity: "5-6", price: "10000/h" },
];
const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

export default function ReservationPage() {
  return (
    <section className="bg-white shadow-md rounded-lg p-5 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h4 className="flex gap-3 text-dark-red text-2xl font-bold items-center">
          <FontAwesomeIcon icon={faDoorClosed} />
          Room Reservation
        </h4>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <DatePicker label="Select Date" className="w-full sm:w-auto" />
          <ModalBooking rooms={rooms} />
        </div>
      </div>

      {/* Responsive Schedule Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="p-3 font-bold uppercase bg-gray-100 text-gray-600 border border-gray-300">Room</th>
              {times.map(time => <th key={time} className="p-3 font-bold uppercase bg-gray-100 text-gray-600 border border-gray-300">{time}</th>)}
            </tr>
          </thead>
          <tbody className="bg-white">
            {rooms.map(room => (
              <tr key={room.id} className="hover:bg-gray-50">
                <td className="p-3 text-gray-800 border border-gray-200 font-semibold">
                    <p>{room.name}</p>
                    <p className="text-xs text-gray-500">{room.capacity} People</p>
                </td>
                {times.map(time => (
                  <td key={`${room.id}-${time}`} className="p-1 border border-gray-200 text-center">
                    <button className="w-full h-12 rounded hover:bg-blue-100 transition-colors"></button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
