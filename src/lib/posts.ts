import fs from 'fs';
import matter from 'gray-matter';
import { toString } from 'mdast-util-to-string';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { visit } from 'unist-util-visit';

const postsDirectory = '/Users/bryanlin/Code/bryan-blog-profolio/public/posts/'
export async function getPostData(id) {
    const decodedId = decodeURIComponent(id);
    
    const fullPath = path.join(postsDirectory, `${decodedId}.md`);
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

    const description = shortDescription(splitedContent[0].replace('<p>', '').replace('</p>', ''));

    const tableOfContent = await getHeadings(decodedId);
    const allHeading = getAllHeading(contentHtml);
    
    // 幫每個標題加上id，用於table of content的跳轉功能
    let count = 0;
    splitedContent.forEach((line, index) => {
        if (line[0] === '<' && line[1] === 'h') {
            
            const tag = line.slice(0, 4);
            const splited = line.split(tag);
            const text = `${tag.slice(0,3)} id=${allHeading[count]}>` + splited[1];
            
            count += 1;
            splitedContent[index] = text;
        }
        
        if (line.includes('Pasted image')) {
          const fileName = line.match(/\[\[(.*?)\]\]/)?.[1]?.split("|")[0];
          splitedContent[index] = `<img loading="lazy" src="/posts/images/${fileName}" alt="${fileName}" />`;
          
        }
        
    });
    
    contentHtml = splitedContent.slice(1).join('\n');
    
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
    const id = node.children.map((c) => c.value).join("");
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