import React, { FC, HTMLAttributes } from 'react';
import { ProgressBar, ProgressBarProps } from "react-bootstrap";

interface LabeledProgressBarProps {
  startLabel: HTMLAttributes<unknown> & { startLabelName: string };
  endLabel: HTMLAttributes<unknown> & { endLabelName: string };
  startProgressBarProps: ProgressBarProps;
  endProgressBarProps?: ProgressBarProps;
  wrapperProps?: HTMLAttributes<unknown>;
}

const LabeledProgressBar: FC<LabeledProgressBarProps> = ({ startLabel, endLabel, wrapperProps, startProgressBarProps, endProgressBarProps }) => {
  const { startLabelName, ...startLabelProps } = startLabel;
  const { endLabelName, ...endLabelProps } = endLabel;

  return (
    <div {...wrapperProps}>
      <div className='d-flex justify-content-between'>
        <span {...startLabelProps}>{startLabelName}</span>
        <span {...endLabelProps}>{endLabelName}</span>
      </div>

      <ProgressBar>
        <ProgressBar {...startProgressBarProps} />

        {
          endProgressBarProps && (
            <ProgressBar {...endProgressBarProps} />
          )
        }
      </ProgressBar>
    </div>
  );
};

export default LabeledProgressBar;
