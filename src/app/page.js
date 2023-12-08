import OrderNowButton from "@/components/common/OrderNowButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 text-center flex flex-col gap-6">
      <div className="flex justify-center my-6">
        <div className="w-[300px] h-[300px] border border-lg rounded-full overflow-hidden">
          <Image
            className=""
            src="/masa-white-plate.png"
            width={"500"}
            height={"570"}
            alt="masa on a plate"
          ></Image>
        </div>
      </div>
      <h1 className="text-lg text-center">
        <span className="text-primary text-2xl italic font-semibold">Masa</span>{" "}
        for Mas and Sirs
      </h1>
      <div className="flex justify-center my-6 w-full flex-col">
        <div className="w-full">
          <OrderNowButton />
        </div>
        <p className="mt-4">Order ends at 12noon</p>
      </div>
      <p>
        For special orders and bookings please call: <br />{" "}
        <span className="text-primary text-2xl font-semibold">
          +2348142918392{" "}
        </span>
      </p>
    </div>
  );
}
