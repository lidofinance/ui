import { Story } from '@storybook/react'
import { AccordionProps } from './types'
import Accordion from './Accordion'

export default {
  component: Accordion,
  title: 'Layout/Accordion',
}

export const Basic: Story<AccordionProps> = (props) => (
  <Accordion {...props}>
    Liquid staking protocols allow users to earn staking rewards without locking
    assets or maintaining staking infrastructure. Users of these protocols can
    deposit staking tokens and receive tradable liquid tokens in return. The DAO
    controlled smart contract then stakes tokens with DAO-picked staking
    providers. Users' deposited funds are controlled by the DAO, staking
    providers never have direct access to the users' assets.
  </Accordion>
)

Basic.args = {
  defaultExpanded: false,
  summary: 'What is Liquid Staking?',
}

Basic.argTypes = {
  defaultExpanded: {
    description: 'Accordion default state',
  },
  summary: {
    description: 'Summary title',
  },
}

export const List = () => (
  <>
    <Accordion summary='What is Liquid Staking?'>
      <p>
        Liquid staking protocols allow users to earn staking rewards without
        locking assets or maintaining staking infrastructure. Users of these
        protocols can deposit staking tokens and receive tradable liquid tokens
        in return. The DAO controlled smart contract then stakes tokens with
        DAO-picked staking providers. Users' deposited funds are controlled by
        the DAO, staking providers never have direct access to the users'
        assets.
      </p>
    </Accordion>
    <Accordion summary='How does lido work?'>
      <p>
        When staking with Lido, users receive stETH tokens on a 1:1 basis
        representing their staked ETH. stETH balances can be used like regular
        ETH to earn yields and lending rewards, and are updated on a daily basis
        to reflect your ETH staking rewards. Note that there are no lock-ups or
        minimum deposits when staking with Lido.
      </p>
      <p>
        When using Lido, users receive secure staking rewards in real-time,
        allowing for participation in the securing of Ethereum without the
        associated risks and downside potential.
      </p>
    </Accordion>
    <Accordion summary='How is Lido secure?'>
      <p>Lido is a secure liquid staking solution for a number of reasons:</p>
      <ul>
        <li>Open-sourcing & continuous review of all code.</li>
        <li>
          Committee of elected, best-in-class validators to minimise staking
          risk.
        </li>
        <li>
          Use of non-custodial staking service to eliminate counterparty risk.
        </li>
        <li>Use of DAO for governance decisions & to manage risk factors.</li>
      </ul>
      <p>
        Usually when staking ETH you choose only one validator. In the case of
        Lido you stake across many validators, minimising your staking risk.
      </p>
    </Accordion>
  </>
)
