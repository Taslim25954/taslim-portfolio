import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  AboutPage,
  SkillsPage,
  ProjectsPage,
  ExperiencePage,
  ContactPage,
  NotFoundPage,
} from '@pages'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
