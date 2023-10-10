import { useState } from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postData = async (url: string, body: any) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return response.json();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (body: any) => {
    setLoading(true);
    await postData("https://api-gateway.nirwanatextile.com/api/reservasi", body)
      .then(() => {
        alert("Data berhasil disimpan");
        location.reload();
      })
      .catch(() => {
        alert("Data gagal disimpan");
        location.reload();
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="h-screen bg-main-bg bg-no-repeat bg-cover w-full snap-center py-10 px-5"
      id="form"
    >
      <span className="font-gotham font-bold text-xl text-white">
        Konfirmasi Kehadiran
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 pt-3">
          <input
            type="text"
            placeholder="Nama"
            {...register("nama", { required: true })}
            className="bg-gray-100 rounded p-2 text-gray-800 border border-solid border-gray-100 placeholder-slate-500"
          />
          <input
            type="tel"
            placeholder="No. Hp / WA"
            {...register("telp", {
              required: true,
              minLength: 6,
              maxLength: 13,
            })}
            className="bg-gray-100 rounded p-2 text-gray-800 border border-solid border-gray-100 placeholder-slate-500"
          />
          <input
            type="text"
            placeholder="Nama Perusahaan"
            {...register("perusahaan", {
              required: true,
            })}
            className="bg-gray-100 rounded p-2 text-gray-800 border border-solid border-gray-100 placeholder-slate-500"
          />

          <div>
            <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-[#E5B465] cursor-pointer ">
              <input
                type="radio"
                {...register("hadir", { required: true })}
                value="ya"
              />
              <span className="pl-2">Hadir</span>
            </label>

            <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-[#E5B465] cursor-pointer ">
              <input
                type="radio"
                {...register("hadir", { required: true })}
                value="tidak"
              />
              <span className="pl-2">Tidak Hadir</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#D1B15C] font-gotham font-bold text-white pt-5 disabled:bg-gray-200"
            disabled={loading}
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
