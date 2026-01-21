import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import TextInput from "../../components/inputs/TextInput";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";

const AddressPage = () => {
  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-8">
          Shipping Address
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput placeholder="Your Name" />
          <TextInput type="email" placeholder="Your Email" />

          <TextInput placeholder="Your City" />
          <TextInput placeholder="Your State" />

          <TextInput placeholder="Your Area" />
          <TextInput placeholder="Your Postal Code" />
        </div>

        <div className="mt-6">
          <TextInput placeholder="Your Phone Number" />
        </div>

        <div className="mt-6">
          <TextInput
            placeholder="Your Complete Address"
            className="h-24"
          />
        </div>

        <div className="mt-10 flex justify-end">
          <PrimaryBtn className={"bg-green-500 hover:bg-green-700 text-white"}>
            Save Address
          </PrimaryBtn>
        </div>
      </div>
    </UserLayout>
  );
};

export default AddressPage;
