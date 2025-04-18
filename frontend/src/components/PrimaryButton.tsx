import { ReactNode } from "react";

export const PrimaryButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div className="w-[320px] h-15 gap-2 pt-4 pr-6 pb-4 pl-6 border border-[#2B3A67] rounded-lg cursor-pointer bg-[#2B3A67] border-width: 1px shadow-sm">
      <div
        onClick={onClick}
        className=" flex font-[Plus Jakarta Sans]  text-white font-semibold text-[18px] leading-[28px] tracking-[0] justify-center items-center"
      >
        {children}
      </div>
    </div>
  );
};
