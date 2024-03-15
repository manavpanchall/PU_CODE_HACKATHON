import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            1. What is the role of machine learning in database optimization?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Machine learning plays a crucial role in database optimization by
            analyzing data patterns and trends to improve database performance,
            security, and efficiency. It can predict and optimize database
            operations, manage resources more effectively, and even detect
            anomalies or potential security threats.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            2. How does machine learning help in optimizing database queries?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Machine learning algorithms can analyze historical query data to
            predict the most efficient execution plans for new queries. This
            predictive analysis helps in optimizing query performance by
            selecting the best indexing strategies, join orders, and other query
            optimizations based on the data patterns.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            3. What are the challenges in optimizing databases using machine
            learning?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Some challenges include the need for large amounts of historical
            data for training the machine learning models, the complexity of
            modeling database operations accurately, and the difficulty in
            ensuring that the machine learning models generalize well to new,
            unseen data patterns. Additionally, there's the challenge of
            integrating machine learning models with existing database
            management systems (DBMS).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            4. How can machine learning improve database security?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Machine learning can enhance database security by detecting
            anomalies in database operations, such as unusual login attempts,
            suspicious data access patterns, or unexpected changes in data. By
            identifying these anomalies, machine learning models can alert
            database administrators to potential security threats, enabling them
            to take appropriate action before any damage occurs
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            5.What are some examples of machine learning applications in
            database optimization?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Machine learning can be applied in various ways to optimize
            databases, including: Predictive analytics for optimizing query
            performance by analyzing query patterns and predicting the most
            efficient execution plans. Anomaly detection for identifying and
            mitigating security threats by analyzing database operations for
            unusual patterns. Resource management by predicting the demand for
            database resources and adjusting allocation strategies accordingly
            to optimize performance and cost.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
