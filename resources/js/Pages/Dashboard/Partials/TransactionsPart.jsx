import PaginateMonthYear from "./PaginateMonthYear";

export default function TransactionsPart({transactions_made}) {

    const transformedTransactions = transactions_made.map(item => ({
        date: item.date,
        amount: parseFloat(item.amount)
    }))

    const handleChildData = (data) => {
        console.log(data);
    }

    return (
        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="flex flex-col items-center p-6 text-gray-900">
                        <PaginateMonthYear sendDataToParent={handleChildData} />
                        <div>
                            Barchart
                            {/* <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart data={transformedTransactions}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="amount" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Paper> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
