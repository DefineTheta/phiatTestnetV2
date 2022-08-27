import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { StakeDataProvider } from '../../libs/pool-data-provider/hooks/use-stake-data-context';

import StakingWrapper from './components/StakingWrapper';
import StakingMain from './screens/StakingMain';

import StakingClaimConfirmation from './screens/StakingClaimConfirmation';
import ActivateCooldownConfirmation from './screens/ActivateCooldownConfirmation';
import StakeWithApprovalConfirmation from './screens/StakeWithApprovalConfirmation';

import UnstakeAmount from './screens/UnstakeAmount';
import UnstakeConfirmation from './screens/UnstakeConfirmation';

import StakeAmount from './screens/StakeAmount';
import StakeDisclaimer from './screens/StakeDisclaimer';
import { stakeConfig } from '../../ui-config';
import ErrorPage from '../../components/ErrorPage';

export const faqLink = 'https://docs.aave.com/faq/migration-and-staking';

export default function Staking() {
  if (!stakeConfig) {
    return <ErrorPage title="Stake was not configured" />;
  } else {
    return <ErrorPage title="Revenue Sharing Staking Coming Soon" />;
  }
}
