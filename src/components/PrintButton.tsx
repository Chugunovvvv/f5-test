import { Button } from '@mui/material';
import { ReactNode, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';


interface PrintPortalProps {
   children: ReactNode;
   name: string;
}


// Компонент кнопки для печати. 
// Принимает React-ноды в качестве детей и отображает кнопку для их печати.
// При нажатии на кнопку вызывается функция для печати, которая применяет стили для печати к заданному элементу.
// В качестве стилей для печати используется media print, который показывает элементы, скрытые на странице с классом hidden.
const PrintButton: React.FC<PrintPortalProps> = (({ children, name = "Печать" }) => {
   // Создание ссылки на элемент для печати
   const printRef = useRef<HTMLDivElement>(null);

   // Функция для печати. Применяет стили для печати к элементу printRef
   const handlePrint = useReactToPrint({
      content: () => printRef.current,
      documentTitle: 'Печать',
      // Стили для печати. Скрывает элементы с классом hidden
      pageStyle: `
        @media print {
          .hidden {
            display: block !important;
          }
        }
      `,

   });

   // Отображает кнопку для печати и скрытый элемент для печати
   return (
      <>
         {/* Кнопка для печати */}
         <Button onClick={handlePrint} variant="contained" color="primary">
            {name}
         </Button>
         {/* Элемент для печати. Скрыт */}
         <div ref={printRef} className='hidden'>
            {children}
         </div>
      </>
   )
});

export default PrintButton;