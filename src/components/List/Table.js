import React from 'react';
import { renderChangePercent } from '../../helpers';

const Table = ({currencies}) => {
    console.log(currencies)
    return (
        <div className="Table-Container">
            <table className="Table">
                   <thead className="Table-head">
                       <tr>
                           <th>Cryptocurrency</th>
                           <th>Price</th>
                           <th>Market Cap</th>
                           <th>24H Change</th>
                       </tr>
                   </thead>

                   <tbody className="Table-body">
                        {
                            currencies.map(({ id, rank, name, price, marketCap, percentChange24h }) => {
                                return (
                                    <tr key={id}>
                                        <td>
                                            <span className="Table-rank">
                                                {rank}
                                            </span> {name}
                                        </td>

                                        <td>
                                            <span  className="Table-dollar">
                                                $
                                            </span> {price}
                                        </td>

                                        <td>
                                            <span  className="Table-dollar">
                                                $
                                            </span> {marketCap}
                                        </td>

                                        <td>
                                            {renderChangePercent(percentChange24h)}
                                        </td>


                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    )
};
export default Table;