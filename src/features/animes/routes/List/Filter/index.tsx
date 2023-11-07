import { X } from "@phosphor-icons/react";

import BottomSheet from "@/components/BottomSheet";
import Chip from "@/components/Chip";
import {
  GenreFilter,
  BroadCastFilter,
  EpisodeCountFilter,
  SeasonFilter,
  StatusFilter,
  AllFilterTypes,
} from "@/features/animes/hooks/useFilterAnimes";

import { Chips, ChipsContainer, Actions, OkButton, ResetButton } from "./style";

interface FilterOptions {
  genres: GenreFilter[];
  seasons: SeasonFilter[];
  broadcastTypes: BroadCastFilter[];
  statuses: StatusFilter[];
  episodeCounts: EpisodeCountFilter[];
}

interface FilterProps {
  /** Filter 렌더링 여부 */
  isVisible: boolean;

  /** 렌더링할 필터 옵션 목록 */
  filterOptions: FilterOptions;

  /** 선택한 필터 목록 */
  selectedFilters: AllFilterTypes[];

  /** Filter 컴포넌트 닫기 */
  onClose: () => void;

  /** 선택한 필터 초기화 */
  resetFilter: () => void;

  /** 필터 옵션 추가 핸들러 */
  handleFilterAdd: (option: AllFilterTypes) => void;

  /** 필터 옵션 제거 핸들러 */
  handleFilterRemove: (option: AllFilterTypes) => void;

  /** 필터 옵션 적용 클릭 핸들러 */
  handleOkClick: () => void;
}

export default function Filter({
  isVisible,
  filterOptions,
  selectedFilters,
  onClose,
  resetFilter,
  handleFilterAdd,
  handleFilterRemove,
  handleOkClick,
}: FilterProps) {
  return (
    <BottomSheet isVisible={isVisible} onClose={onClose}>
      <BottomSheet.Content>
        {selectedFilters.length > 0 && (
          <ChipsContainer style={{ marginBottom: "24px" }}>
            <h3 style={{ marginTop: "0" }}>선택된 필터</h3>
            <Chips>
              {selectedFilters.map((item, i) => (
                <Chip
                  key={`${item.label}-${i}`}
                  active={true}
                  variant="filter"
                  icon={<X weight="bold" />}
                  onClick={() => handleFilterRemove(item)}
                >
                  {item.label}
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
                active={selectedFilters.some(
                  (item) => item.label === genre.label,
                )}
                variant="filter"
                onClick={() => handleFilterAdd(genre)}
              >
                {genre.label}
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
                active={selectedFilters.some(
                  (item) => item.label === season.label,
                )}
                variant="filter"
                onClick={() => handleFilterAdd(season)}
              >
                {season.label}
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
                active={selectedFilters.some(
                  (item) => item.label === type.label,
                )}
                variant="filter"
                onClick={() => handleFilterAdd(type)}
              >
                {type.label}
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
                active={selectedFilters.some(
                  (item) => item.label === status.label,
                )}
                variant="filter"
                onClick={() => handleFilterAdd(status)}
              >
                {status.label}
              </Chip>
            ))}
          </Chips>
        </ChipsContainer>
        <ChipsContainer>
          <h3>화수</h3>
          <Chips>
            {filterOptions.episodeCounts.map((num, i) => (
              <Chip
                key={i}
                active={selectedFilters.some(
                  (item) => item.label === num.label,
                )}
                variant="filter"
                onClick={() => handleFilterAdd(num)}
              >
                {num.label}
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
