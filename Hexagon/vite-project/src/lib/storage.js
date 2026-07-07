import { STORAGE_KEY } from './constants';

// Generate a simple UUID
const uuid = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

// Read all pages from localStorage
export const getPages = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// Save pages array back to localStorage
const _saveAll = (pages) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
};

// Save or update a single page
export const savePage = (page) => {
  const pages = getPages();
  if (page.id) {
    const idx = pages.findIndex((p) => p.id === page.id);
    if (idx >= 0) {
      pages[idx] = { ...pages[idx], ...page, updatedAt: new Date().toLocaleDateString('vi-VN') };
    } else {
      pages.push({ ...page, updatedAt: new Date().toLocaleDateString('vi-VN') });
    }
  } else {
    pages.push({
      ...page,
      id: uuid(),
      updatedAt: new Date().toLocaleDateString('vi-VN'),
    });
  }
  _saveAll(pages);
};

// Delete a page by id
export const deletePage = (id) => {
  const pages = getPages().filter((p) => p.id !== id);
  _saveAll(pages);
};

// Clone a page to a new language
export const clonePage = (id, newLang) => {
  const pages = getPages();
  const original = pages.find((p) => p.id === id);
  if (!original) return null;

  // Ràng buộc: nếu đã có bản dịch sang ngôn ngữ mới thì không cho nhân bản nữa
  if (original.lang !== newLang) {
    const targetExists = pages.some((p) => p.slug === original.slug && p.lang === newLang);
    if (targetExists) {
      return { error: `Bản dịch ${newLang === 'en' ? 'tiếng Anh (EN)' : 'tiếng Việt (VI)'} của trang "${original.title}" đã tồn tại!` };
    }
  }

  // Deep copy puckData and update any component-level 'lang' props
  const clonedPuckData = original.puckData ? JSON.parse(JSON.stringify(original.puckData)) : null;
  if (clonedPuckData && Array.isArray(clonedPuckData.content)) {
    clonedPuckData.content = clonedPuckData.content.map((component) => {
      if (component.props) {
        const updatedProps = { ...component.props };
        if ('lang' in updatedProps) {
          updatedProps.lang = newLang;
        }
        if ('currentLanguage' in updatedProps) {
          updatedProps.currentLanguage = newLang;
        }
        return {
          ...component,
          props: updatedProps,
        };
      }
      return component;
    });
  }

  const cloned = {
    ...original,
    id: uuid(),
    lang: newLang,
    status: 'draft',
    updatedAt: new Date().toLocaleDateString('vi-VN'),
    title: original.title + (newLang === 'en' ? ' (EN)' : ' (VI)'),
    puckData: clonedPuckData,
  };
  pages.push(cloned);
  _saveAll(pages);
  return cloned;
};

// Get a page by slug and language
export const getPageBySlugAndLang = (slug, lang) => {
  return getPages().find((p) => p.slug === slug && p.lang === lang && p.status === 'published') || null;
};

// Check if translation exists for a page
export const hasTranslation = (slug, currentLang) => {
  const otherLang = currentLang === 'vi' ? 'en' : 'vi';
  return getPages().some((p) => p.slug === slug && p.lang === otherLang);
};

// Initialize with seed data if no pages exist yet or merge new seed pages
export const initSeedData = (seedPages) => {
  const existing = getPages();
  let updated = [...existing];
  let hasChange = false;

  for (const seedPage of seedPages) {
    const idxById = updated.findIndex((p) => p.id === seedPage.id);
    const idxBySlug = updated.findIndex((p) => p.slug === seedPage.slug && p.lang === seedPage.lang);

    if (idxById !== -1) {
      // Overwrite matching ID to keep up-to-date with our latest seed template content
      const existingPage = updated[idxById];
      const isEmpty = !existingPage.puckData || 
                      !existingPage.puckData.content || 
                      existingPage.puckData.content.length === 0;
      
      // If empty or it is a seeded page, ensure it is updated
      if (isEmpty || existingPage.id.startsWith('seed-')) {
        updated[idxById] = {
          ...seedPage,
          status: existingPage.status || seedPage.status,
        };
        hasChange = true;
      }
    } else if (idxBySlug !== -1) {
      // If there is an existing page with the same slug/lang but different ID (e.g. manual empty page),
      // overwrite it with the rich seed page content.
      const existingPage = updated[idxBySlug];
      const isEmpty = !existingPage.puckData || 
                      !existingPage.puckData.content || 
                      existingPage.puckData.content.length === 0;
      if (isEmpty) {
        updated[idxBySlug] = seedPage;
        hasChange = true;
      }
    } else {
      // Completely new page
      updated.push(seedPage);
      hasChange = true;
    }
  }

  // 2. Migrate absolute beta URLs to relative local paths
  updated = updated.map((page) => {
    let pageStr = JSON.stringify(page.puckData || {});
    if (pageStr.includes('https://beta.hexagon.xyz/vi/') || pageStr.includes('https://beta.hexagon.xyz/en/')) {
      pageStr = pageStr
        .split('https://beta.hexagon.xyz/vi/').join('/')
        .split('https://beta.hexagon.xyz/en/').join('/en/');
      hasChange = true;
      return {
        ...page,
        puckData: JSON.parse(pageStr),
      };
    }
    return page;
  });

  if (hasChange || existing.length === 0) {
    _saveAll(updated);
  }
};

// Force reset to original seed data
export const resetSeedData = (seedPages) => {
  _saveAll(seedPages);
};
