
import { type FC } from 'react'

import SpecificationTable from './SpecificationTable'
import ProcessTable from './ProcessTable'

const Tables: FC = ({ data }) => {
   return (
      <div className='tables'>
         <SpecificationTable data={data} />
         <ProcessTable data={data} />
      </div>
   )
}

export default Tables