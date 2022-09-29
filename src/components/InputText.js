import InputCheckbox from "./InputCheckbox";

export default function InputText() {
  return (
    <div className="flex gap-2 bg-white p-2 rounded">
      <InputCheckbox />
      <input type="text" placeholder="enter your todo here" />
    </div>
  );
}
