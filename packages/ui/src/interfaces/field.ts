export interface IFieldProps<V = any> {
  value?: V;
  error?: string;
  onChange?: (event: V) => void;
}