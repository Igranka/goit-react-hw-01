import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ properties }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.header}>Type</th>
          <th className={css.header}>Amount</th>
          <th className={css.header}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {properties.map((property) => {
          return (
            <tr className={css.row} key={property.id}>
              <td className={css.cell}>{property.type}</td>
              <td className={css.cell}>{property.amount}</td>
              <td className={css.cell}>{property.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}