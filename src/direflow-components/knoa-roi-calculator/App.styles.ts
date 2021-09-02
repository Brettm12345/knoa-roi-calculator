import styled, {css} from 'styled-components'
import {device, pxToRem} from './util'

export const offWhite = '#fafafa'
export const red = '#B42732'
export const yellow = '#FFB703'
export const gold = '#DA8821'
export const gray = '#F5F5F5'
export const textDark = '#3C3C3C'

export const Body = styled.div`
  font-family: Nunito;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`

export const MainHero = styled.section`
  background-color: ${red};
  color: white;
  display: flex;
  padding-top: 28px;
  padding-bottom: 28px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

const title = css`
  font-size: ${pxToRem(60)};
  font-weight: bold;
  @media ${device.mobileL} {
    font-size: ${pxToRem(60)};
  }
  @media ${device.tablet} {
    font-size: ${pxToRem(80)};
  }
  @media ${device.laptop} {
    font-size: ${pxToRem(98)};
  }
  @media ${device.desktop} {
    font-size: ${pxToRem(118)};
  }
`

const highlight = css`
  font-size: ${pxToRem(80)};
  line-height: 100px;
  font-weight: bold;
  @media ${device.mobileL} {
    line-height: 110px;
    font-size: ${pxToRem(90)};
  }
  @media ${device.tablet} {
    line-height: 120px;
    font-size: ${pxToRem(100)};
  }
  @media ${device.laptop} {
    line-height: 130px;
    font-size: ${pxToRem(110)};
  }
  @media ${device.desktop} {
    line-height: 140px;
    font-size: ${pxToRem(120)};
  }
`
export const MainTitle = styled.h1`
  ${title}
  margin-bottom: 0px;
  margin-top: 20px;
`

export const SecondaryTitle = styled.h2`
  max-width: 95%;
  font-size: ${pxToRem(30)};
  line-height: 50px;
  margin-top: 4px;
  @media ${device.laptop} {
    font-size: ${pxToRem(40)};
    margin-right: 8px;
    max-width: 50%;
    padding-right: 4px;
    padding-left: 4px;
    line-height: 60px;
  }
  @media ${device.desktop} {
    font-size: ${pxToRem(53)};
    line-height: 70px;
  }
  font-weight: normal;
  color: ${offWhite};
`

export const AnnualBenefits = styled.h4`
  ${highlight}
  font-weight: 900;
`
export const YearsHero = styled.section`
  background-color: ${gray};
  display: flex;
  color: ${textDark};
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px;
  & > * {
    margin-right: 0px;
    margin-bottom: 10px;
  }
  @media ${device.tablet} {
    & > * {
      margin-right: 30px;
    }
    flex-direction: row;
  }
  justify-content: center;
`

export const MainHeroSecondaryWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const MoneySavedWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MoneySaved = styled.span`
  ${highlight}
  max-width: 100%;
  margin-bottom: 0px;
  margin-top: 30px;
  @media ${device.laptop} {
    max-width: 50%;
    margin-top: 0px;
  }
  font-weight: bold;
`

export const Benefit = styled.li`
  display: flex;
  flex-direction: row;
  & svg {
    min-width: 100px;
    height: auto;
    display: none;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 40px;
  }
  list-style: none;
  & em {
    color: ${red};
    font-weight: 900;
    font-style: normal;
  }
  padding-top: 16px;
  padding-bottom: 48px;
  margin-bottom: 16px;
  margin-top: 16px;
  max-width: 90%;
  color: ${textDark};
  font-size: ${pxToRem(24)};
  @media ${device.mobileL} {
    & svg {
      display: block;
    }
  }
  @media ${device.mobileL} {
    font-size: ${pxToRem(30)};
  }
  @media ${device.tablet} {
    font-size: ${pxToRem(35)};
  }
  @media ${device.laptop} {
    font-size: ${pxToRem(40)};
  }
  &:not(:last-of-type) {
    border-bottom: 3px dashed ${red};
  }
`

export const BenefitList = styled.ul`
  list-style-type: none;
  display: flex;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
`

export const Button = styled.a`
  background-color: ${yellow};
  color: white;
  text-decoration: none;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: ${pxToRem(30)};
  font-weight: 500;
  outline: none;
  border: none;
  border-radius: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: transform, background-color, ease, 0.3s;
  &:hover {
    background-color: ${gold};
    transform: translateY(-3px);
  }
  @media ${device.mobileL} {
    font-size: ${pxToRem(40)};
  }
  @media ${device.tablet} {
    font-size: ${pxToRem(50)};
  }
  @media ${device.laptopL} {
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 28px;
    padding-bottom: 28px;
    font-size: ${pxToRem(70)};
  }
`

export const BenefitHelperText = styled.span`
  text-transform: uppercase;
  color: ${textDark};
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.08em;
  text-align: center;
  font-size: ${pxToRem(18)};
  @media ${device.mobileL} {
    font-size: ${pxToRem(24)};
  }
`

export const BenefitSection = styled.section`
  background-color: ${gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const MoneySavedSecondaryText = styled.span`
  font-weight: normal;
  font-size: ${pxToRem(40)};
  @media ${device.desktop} {
    font-size: ${pxToRem(50)};
  }
`

export const Input = styled.input<{width: number; color: string}>`
  appearance: none;
  -webkit-appearance: none;
  --moz-appearance: none;
  background-color: transparent;
  width: ${props => props.width}ch;
  border-top: none;
  border-left: none;
  border-right: none;
  color: ${props => props.color};
  outline: none;
  border-bottom: 3px solid ${yellow};
  ${title}
`
