import React, { useState, useEffect } from 'react'
// import ReactGA from 'react-ga'
import { ethers } from 'ethers'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { useWeb3React } from '../../hooks'
import { formatTokenBalance, formatEthBalance, amountFormatter } from '../../utils'
// import { useAddressBalance} from '../../contexts/Balances'
import { useAllTokenDetails} from '../../contexts/Tokens'
// import { useExchangeContract } from '../../hooks'
import TokenLogo from '../TokenLogo'
import { useAllBalances, useExchangeReserves } from '../../contexts/Balances'
import { TitleBox, BorderlessInput } from '../../theme'

import SearchIcon from '../../assets/images/icon/search.svg'
import { NavLink } from 'react-router-dom'

import { useDarkModeManager } from '../../contexts/LocalStorage'

// import GraphUpIcon from '../../assets/images/icon/graph-up.svg'
// import AnyillustrationIcon from '../../assets/images/icon/any-illustration.svg'

import { ReactComponent as Dropup } from '../../assets/images/dropup-blue.svg'
import { ReactComponent as Dropdown } from '../../assets/images/dropdown-blue.svg'
import ScheduleIcon from '../../assets/images/icon/schedule.svg'

import {getRewards} from '../../utils/axios'
import {getDashBoards} from '../../utils/dashboard/index.js'
// import {getPoolInfo} from '../../utils/dashboard/getPoolInfo'

import IconLiquidityRewards from '../../assets/images/icn-liquidity-rewards.svg'
import IconLiquidityRewardsBlack from '../../assets/images/icn-liquidity-rewards-black.svg'
import IconSwapRewards from '../../assets/images/icn-swap-rewards.svg'
import IconSwapRewardsBlack from '../../assets/images/icn-swap-rewards-black.svg'
import IconTotalRewards from '../../assets/images/icn-total-rewards.svg'
import IconTotalRewardsBlack from '../../assets/images/icn-total-rewards-black.svg'

import config from '../../config'

const MyBalanceBox = styled.div`
  width: 100%;
  
  border-radius: 0.5625rem;
  box-shadow: 0.4375rem 0.125rem 1.625rem 0 rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.contentBg};
  padding: 1rem 2.5rem;
  margin-bottom:20px;
  @media screen and (max-width: 960px) {
    padding: 1rem 1rem;
  }
`

const TitleAndSearchBox = styled.div`
  ${({theme}) => theme.FlexBC};
  margin-bottom:1.5625rem;
  font-family: 'Manrope';
  h3 {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    color: ${({theme}) => theme.textColorBold};
    margin:0 1.25rem 0 0;
    white-space:nowrap;
  }
`
const SearchBox = styled.div`
  width: 100%;
  max-width: 296px;
  height: 2.5rem;
  
  border-radius: 0.5625rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.04);
  border: solid 0.0625rem rgba(0, 0, 0, 0.1);
  // background-color: #ffffff;
  background-color: ${({theme}) => theme.searchBg};
  padding-left: 2.5rem;
  position:relative;

  .icon {
    ${({theme}) => theme.FlexC};
    width:2.5rem;
    height:2.5rem;
    position:absolute;
    top:0;
    left:0;
    cursor: pointer;
  }
`

const SearchInput = styled(BorderlessInput)`
  width: 100%;
  height: 100%;
  border:none;
  background:none;
  font-family: 'Manrope';
  
  font-size: 0.75rem;
  font-weight: normal;
  
  
  line-height: 1.67;
  
  color: ${({theme}) => theme.textColorBold};
  padding-right:0.625rem;

  ::placeholder {
  }
`

