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
  min-width: 100vw;
`

export const MainHero = styled.section`
  background-color: ${red};
  color: white;
  position: relative;
  display: flex;
  padding-top: 28px;
  padding-bottom: 28px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

export const MainHeroWithArrow = styled(MainHero)`
  border: 4px solid ${red};
  &:after,
  &:before {
    z-index: 99;
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  &:after {
    border-color: transparent;
    border-top-color: ${red};
    border-width: 30px;
    margin-left: -30px;
  }
  &:before {
    border-color: transparent;
    border-top-color: ${red};
    border-width: 36px;
    margin-left: -36px;
  }
`
const title = css`
  font-size: ${pxToRem(30)};
  font-weight: bold;
  line-height: 40px;
  letter-spacing: 0.02em;
  @media ${device.tablet} {
    line-height: 80px;
    font-size: ${pxToRem(50)};
  }
`

const highlight = css`
  font-size: ${pxToRem(40)};
  line-height: 30px;
  font-weight: bold;
  @media ${device.mobileL} {
    line-height: 40px;
    font-size: ${pxToRem(50)};
  }
  @media ${device.tablet} {
    line-height: 1.1;
    font-size: ${pxToRem(60)};
  }
`
export const MainTitle = styled.h1<{margin?: boolean}>`
  ${title}
  margin-bottom: ${props => (props.margin ? '20px' : '0px')};
  margin-top: ${props => (props.margin ? '15px' : '0px')};
`

export const SecondaryTitle = styled.h2`
  max-width: 60ch;
  font-size: ${pxToRem(15)};
  line-height: 30px;
  letter-spacing: 0.02em;
  margin-top: 4px;
  @media ${device.laptop} {
    font-size: ${pxToRem(20)};
    margin-right: 8px;
    padding-right: 4px;
    padding-left: 4px;
    line-height: 30px;
  }
  font-weight: normal;
  color: ${offWhite};
`

export const AnnualBenefits = styled.h4`
  ${highlight}
  font-weight: 900;
`
export const YearsHero = styled.section`
  position: relative;
  background-color: ${gray};
  display: flex;
  color: ${textDark};
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px;
  gap: 8px;
  border: 4px solid ${red};
  &:after,
  &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    z-index: 99;
  }
  &:after {
    border-color: transparent;
    border-top-color: ${gray};
    border-width: 30px;
    margin-left: -30px;
  }
  &:before {
    border-color: transparent;
    border-top-color: ${gray};
    border-width: 36px;
    margin-left: -36px;
  }
  @media ${device.tablet} {
    gap: 16px;
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
  margin-top: auto;
  margin-bottom: auto;
  justify-content: center;
`

export const MoneySaved = styled.span`
  ${highlight}
  max-width: 100%;
  margin-bottom: 0px;
  margin-top: 10px;
  line-height: 20px;
  @media ${device.laptop} {
    max-width: 50%;
    margin-top: 0px;
  }
  font-weight: bold;
`

export const Bar = styled.div`
  background: linear-gradient(to right, ${yellow} 40%, white 60%);
  height: 14px;
  width: 40vw;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const Benefit = styled.li`
  display: flex;
  flex-direction: row;
  & img {
    min-width: 80px;
    max-width: 80px;
    height: auto;
    display: none;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 40px;
  }
  list-style: none;
  & em {
    color: ${red};
    font-weight: 800;
    font-style: normal;
  }
  padding-top: 16px;
  padding-bottom: 48px;
  margin-bottom: 16px;
  margin-top: 10px;
  max-width: 90%;
  font-weight: 500;
  color: ${textDark};
  font-size: ${pxToRem(18)};
  line-height: 1.5em;
  & span {
    margin-top: auto;
    margin-bottom: auto;
  }
  @media ${device.mobileL} {
    & img {
      display: block;
    }
  }
  @media ${device.mobileL} {
    font-size: ${pxToRem(20)};
  }
  @media ${device.tablet} {
    font-size: ${pxToRem(30)};
  }
  &:not(:last-of-type) {
    border-bottom: 3px dashed ${red};
  }
`

export const BenefitList = styled.ul`
  list-style-type: none;
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
`

export const Button = styled.a`
  background-color: ${yellow};
  color: white;
  text-decoration: none;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  line-height: 1.2;
  padding-bottom: 16px;
  font-size: ${pxToRem(16)};
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: transform, background-color, ease, 0.3s;
  &:hover {
    background-color: ${gold};
    transform: translateY(-3px);
  }
  @media ${device.mobileL} {
    font-size: ${pxToRem(24)};
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
`

export const Input = styled.input<{width: number; color: string}>`
  appearance: none;
  -webkit-appearance: none;
  --moz-appearance: none;
  background-color: transparent;
  width: ${props => props.width}ch;
  border-top: none;
  line-height: 60px;
  border-left: none;
  border-right: none;
  color: ${props => props.color};
  outline: none;
  border-bottom: 3px solid ${yellow};
  ${title}
  @media ${device.tablet} {
    line-height: 50px;
  }
`
