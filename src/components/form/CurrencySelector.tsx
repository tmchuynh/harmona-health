import { useCurrency } from "@/context/currencyContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { currencyCountries } from "@/lib/constants/money/countriesConstant";

export default function CurrencySelector() {
  const { selectedCurrency, setSelectedCurrency } = useCurrency();

  return (
    <div className="flex justify-between items-center mx-auto px-4 w-full max-w-7xl">
      <form className="md:block hidden">
        <div className="inline-grid grid-cols-1 -ml-2">
          <SelectGroup>
            <Select
              value={selectedCurrency.code}
              onValueChange={(code) => {
                const currency = currencyCountries.find((c) => c.code === code);
                if (currency) {
                  setSelectedCurrency(currency);
                }
              }}
            >
              <SelectTrigger className="shadow-none pr-7 pl-2 border-none focus-visible:ring-0 max-w-fit font-medium text-base text-left sm:text-sm/6 focus-visible:outline-none">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                {currencyCountries.map((currency, index) => (
                  <SelectItem
                    className="focus:bg-muted focus:text-muted-foreground"
                    key={`${index}-${currency.code}`}
                    value={currency.code}
                  >
                    {currency.symbol} {currency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </SelectGroup>
        </div>
      </form>
    </div>
  );
}
