import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  CloseRounded,
  EmailRounded,
  GitHub,
  KeyboardArrowDownRounded,
  LinkedIn,
  MenuRounded,
  NorthEastRounded,
  TerminalRounded,
} from "@mui/icons-material";
import { motion } from "motion/react";
import ProjectCard from "./components/ProjectCard";
import {
  personalProjects,
  professionalProjects,
  skills,
  technology,
} from "./data/Data";
import Section from "./components/Section";

// Smoothly scrolls to an element by ID.
const scrollTo = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const App = () => {
  const mobile = useMediaQuery("(max-width: 900px)");
  const [drawer, setDrawer] = useState(false);
  const nav = [
    ["About", "about"],
    ["Technology", "technology"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Personal", "personal"],
    ["Contact", "contact"],
  ];

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: "100%",
          bgcolor: "rgba(7,10,18,.72)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,.07)",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            px: { xs: 3, sm: 5, md: 8 },
            justifyContent: "space-between",
          }}
        >
          <Typography
            onClick={() => scrollTo("home")}
            sx={{
              cursor: "pointer",
              fontWeight: 900,
              fontSize: 20,
              letterSpacing: "-.04em",
            }}
          >
            KGH<span style={{ color: "#5b8cff" }}>.</span>
          </Typography>
          {mobile ? (
            <>
              <IconButton color="inherit" onClick={() => setDrawer(true)}>
                <MenuRounded />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawer}
                onClose={() => setDrawer(false)}
              >
                <Box
                  sx={{
                    width: 270,
                    p: 3,
                    bgcolor: "#0b0f19",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={() => setDrawer(false)}>
                      <CloseRounded />
                    </IconButton>
                  </Box>
                  <Stack spacing={1} sx={{ mt: 3 }}>
                    {nav.map(([label, id]) => (
                      <Button
                        key={id}
                        color="inherit"
                        sx={{ justifyContent: "flex-start", py: 1.5 }}
                        onClick={() => {
                          setDrawer(false);
                          scrollTo(id);
                        }}
                      >
                        {label}
                      </Button>
                    ))}
                  </Stack>
                </Box>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={1}>
              {nav.map(([label, id]) => (
                <Button
                  key={id}
                  color="inherit"
                  onClick={() => scrollTo(id)}
                  sx={{ color: "text.secondary" }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          pt: 10,
        }}
      >
        <div className="glow glow-one" /> <div className="glow glow-two" />
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.35, ease: "easeOut" }}
          >
            <Box sx={{ maxWidth: 900, py: { xs: 10, md: 15 } }}>
              <Chip
                icon={<TerminalRounded />}
                label="Full-Stack Software Developer"
                variant="outlined"
                sx={{
                  mb: 3,
                  borderColor: "rgba(91,140,255,.35)",
                  bgcolor: "rgba(91,140,255,.07)",
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3.3rem", sm: "4.8rem", md: "6.3rem" },
                  lineHeight: 0.95,
                }}
              >
                I build software <br />
                <span className="gradient-text">that works.</span>
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 720, mt: 4, lineHeight: 1.7, fontWeight: 400 }}
              >
                I'm Kyle G. Hughes, a full-stack developer based in the East of
                England, with 4+ years of commercial experience developing
                enterprise SaaS applications and modern web and mobile solutions
                using React, TypeScript, .NET & Python.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 5 }}
              >
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<NorthEastRounded />}
                  onClick={() => scrollTo("projects")}
                  sx={{ px: 3, py: 1.5 }}
                >
                  View my work
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => scrollTo("contact")}
                  sx={{ px: 3, py: 1.5 }}
                >
                  Get in touch
                </Button>
              </Stack>
              <Stack direction="row" spacing={3} sx={{ mt: 6 }}>
                <Link
                  target="_blank"
                  href="https://github.com/kyleghughes"
                  color="inherit"
                  aria-label="GitHub"
                >
                  <GitHub />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/kyleghughes/"
                  color="inherit"
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </Link>
                <Link
                  href="mailto:kyleghughes-dev@outlook.com"
                  color="inherit"
                  aria-label="Email"
                >
                  <EmailRounded />
                </Link>
              </Stack>
            </Box>
          </motion.div>
          <Box
            sx={{
              position: "absolute",
              bottom: 28,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <IconButton
              onClick={() => scrollTo("about")}
              sx={{ color: "text.secondary" }}
              aria-label="Scroll to about section"
            >
              <KeyboardArrowDownRounded />
            </IconButton>
          </Box>
        </Container>
      </Box>
      <Section
        id="about"
        eyebrow="01 — About me"
        title="A developer who likes solving problems."
      >
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 820, fontSize: 18, lineHeight: 1.9 }}
        >
          I'm a full-stack software developer with more than four years of
          commercial experience. I enjoy working across the stack — from
          polished React interfaces to APIs, databases, testing and cloud
          infrastructure.
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 820, fontSize: 18, lineHeight: 1.9, mt: 2 }}
        >
          My professional experience has taken me from an apprenticeship into a
          software developer role, where I've worked on enterprise applications,
          mobile applications, reporting tools and modernisation projects. I
          particularly enjoy turning complicated requirements into software that
          feels easy and intuitive to use.
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ maxWidth: 820, fontSize: 18, lineHeight: 1.9, mt: 2 }}
        >
          When I'm not coding for work, I enjoy coding for fun! I also enjoy
          gaming, guitar, hiking, travelling and volunteering in my local
          community.
        </Typography>
      </Section>
      <Section
        id="technology"
        eyebrow="02 — Technology"
        title="The tools I use to build things."
      >
        <Box className="skill-grid">
          {Object.entries(technology).map(([group, { title, items }]) => (
            <motion.div
              key={group}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
                mass: 0.8,
              }}
            >
              <Card className="glass-card">
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {title}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {items.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Section>
      <Section id="skills" eyebrow="03 — Skills" title="How I work.">
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, maxWidth: 820 }}
        >
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              sx={{ fontSize: 15, px: 1, py: 2.5 }}
            />
          ))}
        </Box>
      </Section>
      <Section
        id="projects"
        eyebrow="04 — Professional projects"
        title="Work I've helped bring to life."
      >
        <Box className="project-grid">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Box>
      </Section>

      <Section
        id="personal"
        eyebrow="05 — Personal projects"
        title="Things I build because I enjoy building."
      >
        <Box className="project-grid">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Box>
      </Section>
      <Section
        id="contact"
        eyebrow="06 — Contact"
        title="Have a project in mind?"
      >
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 620, fontSize: 18, lineHeight: 1.7 }}
        >
          Whether you're hiring, collaborating or just want to talk software,
          I'd be happy to hear from you.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="mailto:kyleghughes-dev@outlook.com"
          endIcon={<EmailRounded />}
          sx={{ mt: 4, px: 3, py: 1.5 }}
        >
          kyleghughes-dev@outlook.com
        </Button>
      </Section>
      <Box component="footer" sx={{ width: "100%" }}>
        <Divider sx={{ borderColor: "rgba(255,255,255,.08)" }} />

        <Box
          sx={{
            p: 4,
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 Kyle G. Hughes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with React + MUI
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
