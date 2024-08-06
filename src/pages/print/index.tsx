import { type FC } from "react";

import HeaderPrint from "../../components/print/header";
import PrintContent from "../../components/print/content";
import "./index.scss";
import SpecificationTable from "../../components/print/tables/SpecificationTable";
import ProcessTable from "../../components/print/tables/ProcessTable";
const Print: FC = () => {
  return (
    <section className="print container">
      <HeaderPrint />
      <PrintContent />
      <div className="print__specification-table">
        <h1 className="title-table">Спецификация</h1>
        <SpecificationTable />
      </div>
      <div className="print__process-table">
        <h1 className="title-table">Тех. процесс</h1>
        <ProcessTable />
      </div>
    </section>
  );
};

export default Print;
