import React, { useMemo } from "react";
import { BootstrapTableProps } from "react-bootstrap-table-next";
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons';
import CenteredSpinner from "../components/CenteredSpinner/CenteredSpinner";

interface UseTablePropsConfig {
  initialSortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Extend it more if you wish
export const useTableProps = <T extends object>(
  dataConfig: { data: any[], isPending: boolean },
  onRowClick: (e: any, row: any, rowIndex: number) => void,
  keyField: string,
  config?: UseTablePropsConfig
) => {
  const { initialSortBy, sortOrder } = config || {};
  const tableProps: BootstrapTableProps<T> = useMemo(() =>
      (
        {
          keyField,
          data: dataConfig.data,
          columns: [],
          rowEvents: {
            onClick: onRowClick,
          },
          hover: true,
          noDataIndication: () => <CenteredSpinner isPending={dataConfig.isPending} />,
          sort: {
            dataField: initialSortBy,
            order: sortOrder || 'desc',
            sortCaret: (order: 'desc' | 'asc') =>
              order === 'asc'? <ChevronUp className='ms-2'/> : <ChevronDown className='ms-2'/>
          },
        }
      )
    , [initialSortBy, sortOrder, dataConfig, keyField]);

  return tableProps;
};
