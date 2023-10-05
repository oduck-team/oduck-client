import { useState } from "react";

export default function useDropDownModal() {
  const [isDropDownModalOpen, setIsDropDownModalOpen] = useState(false);
  const handleDropDownModalToggle = () =>
    setIsDropDownModalOpen((prev) => !prev);

  return { isDropDownModalOpen, handleDropDownModalToggle };
}
