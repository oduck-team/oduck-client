import { X } from "@phosphor-icons/react";

import BottomSheet from "@/components/BottomSheet";
import Chip from "@/components/Chip";

import { Chips, ChipsContainer, Actions, OkButton, ResetButton } from "./style";

// 임시
interface FilterOptions {
  genres: string[];
  seasons: string[];
  broadcastTypes: string[];
  statuses: string[];
  episodeNumber: string[];
}

interface FilterProps {
  filterOptions: FilterOptions;
  isVisible: boolean;
  onClose: () => void;
  filtered: string[];
  resetFilter: () => void;
  handleOptionClick: (item: string) => void;
  handleOkClick: () => void;
}

export default function Filter({
  isVisible,
  onClose,
  filterOptions,
  filtered,
  resetFilter,
  handleOptionClick,
  handleOkClick,
}: FilterProps) {
  return (
    <BottomSheet isVisible={isVisible} onClose={onClose}>
      <BottomSheet.Content>
        {filtered.length > 0 && (
          <ChipsContainer style={{ marginBottom: "24px" }}>
            <h3 style={{ marginTop: "0" }}>선택된 필터</h3>
            <Chips>
              {filtered.map((item, i) => (
                <Chip
                  key={i}
                  active={filtered.includes(item)}
                  variant="filter"
                  onClick={() => handleOptionClick(item)}
                  icon={<X weight="bold" />}
                >
                  {item}
                </Chip>
              ))}
            </Chips>
          </ChipsContainer>
        )}
        <ChipsContainer>
          <h3 style={{ marginTop: "0" }}>장르</h3>
          <Chips>
            {filterOptions.genres.map((genre, i) => (
              <Chip
                key={i}
                active={filtered.includes(genre)}
                variant="filter"
                onClick={() => handleOptionClick(genre)}
              >
                {genre}
              </Chip>
            ))}
          </Chips>
        </ChipsContainer>
        <ChipsContainer>
          <h3>출시년도</h3>
          <Chips>
            {filterOptions.seasons.map((season, i) => (
              <Chip
                key={i}
                active={filtered.includes(season)}
                variant="filter"
                onClick={() => handleOptionClick(season)}
              >
                {season}
              </Chip>
            ))}
          </Chips>
        </ChipsContainer>
        <ChipsContainer>
          <h3>방영타입</h3>
          <Chips>
            {filterOptions.broadcastTypes.map((type, i) => (
              <Chip
                key={i}
                active={filtered.includes(type)}
                variant="filter"
                onClick={() => handleOptionClick(type)}
              >
                {type}
              </Chip>
            ))}
          </Chips>
        </ChipsContainer>
        <ChipsContainer>
          <h3>방영</h3>
          <Chips>
            {filterOptions.statuses.map((status, i) => (
              <Chip
                key={i}
                active={filtered.includes(status)}
                variant="filter"
                onClick={() => handleOptionClick(status)}
              >
                {status}
              </Chip>
            ))}
          </Chips>
        </ChipsContainer>
        <ChipsContainer>
          <h3>화수</h3>
          <Chips>
            {filterOptions.episodeNumber.map((num, i) => (
              <Chip
                key={i}
                active={filtered.includes(num)}
                variant="filter"
                onClick={() => handleOptionClick(num)}
              >
                {num}
              </Chip>
            ))}
          </Chips>
        </ChipsContainer>
      </BottomSheet.Content>
      <BottomSheet.Footer>
        <Actions>
          <ResetButton
            variant="text"
            size="sm"
            name="초기화"
            onClick={resetFilter}
            color="neutral"
          >
            필터 초기화
          </ResetButton>
          <OkButton name="적용 완료" size="lg" onClick={handleOkClick}>
            적용 완료
          </OkButton>
        </Actions>
      </BottomSheet.Footer>
    </BottomSheet>
  );
}
