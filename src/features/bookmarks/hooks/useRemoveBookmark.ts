import useFetch from "@/hooks/useFetch";

export default function useRemoveBookmark() {
  const { data, error, isLoading, isFetched, isError, fetcher } = useFetch();

  const removeBookmark = async (animationId: number) => {
    fetcher(`/bookmarks/${animationId}`, {
      method: "DELETE",
    });
  };

  return { data, error, isLoading, isFetched, isError, removeBookmark };
}
