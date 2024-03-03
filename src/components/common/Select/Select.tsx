import { SelectStyled } from './Select.styled';

interface ISelectOption {
  id: number;
  label: string;
}

interface SelectProps {
  label: string;
  placeholder: string;
  options: ISelectOption[];
  register: any;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  placeholder,
  register,
}) => {
  return (
    <SelectStyled>
      <label htmlFor={register.name}>{label}</label>

      <select {...register}>
        <option value="">{placeholder}</option>
        {options.length > 0 &&
          options.map(({ id, label }) => (
            <option key={id} value={label}>
              {label}
            </option>
          ))}
      </select>
    </SelectStyled>
  );
};
