import Header from "@/_components/Header";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

export default function MarketPlace() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black z-0  text-white">
      <Header />

      <section className="container mx-auto px-4 py-16 md:py-24 flex  flex-col">
        <div className="py-5">
          <h3 className="text-2xl font-semibold">Bot MarketPlace</h3>
          <p>Browse, rent, or buy trading bots for the Sonic SVM blockchain</p>
        </div>
        <div>
          <Input type="text" />
          <Filter />
        </div>
      </section>
    </main>
  );
}
