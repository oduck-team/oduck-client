import { MagnifyingGlass } from "@phosphor-icons/react";
import { ComponentProps, useState } from "react";

import Button from "@/components/Button";

import { ErrorMessage, SearchbarContainer } from "./style";

interface SearchbarProps extends ComponentProps<"div"> {
  /** 취소 버튼 렌더링 여부  */
  isCancelButtonVisible: boolean;

  errorMessage: string;

  /** 검색 */
  onSearch: (value: string) => void;

  /** 검색 취소 */
  onCancel: () => void;
}

export default function Searchbar({
  isCancelButtonVisible,
  errorMessage,
  onSearch,
  onCancel,
  ...props
}: SearchbarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    setInputValue("");
    onCancel();
  };

  return (
    <SearchbarContainer isButtonVisible={isCancelButtonVisible} {...props}>
      <MagnifyingGlass size={20} />
      <form
        action="/search"
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue.trim().length === 0) return;
          onSearch(inputValue);
        }}
      >
        <label htmlFor="search">검색</label>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="검색어를 입력해주세요"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        {isCancelButtonVisible && (
          <Button
            name="검색취소"
            variant="text"
            size="sm"
            style={{
              minWidth: "fit-content",
              marginLeft: "8px",
              paddingLeft: "0",
              paddingRight: 0,
            }}
            onClick={handleCancel}
          >
            취소
          </Button>
        )}
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </form>
    </SearchbarContainer>
  );
}
