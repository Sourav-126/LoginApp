export const LabelButton = ({ children }: { children: string }) => {
  return (
    <div className="w-[230px] h-[38px]">
      <div className="text-[#232323] font-[plus jakarta Sans] font-[700]  text-[30px] leading-[38px] tracking-[0%]">
        {children}
      </div>
    </div>
  );
};
