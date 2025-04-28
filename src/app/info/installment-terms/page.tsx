import InstallmentIntro from "./components/InstallmentIntro";
import InstallmentConditions from "./components/InstallmentConditions";
import InstallmentRates from "./components/InstallmentRates";
import InstallmentProcess from "./components/InstallmentProcess";
import InstallmentNotes from "./components/InstallmentNotes";

export default function InstallmentTermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <InstallmentIntro />
      <InstallmentConditions />
      <InstallmentRates />
      <InstallmentProcess />
      <InstallmentNotes />
    </div>
  );
}
