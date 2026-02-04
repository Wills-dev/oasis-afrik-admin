import { ChangeEvent } from "react";

import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import SearchableDropdown from "@/components/molecules/SearchableDropdown/SearchableDropdown";
import Textarea from "@/components/atoms/TextArea/Textarea";

import { ProductFormData } from "../../types";
import { useGetCountries } from "../../hooks/useGetCountries";
import { useGetUnits } from "../../hooks/useGetUnits";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useGetPeriods } from "../../hooks/useGetPeriods";
import { useGetCurrency } from "../../hooks/useGetCurrency";

interface NewProductStepOneProps {
  product: ProductFormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  handleDropdownChange: (name: keyof ProductFormData, value: string) => void;
}
const NewProductStepOne = ({
  product,
  handleChange,
  handleDropdownChange,
}: NewProductStepOneProps) => {
  const { countries, loadingCountries } = useGetCountries();
  const { units, loadingUnits } = useGetUnits();
  const { loadingCategories, categories } = useGetCategories();
  const { periods, loadingPeriods } = useGetPeriods();
  const { currencies, loadingCurrencies } = useGetCurrency();

  return (
    <div className="space-y-6">
      <h6 className="sm:text-lg font-medium">Product information</h6>
      <div className="gap-4 grid grid-cols-2">
        <div className="space-y-1 md:col-span-1 col-span-2">
          <Label title="Product Name" />
          <Input
            value={product.productName}
            onChange={handleChange}
            type="text"
            name="productName"
            placeholder=""
          />
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2">
          <Label title="Category" />
          <SearchableDropdown
            options={categories}
            value={product.category}
            onChange={(value) =>
              handleDropdownChange("category", value.toString())
            }
            placeholder={
              loadingCategories
                ? "Loading categories..."
                : "Select a category..."
            }
          />
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2">
          <Label title="Country" />
          <SearchableDropdown
            options={countries}
            value={product.country}
            onChange={(value) =>
              handleDropdownChange("country", value.toString())
            }
            placeholder={
              loadingCountries ? "Loading countries..." : "Select a country..."
            }
          />
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            {" "}
            <Label title="Min Order" />
            <Input
              value={product.minOrder}
              onChange={handleChange}
              type="text"
              name="minOrder"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Unit" />
            <SearchableDropdown
              options={units}
              value={product.minOrderUnit}
              onChange={(value) =>
                handleDropdownChange("minOrderUnit", value.toString())
              }
              placeholder={loadingUnits ? "Loading units..." : "units..."}
            />
          </div>
        </div>
        <div className="space-y-1 md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            <Label title={`Price`} />
            <Input
              value={product.price}
              onChange={handleChange}
              type="text"
              name="price"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Currency" />
            <SearchableDropdown
              options={currencies}
              value={product.currency}
              onChange={(value) =>
                handleDropdownChange("currency", value.toString())
              }
              placeholder={
                loadingCurrencies ? "Loading currencies..." : "currencies..."
              }
            />
          </div>
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            {" "}
            <Label title="Quantity" />
            <Input
              value={product.quantity}
              onChange={handleChange}
              type="text"
              name="quantity"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Unit" />
            <SearchableDropdown
              options={units}
              value={product.unit}
              onChange={(value) =>
                handleDropdownChange("unit", value.toString())
              }
              placeholder={loadingUnits ? "Loading units..." : "units..."}
            />
          </div>
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            {" "}
            <Label title="Min Lead Time" />
            <Input
              value={product.minLead}
              onChange={handleChange}
              type="text"
              name="minLead"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Period" />
            <SearchableDropdown
              options={periods}
              value={product.minLeadPeriod}
              onChange={(value) =>
                handleDropdownChange("minLeadPeriod", value.toString())
              }
              placeholder={loadingPeriods ? "Loading periods..." : "period..."}
            />
          </div>
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            {" "}
            <Label title="Max Lead Time" />
            <Input
              value={product.maxLead}
              onChange={handleChange}
              type="text"
              name="maxLead"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Period" />
            <SearchableDropdown
              options={periods}
              value={product.maxLeadPeriod}
              onChange={(value) =>
                handleDropdownChange("maxLeadPeriod", value.toString())
              }
              placeholder={loadingPeriods ? "Loading periods..." : "period..."}
            />
          </div>
        </div>
        <div className="space-y-1 col-span-2">
          <Label title="Description" />
          <Textarea
            value={product.description}
            onChange={handleChange}
            rows={5}
            name="description"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewProductStepOne;
