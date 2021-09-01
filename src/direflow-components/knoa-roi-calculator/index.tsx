import {DireflowComponent} from 'direflow-component'
import App from './App'

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'knoa-roi-calculator',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Nunito'],
        },
      },
    },
    {
      name: 'styled-components',
    },
  ],
})
