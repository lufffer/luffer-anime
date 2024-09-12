type Props = {
  className: string;
  children: React.ReactNode;
};

const BorderedContainer = ({ className, children }: Props) => {
  return <div className={`bordered-container ${className}`}>{children}</div>;
};

export default BorderedContainer;
