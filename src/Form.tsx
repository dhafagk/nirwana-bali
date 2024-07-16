import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const cutoffDate = new Date("2024-07-17");
    if (currentDate > cutoffDate) {
      setIsDisabled(true);
    }
  }, []);

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
      className="h-screen bg-main-bg bg-no-repeat bg-cover w-full snap-start py-5 px-3"
      id="form" style={{ backgroundImage: 'url("../img/webred.png")' }}
    >
      <span className="font-gotham font-bold text-xl text-white">
        GUEST BOOK
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 pt-10">
          <input
            type="text"
            placeholder="Nama"
            {...register("nama", { required: true })}
            className="bg-gray-100 rounded p-2 text-gray-800 border border-solid border-gray-100 placeholder-slate-500"
            disabled={isDisabled}
          />
          <input
            type="tel"
            placeholder="Nomor Whatsapp"
            {...register("telp", {
              required: true,
              minLength: 6,
              maxLength: 13,
            })}
            className="bg-gray-100 rounded p-2 text-gray-800 border border-solid border-gray-100 placeholder-slate-500"
            disabled={isDisabled}
          />
          <input
            type="text"
            placeholder="Domisili"
            {...register("perusahaan", {
              required: true,
            })}
            className="bg-gray-100 rounded p-2 text-gray-800 border border-solid border-gray-100 placeholder-slate-500"
            disabled={isDisabled}
          />

          <div>
            <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-[#D20909] hover:text-white cursor-pointer ">
              <input
                type="radio"
                {...register("hadir", { required: true })}
                value="ya"
                disabled={isDisabled}
              />
              <span className="pl-2">Hadir</span>
            </label>

            <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-[#D20909] hover:text-white cursor-pointer ">
              <input
                type="radio"
                {...register("hadir", { required: true })}
                value="tidak"
                disabled={isDisabled}
              />
              <span className="pl-2">Tidak Hadir</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#D20909] font-arial font-bold text-white disabled:bg-gray-200"
            disabled={loading || isDisabled}
          >
            KIRIM
          </button>
        </div>
      </form>
      {isDisabled && (
        <p className="text-white font-bold text-xl mt-4">
          16 Juli 2024 adalah pengisian form terakhir.
        </p>
      )}
    </div>
  );
};

export default MyForm;