const WrapperBox = styled.div`
  ${({theme}) => theme.FlexBC};
  margin-top:1rem;
  @media screen and (max-width: 960px) {
    justify-content:center;;
    flex-wrap:wrap;
    flex-direction: column-reverse ;
  }
`
const EarningsBox = styled.div`
  width: 100%;
  // height: 386px;
  border-radius: 0.5625rem;
  box-shadow: 0.4375rem 0.125rem 1.625rem 0 rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.contentBg};
  padding:1rem;
  font-family: 'Manrope';
  .bgImg {
    width: 149px;
    height: 148px;
    margin: 0 auto 0rem;
    // padding-bottom:1.875rem;
  }
  h3 {
    font-size: 1.625rem;
    font-weight: bold;
    line-height: 1.15;
    letter-spacing: -1.18px;
    text-align: center;
    color: ${({theme}) => theme.textColorBold};
    text-align:center;
    white-space:nowrap;
    margin: 1.875rem 0 6px;
  }
  p {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.43;
    text-align: center;
    color: ${({theme}) => theme.textColorBold};
    text-align:center;
    margin: 0 0 1.5625rem;
  }
  .txt {
    ${({theme}) => theme.FlexC};
    // height: 42px;
    border-radius: 6px;
    border: solid 0.0625rem #a3daab;
    background-color: #e2f9e5;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 0.86;
    color: #031a6e;
    span {
      font-weight:bold;
      margin:0 5px;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

const ProvideLiqBox = styled.div`
width: 64.92%;
height: 386px;

border-radius: 0.5625rem;
box-shadow: 0.4375rem 0.125rem 1.625rem 0 rgba(0, 0, 0, 0.06);
background-color: ${({ theme }) => theme.contentBg};
padding: 1rem 2.5rem;
@media screen and (max-width: 960px) {
  padding: 1rem 1rem;
  width: 100%;
  margin-bottom:1rem;
}
`
const MyBalanceTokenBox  = styled.div`
width:100%;
height: 230px;
overflow-y:hidden;
overflow-x:auto;
&.showMore {
  height:auto;
  overflow:auto;
}
`
const MyBalanceTokenBox1 = styled(MyBalanceTokenBox)`
overflow:auto;
`
const TokenTableBox = styled.ul`
  width:100%;
  list-style:none;
  margin:0;
  padding:0;
`

const TokenTableList = styled.li`
${({theme}) => theme.FlexBC};
  width: 100%;
  height: 70px;
  
  border-radius: 0.5625rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.04);
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 1rem 0;
  margin-bottom: 0.625rem;
  @media screen and (max-width: 960px) {
    padding: 1rem 5px;
  }
`


const TokenBalanceBox  = styled.div`
font-family: 'Manrope';
  // min-width: 120px
  width:30%;
  text-align:left;
  h3 {
    padding-left: 17.97%;
    margin:0;
    
    font-size: 0.75rem;
    font-weight: normal;
    
    
    line-height: 1;
    
    color: ${({theme}) => theme.textColorBold};
    white-space:nowrap;
  }
  p {
    padding-left: 17.97%;
    margin: 0.125rem 0 0;
    
    font-size: 0.875rem;
    font-weight: 800;
    
    
    line-height: 1.43;
    
    color: ${({theme}) => theme.textColorBold};
  }
  @media screen and (max-width: 960px) {
    min-width: 80px;
    h3 {
      padding-left: 1rem;
    }
    p {
      padding-left: 1rem;
    }
  }
`

const TokenActionBox  = styled.div`
${({theme}) => theme.FlexC};
  width: 30%;
  min-width: 118px;
  padding: 0rem;
`
const TokenActionBtn  = styled(NavLink)`
${({theme}) => theme.FlexC};
font-family: 'Manrope';
  width: 88px;
  height: 38px;
  
  border-radius: 0.5625rem;
  background: ${({theme}) => theme.selectedBg};
  margin-right: 0.125rem;
  
  font-size: 0.75rem;
  font-weight: 500;
  
  
  line-height: 1;
  
  color: ${({theme}) => theme.textColorBold};
  box-shadow: none;
  padding:0;
  text-decoration: none;
  &:hover,&:focus,&:active {
    background:${({theme}) => theme.selectedBg};
  }
`
const TokenActionBtnSwap = styled(TokenActionBtn)`
margin-right:0.125rem;
`

const MoreBtnBox = styled.div`
${({theme}) => theme.FlexC};
font-family: 'Manrope';
  width: 110px;
  height: 34px;
  
  border-radius: 6px;
  background-color: ${({theme}) => theme.viewMoreBtn};
  
  font-size: 0.75rem;
  font-weight: 500;
  
  
  line-height: 1.17;
  
  color: #734be2;
  margin: 1.25rem auto 0;
  cursor:pointer;
