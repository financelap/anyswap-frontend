import React, { useState } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils'

// import { ReactComponent as EthereumLogo } from '../../assets/images/ethereum-logo.svg'
// import { ReactComponent as FusionLogo } from '../../assets/images/fsn.svg'
// import { ReactComponent as BTCLogo } from '../../assets/images/btc.svg'

// const TOKEN_ICON_API = address =>
//   `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
//     address
//   )}/logo.png`

const TOKEN_ICON_API = address => 
  // console.log(address)
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
    address
  )}/logo.png`


const BAD_IMAGES = {}

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 1rem;
`

const Emoji = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

// const StyledEthereumLogo = styled(FusionLogo)`
//   width: ${({ size }) => size};
//   height: ${({ size }) => size};
// `

// const StyledBTCLogo = styled(BTCLogo)`
//   width: ${({ size }) => size};
//   height: ${({ size }) => size};
// `

export default function TokenLogo({ address, size = '1rem', ...rest }) {
  const [error, setError] = useState(false)
  let path = ''
  // console.log(address)
  if (['FSN', 'BTC'].includes(address)) {
    // console.log(address)
    // console.log(<StyledEthereumLogo size={size} />)
    // return <StyledEthereumLogo size={size} />
    try {
      path = require('../../assets/images/' + address + '.svg')
    } catch (error) {
      path = require('../../assets/images/' + address + '.png')
    }
  } else if (!error && !BAD_IMAGES[address]) {
    if (address === '0xbd8d4dcdc017ea031a46754b0b74b2de0cd5eb74') {
      // console.log('BTC')
      // console.log(address)
      // return <StyledEthereumLogo size={size} />
      // return <StyledBTCLogo size={size} />
      path = require('../../assets/images/mBTC.svg')
    } else {
      path = TOKEN_ICON_API(address.toLowerCase())
    }
  } else {
    return (
      <Emoji {...rest} size={size}>
        <span role="img" aria-label="Thinking">
          🤔
        </span>
      </Emoji>
    )
  }

  return (
    <Image
      {...rest}
      alt={address}
      src={path}
      size={size}
      onError={() => {
        BAD_IMAGES[address] = true
        setError(true)
      }}
    />
  )
}
