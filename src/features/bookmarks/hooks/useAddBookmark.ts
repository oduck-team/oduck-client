import useFetch from "@/hooks/useFetch";

export default function useAddBookmark() {
  const { data, error, isLoading, isFetched, isError, fetcher } = useFetch();

  const addBookmark = async (animeId: number) => {
    fetcher("/bookmarks", {
      method: "POST",
      body: JSON.stringify({
        id: animeId,
      }),
    });
  };

  return { data, error, isLoading, isFetched, isError, addBookmark };
}
