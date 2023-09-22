import useFetch from "@/hooks/useFetch";

export default function useSignUp() {
  const { error, fetcher } = useFetch();

  const handleSignUp = async (name: string) => {
    await fetcher("/members/signup", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    return { nameError: error };
  };

  return { handleSignUp };
}
