import { type FC } from "react";
import { Photos } from "../../types";
import "./index.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// type Props = Pick<Photos, "url" | "title">;
type Props = {
  url: string;
  title: string;
  nestedTitle?: string;
  nestedContent?: React.ReactNode;
};
const PhotoItem: FC<Props> = ({ url, title, nestedTitle, nestedContent }) => {
  return (
    <Accordion className="photo-list__item">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <img src={url} alt={`photo ${title}`} className="photo-item__image" />
        {/* Вложенный аккордеон */}
        {nestedTitle && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{nestedTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{nestedContent}</Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default PhotoItem;
