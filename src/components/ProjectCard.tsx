import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowOutward } from "@mui/icons-material";
import { motion } from "motion/react";
import type { Project } from "../data/Data";

const ProjectCard = (props: Project) => {
  const isProfessional = "label" in props;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
        mass: 0.8,
      }}
    >
      <Card className="project-card glass-card">
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Box className="project-top">
            xl
            <Typography className="project-index">{props.accent}</Typography>
          </Box>

          <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>
            {props.title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ lineHeight: 1.8, minHeight: 110 }}
          >
            {props.description}
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 3 }}>
            {props.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Stack>

          <Button
            href={props.href}
            target={props.href.startsWith("http") ? "_blank" : undefined}
            rel={
              props.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            endIcon={<ArrowOutward />}
            sx={{ mt: 4 }}
            disabled={props.href === "#"}
          >
            {props.href === "#"
              ? "Add project link"
              : isProfessional
                ? "View website"
                : "View project"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
