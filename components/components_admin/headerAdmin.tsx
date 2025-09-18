// =======================================================================
// FILE: /components/components_admin/headerAdmin.tsx
// FIXES: Simplified to prevent duplication. Now only shows user info.
// =======================================================================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@heroui/react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function HeaderAdmin() {
  return (
    // This component now only renders the user profile part.
    // The "Good morning" message should be part of the page's banner.
    <div className="flex items-center font-bold text-xl gap-4">
      <span>Admin</span>
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        size="md"
      />
    </div>
  );
}