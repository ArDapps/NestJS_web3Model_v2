import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "../components/CustomButton";

export default function HomePage() {
  return (
    <>
      {/* Network Switcher Button */}
      <Web3NetworkSwitch />
      <br />

      {/* Custom button */}
      <CustomButton />
    </>
  );
}
