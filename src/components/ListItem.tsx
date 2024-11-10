export default function ListItem({
  leading,
  trailing,
  mainTitle,
  subTitle,
  mainTitleStyle,
  subTitleStyle,
  centered = false,
  appendClass,
  appendParentClass,
  appendTitleParentClass,
}: ListItemProps) {
  return (
    <div
      className={`flex justify-between items-center w-full ${
        appendParentClass ? appendParentClass : ""
      }`}
    >
      <div
        className={`flex items-center w-full ${appendClass ? appendClass : ""}`}
      >
        {leading && <div>{leading}</div>}
        <div
          className={`flex flex-col w-full ${centered ? "items-center" : ""} ${
            appendTitleParentClass ? appendTitleParentClass : ""
          }`}
        >
          <span className={mainTitleStyle}>{mainTitle}</span>
          <span className={subTitleStyle}>{subTitle}</span>
        </div>
      </div>
      {trailing && <div className="flex">{trailing}</div>}
    </div>
  );
}

type ListItemProps = {
  leading?: JSX.Element;
  mainTitle?: string | number | null | undefined | JSX.Element;
  mainTitleStyle?: string;
  subTitleStyle?: string;
  subTitle?: string | number | null | undefined | JSX.Element;
  trailing?: JSX.Element;
  centered?: boolean;
  appendClass?: string;
  appendParentClass?: string;
  appendTitleParentClass?: string;
  loading?: boolean;
  leadingStyle?: string;
};
