import React, {ChangeEventHandler, FC, ReactNode, useState} from 'react'
import {pipe} from 'fp-ts/function'
import {
  Benefit,
  BenefitHelperText,
  BenefitList,
  BenefitSection,
  Body,
  Button,
  Input,
  MainHero,
  MainHeroSecondaryWrapper,
  MainTitle,
  MoneySaved,
  MoneySavedSecondaryText,
  MoneySavedWrapper,
  SecondaryTitle,
  textDark,
  YearsHero,
} from './App.styles'
import {SCHEDULE_A_DEMO_LINK} from './constants'
import {
  annualBenefits,
  itStaffProductivityBenefits,
  productivityBenefits,
  riskMitigation,
  formatNumber,
  toCommaSeparated,
} from './util'

type UseNumber = (
  init: number
) => [number, ChangeEventHandler<HTMLInputElement>]
const useNumber: UseNumber = init => {
  const [value, setValue] = useState(init)
  return [
    value,
    ({target: {value}}) => {
      if (value === '') setValue(0)
      else setValue(parseInt(value))
    },
  ]
}
const App: FC = props => {
  const [employees, setEmployees] = useNumber(1000)
  const [years, setYears] = useNumber(3)
  return (
    <Body>
      <MainHero>
        <MainTitle>Knoa ROI Calculator</MainTitle>
        <SecondaryTitle>
          Input the number of employees to calculate the business impact Knoa
          UEM can have on your organization.
        </SecondaryTitle>
        <MainHeroSecondaryWrapper>
          <SecondaryTitle>
            If you have{' '}
            <Input
              color="white"
              onChange={setEmployees}
              value={employees}
              width={employees.toString().length}
            />
            employees, Knoa could save your company
          </SecondaryTitle>
          <MoneySavedWrapper>
            <MoneySaved>
              {pipe(annualBenefits(1, employees), formatNumber)}
            </MoneySaved>
            <MoneySavedSecondaryText>In year one</MoneySavedSecondaryText>
          </MoneySavedWrapper>
        </MainHeroSecondaryWrapper>
      </MainHero>
      <YearsHero>
        <MoneySavedSecondaryText>or</MoneySavedSecondaryText>
        <MoneySaved>
          {pipe(annualBenefits(years, employees), formatNumber)}
        </MoneySaved>
        <MoneySavedSecondaryText>over</MoneySavedSecondaryText>
        <Input
          color={textDark}
          onChange={setYears}
          value={years}
          width={years.toString().length}
        />
        <MoneySavedSecondaryText>Years</MoneySavedSecondaryText>
      </YearsHero>
      <MainHero>
        <MainTitle>Annual Business Benefits</MainTitle>
        <SecondaryTitle>
          (per {employees} {employees === 1 ? 'employee' : 'employees'})
        </SecondaryTitle>
      </MainHero>
      <BenefitSection>
        <BenefitList>
          {[
            [
              'Productivity Benefits',
              <span>
                In just {years} {years === 1 ? 'year' : 'years'} of using Knoa
                UEM you will see{' '}
                <em>
                  $
                  {pipe(
                    productivityBenefits(years, employees),
                    toCommaSeparated
                  )}
                </em>{' '}
                in business productivity gains
              </span>,
            ],
            [
              'It Staff',
              <span>
                IT Staff Productivity Benefits and Infrastructure cost
                reductions will also present some nice savings, around{' '}
                <em>
                  $
                  {pipe(
                    itStaffProductivityBenefits(years, employees),
                    toCommaSeparated
                  )}
                </em>{' '}
                for your company
              </span>,
            ],
            [
              'Mitigated Risks',
              <span>
                Lastly, mitigated risks and employee productivity benefits are
                expected to generate savings of{' '}
                <em>
                  ${pipe(riskMitigation(years, employees), toCommaSeparated)}
                </em>{' '}
                a year in a company of your size
              </span>,
            ],
            // @ts-ignore
          ].map(([key, element]: [string, ReactNode]) => (
            <Benefit key={key}>{element}</Benefit>
          ))}
        </BenefitList>
        <BenefitHelperText>
          Metrics based on assumptions from the IDC ROI model
        </BenefitHelperText>
      </BenefitSection>
      <MainHero>
        <MainTitle>Let's get started!</MainTitle>
        <SecondaryTitle>
          Learn how Knoa User Experience Management can significantly improve
          the utilization and profitability of your enterprise software
          investment.
        </SecondaryTitle>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href={SCHEDULE_A_DEMO_LINK}
        >
          Schedule a Demo
        </Button>
      </MainHero>
    </Body>
  )
}

export default App
