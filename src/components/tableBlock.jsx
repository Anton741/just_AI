import React from "react"
import SelectBlockBtn from "./selectBlockBtn"

const TableBlock = ({ block, onHandleNumberDecreaseEncrease, showTrasaction }) => {
  return (
    <>
      <table className="table mt-3">
        <tbody>
          <tr>
            <th scope="row">Block Height:</th>
            <td colSpan="2">
              <strong>{parseInt(block.number, 16)}</strong>
              <SelectBlockBtn
                onDecreaceEncrease={onHandleNumberDecreaseEncrease}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">Block hash:</th>
            <td>{block.miner}</td>
          </tr>
          <tr>
            <th scope="row">Transactions:</th>
            <td onClick={showTrasaction}><button type="button" className="btn btn-link shadow-none">{block.transactions.length} transactions </button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default TableBlock;