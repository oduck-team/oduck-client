import useFetch from "@/hooks/useFetch";

export default function useRemoveBookmark() {
  const { data, error, isLoading, isFetched, isError, fetcher } = useFetch();

  const removeBookmark = async (animeId: number) => {
    fetcher(`/bookmarks/${animeId}`, {
      method: "DELETE",
    });
  };

  return { data, error, isLoading, isFetched, isError, removeBookmark };
}
