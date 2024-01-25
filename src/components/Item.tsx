type ItemProps = {
  children: React.ReactNode;
};

export const Item = ({ children }: ItemProps) => {
  return <div className="h-full ">{children}</div>;
};
