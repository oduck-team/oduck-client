import { BroadcastType, Rating, Status } from "@/features/animations/types";
import useFetch from "@/hooks/useFetch";

export interface AddAnimationDto {
  name: string;
  plot: string;
  broadcastType: BroadcastType;
  episodeNumber: number;
  rating: Rating;
  primaryKeyword: string;
  status: Status;
  isReleased: boolean;
  imageUrl: string;
  studioNames: string[];
}

export default function useAddAnimation() {
  const { data, error, isLoading, isFetched, isError, fetcher } = useFetch();

  const handleAddAnimation = async (dto: AddAnimationDto) => {
    await fetcher("/animation", {
      method: "POST",
      body: JSON.stringify(dto),
    });

    return { data, error };
  };

  return { handleAddAnimation };
}
