import fs from 'fs';
import matter from 'gray-matter';
import { toString } from 'mdast-util-to-string';
import path from 'path';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';
import { visit } from 'unist-util-visit';

const postsDirectory = path.join(process.cwd(), 'public', 'BlogVault');
const publicDirectory = path.join(process.cwd(), 'public');
const PostCategory = {
  '[[notes]]': 'notes',
  '[[technical]]': 'technical',
}
export async function getPostData(id: string) {
    const decodedId = decodeURIComponent(id);
    
    const fullPath = path.join(postsDirectory, `${decodedId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html)
      .process(matterResult.content);
    let contentHtml = processedContent.toString();

    const splitedContent = contentHtml.split('\n');
    const title = decodedId;

    // 貼文日期
    const postDateText = splitedContent[0];
    const postDateRegex = htmlTagRegex('em');
    const match = postDateText.match(postDateRegex);
    const dateText = match ? match[1] : '';
    const postDate = new Date(dateText);
    const postDateStr = formatPostDate(postDate);
    
    // 分類
    const categoryMatch = splitedContent[1].match(htmlTagRegex('p'));
    let category = categoryMatch ? categoryMatch[1] : '';
    category = (PostCategory as {[key: string]: string})[category] || '';
    splitedContent[1] = '';
    
    // 簡介
    const descriptionMatch = splitedContent[2].match(htmlTagRegex('p'));
    const description = descriptionMatch ? descriptionMatch[1] : '';
    const shortedDescription = shortDescription(description);
    splitedContent[2] = '';

    // 取得table of content
    const tableOfContent = await getHeadings(decodedId);

    
    // 幫每個標題加上id，用於table of content的跳轉功能
    const allHeading = getAllHeading(contentHtml);
    
    let count = 0;
    splitedContent.forEach((line, index) => {
        if (line[0] === '<' && line[1] === 'h') {
          const tag = line.slice(0, 4);
          const splited = line.split(tag);
          const text = `${tag.slice(0,3)} id="${allHeading?.[count]?.toLocaleLowerCase()?.replaceAll(' ','-')}">` + splited[1];
          
          count += 1;
          splitedContent[index] = text;
        }
        
        if (line.includes('Pasted image')) {
          const fileName = line.match(/\[\[(.*?)\]\]/)?.[1]?.split("|")[0];
          splitedContent[index] = `<img loading="lazy" src="/BlogVault/images/${fileName}" alt="${fileName}" />`;
          
        }
    });
    
    contentHtml = splitedContent.slice(1).join('\n');
    
    return {
      id: decodedId,
      contentHtml,
      title,
      description,
      shortedDescription,
      tableOfContent,
      postDateStr,
      postDate,
      category,
      ...matterResult.data,
    };
}

export async function getAllPostsData(category: string = 'all', limit: number|null = null) {
  const allPostIds = getAllPostIds();
  const allPostsData = await Promise.all(allPostIds.map(postId => {
    return getPostData(postId.params.id);
  }));
  allPostsData.sort((a, b) => b.postDate.getTime() - a.postDate.getTime());
  if (limit) {
    return allPostsData.slice(0, limit);
  }
  if (category != 'all') {
    return allPostsData.filter(post => post.category === category);
  }
  return allPostsData;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory).filter(fileName => fileName.endsWith('.md'));
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            }
        }
    })
}

/** Custom Remark plugin for extracting headings from the content */
export function headingTree() {
    return (node: any, file: any) => {
      file.data.headings = getHead(node);
    };
  }
  
function getHead(root: any) {
    const nodes = {};
    const output: never[] = [];
    const indexMap = {};
    visit(root, "heading", (node) => {
        addID(node, nodes);
        transformNode(node, output, indexMap);
    });
    
    return output;
}

/*
 * Add an "id" attribute to the heading elements based on their content
 */
function addID(node: any, nodes:any) {
    const id = node.children.map((c: any) => c.value).join("");
    nodes[id] = (nodes[id] || 0) + 1;
    node.data = node.data || {
      hProperties: {
        id: `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`
        //   .replace(/[^a-zA-Z\d\s-]/g, "")
          .split(" ")
          .join("-")
          .toLowerCase(),
      },
    };
  }
  
function transformNode(node: any, output: any, indexMap: any) {
    const transformedNode = {
        value: toString(node),
        depth: node.depth,
        data: node.data,
        children: [],
    };

    if (node.depth === 2) {
        output.push(transformedNode);
        indexMap[node.depth] = transformedNode;
    } else {
        const parent = indexMap[node.depth - 1];
        if (parent) {
        parent.children.push(transformedNode);
        indexMap[node.depth] = transformedNode;
        }
    }
}

export async function getHeadings(markdownName: string) {
    const fullPath = path.join(postsDirectory, `${markdownName}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
   
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
   
    // Use remark to convert Markdown into HTML string
    const processedContent = await remark()
      .use(headingTree)
      .process(matterResult.content);
    
    return processedContent.data.headings;
  }

export function getAllHeading(contentHtml: string): string[] | null {
    const headings = contentHtml.match(/<h[1-6]>(.*?)<\/h[1-6]>/g);
    if (!headings) return null;
    const extractedHeadings = headings?.map(heading => heading.replace(/<\/?[^>]+(>|$)/g, ''));
    
    return extractedHeadings;
}

function shortDescription(description: string): string {
    return description.length > 100 ? description.slice(0, 90) + " ...read more" : description;
}

function formatPostDate(date: Date): string {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInDays <= 7) {
    return `${diffInDays === 1 ? '1 day' : diffInDays + ' days'} ago`;
  } else if (diffInWeeks <= 4) {
    return `${diffInWeeks === 1 ? '1 week' : diffInWeeks + ' weeks'} ago`;
  } else if (diffInMonths <= 12) {
    return `${diffInMonths === 1 ? '1 month' : diffInMonths + ' months'} ago`;
  } else {
    const remainingMonths = diffInMonths % 12;
    return `${diffInYears === 1 ? '1 year' : diffInYears + ' years'} ${remainingMonths === 1 ? '1 month' : remainingMonths + ' months'} ago`;
  }
}

function htmlTagRegex(tag: string): RegExp {
  return new RegExp(`<${tag}>(.*?)<\/${tag}>`);
}

// About me page markdown to html
export async function getAboutMeData() {
  const fullPath = path.join(publicDirectory, 'aboutme.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    contentHtml,
    ...matterResult.data,
  };
}