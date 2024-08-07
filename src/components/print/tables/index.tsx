
import { type FC } from 'react'

import SpecificationTable from './SpecificationTable'
import ProcessTable from './ProcessTable'
import { OrderLineResponse } from '../../../types'

const Tables: FC<OrderLineResponse> = ({ data }) => {



   return (
      <div className='tables'>
         <SpecificationTable data={data} />
         <ProcessTable data={data} />
      </div>
   )
}

export default Tables