`

const WrappedDropup = ({ isError, highSlippageWarning, ...rest }) => <Dropup {...rest} />
const ColoredDropup = styled(WrappedDropup)`
margin-right: 0.625rem;
  path {
    stroke: ${({ theme }) => theme.royalBlue};
  }
`

const WrappedDropdown = ({ isError, highSlippageWarning, ...rest }) => <Dropdown {...rest} />
const ColoredDropdown = styled(WrappedDropdown)`
margin-right: 0.625rem;
  path {
    stroke: ${({ theme }) => theme.royalBlue};
  }
`

const ComineSoon = styled.div`
${({theme}) => theme.FlexC}
width: 118px;
font-family: 'Manrope';
  font-size: 0.75rem;
  color: #96989e;
  height: 30px;
  padding: 0 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.CommingSoon};
  white-space: nowrap;
`

const RewardsBox = styled.div`
  width:100%;
  border-radius: 0.5625rem;
  box-shadow: 0.4375rem 0.125rem 1.625rem 0 rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.contentBg};
  padding:1rem;
  font-family: 'Manrope';
  margin: 15px 0;
  ${({theme}) => theme.FlexBC}
  li {
    ${({theme}) => theme.FlexBC}
    width: 100%;
    list-style:none;
    padding: 0 15px;

    .left {
      ${({theme}) => theme.FlexSC};
      .icon {
        width: 36px;
        height: 36px;
        img {
          width: 100%;
        }
      }
      .name {
        font-size: 12px;
        line-height: 1.17;
        color: ${({theme}) => theme.textColorBold};
        // word-break: break-all;
        margin:0 0 0 14px;
      }
    }
    .value {
      font-size: 12px;
      font-weight: 800;
      line-height: 1.67;
      text-align: right;
      color: ${({theme}) => theme.textColorBold};
    }
    &:last-child {
      border-bottom:none;
      .left {
        .name {
          color: #734be2;
        }
      }
      .value {
        color: #734be2;
      }
    }
  }
  .tip {
    width: 100%;
    ${({theme}) => theme.FlexC};
    color:#999;
    margin:0;
  }
  @media screen and (max-width: 960px) {
    flex-wrap:wrap;
  }
`

const DBTables = styled.table`
  
  min-width: 100%;
  table-layer:fixed;
  // border-spacing:0px 10px;
`
const DBThead = styled.thead`
  width: 100%;
  border-radius: 0.5625rem;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.04);
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: 0.625rem;
  font-size: 12px;
  tr {
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.04);
  }
  @media screen and (max-width: 960px) {
    padding: 1rem 5px;
  }
`
const DBTh = styled.th`
  color: ${({ theme }) => theme.textColorBold};
  background-color: ${({ theme }) => theme.contentBg};
  padding: 12px 8px;
  white-space:nowrap;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.5;
  &.r{
    text-align:right;
  }
  &.l{
    text-align:left;
  }
  &.c{
    text-align:center;
  }
`
const DBTbody = styled.tbody`
  width: 100%;
  border-radius: 0.5625rem;
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-bottom: 0.625rem;
  font-size: 12px;
  tr {
    // margin-bottom: 10px;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.04);
  }
  @media screen and (max-width: 960px) {
    padding: 1rem 5px;
  }
`

const DBTd = styled.td`
  background-color: ${({ theme }) => theme.contentBg};
  padding: 12px 8px;
  white-space:nowrap;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ theme }) => theme.textColorBold};
  &.r{
    text-align:right;
  }
  &.l{
    text-align:left;
  }
  &.c{
    text-align:center;
  }
  p {
    margin:0;
    &.lr {
      ${({theme}) => theme.FlexBC};
    }
    &.textR {
      ${({theme}) => theme.FlexEC};
    }
  }
`

const TokenTableCoinBox  = styled.div`
${({theme}) => theme.FlexSC};
  // border-right: 0.0625rem  solid rgba(0, 0, 0, 0.1);
  padding: 0 0px;
  // min-width: 160px;
  // width:25%;
  @media screen and (max-width: 960px) {
    // min-width: 120px;
    padding: 0 5px;
  }
