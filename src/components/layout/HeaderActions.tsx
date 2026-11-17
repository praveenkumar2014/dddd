import { Link } from "react-router-dom";
import { buttonGhost, buttonPrimary, buttonSecondary } from "../ui/button";

export default function HeaderActions({ onContactSales }: { onContactSales: () => void }) {
  return (
    <div className="hidden items-center gap-2.5 lg:flex">
      <Link to="/login" className={buttonGhost}>
        Log in
      </Link>
      <button type="button" onClick={onContactSales} className={buttonSecondary}>
        Contact sales
      </button>
      <Link to="/signup" className={buttonPrimary}>
        Get started for free
      </Link>
    </div>
  );
}
