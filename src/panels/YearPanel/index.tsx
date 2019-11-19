import * as React from 'react';
import YearHeader from './YearHeader';
import YearBody from './YearBody';
import { PanelSharedProps } from '../../interface';

export type YearPanelProps<DateType> = PanelSharedProps<DateType>;

export const YEAR_DECADE_COUNT = 10;

function YearPanel<DateType>(props: YearPanelProps<DateType>) {
  const {
    prefixCls,
    onViewDateChange,
    generateConfig,
    value,
    viewDate,
    onPanelChange,
  } = props;

  const panelPrefixCls = `${prefixCls}-year-panel`;

  const onDecadeChange = (diff: number) => {
    onViewDateChange(generateConfig.addYear(viewDate, diff * 10));
  };

  return (
    <div className={panelPrefixCls}>
      <YearHeader
        {...props}
        prefixCls={panelPrefixCls}
        onPrevDecade={() => {
          onDecadeChange(-1);
        }}
        onNextDecade={() => {
          onDecadeChange(1);
        }}
        onDecadeClick={() => {
          onPanelChange('decade', value);
        }}
      />
      <YearBody {...props} prefixCls={panelPrefixCls} />
    </div>
  );
}

export default YearPanel;
