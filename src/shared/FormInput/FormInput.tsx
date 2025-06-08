type FormInputProps = {
  labelText: string;
  type?: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({ labelText, type = 'text', name, value, onChange }: FormInputProps) => {
  return (
    <label htmlFor={name} className="flex flex-col gap-1 text-sm">
      <span className="cursor-pointer">{labelText}</span>
      <input
        id={name}
        type={type}
        placeholder={labelText}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-primary-grey border  text-primary-text-grey text-sm rounded-lg w-full p-2.5 outline-none border-none"
      />
    </label>
  );
};

export default FormInput;
