export const SigninInput = ({
  placeholder,
  type = "text",
  onChange,
}: {
  placeholder: string;
  type: "text" | "password";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-[320px]  gap-2 pt-3.5 pr-3.5 pb-3.5 pl-3.5 rounded-lg border border-gray-300">
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full "
      ></input>
    </div>
  );
};
