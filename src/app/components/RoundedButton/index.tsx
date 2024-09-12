type Props = {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const RoundedButton = ({ className, onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={`rounded-button ${className}`}>
      {children}
    </button>
  );
};

export default RoundedButton;
