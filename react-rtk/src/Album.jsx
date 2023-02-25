import { useGetAlbumsQuery } from "./services/jsonService";
import { useState } from "react";

export default function Albums() {
  const [page, setPage] = useState(1);
  const {
    data: albums = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAlbumsQuery(page);

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }
  console.log(albums);
  return (
    <>
      <ul>
        {albums?.map((album) => (
          <li key={album.id}>
            {album.id} - {album.title}
          </li>
        ))}
      </ul>
      <hr />
      <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>
        Prev
      </button>
      <button
        disabled={albums.length < 5}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </>
  );
}
