import { Search as SearchIcon } from "iconoir-react";
import { ComponentProps } from "react";

import Button from "@/components/Button";

import { SearchbarContainer } from "./style";

interface SearchbarProps extends ComponentProps<"div"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

export default function Searchbar({
  value,
  onChange,
  onSearch,
  onCancel,
  ...props
}: SearchbarProps) {
  const isButtonVisible = value.length > 0;
  return (
    <SearchbarContainer isButtonVisible={isButtonVisible} {...props}>
      <SearchIcon height={20} width={20} />
      <form action="/search" onSubmit={onSearch}>
        <label htmlFor="search">검색</label>
        <input
          id="search"
          type="text"
          placeholder="검색어를 입력해주세요"
          value={value}
          onChange={onChange}
        />
        {isButtonVisible && (
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
            onClick={onCancel}
          >
            취소
          </Button>
        )}
      </form>
    </SearchbarContainer>
  );
}