`
const TokenTableLogo = styled.div`
${({theme}) => theme.FlexC};
  width: 36px;
  height: 36px;
  
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.04);
  border: solid 0.0625rem rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius:100%;
  padding: 0.3125rem;
  margin-right: 1.25rem;
  @media screen and (max-width: 960px) {
    margin-right: 5px;
    padding: 5px;
  }
`

const TokenNameBox  = styled.div`
font-family: 'Manrope';
  h3 {
    margin:0;
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.25;
    color: ${({ theme }) => theme.textColorBold};
    white-space:nowrap;
  }
  p {
    margin: 0.125rem 0 0;
    font-size: 0.75rem;
    font-weight: normal;
    white-space:nowrap;
    line-height: 1;
    color: ${({ theme }) => theme.textColorBold};
  }
`

let count = 0

function getExchangeRate(inputValue, inputDecimals, outputValue, outputDecimals, invert = false) {
  try {
    if (
      inputValue &&
      (inputDecimals || inputDecimals === 0) &&
      outputValue &&
      (outputDecimals || outputDecimals === 0)
    ) {
      const factor = ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(18))

      if (invert) {
        return inputValue
          .mul(factor)
          .mul(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(outputDecimals)))
          .div(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(inputDecimals)))
          .div(outputValue)
      } else {
        return outputValue
          .mul(factor)
          .mul(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(inputDecimals)))
          .div(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(outputDecimals)))
          .div(inputValue)
      }
    }
  } catch {}
}

function getMarketRate(reserveETH, reserveToken, decimals, invert = false) {
  return getExchangeRate(reserveETH, 18, reserveToken, decimals, invert)
}

function thousandBit (num, dec = 2) {
  let _num = num = Number(num)
  if (isNaN(num)) {
    num = 0
    num = num.toFixed(dec)
  } else {
    if (isNaN(dec)) {
      if (num.toString().indexOf('.') === -1) {
        num = Number(num).toLocaleString()
      } else {
        let numSplit = num.toString().split('.')
        numSplit[1] = numSplit[1].length > 9 ? numSplit[1].substr(0, 8) : numSplit[1]
        num = Number(numSplit[0]).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toLocaleString()
        num = num.toString().split('.')[0] + '.' + numSplit[1]
      }
    } else {
      num = num.toFixed(dec).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toLocaleString()
    }
  }
  if (_num < 0 && num.toString().indexOf('-') < 0) {
    num = '-' + num
  }
  return num
}

export default function DashboardDtil () {
  const { account } = useWeb3React()
  // const account = '0x7aA84636251A56502bbb2C2b2671344b9Ff87CFa'
  const allBalances = useAllBalances()
  const allTokens = useAllTokenDetails()
  const { t } = useTranslation()
  const [poolList, setPoolList] = useState([])
  const [poolObj, setPoolObj] = useState({})
  const [baseMarket, setSaseMarket] = useState()
  const [rewardAPY, setRewardAPY] = useState({})
  const [darkMode] = useDarkModeManager()
  useEffect(() => {
    setTimeout(() => {

      let poolArr = []
      let poolInfoObj = {}
      for (let obj in allTokens) {
        poolArr.push({
          account,
          token: obj,
          exchangeAddress: allTokens[obj].exchangeAddress,
          ...allTokens[obj]
        })
      }
      
      // getPoolInfo(poolArr).then(res => {
      getDashBoards(poolArr).then(res => {
        let arr = []
        let baseAccountBalance = ethers.utils.bigNumberify(0)
        let baseAllBalance = ethers.utils.bigNumberify(0)
        let rwArr = []
        for (let obj of res) {
          obj.pecent = amountFormatter(obj.pecent, 18, 5)
          obj.balance = amountFormatter(obj.balance, obj.decimals, 5)
          if (obj.Basebalance) {
            baseAccountBalance = baseAccountBalance.add(obj.Basebalance)
          }
          if (obj.exchangeETHBalance) {
            baseAllBalance = baseAllBalance.add(obj.exchangeETHBalance)
          }
          // console.log(obj.symbol)
          if (obj.symbol.indexOf('USDT') !== -1) {
            setSaseMarket(Number(amountFormatter(
              obj.market,
              18,
              Math.min(5, obj.decimals)
            )))
          }
          poolInfoObj[obj.symbol] = obj
          arr.push(obj)
          if (obj.exchangeETHBalance && obj.exchangeTokenBalancem && obj.market) {
            rwArr.push({
              coin: obj.symbol,
              market: obj.market ? obj.market.toString() : 0,
              baseAmount: obj.exchangeETHBalance ? obj.exchangeETHBalance.toString() : 0,
              tokenAmount: obj.exchangeTokenBalancem ? obj.exchangeTokenBalancem.toString() : 0
            })
          }
        }
        // console.log(arr)
        arr[0].Basebalance = baseAccountBalance
        poolInfoObj[config.symbol].Basebalance = baseAccountBalance
        setRewardAPY(config.rewardRate(rwArr))
        setPoolObj(poolInfoObj)
        setPoolList(arr)
      })
    }, 1000)
  }, [allTokens, account])

  function rewardsPencent (coin, isSwitch) {
    if (!config.dirSwitchFn(isSwitch)) {
      return (
        <ComineSoon>
          <img alt={''} src={ScheduleIcon} style={{marginRight: '10px'}} />
          {t('ComineSoon')}
        </ComineSoon>
      )
    }
    if (config.symbol === 'FSN') {
      if (rewardAPY[coin]) {
        return rewardAPY[coin].AnnualizedROI.toFixed(2) + '%'
      } else {
        return '-%'
      }
    } else if (config.symbol === 'BNB') {
      // return '-%'
      if (rewardAPY[coin]) {
        return rewardAPY[coin].AnnualizedROI.toFixed(2) + '%'
      } else {
        return '-%'
      }
    }
  }

  function PoolListView () {
    return (
      <>
        <DBTables>
          <DBThead>
            <tr>
              <DBTh className='c' width='20%'>{t('Pairs')}</DBTh>
              <DBTh className='r' width='20%'>{t('PoolLiquidity')}</DBTh>
              <DBTh className='r' width='20%'>{t('MyLiquidity')}</DBTh>
              <DBTh className='r' width='20%'>{t('MyPecent')}</DBTh>
              <DBTh className='r'>{t('APY')}</DBTh>
            </tr>
          </DBThead>
          <DBTbody>
            {
              poolList.length > 0 ? (
                poolList.map((item, index) => {
                  if (
                    (!searchPool
                    || item.symbol.toLowerCase().indexOf(searchPool.toLowerCase()) !== -1
                    || item.name.toLowerCase().indexOf(searchPool.toLowerCase()) !== -1
                    || item.token.toLowerCase().indexOf(searchPool.toLowerCase()) !== -1) && item.symbol !== config.symbol
                  ) {
                    return (
                      <tr key={index}>
                        <DBTd>
                          <TokenTableCoinBox>
                            <TokenTableLogo><TokenLogo address={item.symbol} size={'1.625rem'} ></TokenLogo></TokenTableLogo>
                            <TokenNameBox>
                              <h3 style={{width: '100px', textAlign: 'right'}}>{item.symbol}_{config.symbol}</h3>
                            </TokenNameBox>
                          </TokenTableCoinBox>
                        </DBTd>
                        {
                          config.dirSwitchFn(item.isSwitch) ? (
                            <>
                              <DBTd className='r'>
                                <p className='textR'>
                                  {/* <span>{item.symbol}</span> */}
                                  {item.exchangeTokenBalancem ? amountFormatter( item.exchangeTokenBalancem, item.decimals, 5 ) : '0'}
                                </p>
                                <p className='textR'>
                                  {/* <span>{config.symbol}</span> */}
                                  {item.exchangeETHBalance ? amountFormatter( item.exchangeETHBalance, 18, 5 ) : '0'}
                                </p>
                              </DBTd>
                              <DBTd className='r'>
                                {
                                  Number(item.balance) && Number(amountFormatter(item.Basebalance, 18)) ? (
                                    <>
                                      <p>
                                        {item.balance ? Number(Number(item.balance).toFixed(5)) : ''}
                                      </p>
                                      <p>
                                        {item.Basebalance ? Number(Number(amountFormatter(item.Basebalance, 18)).toFixed(5)) : ''}
                                      </p>
                                    </>
                                  ) : '0'
                                }
                              </DBTd>
                              <DBTd className='r'>{Number(item.pecent) && config.dirSwitchFn(item.isSwitch) ?
                              (Number(item.pecent) < 0.0001 ? '<0.01' : (Number(item.pecent) * 100).toFixed(2) )
                              : '-'} %</DBTd>
                              <DBTd className='r'>
                                {rewardsPencent(item.symbol, item.isSwitch)}
                                {/* {item.exchangeTokenBalancem ? config.rewardRate(item.exchangeTokenBalancem.toString(), item.decimals).AnnualizedROI : '-'}% */}
                              </DBTd>
                            </>
                          ) : (
                            <DBTd colSpan={4} className='c'>
                              <ComineSoon>
                                <img alt={''} src={ScheduleIcon} style={{marginRight: '10px'}} />
                                {t('ComineSoon')}
                              </ComineSoon>
                            </DBTd>
                          )
                        }
                      </tr>
                    )
                  } else {
                    return <tr key={index} style={{display: 'none'}}></tr>
                  }
                })
              ) : (<tr key={0}>
                <DBTd className='r'>-</DBTd>
                <DBTd className='r'>-</DBTd>
                <DBTd className='r'>-</DBTd>
                <DBTd className='r'>-</DBTd>
                <DBTd className='r'>-%</DBTd>
                </tr>)
            }
          </DBTbody>
        </DBTables>
      </>
    )
  }


  const [searchBalance, setSearchBalance] =  useState('')
  const [searchPool, setSearchPool] =  useState('')
  const [showMore, setShowMore] =  useState(false)
  const [showMorePool, setShowMorePool] =  useState(false)
  const [accountRewars, setAccountRewars] = useState([])

  useEffect(() => {
    if (account && config.isOpenRewards) {
      setTimeout(() => {
        getRewards(account).then(res => {
          console.log(res)
          let arr = []
          if (res.msg === 'Success') {
            arr = [
              {
                icon: IconSwapRewards,
                iconDark: IconSwapRewardsBlack,
                value: res.latest.vr ? res.latest.vr : 0,
                name: t('swap')
              },
              {
                icon: IconLiquidityRewards,
                iconDark: IconLiquidityRewardsBlack,
                value: res.latest.lr ? res.latest.lr : 0,
                name: t('lr')
              },
              {
                icon: IconTotalRewards,
                iconDark: IconTotalRewardsBlack,
                value: res.totalReward.ar ? res.totalReward.ar : 0,
                name: t('total')
              },
            ]
          } else {
            arr = []
          }
          setAccountRewars(arr)
        })
      }, 1000)
    }
  }, [account])

  // }, [poolTokenBalanceArr])
  function searchBox (type) {
    return (
      <>
        <SearchBox>
          <div className='icon'>
            <img src={SearchIcon} alt={''} />
          </div>
          <SearchInput
            placeholder={t('searchToken')}
            onChange={e => {
              if (type === 1) {
                setSearchBalance(e.target.value)
              } else {
                setSearchPool(e.target.value)
              }
            }}
          ></SearchInput>
        </SearchBox>
      </>
    )
  }

  function getPrice (market, coin) {
    // console.log(coin)
    if (coin.indexOf('USDT') !== -1) return '1'
    if (!market) return '-'
    let mt1 = Number(amountFormatter( market, 18 ))
    if (!mt1) return '0'
    return Number((baseMarket / mt1).toFixed(5))
  }
  function getMyAccount () {
    // if (!account) return
    const myAccount = account ? allBalances[account] : ''
    
    let tokenList = Object.keys(allTokens).map(k => {
      // console.log(k)
      let balance = '-'
      // only update if we have data
      if (k === config.symbol && myAccount && myAccount[k] && myAccount[k].value) {
        balance = formatEthBalance(ethers.utils.bigNumberify(myAccount[k].value))
      } else if (myAccount && myAccount[k] && myAccount[k].value) {
        balance = formatTokenBalance(ethers.utils.bigNumberify(myAccount[k].value), allTokens[k].decimals)
      }
      return {
        name: allTokens[k].name,
        symbol: allTokens[k].symbol,
        address: k,
        balance: balance,
        isSwitch: allTokens[k].isSwitch
      }
    })
    // console.log(tokenList)
    if (config.isChangeDashboard) {
      let ANYItem = {}
      for (let i = 0,len = tokenList.length; i < len; i++) {
        if (tokenList[i].symbol === 'ANY') {
          ANYItem = tokenList[i]
          tokenList.splice(i, 1)
          break
        }
      }
      tokenList.unshift(ANYItem)
    }
    return (
      <DBTables>
        <DBThead>
          <tr>
            <DBTh className='c' width='20%'>{t('Coins')}</DBTh>
            <DBTh className='l' width='10%'>{t('price')}</DBTh>
            <DBTh className='r' width='15%'>{t('balances')}</DBTh>
            <DBTh className='r' width='15%'>{t('lr')}</DBTh>
            <DBTh className='r' width='15%'>{t('TotalBalance')}</DBTh>
            <DBTh className='c'>{t('Action')}</DBTh>
          </tr>
        </DBThead>
        <DBTbody>
          {
            tokenList.length > 0 ? tokenList.map((item, index) => {
              if (
                !searchBalance
                || item.name.toLowerCase().indexOf(searchBalance.toLowerCase()) !== -1
                || item.symbol.toLowerCase().indexOf(searchBalance.toLowerCase()) !== -1
                || item.address.toLowerCase().indexOf(searchBalance.toLowerCase()) !== -1
              ) {
                return (
                  <tr key={index}>
                    <DBTd>
                      <TokenTableCoinBox>
                        <TokenTableLogo><TokenLogo address={item.symbol} size={'1.625rem'} ></TokenLogo></TokenTableLogo>
                        <TokenNameBox>
                          <h3>{item.symbol}</h3>
                          <p>{item.name}</p>
                        </TokenNameBox>
                      </TokenTableCoinBox>
                    </DBTd>
                    {
                      poolObj[item.symbol] ? (
                        config.dirSwitchFn(poolObj[item.symbol].isSwitch) ? (
                          <>
                            <DBTd className='l'>$ {poolObj[item.symbol] && baseMarket ? 
                              (item.symbol === config.symbol ? Number(baseMarket.toFixed(5)) : getPrice(poolObj[item.symbol].market, item.symbol)) : '-'
                            }</DBTd>
                            <DBTd className='r'>{account ? item.balance : '-'}</DBTd>
                            {
                              item.symbol === config.symbol ? (
                                <>
                                  <DBTd className='r'>
                                    {poolObj[item.symbol] && config.dirSwitchFn(poolObj[item.symbol].isSwitch) ? amountFormatter(poolObj[item.symbol].Basebalance, 18) : '0'}
                                  </DBTd>
                                  <DBTd className='r'>
                                    {
                                      poolObj[item.symbol]
                                      && config.dirSwitchFn(poolObj[item.symbol].isSwitch)
                                      && item.balance !== '-'
                                      ? Number((Number(amountFormatter(poolObj[item.symbol].Basebalance, 18)) + Number(item.balance)).toFixed(5)) : '0'}
                                  </DBTd>
                                </>
                              ) : (
                                <>
                                  <DBTd className='r'>{poolObj[item.symbol] && config.dirSwitchFn(poolObj[item.symbol].isSwitch) && poolObj[item.symbol].balance && !isNaN(poolObj[item.symbol].balance) ? poolObj[item.symbol].balance : '0'}</DBTd>
                                  <DBTd className='r'>
                                    {
                                      poolObj[item.symbol]
                                      && config.dirSwitchFn(poolObj[item.symbol].isSwitch)
                                      && item.balance !== '-'
                                      && !isNaN(item.balance)
                                      && !isNaN(poolObj[item.symbol].balance)
                                      ? (Number(poolObj[item.symbol].balance) + Number(item.balance) === 0 ? '0' : Number((Number(poolObj[item.symbol].balance) + Number(item.balance)).toFixed(5))) : '0'}</DBTd>
                                </>
                              )
                            }
                            <DBTd className='c'>
                              <span style={{display:"inline-block"}}><TokenActionBtnSwap to={'/swap?inputCurrency=' + item.address}>{t('swap')}</TokenActionBtnSwap></span>
                            </DBTd>
                          </>
                        ) : (
                          <DBTd colSpan='5' className='c'>
                            <ComineSoon>
                              <img alt={''} src={ScheduleIcon} style={{marginRight: '10px'}} />
                              {t('ComineSoon')}
                            </ComineSoon>
                          </DBTd>
                        )
                      ) : (
                        <>
                          <DBTd className='l'>$-</DBTd>
                          <DBTd className='r'>-</DBTd>
                          <DBTd className='r'>-</DBTd>
                          <DBTd className='r'>-</DBTd>
                          <DBTd className='r'>-</DBTd>
                        </>
                      )
                    }
                  </tr>
                )
              } else {
                return (<tr key={index} style={{display:'none'}}>
                <DBTd className='c'>$-</DBTd>
                <DBTd className='c'>-</DBTd>
                <DBTd className='c'>-</DBTd>
                <DBTd className='c'>-</DBTd>
                <DBTd className='c'>-</DBTd>
                <DBTd className='c'>-</DBTd>
                </tr>)
              }
            }) : (<tr key={0}>
                <DBTd className='c'>$-</DBTd>
                <DBTd className='c'>-</DBTd>
                <DBTd className='c'>-</DBTd>
                <DBTd className='c'>-</DBTd>
                <DBTd className='c'>-</DBTd>
                <DBTd className='c'>-</DBTd></tr>)
          }
        </DBTbody>
      </DBTables>
    )
  }
  return (
    <>
        {/* <div className='bgImg'><img src={AnyillustrationIcon} alt={''} /></div> */}
      
      {/* <EarningsBox>
      </EarningsBox> */}

      <TitleBox>{t('dashboard')}</TitleBox>
      
      <MyBalanceBox>
        <TitleAndSearchBox>
          <h3>{t('myBalance')}</h3>
          {searchBox(1)}
        </TitleAndSearchBox>
        <MyBalanceTokenBox className={showMore ? 'showMore' : ''}>
          {getMyAccount()}
        </MyBalanceTokenBox>
        <MoreBtnBox onClick={() => {
          setShowMore(!showMore)
        }}>
          {
            showMore ? (
              <>
                <ColoredDropup></ColoredDropup>
                {t('pichUp')}
              </>
            ) : (
              <>
                <ColoredDropdown></ColoredDropdown>
                {t('showMore')}
              </>
            )
          }
        </MoreBtnBox>
      </MyBalanceBox>
      {accountRewars.length > 0 && config.isOpenRewards ? (
        <RewardsBox>
          {accountRewars.map((item, index)  => {
            return (
              <li key={index}>
                <div className='left'>
                  <div className='icon'>
                    {darkMode ? (
                      <img src={item.iconDark} alt={''} />
                    ) : (
                      <img src={item.icon} alt={''} />
                    )}
                  </div>
                  <div className='name'>
                    {item.name}
                    <br />{t('rewards')}
                  </div>
                </div>
                <div className='value'>
                  {item.value && item.value > 0 ? item.value.toFixed(2) : '0.00'} ANY
                </div>
              </li>
            )
          })}
        </RewardsBox>
      ) : (
        ''
      )}
      <MyBalanceBox>
        <TitleAndSearchBox>
          <h3>{t('ProvidingLiquidity')}</h3>
          {searchBox(2)}
        </TitleAndSearchBox>
        <MyBalanceTokenBox className={showMorePool ? 'showMore' : ''}>
          {PoolListView()}
        </MyBalanceTokenBox>
        <MoreBtnBox onClick={() => {
          setShowMorePool(!showMorePool)
        }}>
          {
            showMorePool ? (
              <>
                <ColoredDropup></ColoredDropup>
                {t('pichUp')}
              </>
            ) : (
              <>
                <ColoredDropdown></ColoredDropdown>
                {t('showMore')}
              </>
            )
          }
        </MoreBtnBox>
      </MyBalanceBox>
    </>
  )
}