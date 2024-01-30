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
  
    // Combine the data with the id and contentHtml
    return {
      id: decodedId,
      contentHtml,
      title,
      description,
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