interface ILink {
  disabled: boolean;
  onClick: () => void;
  children: JSX.Element;
}

export default function Link({ disabled, onClick, children }: ILink) {
  return (
    <button
      style={{
        marginLeft: "4px"
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
