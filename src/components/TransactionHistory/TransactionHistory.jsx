import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableThead}>
        <tr>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>Amount</th>
          <th className={css.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableTbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tableTr} key={id}>
            <td className={css.tableItem}>{type}</td>
            <td className={css.tableItem}>{amount}</td>
            <td className={css.tableItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
