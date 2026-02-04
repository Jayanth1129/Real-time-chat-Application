import { forwardRef } from "react";

const AuthInput = forwardRef(
  ({ type = "text", placeholder, onChange, onKeyDown }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="
          w-full px-4 py-3 rounded-xl
          bg-white/10 text-white
          placeholder:text-slate-400
          outline-none
          focus:ring-2 focus:ring-indigo-500
          transition
        "
      />
    );
  }
);

export default AuthInput;
