import { FC } from "react"
import './index.scss'


interface TotalInfo {
   title: string,
   info: string | number
   fontWeight?: string
}

const TotalInfo: FC<TotalInfo> = ({ title, info, fontWeight }) => {
   return (
      <div className="specification__totalCost" style={{ fontWeight: fontWeight }}>
         <p >
            {title}
         </p>
         <span>{info}</span>
      </div>
   )
}

export default TotalInfo