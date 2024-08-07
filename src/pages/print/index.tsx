import { type FC } from "react";

import HeaderPrint from "../../components/print/header";
import PrintContent from "../../components/print/content";
import "./index.scss";
import Tables from "../../components/print/tables";
import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import GET_DATA_FOR_PRINT from "../../apollo/print";
import { OrderLineResponse } from "../../types";

const Print: FC = ({ ref }) => {
   const { data, loading, error } = useQuery<OrderLineResponse>(GET_DATA_FOR_PRINT, {
      variables: {
         id: 27005
      }
   })

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error.message}</p>;
   const handlePrint = () => {
      window.print();
   };

   return (
      <section className="print container" ref={ref}>

         <HeaderPrint data={data} />
         <PrintContent data={data} />
         <Tables data={data} />
         <Button onClick={handlePrint}>Распечатать</Button>



      </section>
   );
};

export default Print;
