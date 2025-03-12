import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAppKit } from "@reown/appkit/react";

const Header = () => {
  const { open } = useAppKit();
  return (
    <header className="container mx-auto py-4 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" />
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm hover:text-[#3CDFFF] transition-colors">
          HOME
        </Link>
        <Link
          to="/marketplace"
          className="text-sm hover:text-[#3CDFFF] transition-colors"
        >
          MARKETPLACE
        </Link>
        <Link to="#" className="text-sm hover:text-[#3CDFFF] transition-colors">
          BOT LISTING
        </Link>
        <Link to="#" className="text-sm hover:text-[#3CDFFF] transition-colors">
          FAQ
        </Link>
      </nav>

      <Button onClick={() => open()} variant={"gradient"}>
        Connect Wallet
      </Button>
    </header>
  );
};

export default Header;
