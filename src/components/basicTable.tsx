const BasicTable: React.FC<BasicTableProps> = ({
  columns,
  data,
  heading,
}: any) => {
  return (
    <div className="overflow-x-auto">
      {heading}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            {columns.map((column: any) => (
              <th
                key={column.key}
                className="px-4 py-2 text-left border-b bg-gray-100 text-[#667085] text-[12px]"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, index: number) => (
            <tr key={index} className="hover:bg-gray-50">
              {columns.map((column: any) => (
                <td key={column.key} className="px-4 py-5 border-b">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;

interface BasicTableProps {
  columns: { title: string; key: string }[];
  data: { [key: string]: string | number | JSX.Element }[];
  heading: JSX.Element;
}
