export interface TabProps {
  label: string;
  price: number | null;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}