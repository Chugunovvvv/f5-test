import { useEffect, type FC } from "react";
import HeaderPrint from "../../components/print/header";
import PrintContent from "../../components/print/content";
import "./index.scss";
import Tables from "../../components/print/tables";
import { useQuery } from "@apollo/client";
import GET_DATA_FOR_PRINT from "../../apollo/print";
import { OrderLineResponse } from "../../types";


const Print: FC = () => {
   const { data, loading, error } = useQuery<OrderLineResponse>(GET_DATA_FOR_PRINT, {
      variables: {
         id: 27005
      }
   })
   /** Если все данные загруженны, то выводим на печать */
   useEffect(() => {
      if (data) {
         window.print()
      }
   }, [data])


   /** Если вдруг пользователь захочет вручуную нажать и распечатать */
   const handlePrint = () => {
      window.print()
   }

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error.message}</p>;

   return (
      <section className="print container">
         <HeaderPrint data={data} />
         <PrintContent data={data} />
         <Tables data={data} />

         <button className="print-button" onClick={handlePrint}>Распечатать</button>
      </section>
   );
};

export default Print;
