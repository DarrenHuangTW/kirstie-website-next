import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  description: string;
  duration: string;
  scale: string;
  client: string;
  projectType: string;
  completedDate: string;
  heroImage: string;
  gallery: {
    image: string;
    caption: string;
  }[];
  products: string[];
  features: string[];
  content: string;
}

const casesDirectory = path.join(process.cwd(), 'src/content/cases');

export function getAllCases(): CaseStudy[] {
  try {
    const fileNames = fs.readdirSync(casesDirectory);
    const allCasesData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(casesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title,
          location: data.location,
          description: data.description,
          duration: data.duration,
          scale: data.scale,
          client: data.client,
          projectType: data.projectType,
          completedDate: data.completedDate,
          heroImage: data.heroImage,
          gallery: data.gallery || [],
          products: data.products || [],
          features: data.features || [],
          content,
        } as CaseStudy;
      });

    // Sort by completed date (newest first)
    return allCasesData.sort((a, b) => {
      return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
    });
  } catch (error) {
    console.error('Error reading cases directory:', error);
    return [];
  }
}

export function getCaseBySlug(slug: string): CaseStudy | null {
  try {
    const fullPath = path.join(casesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      location: data.location,
      description: data.description,
      duration: data.duration,
      scale: data.scale,
      client: data.client,
      projectType: data.projectType,
      completedDate: data.completedDate,
      heroImage: data.heroImage,
      gallery: data.gallery || [],
      products: data.products || [],
      features: data.features || [],
      content,
    } as CaseStudy;
  } catch (error) {
    console.error(`Error reading case file ${slug}:`, error);
    return null;
  }
}

export function getAllCaseSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(casesDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading cases directory for slugs:', error);
    return [];
  }
}
