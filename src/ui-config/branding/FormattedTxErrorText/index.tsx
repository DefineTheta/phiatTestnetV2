import React from 'react';
import { useIntl } from 'react-intl';

import { useProtocolDataContext } from '../../../libs/protocol-data-provider';
import Link from '../../../components/basic/Link';

import messages from './messages';
import staticStyles from './style';

export default function FormattedTxErrorText() {
  const intl = useIntl();
  const { networkConfig } = useProtocolDataContext();

  return (
    <div className="FormattedTxErrorText">
      <span>
        {intl.formatMessage(messages.errorDescriptionFirst, {
          asset: networkConfig.baseAsset,
        })}
      </span>
      <span>
        {intl.formatMessage(messages.errorDescriptionSecond, {
          telegram: (
            <Link
              to="https://t.me/+_2BI2i6MFtg1N2I9"
              title="Telegram"
              absolute={true}
              inNewWindow={true}
              color="secondary"
            />
          ),
        })}
      </span>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
    </div>
  );
}
