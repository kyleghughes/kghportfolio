import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

const Section = ({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box id={id} sx={{ py: { xs: 9, md: 13 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography className="eyebrow">{eyebrow}</Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              mt: 1,
              mb: 5,
              maxWidth: 900,
            }}
          >
            {title}
          </Typography>
          {children}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Section;
