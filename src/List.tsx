import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] =
    useState<{ nama: string; perusahaan: string | null }[]>();
  const [page, setPage] = useState<number>(1);
  const [hasMorePage, setHasMorePage] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  };

  useEffect(() => {
    setLoading(true);
    getData(
      `https://api-gateway.nirwanatextile.com/api/reservasi?page=${page}`
    ).then((res) => {
      setHasMorePage(res.pagination.has_more_page);
      setData(res.data);
      setLoading(false);
    });
  }, [page]);

  return (
    <div className="h-screen bg-main-bg bg-no-repeat bg-cover w-full snap-start py-10 px-5">
      <span className="font-gotham font-bold text-xl text-white">
        Daftar Yang Akan Hadir
      </span>
      {loading ? (
        <div className="animate-pulse">
          <ul className="flex flex-col gap-5 pt-4">
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
            <li className="h-4 bg-slate-500 w-full rounded-lg" />
          </ul>
          <div className="flex w-full gap-5 pt-5 justify-end">
            <div className="w-20 h-10 bg-slate-500 rounded" />
            <div className="w-20 h-10 bg-slate-500 rounded" />
          </div>
        </div>
      ) : (
        <div>
          <ul className="font-gotham font-medium pt-4 !text-white">
            {data?.map((yanghadir, index) => (
              <li key={index}>
                {yanghadir.nama}{" "}
                {yanghadir.perusahaan && "- " + yanghadir.perusahaan}
              </li>
            ))}
          </ul>
          <div className="flex w-full gap-5 pt-5 justify-end">
            {page !== 1 && (
              <button
                className="bg-slate-200 text-gray-800"
                onClick={() => setPage((state) => state - 1)}
              >
                Prev
              </button>
            )}
            {hasMorePage && (
              <button
                className="bg-slate-200 text-gray-800"
                onClick={() => setPage((state) => state + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
