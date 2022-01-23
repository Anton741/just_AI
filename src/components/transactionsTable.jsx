const TransactionsTable = ({transactions, showTrasaction}) => {
  return (
    <div className="p-3">
    <button type="button" className="btn btn-link float-end shadow-none" onClick={showTrasaction}>hide transactions</button>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="colSpan">Txn Hash</th>
            <th scope="colSpan">From</th>
            <th scope="colSpan">To</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => {
            return (
              <tr key={item.hash}>
                <td>{item.hash.slice(0, 21)}...</td>
                <td>{item.from.slice(0, 21)}...</td>
                <td>{item.to.slice(0, 21)}...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionsTable;