import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import MarketPlace from "./pages/marketplace/page";
import BotDetail from "./pages/marketplace/bot/[id]/page";

function App() {
  // 0. Set up Solana Adapter
  const solanaWeb3JsAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
  });

  // 1. Get projectId from https://cloud.reown.com
  const projectId = import.meta.env.VITE_APP_REOWN_PROJECT_ID!;

  // 2. Create a metadata object - optional
  const metadata = {
    name: "AppKit",
    description: "AppKit Solana Example",
    url: "https://example.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
  };

  // 3. Create modal
  createAppKit({
    adapters: [solanaWeb3JsAdapter],
    networks: [solana, solanaTestnet, solanaDevnet],
    metadata: metadata,
    projectId,
    features: {
      analytics: true, // Optional - defaults to your Cloud configuration
    },
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/marketplace/bot/:id" element={<BotDetail params={{ id: ''}} />} />
      </Routes>
    </Router>
  );
}

export default App;
