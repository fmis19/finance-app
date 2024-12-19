import "../../css/TableView.css";

export default function TableView({ columnNames, rows }) {
    return (
        <div className="responsive-table">
            <table className="min-w-full divide-y divide-gray-200 border">
                <thead>
                    <tr>
                        {columnNames.map((column, index) => (
                            <th
                                className="px-6 py-3 bg-gray-50 text-left"
                                key={index}
                            >
                                <div className="flex flex-row items-center justify-between cursor-pointer">
                                    <div className="leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        {column}
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 divide-solid">
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columnNames.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                                >
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
