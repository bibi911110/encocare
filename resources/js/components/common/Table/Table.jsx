import { Fragment } from 'react';
import { tableSortIcon } from '@/components/icons/common';
import CheckBox from '../CheckBox/CheckBox';
import './Table.scss';

const Table = ({ columns, rows, checked, filter, source, mobileComponent: MobileCard }) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        {checked && <th></th>}
                        {columns.map((item) => (
                            <th
                                key={item.key}
                                style={item.width ? { width: item.width } : {}}
                                className={item.center ? 'center-head' : ''}
                            >
                                <p>
                                    {item.title}
                                    {item.key == filter ? <span>{tableSortIcon}</span> : ''}
                                </p>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.key}>
                            {checked && (
                                <td className="checkbox-td">
                                    <CheckBox />
                                </td>
                            )}
                            {columns.map((item) => (
                                <td key={item.key} className={item.center ? 'center-item' : ''}>
                                    {row[item['key']]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mobile-table-section">
                {source.map((item) => (
                    <Fragment key={item['key']}>
                        <MobileCard {...item} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Table;
