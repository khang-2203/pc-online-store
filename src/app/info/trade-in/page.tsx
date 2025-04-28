import TradeInIntro from "./components/TradeInIntro";
import TradeInConditions from "./components/TradeInConditions";
import TradeInPriceTable from "./components/TradeInPriceTable";
import TradeInProcess from "./components/TradeInProcess";

export default function TradeInPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TradeInIntro />
      <TradeInConditions />
      <TradeInPriceTable />
      <TradeInProcess />
    </div>
  );
}
