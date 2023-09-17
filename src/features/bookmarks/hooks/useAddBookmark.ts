import useFetch from "@/hooks/useFetch";

export default function useAddBookmark() {
  const { data, error, isLoading, isFetched, isError, fetcher } = useFetch();

  const addBookmark = async (animationId: number) => {
    fetcher("/bookmarks", {
      method: "POST",
      body: JSON.stringify({
        id: animationId,
      }),
    });
  };

  return { data, error, isLoading, isFetched, isError, addBookmark };
}
