import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(id) {
    const decodedId = decodeURIComponent(id);
    const fullPath = path.join(`/Users/bryanlin/Code/bryan-blog-profolio/public/posts/`, `${decodedId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    let contentHtml = processedContent.toString();

    const splitedContent = contentHtml.split('\n');
    const title = decodedId;
    const description = splitedContent[0].replace('<p>', '').replace('</p>', '');

    contentHtml = splitedContent.slice(1).join('\n');
  
    const tableOfContent = getTableOfContent(contentHtml);
    // Combine the data with the id and contentHtml
    return {
      id: decodedId,
      contentHtml,
      title,
      description,
      tableOfContent,
      ...matterResult.data,
    };
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync('/Users/bryanlin/Code/bryan-blog-profolio/public/posts');
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            }
        }
    })
}

// export function getTableOfContent(contentHtml: string): string[] | null {
//     const headings = contentHtml.match(/<h[1-6]>(.*?)<\/h[1-6]>/g);
//     if (!headings) return null;
//     const extractedHeadings = headings?.map(heading => heading.replace(/<\/?[^>]+(>|$)/g, ''));
//     console.log(extractedHeadings);
    
//     return extractedHeadings;
// }

function getTableOfContent(contentHtml: string): { level: number, text: string }[] {
    const headings = contentHtml.match(/<h[1-6]>(.*?)<\/h[1-6]>/g);
    if (!headings) return [];

    const levels = headings.map((heading) => parseInt(heading.charAt(2)));
    const isSameLevel = levels.every((level) => level === levels[0]);

    let result = headings.map((heading, index) => {
        let level = parseInt(heading.charAt(2));
        const text = heading.replace(/<\/?[^>]+(>|$)/g, '');

        if (isSameLevel) {
            level = 1
        }
        
        return { 
            level, 
            text 
        };
    });

    return result;
}