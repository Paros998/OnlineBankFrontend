import React, { useMemo } from 'react';
import { Image } from 'react-bootstrap';
import { BootstrapTableProps } from 'react-bootstrap-table-next';
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons';
import CenteredSpinner from '../components/CenteredSpinner/CenteredSpinner';
import noDataFound from '../assets/images/no-data.png';

interface UseTablePropsConfig {
  initialSortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Extend it more if you wish
export const useTableProps = <T extends object>(
  dataConfig: { data: any[], isPending: boolean },
  keyField: string,
  config?: UseTablePropsConfig,
  onRowClick?: (e: any, row: any, rowIndex: number) => void,
) => {
  const { initialSortBy, sortOrder } = config || {};
  const { data, isPending } = dataConfig;

  const NoDataIndicator = () => {
    if (isPending) {
      return <CenteredSpinner isPending={dataConfig.isPending}/>;
    }

    return <Image width='100%' height='690px' src={noDataFound} />
  };

  const tableProps: BootstrapTableProps<T> = useMemo(() => (
    {
      keyField,
      data,
      bootstrap4: true,
      columns: [],
      rowEvents: {
        onClick: onRowClick || (() => undefined),
      },
      hover: true,
      noDataIndication: NoDataIndicator,
      sort: {
        dataField: initialSortBy,
        order: sortOrder || 'desc',
        sortCaret: (order: 'desc' | 'asc') =>
          order === 'asc' ? <ChevronUp className="ms-2"/> : <ChevronDown className="ms-2"/>,
      },
    }
  ), [initialSortBy, sortOrder, dataConfig, keyField]);

  return tableProps;
};
