import React, {FC} from 'react'
import {pipe} from 'fp-ts/function'
import {
  Bar,
  Benefit,
  BenefitHelperText,
  BenefitList,
  BenefitSection,
  Body,
  Button,
  Input,
  MainHero,
  MainHeroSecondaryWrapper,
  MainHeroWithArrow,
  MainTitle,
  MoneySaved,
  MoneySavedSecondaryText,
  MoneySavedWrapper,
  SecondaryTitle,
  textDark,
  YearsHero,
} from './App.styles'
import {SCHEDULE_A_DEMO_LINK} from './constants'
import {useNumber} from './hooks'
import {
  annualBenefits,
  itStaffProductivityBenefits,
  productivityBenefits,
  riskMitigation,
  formatNumber,
  toCommaSeparated,
  icon,
} from './util'

const App: FC = () => {
  const [employees, setEmployees] = useNumber(5000)
  const [years, setYears] = useNumber(3)
  return (
    <Body>
      <MainHeroWithArrow>
        <MainTitle>Knoa ROI Calculator</MainTitle>
        <SecondaryTitle>
          Input the number of employees to calculate the business impact Knoa
          UEM can have on your organization.
        </SecondaryTitle>
        <Bar />
        <MainHeroSecondaryWrapper>
          <SecondaryTitle>
            If you have{' '}
            <Input
              color="white"
              onChange={setEmployees}
              value={employees}
              width={employees.toString().length}
            />
            <br />
            employees, Knoa could save your company
          </SecondaryTitle>
          <MoneySavedWrapper>
            <MoneySaved>
              {pipe(annualBenefits(1, employees), formatNumber)}
            </MoneySaved>
            <MoneySavedSecondaryText>In year one</MoneySavedSecondaryText>
          </MoneySavedWrapper>
        </MainHeroSecondaryWrapper>
      </MainHeroWithArrow>
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
      <MainHeroWithArrow>
        <MainTitle>Annual Business Benefits</MainTitle>
        <SecondaryTitle>
          (per {employees} {employees === 1 ? 'employee' : 'employees'})
        </SecondaryTitle>
      </MainHeroWithArrow>
      <BenefitSection>
        <BenefitList>
          <Benefit>
            <img alt="Gear Icon" src={icon('gear')} />
            <span>
              In just {years} {years === 1 ? 'year' : 'years'} of using Knoa UEM
              you, will see{' '}
              <em>
                $
                {pipe(productivityBenefits(years, employees), toCommaSeparated)}
              </em>{' '}
              in business productivity gains
            </span>
          </Benefit>
          <Benefit>
            <img alt="Staff" src={icon('staff')} />
            <span>
              IT Staff Productivity Benefits and Infrastructure cost reductions
              will also present some nice savings, around{' '}
              <em>
                $
                {pipe(
                  itStaffProductivityBenefits(years, employees),
                  toCommaSeparated
                )}
              </em>{' '}
              for your company
            </span>
          </Benefit>
          <Benefit>
            <img alt="Risk" src={icon('risk')} />
            <span>
              Lastly, mitigated risks and employee productivity benefits are
              expected to generate savings of{' '}
              <em>
                ${pipe(riskMitigation(years, employees), toCommaSeparated)}
              </em>{' '}
              a year in a company of your size
            </span>
          </Benefit>
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
