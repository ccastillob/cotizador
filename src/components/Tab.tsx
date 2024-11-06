interface TabProps {
  label: string;
  price: number | null;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Tab = ({ label, price, isActive, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`card-content__tab ${isActive ? "tab__active" : ""}`}
  >
    <h4 className="tab__text">{label}</h4>
    <h5 className="tab__number">{price ?? "--"}</h5>
  </button>
);
