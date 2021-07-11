export default interface CreateFormProps {
  header: string;
  onSubmit: (value: string) => void;
  onReset: () => void;
}
