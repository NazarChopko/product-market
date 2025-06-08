import { FC, ChangeEvent } from 'react';

type FileInputProps = {
  labelText: string;
  name: string;
  isChoosen: boolean;
  onChangeChooseStatus: (status: boolean) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>, type?: 'text' | 'file') => void;
};

const FileInput: FC<FileInputProps> = ({ labelText, onChange, name, isChoosen, onChangeChooseStatus }) => {
  return (
    <div className="flex flex-col gap-1">
      {isChoosen && <p className="text-black font-semibold">File choosen!</p>}
      <label className=" bg-primary rounded-md p-2 text-white cursor-pointer" htmlFor={name}>
        {labelText}
        <input
          className="hidden"
          id={name}
          type="file"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e, 'file');
            onChangeChooseStatus(true);
          }}
        />
      </label>
    </div>
  );
};

export default FileInput;
