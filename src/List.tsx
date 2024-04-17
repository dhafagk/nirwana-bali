import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] =
    useState<{ nama: string; perusahaan: string | null }[]>();
  const [page, setPage] = useState<number>(0);
  const [pagination, setPaginaton] = useState<{
    current_page: number;
    has_more_page: boolean;
    total_pages: number;
    per_page: number;
    total_items: number;
  }>({
    current_page: 0,
    has_more_page: false,
    total_pages: 0,
    per_page: 0,
    total_items: 0,
  });
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
      `https://api-gateway.nirwanatextile.com/api/reservasi?page=${page + 1}`
    ).then((res) => {
      setPaginaton(res.pagination);
      setData(res.data);
      setLoading(false);
    });
  }, [page]);

  return (
    <div className="h-screen bg-main-bg bg-no-repeat bg-cover w-full snap-start py-10 px-5">
      <span className="font-gotham font-bold text-xl text-white">
        DAFTAR KEHADIRAN
      </span>
      {loading ? (
        <div className="animate-pulse" >
          <ul className="flex flex-col gap-5 pt-4">
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
          <ul className="font-gotham font-medium gap-5 !text-white justify" style={{ backgroundColor: 'rgb(210, 9, 9, 0.8)', padding: '0.5rem'}}>
            {data?.map((yanghadir, index) => (
              <li key={index}>
                <span className="font-gotham text-xl min-[375px]:text-xl text-white tracking-wider" style={{ fontWeight: 'normal'}}>
                  {pagination?.total_items -
                    index -
                    pagination?.per_page * page}
                  .{" "}
                </span>
                <span className="font-gotham text-xl min-[375px]:text-xl text-white tracking-wider" style={{ fontWeight: 'normal'}}>
                  {yanghadir.nama}{" "}
                  {yanghadir.perusahaan && " - " + yanghadir.perusahaan}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex w-full gap-10 justify-end pt-5">
            {page !== 0 && (
              <button
                className="bg-slate-200 text-gray-800"
                onClick={() => setPage((state) => state - 1)}
              >
                Prev
              </button>
            )}
            {pagination?.has_more_page && (
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
