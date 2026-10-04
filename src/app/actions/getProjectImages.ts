'use server';

import fs from 'fs';
import path from 'path';

export async function getProjectImages(slug: string, title?: string): Promise<string[]> {
    const publicDir = path.join(process.cwd(), 'public');
    const projectDir = path.join(publicDir, 'project'); // Folder: public/project
    const validImages: string[] = [];
    const imageExtensions = ['.webp', '.png', '.jpg', '.jpeg', '.svg'];

    try {
        if (!fs.existsSync(projectDir)) {
            return [];
        }

        // Strategy 1: Check if there is a matching subfolder in public/project/ (e.g. infly, kabpro, golib, cahaya)
        const entries = fs.readdirSync(projectDir, { withFileTypes: true });
        const subDirs = entries.filter(e => e.isDirectory() && e.name !== 'parallax').map(e => e.name);

        const sanitizedSlug = slug.replace(/-/g, '').toLowerCase();
        const normalizedSlug = slug.toLowerCase();
        const normalizedTitle = title ? title.toLowerCase() : '';

        // Find candidate directory
        let matchedDir = subDirs.find(dir => {
            const d = dir.toLowerCase();
            return (
                normalizedSlug.includes(d) ||
                d.includes(normalizedSlug) ||
                sanitizedSlug.includes(d) ||
                (normalizedTitle && normalizedTitle.includes(d))
            );
        });

        // Special fallback mapping if directory name differs from slug
        if (!matchedDir) {
            if (slug.includes('probolinggo')) matchedDir = 'kabpro';
        }

        if (matchedDir) {
            const dirPath = path.join(projectDir, matchedDir);
            const files = fs.readdirSync(dirPath)
                .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()));

            if (files.length > 0) {
                // Natural sort: main/cover first, then numbered 1, 2, 3...
                files.sort((a, b) => {
                    const aBase = path.basename(a, path.extname(a)).toLowerCase();
                    const bBase = path.basename(b, path.extname(b)).toLowerCase();

                    // If exact match with folder name (e.g. infly.png in infly/) or 'cover', put first
                    const aIsCover = aBase === matchedDir?.toLowerCase() || aBase === 'cover';
                    const bIsCover = bBase === matchedDir?.toLowerCase() || bBase === 'cover';
                    if (aIsCover && !bIsCover) return -1;
                    if (!aIsCover && bIsCover) return 1;

                    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
                });

                return files.map(file => `/project/${matchedDir}/${file}`);
            }
        }

        // Strategy 2: Flat files in public/project/ (e.g. project1.png, TangkasHitung.png, or slug-based)
        const sanitizedTitle = title ? title.toLowerCase().replace(/[^a-z0-9]/g, '') : '';
        const searchBases = sanitizedTitle ? [sanitizedTitle, sanitizedSlug] : [sanitizedSlug];
        const uniqueBases = [...new Set(searchBases)];

        for (const baseName of uniqueBases) {
            if (!baseName) continue;

            for (let i = 1; i <= 10; i++) {
                for (const ext of ['webp', 'png', 'jpg', 'jpeg']) {
                    const filename = `${baseName}${i}.${ext}`;
                    const filePath = path.join(projectDir, filename);

                    if (fs.existsSync(filePath)) {
                        const imagePath = `/project/${filename}`;
                        if (!validImages.includes(imagePath)) {
                            validImages.push(imagePath);
                        }
                        break;
                    }
                }
            }
            if (validImages.length > 0) break;
        }

        return validImages;
    } catch (error) {
        console.error('Error in getProjectImages:', error);
        return [];
    }
}
