import "../../css/TableView.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link, router } from "@inertiajs/react";
import { Button } from "@headlessui/react";


export default function TableView({ tableType, columnNames, rows }) {

    const handleDelete = (id) => {
        // console.log(id);
        if(!window.confirm('Are you sure you want to delete the row?')){
            return;
        }

        router.delete(route(`${tableType}.destroy`, id));
    }

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

                            {/* TODO */}
                            {/* <td><Link href={route(`${tableType}.edit`, {id: row['id']})}><EditIcon /></Link></td> */}
                            
                            <td><Button onClick={() => handleDelete(row['id'])}><DeleteIcon /></Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
