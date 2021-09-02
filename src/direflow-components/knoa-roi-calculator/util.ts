const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = Object.fromEntries(
  Object.entries(size).map(([key, value]) => [key, `(min-width: ${value})`])
) as Record<keyof typeof size, string>

export const pxToRem = (pixels: number): string => `${pixels / 15}rem`

type BenefitCalculation = (years: number, employees: number) => number

const benefitCalculation =
  (x: number): BenefitCalculation =>
  (years, employees) =>
    x * years * employees

export const productivityBenefits = benefitCalculation(309.5)
export const itStaffProductivityBenefits = benefitCalculation(76.1)
export const riskMitigation = benefitCalculation(55.1)
export const annualBenefits: BenefitCalculation = (years, employees) =>
  [productivityBenefits, itStaffProductivityBenefits, riskMitigation].reduce(
    (acc, f) => acc + f(years, employees),
    0
  )

export const formatNumber = (money: number): string =>
  `$${
    money < 100000
      ? money < 1000
        ? money.toFixed(0)
        : `${(money / 1000).toFixed(0)}K`
      : `${(money / 1000000).toFixed(1)}M`
  }`

export const toCommaSeparated = (int: number): string =>
  int.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
