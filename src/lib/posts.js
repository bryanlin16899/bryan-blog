import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(id) {
    const fullPath = path.join(`/Users/bryanlin/Code/bryan-blog-profolio/public/posts/chip-war.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync('/Users/bryanlin/Code/bryan-blog-profolio/public/posts');
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
}